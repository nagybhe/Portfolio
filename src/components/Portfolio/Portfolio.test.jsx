import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Portfolio from './Portfolio';
import { projects, CATEGORIES, getCategoryLabel } from '../../data/projects';

const renderPortfolio = () => {
    const user = userEvent.setup();
    render(<Portfolio />);
    return { user };
};

const cards = () => screen.getAllByRole('article');

describe('<Portfolio />', () => {
    it('lista todos os projetos por padrão', () => {
        renderPortfolio();
        expect(cards()).toHaveLength(projects.length);
    });

    it('marca o filtro "Todos" como ativo na carga', () => {
        renderPortfolio();
        expect(screen.getByRole('button', { name: 'Todos' })).toHaveAttribute(
            'aria-pressed',
            'true'
        );
    });

    it.each(CATEGORIES)('filtra por "$label"', async ({ id, label }) => {
        const { user } = renderPortfolio();
        const esperados = projects.filter((project) => project.category === id);

        await user.click(screen.getByRole('button', { name: label }));

        expect(cards()).toHaveLength(esperados.length);
        expect(screen.getByRole('button', { name: label })).toHaveAttribute(
            'aria-pressed',
            'true'
        );
    });

    it('volta a listar tudo ao clicar em "Todos"', async () => {
        const { user } = renderPortfolio();

        await user.click(screen.getByRole('button', { name: 'Ferramentas QA' }));
        expect(cards().length).toBeLessThan(projects.length);

        await user.click(screen.getByRole('button', { name: 'Todos' }));
        expect(cards()).toHaveLength(projects.length);
    });

    it('abre o modal ao clicar no título do card', async () => {
        const { user } = renderPortfolio();
        const projeto = projects[0];

        await user.click(screen.getByRole('button', { name: projeto.title }));

        const modal = await screen.findByRole('dialog');
        expect(within(modal).getByText(projeto.description)).toBeInTheDocument();
    });

    it('abre o modal pelo botão "Ver detalhes"', async () => {
        const { user } = renderPortfolio();
        const projeto = projects[0];

        await user.click(
            screen.getByRole('button', { name: `Ver detalhes de ${projeto.title}` })
        );

        expect(await screen.findByRole('dialog')).toBeInTheDocument();
    });

    it('exibe a categoria traduzida dentro do modal', async () => {
        // Regressão: o modal usava um mapa de categorias desatualizado e a linha
        // "Categoria:" saía vazia em todos os projetos.
        const { user } = renderPortfolio();
        const projeto = projects[0];

        await user.click(screen.getByRole('button', { name: projeto.title }));

        const modal = await screen.findByRole('dialog');
        const linha = within(modal)
            .getByText('Categoria:')
            .closest('li');

        expect(linha).toHaveTextContent(getCategoryLabel(projeto.category));
        expect(linha.textContent.replace('Categoria:', '').trim()).not.toBe('');
    });

    it('fecha o modal pelo botão Fechar', async () => {
        const { user } = renderPortfolio();

        await user.click(screen.getByRole('button', { name: projects[0].title }));
        const modal = await screen.findByRole('dialog');

        await user.click(within(modal).getByRole('button', { name: 'Fechar' }));

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('dá alt descritivo a toda imagem de projeto', () => {
        renderPortfolio();
        const imagens = screen.getAllByRole('img');

        expect(imagens).toHaveLength(projects.length);
        for (const imagem of imagens) {
            expect(imagem.getAttribute('alt')).toMatch(/^Captura de tela do projeto .+/);
            expect(imagem).toHaveAttribute('loading', 'lazy');
        }
    });

    it('só mostra link externo em projeto que não é privado', () => {
        renderPortfolio();
        const comLink = projects.filter(
            (project) => project.projectUrl && project.projectUrl !== 'Projeto Privado'
        );

        const links = screen.queryAllByRole('link', { name: /Abrir o projeto/ });
        expect(links).toHaveLength(comLink.length);
        for (const link of links) {
            expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
        }
    });

    it('é navegável por teclado até o card e o modal', async () => {
        const { user } = renderPortfolio();

        await user.tab(); // primeiro filtro
        expect(screen.getByRole('button', { name: 'Todos' })).toHaveFocus();

        const titulo = screen.getByRole('button', { name: projects[0].title });
        titulo.focus();
        await user.keyboard('{Enter}');

        expect(await screen.findByRole('dialog')).toBeInTheDocument();
    });
});
