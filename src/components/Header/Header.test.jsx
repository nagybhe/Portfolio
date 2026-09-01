import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('<Header />', () => {
    it('renderiza todos os itens de navegação', () => {
        render(<Header onContactClick={() => {}} />);

        for (const rotulo of ['Home', 'Sobre', 'Skills', 'Qualificações', 'Projetos', 'Contato']) {
            expect(screen.getByRole('link', { name: rotulo })).toBeInTheDocument();
        }
    });

    it('chama onContactClick em vez de navegar ao clicar em Contato', async () => {
        const onContactClick = vi.fn();
        const user = userEvent.setup();
        render(<Header onContactClick={onContactClick} />);

        await user.click(screen.getByRole('link', { name: 'Contato' }));

        expect(onContactClick).toHaveBeenCalledTimes(1);
    });

    it('marca a seção ativa com aria-current', () => {
        render(<Header onContactClick={() => {}} />);
        expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
            'aria-current',
            'page'
        );
    });

    it('dá nome acessível a cada link social', () => {
        render(<Header onContactClick={() => {}} />);

        for (const rede of ['Telegram', 'Instagram', 'GitHub', 'LinkedIn']) {
            const link = screen.getByRole('link', { name: rede });
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
        }
    });

    it('expõe o botão de menu mobile fechado por padrão', () => {
        render(<Header onContactClick={() => {}} />);
        const toggle = screen.getByRole('button', { name: 'Abrir menu' });
        expect(toggle).toHaveAttribute('aria-expanded', 'false');
        expect(toggle).toHaveAttribute('aria-controls', 'navbar');
    });

    it('abre e fecha o menu mobile pelo toggle', async () => {
        const user = userEvent.setup();
        render(<Header onContactClick={() => {}} />);

        await user.click(screen.getByRole('button', { name: 'Abrir menu' }));
        expect(document.querySelector('.header')).toHaveClass('mobile-nav-active');

        await user.click(screen.getByRole('button', { name: 'Fechar menu' }));
        expect(document.querySelector('.header')).not.toHaveClass('mobile-nav-active');
    });

    it('fecha o menu mobile ao escolher uma seção', async () => {
        const user = userEvent.setup();
        render(<Header onContactClick={() => {}} />);

        await user.click(screen.getByRole('button', { name: 'Abrir menu' }));
        await user.click(screen.getByRole('link', { name: 'Projetos' }));

        expect(document.querySelector('.header')).not.toHaveClass('mobile-nav-active');
    });

    it('fecha o menu mobile com Escape', async () => {
        const user = userEvent.setup();
        render(<Header onContactClick={() => {}} />);

        await user.click(screen.getByRole('button', { name: 'Abrir menu' }));
        await user.keyboard('{Escape}');

        expect(document.querySelector('.header')).not.toHaveClass('mobile-nav-active');
    });

    it('usa um único h1 na página (o do Hero), não na sidebar', () => {
        render(<Header onContactClick={() => {}} />);
        expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument();
    });

    it('remove o listener de scroll ao desmontar', () => {
        const remove = vi.spyOn(window, 'removeEventListener');
        const { unmount } = render(<Header onContactClick={() => {}} />);

        unmount();

        expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function));
        remove.mockRestore();
    });
});
