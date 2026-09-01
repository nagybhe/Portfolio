import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const send = vi.hoisted(() => vi.fn());
vi.mock('@emailjs/browser', () => ({ default: { send } }));

const CREDENCIAIS = {
    VITE_EMAILJS_SERVICE_ID: 'service_test',
    VITE_EMAILJS_TEMPLATE_ID: 'template_test',
    VITE_EMAILJS_PUBLIC_KEY: 'key_test'
};

/**
 * O componente lê import.meta.env no topo do módulo, então cada cenário precisa
 * de um import fresco depois de ajustar o ambiente.
 */
const carregar = async (env = CREDENCIAIS) => {
    vi.resetModules();
    for (const [chave, valor] of Object.entries(env)) {
        vi.stubEnv(chave, valor);
    }
    const modulo = await import('./ContactModal');
    return modulo.default;
};

const preencher = async (user) => {
    await user.type(screen.getByLabelText('Seu Nome'), 'Maria Souza');
    await user.type(screen.getByLabelText('Seu Email'), 'maria@exemplo.com');
    await user.type(screen.getByLabelText('Assunto'), 'Oportunidade');
    await user.type(screen.getByLabelText('Mensagem'), 'Olá, temos uma vaga de QA.');
};

beforeEach(() => {
    send.mockReset();
});

afterEach(() => {
    vi.unstubAllEnvs();
    vi.useRealTimers();
});

describe('<ContactModal />', () => {
    it('renderiza os quatro campos obrigatórios', async () => {
        const ContactModal = await carregar();
        render(<ContactModal show handleClose={() => {}} />);

        for (const rotulo of ['Seu Nome', 'Seu Email', 'Assunto', 'Mensagem']) {
            expect(screen.getByLabelText(rotulo)).toBeRequired();
        }
    });

    it('envia com as credenciais do ambiente e limpa o formulário', async () => {
        const ContactModal = await carregar();
        const user = userEvent.setup();
        send.mockResolvedValue({ status: 200 });

        render(<ContactModal show handleClose={() => {}} />);
        await preencher(user);
        await user.click(screen.getByRole('button', { name: /Enviar Mensagem/ }));

        await waitFor(() => expect(send).toHaveBeenCalledTimes(1));

        const [serviceId, templateId, params, opcoes] = send.mock.calls[0];
        expect(serviceId).toBe('service_test');
        expect(templateId).toBe('template_test');
        expect(opcoes).toEqual({ publicKey: 'key_test' });
        expect(params).toMatchObject({
            from_name: 'Maria Souza',
            from_email: 'maria@exemplo.com',
            subject: 'Oportunidade',
            to_email: 'andre.nagybhe.ramos@gmail.com'
        });

        expect(await screen.findByText(/enviada com sucesso/i)).toBeInTheDocument();
        expect(screen.getByLabelText('Seu Nome')).toHaveValue('');
    });

    it('avisa e não chama o EmailJS quando o ambiente não está configurado', async () => {
        // Regressão: antes havia service/template/key hardcoded como fallback,
        // então o formulário "funcionava" com credenciais comitadas no repo.
        const ContactModal = await carregar({
            VITE_EMAILJS_SERVICE_ID: '',
            VITE_EMAILJS_TEMPLATE_ID: '',
            VITE_EMAILJS_PUBLIC_KEY: ''
        });
        const user = userEvent.setup();

        render(<ContactModal show handleClose={() => {}} />);
        await preencher(user);
        await user.click(screen.getByRole('button', { name: /Enviar Mensagem/ }));

        expect(send).not.toHaveBeenCalled();
        expect(await screen.findByText(/Envio indisponível/i)).toBeInTheDocument();
        expect(
            screen.getByText(/andre\.nagybhe\.ramos@gmail\.com/)
        ).toBeInTheDocument();
    });

    it('mostra erro e preserva o texto digitado quando o envio falha', async () => {
        const ContactModal = await carregar();
        const user = userEvent.setup();
        send.mockRejectedValue(new Error('rede indisponível'));
        vi.spyOn(console, 'error').mockImplementation(() => {});

        render(<ContactModal show handleClose={() => {}} />);
        await preencher(user);
        await user.click(screen.getByRole('button', { name: /Enviar Mensagem/ }));

        expect(await screen.findByText(/Erro ao enviar a mensagem/i)).toBeInTheDocument();
        // Não se perde o que a pessoa escreveu — ela pode tentar de novo.
        expect(screen.getByLabelText('Mensagem')).toHaveValue(
            'Olá, temos uma vaga de QA.'
        );
    });

    it('anuncia o resultado em região aria-live', async () => {
        const ContactModal = await carregar();
        const user = userEvent.setup();
        send.mockResolvedValue({ status: 200 });

        render(<ContactModal show handleClose={() => {}} />);
        await preencher(user);
        await user.click(screen.getByRole('button', { name: /Enviar Mensagem/ }));

        const aviso = await screen.findByText(/enviada com sucesso/i);
        expect(aviso.closest('[aria-live="polite"]')).not.toBeNull();
    });

    it('limpa o formulário ao fechar o modal', async () => {
        const ContactModal = await carregar();
        const user = userEvent.setup();
        const handleClose = vi.fn();

        const { rerender } = render(
            <ContactModal show handleClose={handleClose} />
        );
        await user.type(screen.getByLabelText('Seu Nome'), 'Maria');
        await user.click(screen.getByRole('button', { name: /Close/i }));

        expect(handleClose).toHaveBeenCalled();

        rerender(<ContactModal show handleClose={handleClose} />);
        expect(screen.getByLabelText('Seu Nome')).toHaveValue('');
    });
});
