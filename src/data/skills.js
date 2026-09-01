/**
 * Níveis de domínio em vez de porcentagem.
 *
 * A barra de progresso obrigava a cravar um número ("Testes Manuais 100%") que
 * é difícil de defender numa entrevista. O nível comunica a mesma coisa sem
 * fingir precisão que não existe.
 */
export const LEVELS = [
    {
        id: 'advanced',
        label: 'Avançado',
        description: 'Uso diário, autonomia total e capacidade de estruturar do zero',
        icon: 'bx bx-medal'
    },
    {
        id: 'solid',
        label: 'Sólido',
        description: 'Experiência prática consistente em projetos reais',
        icon: 'bx bx-trending-up'
    },
    {
        id: 'learning',
        label: 'Em evolução',
        description: 'Base construída, aprofundando em estudo e projetos pessoais',
        icon: 'bx bx-rocket'
    }
];

export const getLevel = (id) => LEVELS.find((level) => level.id === id);

export const skillCategories = [
    {
        id: 'automation',
        category: 'Automação de Testes',
        icon: 'bx bx-bot',
        skills: [
            { name: 'Playwright', level: 'advanced', icon: 'bx bx-window-alt' },
            { name: 'Cypress', level: 'advanced', icon: 'bx bx-check-double' },
            { name: 'Selenium WebDriver', level: 'solid', icon: 'bx bx-crosshair' },
            { name: 'Robot Framework', level: 'solid', icon: 'bx bx-bot' },
            { name: 'Testes Automatizados', level: 'solid', icon: 'bx bx-cog' }
        ]
    },
    {
        id: 'testing',
        category: 'Testes de Software',
        icon: 'bx bx-shield-quarter',
        skills: [
            { name: 'Testes Manuais', level: 'advanced', icon: 'bx bx-search-alt' },
            { name: 'Testes de API', level: 'solid', icon: 'bx bx-transfer-alt' },
            { name: 'Postman', level: 'solid', icon: 'bx bx-send' },
            { name: 'Testes de Performance', level: 'solid', icon: 'bx bx-tachometer' },
            { name: 'Testes Mobile', level: 'learning', icon: 'bx bx-mobile-alt' }
        ]
    },
    {
        id: 'qaops',
        category: 'Ferramentas & QAOps',
        icon: 'bx bx-infinite',
        skills: [
            { name: 'Git', level: 'advanced', icon: 'bx bxl-git' },
            { name: 'CI/CD', level: 'advanced', icon: 'bx bx-git-merge' },
            { name: 'Jenkins', level: 'solid', icon: 'bx bx-server' },
            { name: 'K6', level: 'solid', icon: 'bx bx-line-chart' },
            { name: 'Artillery', level: 'solid', icon: 'bx bx-target-lock' },
            { name: 'QAOps', level: 'solid', icon: 'bx bx-infinite' }
        ]
    },
    {
        id: 'process',
        category: 'Processos & Estratégia',
        icon: 'bx bx-compass',
        skills: [
            { name: 'QA Engineering', level: 'advanced', icon: 'bx bx-badge-check' },
            { name: 'Test Strategy', level: 'solid', icon: 'bx bx-sitemap' },
            { name: 'Quality Metrics', level: 'solid', icon: 'bx bx-bar-chart-alt-2' },
            { name: 'BDD', level: 'solid', icon: 'bx bx-conversation' },
            { name: 'Gherkin', level: 'solid', icon: 'bx bx-list-check' }
        ]
    },
    {
        id: 'foundations',
        category: 'Fundamentos Técnicos',
        icon: 'bx bx-code-alt',
        skills: [
            { name: 'JavaScript', level: 'advanced', icon: 'bx bxl-javascript' },
            { name: 'Node.js', level: 'solid', icon: 'bx bxl-nodejs' },
            { name: 'APIs REST', level: 'learning', icon: 'bx bx-network-chart' },
            { name: 'SQL / Banco de Dados', level: 'learning', icon: 'bx bx-data' }
        ]
    }
];
