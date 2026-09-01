import React, { useState } from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';
import {
    projects,
    CATEGORIES,
    ALL_CATEGORIES,
    PRIVATE_PROJECT,
    getCategoryLabel
} from '../../data/projects';
import './Portfolio.css';

const FILTERS = [{ id: ALL_CATEGORIES, label: 'Todos' }, ...CATEGORIES];

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [filter, setFilter] = useState(ALL_CATEGORIES);

    const filteredProjects =
        filter === ALL_CATEGORIES
            ? projects
            : projects.filter((project) => project.category === filter);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-title">
                    <h2>Projetos de Qualidade de Software</h2>
                    <p>
                        Automação de testes, validação de sistemas e desafios técnicos de QA
                    </p>
                </div>

                {/* Filtros */}
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters" aria-label="Filtrar projetos por categoria">
                            {FILTERS.map(({ id, label }) => (
                                <li key={id}>
                                    <button
                                        type="button"
                                        className={filter === id ? 'filter-active' : ''}
                                        aria-pressed={filter === id}
                                        onClick={() => setFilter(id)}
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Grid de Projetos */}
                <div
                    className="row portfolio-container"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="col-lg-4 col-md-6 portfolio-item">
                            <article className="portfolio-wrap">
                                {/* Badge de Status */}
                                <span
                                    className={`portfolio-badge ${project.status === 'Completo' ? 'completed' : 'in-progress'}`}
                                >
                                    {project.status}
                                </span>

                                {/* Container da Imagem */}
                                <div className="portfolio-image-container">
                                    {project.images?.[0] && (
                                        <img
                                            src={project.images[0]}
                                            className="img-fluid"
                                            alt={`Captura de tela do projeto ${project.title}`}
                                            width="800"
                                            height="450"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    )}
                                </div>

                                {/* Overlay de Conteúdo */}
                                <div className="portfolio-content">
                                    <span className="portfolio-category">
                                        {getCategoryLabel(project.category)}
                                    </span>
                                    <h3 className="portfolio-title">
                                        {/* Botão "esticado" sobre o card: mantém o clique em qualquer
                                            ponto sem aninhar elementos interativos. */}
                                        <button
                                            type="button"
                                            className="portfolio-title-btn"
                                            onClick={() => handleProjectClick(project)}
                                        >
                                            {project.title}
                                        </button>
                                    </h3>
                                    <p className="portfolio-description">{project.description}</p>

                                    {/* Tecnologias */}
                                    <div className="portfolio-tech">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech}>{tech}</span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span>+{project.technologies.length - 3}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="portfolio-links">
                                    <button
                                        type="button"
                                        aria-label={`Ver detalhes de ${project.title}`}
                                        title="Ver Detalhes"
                                        onClick={() => handleProjectClick(project)}
                                    >
                                        <i className="bx bx-plus" aria-hidden="true"></i>
                                    </button>
                                    {project.projectUrl &&
                                        project.projectUrl !== PRIVATE_PROJECT && (
                                            <a
                                                href={project.projectUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Abrir o projeto ${project.title} em nova aba`}
                                                title="Ver Projeto"
                                            >
                                                <i className="bx bx-link-external" aria-hidden="true"></i>
                                            </a>
                                        )}
                                </div>
                            </article>
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
