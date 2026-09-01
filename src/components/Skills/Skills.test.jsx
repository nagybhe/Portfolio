import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Skills from './Skills';
import { skillCategories, LEVELS } from '../../data/skills';

const todasAsSkills = skillCategories.flatMap((categoria) => categoria.skills);

describe('<Skills />', () => {
    it('renderiza todas as categorias', () => {
        render(<Skills />);

        for (const { category } of skillCategories) {
            expect(
                screen.getByRole('heading', { name: category })
            ).toBeInTheDocument();
        }
    });

    it('mostra todas as skills do catálogo', () => {
        render(<Skills />);

        for (const skill of todasAsSkills) {
            expect(screen.getByText(skill.name)).toBeInTheDocument();
        }
    });

    it('explica cada nível na legenda', () => {
        render(<Skills />);

        for (const level of LEVELS) {
            expect(screen.getAllByText(level.label).length).toBeGreaterThan(0);
            expect(screen.getByText(level.description)).toBeInTheDocument();
        }
    });

    it('agrupa as skills sob o rótulo de nível correspondente', () => {
        render(<Skills />);

        for (const categoria of skillCategories) {
            const card = screen
                .getByRole('heading', { name: categoria.category })
                .closest('.skill-card');

            for (const level of LEVELS) {
                const doNivel = categoria.skills.filter((s) => s.level === level.id);
                if (doNivel.length === 0) continue;

                // O nível aparece escrito dentro do card, não apenas como cor.
                const grupo = within(card)
                    .getByText(level.label)
                    .closest('.skill-group');

                for (const skill of doNivel) {
                    expect(within(grupo).getByText(skill.name)).toBeInTheDocument();
                }
            }
        }
    });

    it('não usa mais barras de progresso nem porcentagem', () => {
        // Regressão do redesign: o formato antigo obrigava a cravar números
        // ("Testes Manuais 100%") difíceis de defender.
        const { container } = render(<Skills />);

        expect(screen.queryAllByRole('progressbar')).toHaveLength(0);
        expect(container.textContent).not.toMatch(/\d+\s*%/);
    });

    it('mostra a contagem de skills por categoria', () => {
        render(<Skills />);

        for (const categoria of skillCategories) {
            const card = screen
                .getByRole('heading', { name: categoria.category })
                .closest('.skill-card');

            expect(
                within(card).getByText(String(categoria.skills.length))
            ).toBeInTheDocument();
        }
    });

    it('declara um nível válido para toda skill', () => {
        const validos = LEVELS.map((level) => level.id);

        for (const skill of todasAsSkills) {
            expect(validos, `skill ${skill.name}`).toContain(skill.level);
        }
    });

    it('define um ícone para toda skill e categoria', () => {
        for (const categoria of skillCategories) {
            expect(categoria.icon, categoria.category).toMatch(/^bx /);
            for (const skill of categoria.skills) {
                expect(skill.icon, skill.name).toMatch(/^bx /);
            }
        }
    });
});
