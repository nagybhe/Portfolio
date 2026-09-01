import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import {
    projects,
    CATEGORIES,
    PRIVATE_PROJECT,
    getCategoryLabel
} from './projects';

const CATEGORY_IDS = CATEGORIES.map((category) => category.id);
const PUBLIC_DIR = join(process.cwd(), 'public');

describe('catálogo de projetos', () => {
    it('não tem ids duplicados', () => {
        const ids = projects.map((project) => project.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it('usa somente categorias declaradas em CATEGORIES', () => {
        // Regressão: o ProjectModal mapeava categorias antigas (filter-app,
        // filter-card, filter-web) e exibia "Categoria:" vazio em todo projeto.
        const orfas = projects
            .filter((project) => !CATEGORY_IDS.includes(project.category))
            .map((project) => `${project.id}: ${project.category}`);

        expect(orfas).toEqual([]);
    });

    it('rende um rótulo legível para toda categoria em uso', () => {
        for (const project of projects) {
            const label = getCategoryLabel(project.category);
            expect(label).toBeTruthy();
            expect(label).not.toBe(project.category);
        }
    });

    it('tem os campos obrigatórios preenchidos', () => {
        for (const project of projects) {
            expect(project.title, `projeto ${project.id}`).toBeTruthy();
            expect(project.description, `projeto ${project.id}`).toBeTruthy();
            expect(project.status, `projeto ${project.id}`).toBeTruthy();
            expect(
                project.technologies?.length,
                `projeto ${project.id} sem tecnologias`
            ).toBeGreaterThan(0);
        }
    });

    it('tem pelo menos uma imagem por projeto', () => {
        for (const project of projects) {
            expect(
                project.images?.length,
                `projeto ${project.id} sem imagem`
            ).toBeGreaterThan(0);
        }
    });

    it('aponta apenas para arquivos que existem em public/', () => {
        // Pega caminho errado (o id 16 vinha sem "/" inicial) e arquivo renomeado.
        const quebrados = [];

        for (const project of projects) {
            const caminhos = [
                ...(project.images ?? []),
                project.videoUrl,
                project.videoPoster
            ].filter(Boolean);

            for (const caminho of caminhos) {
                if (!caminho.startsWith('/')) {
                    quebrados.push(`${project.id}: "${caminho}" não é absoluto`);
                    continue;
                }
                if (!existsSync(join(PUBLIC_DIR, caminho))) {
                    quebrados.push(`${project.id}: "${caminho}" não existe`);
                }
            }
        }

        expect(quebrados).toEqual([]);
    });

    it('usa apenas caminhos ASCII (evita problema de encoding na URL)', () => {
        for (const project of projects) {
            for (const image of project.images ?? []) {
                expect(image, `projeto ${project.id}`).toMatch(/^[\x20-\x7E]+$/);
            }
        }
    });

    it('usa URLs http(s) válidas, salvo o marcador de projeto privado', () => {
        for (const project of projects) {
            for (const url of [project.githubUrl, project.projectUrl].filter(Boolean)) {
                if (url === PRIVATE_PROJECT) continue;
                expect(() => new URL(url), `projeto ${project.id}: ${url}`).not.toThrow();
                expect(url).toMatch(/^https:\/\//);
            }
        }
    });

    it('não tem data de término anterior à de início', () => {
        for (const project of projects) {
            if (project.startDate && project.endDate) {
                expect(
                    Number(project.endDate),
                    `projeto ${project.id}`
                ).toBeGreaterThanOrEqual(Number(project.startDate));
            }
        }
    });
});

describe('getCategoryLabel', () => {
    it('resolve cada categoria declarada', () => {
        expect(getCategoryLabel('qa-tools')).toBe('Ferramentas QA');
        expect(getCategoryLabel('qa-projects')).toBe('Projetos Técnicos');
        expect(getCategoryLabel('challenges')).toBe('Desafios Técnicos');
    });

    it('devolve o próprio id quando a categoria é desconhecida', () => {
        expect(getCategoryLabel('inexistente')).toBe('inexistente');
    });
});
