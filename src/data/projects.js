const THUMB = '/assets/img/thumbnail';

/**
 * Fonte única das categorias. Portfolio.jsx monta os filtros a partir daqui e
 * ProjectModal.jsx resolve o rótulo pelo mesmo mapa — antes cada um tinha a sua
 * própria lista, e a do modal ficou desatualizada.
 */
export const CATEGORIES = [
    { id: 'qa-tools', label: 'Ferramentas QA' },
    { id: 'qa-projects', label: 'Projetos Técnicos' },
    { id: 'challenges', label: 'Desafios Técnicos' }
];

export const ALL_CATEGORIES = '*';

export const getCategoryLabel = (id) =>
    CATEGORIES.find((category) => category.id === id)?.label ?? id;

export const PRIVATE_PROJECT = 'Projeto Privado';

export const projects = [
    {
        id: 1,
        title: 'Web Test Automation',
        category: 'qa-projects',
        description:
            'Projeto de automação de testes para aplicações web e APIs, com geração de relatórios detalhados, logs e capturas de tela para análise de resultados.',
        technologies: ['Node.js', 'Playwright', 'Jest', 'Supertest'],
        images: [`${THUMB}/WEB-TEST-AUTOMATION.webp`],
        githubUrl: 'https://github.com/nagybhe/web-test-automation',
        startDate: '2025',
        endDate: '2025',
        status: 'Completo'
    },
    {
        id: 2,
        title: 'Infraestrutura de Automação de QA: Docker + Jenkins + CI/CD',
        category: 'qa-tools',
        description:
            'Ambiente completo para execução de testes automatizados utilizando Jenkins em Docker com diversos plugins pré-configurados, geração de relatórios Allure e pipelines CI/CD.',
        technologies: [
            'Docker',
            'Jenkins',
            'Java 17',
            'Python',
            'Node.js',
            'Maven',
            'Allure',
            'HTML Publisher',
            'Playwright'
        ],
        images: [`${THUMB}/Infraestrutura-De-Automacao.webp`],
        githubUrl: 'https://github.com/nagybhe/QualityOps',
        startDate: '2025',
        status: 'Em progresso'
    },
    {
        id: 3,
        title: 'Desafio Técnico - Analista de Qualidade JR/SR',
        category: 'challenges',
        description:
            'Este repositório apresenta a solução para o desafio técnico de Analista de Qualidade JR/SR, com automação de testes E2E, API e performance utilizando Playwright e TypeScript, além de consultas SQL avançadas, validação de contratos, testes mobile e integração CI/CD com GitHub Actions.',
        technologies: [
            'Playwright',
            'TypeScript',
            'Node.js',
            'PostgreSQL',
            'GitHub Actions',
            'SQL'
        ],
        images: [`${THUMB}/Superserve.webp`],
        githubUrl: 'https://github.com/nagybhe/Desafio-Qa-Playwright',
        startDate: '2026',
        status: 'Completo'
    },
    {
        id: 4,
        title: 'Desafio Técnico - Analista de Qualidade Software PL',
        category: 'challenges',
        description:
            'Este repositório apresenta a solução para o desafio técnico de Analista de Qualidade da FIESC, com validação de uma aplicação de pedidos de café personalizáveis, utilizando automação de testes E2E e API, validação de regras de negócio, consultas SQL e execução do ambiente com Docker.',
        technologies: [
            'Cypress',
            'TypeScript',
            'Node.js',
            'PostgreSQL',
            'Docker',
            'SQL'
        ],
        images: [`${THUMB}/FIESC.webp`],
        githubUrl: 'https://github.com/nagybhe/QA-Desafio-Pratico-FIESC',
        startDate: '2025',
        status: 'Completo'
    },
    {
        id: 5,
        title: 'Desafio Técnico - Analista de Qualidade JR – Grupo Senff',
        category: 'challenges',
        description:
            'Este repositório apresenta a solução para o desafio técnico de Analista de Qualidade Jr da Senff, com automação de testes E2E, API e SQL usando Cypress, Node.js e PostgreSQL, incluindo cenários completos, relatórios com Mochawesome e documentação de bugs.',
        technologies: [
            'Cypress',
            'Node.js',
            'JavaScript',
            'PostgreSQL',
            'Mochawesome',
            'DataGrip',
            'Visual Studio Code',
            'Pop!_OS'
        ],
        images: [`${THUMB}/SENFF.webp`],
        githubUrl: 'https://gitlab.com/nagybhe/andre-nagybhe-desafio-qa-senff',
        startDate: '2026',
        status: 'Completo'
    },
    {
        id: 6,
        title: 'Extrator De Texto De PDF',
        category: 'qa-projects',
        description:
            'Ferramenta para extrair texto de arquivos PDF e converter para JSON, útil para validação automatizada de documentos e processamento de dados.',
        technologies: ['React', 'Node.js', 'PDF-parse', 'Tesseract', 'fs'],
        images: [`${THUMB}/Extrator-de-Texto-de-PDF.webp`],
        githubUrl: 'https://github.com/nagybhe/Extrator-de-Texto-de-PDF',
        startDate: '2024',
        endDate: '2024',
        status: 'Completo'
    },
    {
        id: 7,
        title: 'Web Scraping',
        category: 'qa-projects',
        description:
            'Script de web scraping utilizando Puppeteer para extração de dados estruturados do site do CONFaz.',
        technologies: ['Node.js', 'Puppeteer', 'XLSX', 'Path'],
        images: [`${THUMB}/WEB-SCRAPING.webp`],
        githubUrl: 'https://github.com/nagybhe/Web-Scraping',
        startDate: '2020',
        status: 'Completo'
    },
    {
        id: 8,
        title: 'Guia de Pagamento Gateway',
        category: 'qa-projects',
        description:
            'API Gateway para emissão de guias de pagamento com endpoints REST para consulta, emissão e gerenciamento.',
        technologies: ['Node.js', 'Jest', 'Axios', 'Express', 'Swagger'],
        images: [`${THUMB}/Guia-de-pagamento.webp`],
        githubUrl: 'https://github.com/nagybhe/Guia-Pagamento-Gateway',
        startDate: '2025',
        status: 'Completo'
    },
    {
        id: 9,
        title: 'Rocket Chat',
        category: 'qa-projects',
        description:
            'Integração entre Discord e Rocket.Chat para transferência automática de mensagens entre plataformas.',
        technologies: ['Node.js', 'Rocket.Chat', 'Discord', 'Axios'],
        images: [`${THUMB}/Rocket-chat.webp`],
        githubUrl: 'https://github.com/nagybhe/Discord-for-rocket.chat',
        startDate: '2020',
        status: 'Completo'
    },
    {
        id: 10,
        title: 'Beep Saúde Front-End',
        category: 'qa-projects',
        description:
            'Interface web para exibição de notas fiscais integrando automação RPA e APIs para organização e visualização dos dados.',
        technologies: ['Bootstrap', 'PHP', 'RPA', 'API Integration'],
        images: [`${THUMB}/BEEP-SAUDE-FRONT-END.webp`],
        startDate: '2024',
        endDate: '2024',
        status: 'Completo',
        projectUrl: PRIVATE_PROJECT
    },
    {
        id: 11,
        title: 'Gerenciamento De Projetos',
        category: 'qa-projects',
        description:
            'Sistema local para gerenciamento de projetos desenvolvido em PHP e React com funcionalidades completas de CRUD.',
        technologies: ['PHP', 'React', 'MySQL', 'Node.js'],
        images: [`${THUMB}/Localhost.webp`],
        videoUrl: '/assets/videos/localhost.mp4',
        videoPoster: '/assets/videos/localhost-poster.webp',
        startDate: '2025',
        endDate: '2025',
        status: 'Completo'
    },
    {
        id: 12,
        title: 'Sistema Web Para A Gestão De Farmácia',
        category: 'qa-projects',
        description:
            'Sistema web para gestão de farmácias com controle de estoque, vendas e administração do negócio.',
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
        images: [`${THUMB}/SISTEMA-WEB-GESTAO-DE-FARMACIA.webp`],
        githubUrl: 'https://github.com/nagybhe/SIS-CURE',
        startDate: '2020',
        endDate: '2021',
        status: 'Completo'
    },
    {
        id: 13,
        title: 'QA Toolbox Pro',
        category: 'qa-tools',
        description:
            'Este repositório apresenta o QA-Toolbox-Pro, uma aplicação web com ferramentas úteis para profissionais de QA, incluindo validadores, encoders, geradores e comparadores de dados, com interface moderna em React, arquitetura modular, integração com Telegram para feedback e testes com Vitest.',
        technologies: [
            'Vite.js',
            'React.js',
            'TypeScript',
            'TailwindCSS',
            'Radix UI',
            'Vitest',
            'Node.js',
            'Express'
        ],
        images: [`${THUMB}/Qa-Toolbox-Pro.webp`],
        projectUrl: 'https://qa-toolbox-pro.vercel.app/login',
        startDate: '2026',
        endDate: '2026',
        status: 'Em progresso'
    },
    {
        id: 14,
        title: 'Desafio Técnico - Desenvolvedor Full Stack - Tributei',
        category: 'challenges',
        description:
            'Este repositório apresenta o Tributei - Sistema de Entregas, uma aplicação full stack desenvolvida para desafio técnico da Tributei. O sistema permite cadastrar entregas com busca automática de endereço via OpenStreetMap, visualizar em mapa interativo com Leaflet e gerenciar em tabela com busca e paginação em tempo real. Inclui modais de confirmação, alertas elegantes com Material-UI, API RESTful com Node.js/Express, banco MySQL em Docker e design responsivo com as cores institucionais #00AA45 e #00AA83.',
        technologies: [
            'React.js',
            'Node.js',
            'Express',
            'MySQL',
            'Sequelize',
            'Leaflet',
            'Material-UI',
            'Docker',
            'OpenStreetMap'
        ],
        images: [`${THUMB}/Tributei.webp`],
        githubUrl: 'https://github.com/nagybhe/Desafio-Pratico-TRIBUTEI',
        startDate: '2019',
        endDate: '2019',
        status: 'Completo'
    },
    {
        id: 15,
        title: 'Desafio Técnico - QA Engineer - Estratégia Concursos',
        category: 'challenges',
        description:
            'Automação completa de testes E2E e API para o site Estratégia Concursos. O projeto inclui testes end-to-end com Playwright para validar busca por professor, cursos e preços, além de testes de API com Jest para o endpoint /posts do JSONPlaceholder (GET, POST, PUT, PATCH, DELETE). Contém documentação em Gherkin (BDD), reporte de bugs e melhorias, pipeline CI/CD com Jenkins, relatórios Allure, Page Objects e estrutura organizada para fácil manutenção. Testes executáveis localmente ou em pipeline de integração contínua.',
        technologies: [
            'Playwright',
            'Jest',
            'TypeScript',
            'Axios',
            'Allure',
            'Jenkins',
            'Gherkin',
            'Node.js'
        ],
        images: [`${THUMB}/ESTRATEGIA-CONCURSOS.webp`],
        githubUrl: 'https://github.com/nagybhe/Desafio-QA-Engineer-ESTRATEGIA',
        startDate: '2026',
        endDate: '2026',
        status: 'Completo'
    },
    {
        id: 16,
        title: 'Desafio Técnico - QA Engineer - IDwall',
        category: 'challenges',
        description:
            'Desafio técnico completo para QA Engineer na IDwall, abrangendo três frentes de teste: Web (Blog IDwall), API de relatórios e Mobile (App ID Dog). Inclui planejamento de testes com Gherkin, execução manual com 27 cenários (100% aprovados), automação Web com Playwright para busca de posts, automação de API com Playwright validando cenários síncronos e assíncronos (dados vazios, divergentes e válidos), e automação Mobile com WebdriverIO para exibição de fotos de cães (Husky, Hound, Labrador, Pug). Contém pipeline CI/CD com Jenkins, relatórios HTML, análise de riscos, bug reports, .env para token seguro, e estrutura organizada para fácil execução local ou em CI.',
        technologies: [
            'Playwright',
            'WebdriverIO',
            'Appium',
            'TypeScript',
            'Jenkins',
            'Gherkin',
            'Node.js'
        ],
        images: [`${THUMB}/IDWALL.webp`],
        githubUrl: 'https://github.com/nagybhe/Desafio-QA-Engineer-IDWALL',
        startDate: '2026',
        endDate: '2026',
        status: 'Completo'
    }
];
