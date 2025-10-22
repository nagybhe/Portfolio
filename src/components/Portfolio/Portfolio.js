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
            title: "INTERFACE MOBILE",
            category: "filter-app",
            description: "Servindo de modelo ou molde para futuras produções ou possíveis melhorias, utilizando o figma.",
            technologies: ["Figma", "UI/UX Design", "Prototipagem"],
            images: [
                "/assets/img/thumbnail/INTERFACE-MOBILE.png",
            ],
            projectUrl: "https://www.figma.com/file/t8EPY2hIdy2OmKTcjryKE4/INTERFACE-MOBILE?node-id=0%3A1",
            startDate: "2020",
            status: "Completo",
            projectType: "Protótipo Mobile"
        },
        {
            id: 2,
            title: "BEEP SAÚDE FRONT END",
            category: "filter-web",
            description: "Front-End desenvolvido para automação de emissão de notas fiscais de transferência, integrando RPA e API para exibição organizada das informações.",
            detailedDescription: `O Front-End desenvolvido representa a fase final do projeto, consolidando a automação proposta para simplificar o processo de emissão de notas fiscais de transferência. Na etapa inicial, a solução será construída utilizando recursos de RPA (Robotic Process Automation) para automatizar tarefas operacionais, reduzindo ao máximo a necessidade de intervenções manuais. Por fim, o Front-End se conectará via API para exibir de forma clara e organizada as informações das notas fiscais na interface.`,
            technologies: ["Bootstrap","Php" ,"RPA", "API Integration", "Automation"],
            images: [
                "/assets/img/thumbnail/BEEP-SAUDE-FRONT-END.png",
            ],
            features: [
                "Filtro: Notas de Entrada, Saída, Geradas e Rejeitadas",
                "Visualização Completa: Exibir todos os detalhes das notas fiscais",
                "RPA: Acionar o Robô"
            ],
            startDate: "Setembro de 2024",
            endDate: "Outubro de 2024",
            status: "Completo",
            projectUrl: "Projeto Privado"
        },
        {
            id: 3,
            title: "EXTRATOR DE TEXTO DE PDF",
            category: "filter-card",
            description: "Sistema para extrair texto de arquivos PDF e converter para formato JSON, facilitando validações e processamento de dados.",
            detailedDescription: `Este projeto, desenvolvido em React e Node.js, permite selecionar arquivos PDF e extrair seu texto independentemente do diretório onde estejam. Ele processa os PDFs selecionados, converte o conteúdo extraído para o formato JSON e exibe os resultados individualmente na tela, acompanhados de notificações. É uma solução ideal para automatizar a extração de dados de múltiplos documentos PDF de forma rápida e eficiente, além de facilitar validações ágeis das informações contidas nesses arquivos.`,
            technologies: ["React", "Node.js", "PDF-parse", "Tesseract", "fs"],
            images: [
                "/assets/img/thumbnail/Extrator-de-Texto-de-PDF.png"
            ],
            githubUrl: "https://github.com/nagybhe/Extrator-de-Texto-de-PDF",
            startDate: "2024",
            endDate: "2024",
            status: "Completo",
            projectType: "Node.js"
        },
        {
            id: 4,
            title: "GERENCIAMENTO DE PROJETOS",
            category: "filter-web",
            description: "Sistema local para gerenciamento de projetos disponível em PHP e React com funcionalidades completas de CRUD.",
            detailedDescription: "É uma aplicação local (executada em localhost) disponível em duas versões: uma desenvolvida em PHP e outra em React. Ambas as versões permitem aos usuários gerenciar projetos de forma eficiente, oferecendo funcionalidades para abrir, editar e excluir projetos. A interface é simples e intuitiva, proporcionando uma experiência prática para organizar e controlar o andamento dos projetos de maneira rápida e sem complexidade.",
            technologies: ["PHP", "React", "MySQL", "Node.js", "CRUD"],
            images: [
                "/assets/img/thumbnail/Localhost.png",
            ],
            videoUrl: "/assets/videos/localhost.mp4",
            startDate: "2025",
            endDate: "2025",
            status: "Completo",
            projectUrl: "Projeto Privado"
        },
        {
            id: 5,
            title: "SISTEMA WEB PARA A GESTÃO DE FARMÁCIA",
            category: "filter-web",
            description: "O Trabalho de Conclusão de Curso Sistemas para Internet: SIS-CURE tem como objetivo desenvolver uma solução tecnológica voltada para a otimização da gestão de farmácias. O sistema propõe-se a resolver desafios relacionados ao controle de estoque, ao gerenciamento de vendas e à administração do negócio, contribuindo para maior eficiência, organização e tomada de decisão estratégica.",
            technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
            images: [
                "/assets/img/thumbnail/SISTEMA-WEB-PARA-A-GESTÃO-DE-FARMACIA.png"
            ],
            githubUrl: "https://github.com/nagybhe/SIS-CURE",
            startDate: "2020",
            endDate: "2021",
            status: "Completo"
        },
        {
            id: 6,
            title: "PROJETO EM REACT NATIVE",
            category: "filter-app",
            description: "Este é um aplicativo móvel/web com um fluxo de usuário completo, incluindo autenticação (login/cadastro), navegação intuitiva com seções de Home, Funcionalidades e Configurações. Ele oferece gerenciamento de perfil, opções de personalização como Modo Escuro e controle de notificações, além de um \"Recurso Premium\" que indica um modelo de negócios escalável. O design é limpo e focado na usabilidade.",
            technologies: ["React Native"],
            images: [
                "/assets/img/thumbnail/PROJETO-EM-REACT-NATIVE.png"
            ],
            projectUrl: "https://snack.expo.dev/@ins4nityhz/login---gerenciamento",
            startDate: "2020",
            status: "Completo"
        },
        {
            id: 7,
            title: "PROJETO CRUD",
            category: "filter-web",
            description: "Sistema completo CRUD (Create, Read, Update, Delete) para gerenciamento eficiente de dados.",
            technologies: ["PHP", "MySQL", "JavaScript", "CRUD Operations"],
            images: [
                "/assets/img/thumbnail/PROJETO-CRUD.png"
            ],
            githubUrl: "https://github.com/nagybhe/Projeto-CRUD",
            startDate: "2020",
            status: "Completo"
        },
        {
            id: 8,
            title: "WEB SCRAPING",
            category: "filter-card",
            description: "Este projeto realiza web scraping no site do CONFaz para extrair dados da página do Convênio 142/18.",
            technologies: ["Node.js", "Puppeteer", "XLSX", "Path"],
            images: [
                "/assets/img/thumbnail/WEB-SCRAPING.png"
            ],
            githubUrl: "https://github.com/nagybhe/Web-Scraping",
            startDate: "2020",
            status: "Completo"
        },
        {
            id: 9,
            title: "WEB TEST AUTOMATION",
            category: "filter-card",
            description: "Este projeto realiza a automação de testes para um sistema web e o monitoramento de qualidade de API, garantindo a estabilidade e segurança dos serviços. Gera relatórios detalhados de execução, incluindo logs e capturas de tela, facilitando a análise dos resultados.",
            technologies: ["Node.js", "Playwright", "Jest", "Supertest"],
            images: [
                "/assets/img/thumbnail/WEB-TEST-AUTOMATION.png"
            ],
            githubUrl: "https://github.com/nagybhe/web-test-automation",
            startDate: "2025",
            endDate: "2025",
            status: "Completo"
        },
        {
            id: 10,
            title: "Guia de Pagamento Gateway",
            category: "filter-web",
            description: "Este projeto é uma API desenvolvida com Node.js que funciona como um Gateway para emissão de guias de pagamento. Ele integra-se com os serviços para permitir a emissão de guias unitárias e em lote, além de fornecer endpoints para consulta das receitas disponíveis e gerenciamento das guias emitidas.",
            technologies: ["jest", "axios", "dotenv", "express","swagger-ui-express"],
            images: [
                "/assets/img/thumbnail/Guia-de-pagamento.png"
            ],
            githubUrl: "https://github.com/nagybhe/Guia-Pagamento-Gateway",
            startDate: "2025",
            endDate: "2025",
            status: "Completo"
        },
        {
            id: 11,
            title: "ROCKET CHAT",
            category: "filter-web",
            description: "Em Node.js, realiza a transferencia de mensagens do discord para o canal oficial do rocket.chat",
            technologies: ["Rocket.Chat", "Node.js", "Discord", "axios", "express"],
            images: [
                "/assets/img/thumbnail/Rocket-chat.png"
            ],
            githubUrl: "https://github.com/nagybhe/Discord-for-rocket.chat",
            startDate: "2020",
            status: "Completo"
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
            'filter-app': 'React Native',
            'filter-card': 'Node.js',
            'filter-web': 'Web'
        };
        return labels[category] || category;
    };

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-title">
                    <h2>Projetos</h2>
                    <p>Meus trabalhos e desenvolvimentos recentes</p>
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
                                className={filter === 'filter-app' ? 'filter-active' : ''}
                                onClick={() => setFilter('filter-app')}
                            >
                                React Native
                            </li>
                            <li
                                className={filter === 'filter-card' ? 'filter-active' : ''}
                                onClick={() => setFilter('filter-card')}
                            >
                                Node.js
                            </li>
                            <li
                                className={filter === 'filter-web' ? 'filter-active' : ''}
                                onClick={() => setFilter('filter-web')}
                            >
                                Web
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