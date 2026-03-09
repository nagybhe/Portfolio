import React, { useState } from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';
import './Portfolio.css';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [filter, setFilter] = useState('*');

    const projects = [

        {
            id: 1,
            title: "Web Test Automation",
            category: "filter-qa-projects",
            description: "Projeto de automação de testes para aplicações web e APIs, com geração de relatórios detalhados, logs e capturas de tela para análise de resultados.",
            technologies: ["Node.js", "Playwright", "Jest", "Supertest"],
            images: ["/assets/img/thumbnail/WEB-TEST-AUTOMATION.png"],
            githubUrl: "https://github.com/nagybhe/web-test-automation",
            startDate: "2025",
            endDate: "2025",
            status: "Completo"
        },

        {
            id: 2,
            title: "Infraestrutura de Automação de QA: Docker + Jenkins + CI/CD",
            category: "filter-qa-tools",
            description: "Ambiente completo para execução de testes automatizados utilizando Jenkins em Docker com diversos plugins pré-configurados, geração de relatórios Allure e pipelines CI/CD.",
            technologies: ["Docker", "Jenkins", "Java 17", "Python", "Node.js", "Maven", "Allure", "HTML Publisher", "Playwright"],
            images: ["/assets/img/thumbnail/Infraestrutura-De-Automacao.png"],
            githubUrl: "https://github.com/nagybhe/QualityOps",
            startDate: "2025",
            status: "Em progresso"
        },

        {
            id: 3,
            title: "Desafio Técnico - Analista de Qualidade JR/SR",
            category: "filter-Challenges",
            description: "Este repositório apresenta a solução para o desafio técnico de Analista de Qualidade JR/SR, com automação de testes E2E, API e performance utilizando Playwright e TypeScript, além de consultas SQL avançadas, validação de contratos, testes mobile e integração CI/CD com GitHub Actions.",
            technologies: ["Playwright", "TypeScript", "Node.js", "PostgreSQL", "GitHub Actions", "SQL"],
            images: ["/assets/img/thumbnail/Superserve.png"],
            githubUrl: "https://github.com/nagybhe/Desafio-Qa-Playwright",
            startDate: "2026",
            status: "Completo"
        },

        {
            id: 4,
            title: "Desafio Técnico - Analista de Qualidade Software PL",
            category: "filter-Challenges",
            description: "Este repositório apresenta a solução para o desafio técnico de Analista de Qualidade da FIESC, com validação de uma aplicação de pedidos de café personalizáveis, utilizando automação de testes E2E e API, validação de regras de negócio, consultas SQL e execução do ambiente com Docker.",
            technologies: ["Cypress", "TypeScript", "Node.js", "PostgreSQL", "Docker", "SQL"],
            images: ["/assets/img/thumbnail/FIESC.png"],
            githubUrl: "https://github.com/nagybhe/QA-Desafio-Pratico-FIESC",
            startDate: "2025",
            status: "Completo"
        },

        {
            id: 5,
            title: "Desafio Técnico - Analista de Qualidade JR – Grupo Senff",
            category: "filter-Challenges",
            description: "Este repositório apresenta a solução para o desafio técnico de Analista de Qualidade Jr da Senff, com automação de testes E2E, API e SQL usando Cypress, Node.js e PostgreSQL, incluindo cenários completos, relatórios com Mochawesome e documentação de bugs.",
            technologies: ["Cypress", "Node.js", "JavaScript", "PostgreSQL", "Mochawesome", "DataGrip", "Visual Studio Code", "Pop!_OS"],
            images: ["/assets/img/thumbnail/SENFF.png"],
            githubUrl: "https://gitlab.com/nagybhe/andre-nagybhe-desafio-qa-senff",
            startDate: "2026",
            status: "Completo"
        },

        {
            id: 6,
            title: "Extrator De Texto De Pdf",
            category: "filter-qa-projects",
            description: "Ferramenta para extrair texto de arquivos PDF e converter para JSON, útil para validação automatizada de documentos e processamento de dados.",
            technologies: ["React", "Node.js", "PDF-parse", "Tesseract", "fs"],
            images: ["/assets/img/thumbnail/Extrator-de-Texto-de-PDF.png"],
            githubUrl: "https://github.com/nagybhe/Extrator-de-Texto-de-PDF",
            startDate: "2024",
            endDate: "2024",
            status: "Completo"
        },

        {
            id: 7,
            title: "Web Scraping",
            category: "filter-qa-projects",
            description: "Script de web scraping utilizando Puppeteer para extração de dados estruturados do site do CONFaz.",
            technologies: ["Node.js", "Puppeteer", "XLSX", "Path"],
            images: ["/assets/img/thumbnail/WEB-SCRAPING.png"],
            githubUrl: "https://github.com/nagybhe/Web-Scraping",
            startDate: "2020",
            status: "Completo"
        },

        {
            id: 8,
            title: "Guia de Pagamento Gateway",
            category: "filter-qa-projects",
            description: "API Gateway para emissão de guias de pagamento com endpoints REST para consulta, emissão e gerenciamento.",
            technologies: ["Node.js", "Jest", "Axios", "Express", "Swagger"],
            images: ["/assets/img/thumbnail/Guia-de-pagamento.png"],
            githubUrl: "https://github.com/nagybhe/Guia-Pagamento-Gateway",
            startDate: "2025",
            status: "Completo"
        },

        {
            id: 9,
            title: "Rocket Chat",
            category: "filter-qa-projects",
            description: "Integração entre Discord e Rocket.Chat para transferência automática de mensagens entre plataformas.",
            technologies: ["Node.js", "Rocket.Chat", "Discord", "Axios"],
            images: ["/assets/img/thumbnail/Rocket-chat.png"],
            githubUrl: "https://github.com/nagybhe/Discord-for-rocket.chat",
            startDate: "2020",
            status: "Completo"
        },

        {
            id: 10,
            title: "Beep Saúde Front-End",
            category: "filter-qa-projects",
            description: "Interface web para exibição de notas fiscais integrando automação RPA e APIs para organização e visualização dos dados.",
            technologies: ["Bootstrap", "PHP", "RPA", "API Integration"],
            images: ["/assets/img/thumbnail/BEEP-SAUDE-FRONT-END.png"],
            startDate: "2024",
            endDate: "2024",
            status: "Completo",
            projectUrl: "Projeto Privado"
        },

        {
            id: 11,
            title: "Gerenciamento De Projetos",
            category: "filter-qa-projects",
            description: "Sistema local para gerenciamento de projetos desenvolvido em PHP e React com funcionalidades completas de CRUD.",
            technologies: ["PHP", "React", "MySQL", "Node.js"],
            images: ["/assets/img/thumbnail/Localhost.png"],
            videoUrl: "/assets/videos/localhost.mp4",
            startDate: "2025",
            endDate: "2025",
            status: "Completo"
        },

        {
            id: 12,
            title: "Sistema Web Para A Gestão De Farmácia",
            category: "filter-qa-projects",
            description: "Sistema web para gestão de farmácias com controle de estoque, vendas e administração do negócio.",
            technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
            images: ["/assets/img/thumbnail/SISTEMA-WEB-PARA-A-GESTÃO-DE-FARMACIA.png"],
            githubUrl: "https://github.com/nagybhe/SIS-CURE",
            startDate: "2020",
            endDate: "2021",
            status: "Completo"
        },
        {
            id: 13,
            title: "Qa Toolbox Pro",
            category: "filter-qa-tools",
            description: "Este repositório apresenta o QA-Toolbox-Pro, uma aplicação web com ferramentas úteis para profissionais de QA, incluindo validadores, encoders, geradores e comparadores de dados, com interface moderna em React, arquitetura modular, integração com Telegram para feedback e testes com Vitest.",
            technologies: ["Vite.js", "React.js", "TypeScript", "TailwindCSS", "Radix UI", "Vitest", "Node.js", "Express"],
            images: ["/assets/img/thumbnail/Qa-Toolbox-Pro.png"],
            projectUrl: "Projeto Privado",
            projectUrl: "https://qa-toolbox-pro.vercel.app/login",
            startDate: "2026",
            endDate: "2026",
            status: "Em progresso"
        }

    ];

    const filteredProjects = filter === '*'
        ? projects
        : projects.filter(project => project.category === filter);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    const getCategoryLabel = (category) => {
        const labels = {
            'filter-qa-tools': 'Ferramentas QA',
            'filter-qa-projects': 'Projetos Técnicos',
            'filter-Challenges': 'Desafios Técnicos'
        };
        return labels[category] || category;
    };

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-title">
                    <h2>Projetos de Qualidade de Software</h2>
                    <p>Automação de testes, validação de sistemas e desafios técnicos de QA</p>
                </div>

                {/* Filtros Modernizados */}
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li
                                className={filter === '*' ? 'filter-active' : ''}
                                onClick={() => setFilter('*')}
                            >
                                Todos
                            </li>

                            <li
                                className={filter === 'filter-qa-tools' ? 'filter-active' : ''}
                                onClick={() => setFilter('filter-qa-tools')}
                            >
                                Ferramentas QA
                            </li>

                            <li
                                className={filter === 'filter-qa-projects' ? 'filter-active' : ''}
                                onClick={() => setFilter('filter-qa-projects')}
                            >
                                Projetos Técnicos
                            </li>

                            <li
                                className={filter === 'filter-Challenges' ? 'filter-active' : ''}
                                onClick={() => setFilter('filter-Challenges')}
                            >
                                Desafios Técnicos
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Grid de Projetos Modernizado - 3 COLUNAS FIXAS */}
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="col-lg-4 col-md-6 portfolio-item">
                            <div className="portfolio-wrap" onClick={() => handleProjectClick(project)}>
                                {/* Badge de Status */}
                                <span className={`portfolio-badge ${project.status === 'Completo' ? 'completed' : 'in-progress'}`}>
                                    {project.status}
                                </span>

                                {/* Container da Imagem */}
                                <div className="portfolio-image-container">
                                    <img
                                        src={project.images[0]}
                                        className="img-fluid"
                                        alt={project.title}
                                    />
                                </div>

                                {/* Overlay de Conteúdo */}
                                <div className="portfolio-content">
                                    <span className="portfolio-category">
                                        {getCategoryLabel(project.category)}
                                    </span>
                                    <h3 className="portfolio-title">{project.title}</h3>
                                    <p className="portfolio-description">{project.description}</p>

                                    {/* Tecnologias */}
                                    <div className="portfolio-tech">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span key={index}>{tech}</span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span>+{project.technologies.length - 3}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="portfolio-links">
                                    <a
                                        href="#"
                                        title="Ver Detalhes"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleProjectClick(project);
                                        }}
                                    >
                                        <i className="bx bx-plus"></i>
                                    </a>
                                    {project.projectUrl && project.projectUrl !== 'Projeto Privado' && (
                                        <a
                                            href={project.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Ver Projeto"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <i className="bx bx-link-external"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                <ProjectModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    project={selectedProject}
                />
            </div>
        </section>
    );
};

export default Portfolio;