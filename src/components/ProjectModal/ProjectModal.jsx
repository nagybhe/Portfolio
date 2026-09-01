import React from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { getCategoryLabel, PRIVATE_PROJECT } from '../../data/projects';
import './ProjectModal.css';

const ProjectModal = ({ show, handleClose, project }) => {
    if (!project) return null;

    const hasImages = project.images?.length > 0;

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered className="project-modal glass-modal">
            <Modal.Header closeButton className="modal-header-custom">
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {/* Carousel de Imagens */}
                {hasImages && !project.videoUrl && (
                    <div className="mb-4">
                        <Carousel interval={null}>
                            {project.images.map((image, index) => (
                                <Carousel.Item key={image}>
                                    <img
                                        className="d-block w-100"
                                        src={image}
                                        alt={`${project.title} - Imagem ${index + 1}`}
                                        loading="lazy"
                                        decoding="async"
                                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                )}

                {project.videoUrl && (
                    <div className="video-container mb-4">
                        <h5 id={`video-label-${project.id}`}>Vídeo Demonstrativo</h5>
                        {/* Screencast sem faixa de áudio: não há diálogo a legendar.
                            A alternativa textual é a descrição do projeto abaixo. */}
                        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                        <video
                            aria-labelledby={`video-label-${project.id}`}
                            width="100%"
                            controls
                            preload="none"
                            poster={project.videoPoster}
                            className="project-video"
                        >
                            <source src={project.videoUrl} type="video/mp4" />
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>
                )}

                <div className="row">
                    <div className="col-lg-8">
                        {/* Descrição Principal */}
                        <div className="project-description mb-4">
                            <h5>Descrição</h5>
                            <p>{project.description}</p>

                            {/* Descrição Detalhada */}
                            {project.detailedDescription && (
                                <div className="detailed-description mt-3">
                                    <p>{project.detailedDescription}</p>
                                </div>
                            )}
                        </div>

                        {/* Funcionalidades */}
                        {project.features && (
                            <div className="project-features mb-4">
                                <h5>Funcionalidades</h5>
                                <ul className="features-list">
                                    {project.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tecnologias */}
                        {project.technologies && (
                            <div className="project-technologies mb-4">
                                <h5>Tecnologias Utilizadas</h5>
                                <div className="tech-tags">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="col-lg-4">
                        {/* Informações do Projeto */}
                        <div className="project-info">
                            <h5>Informações do Projeto</h5>
                            <ul>
                                <li>
                                    <strong>Categoria:</strong> {getCategoryLabel(project.category)}
                                </li>

                                {project.projectType && (
                                    <li><strong>Tipo:</strong> {project.projectType}</li>
                                )}

                                {project.startDate && (
                                    <li><strong>Data de Início:</strong> {project.startDate}</li>
                                )}

                                {project.endDate && (
                                    <li><strong>Data de Término:</strong> {project.endDate}</li>
                                )}

                                <li><strong>Status:</strong> {project.status || 'Completo'}</li>
                            </ul>
                        </div>

                        {/* Links Externos */}
                        <div className="project-links mt-4">
                            {project.githubUrl && (
                                <Button
                                    variant="outline-light"
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-100 mb-2"
                                >
                                    <i className="bx bxl-github" aria-hidden="true"></i> Ver Código no GitHub
                                </Button>
                            )}

                            {project.projectUrl && project.projectUrl !== PRIVATE_PROJECT && (
                                <Button
                                    variant="primary"
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-100 mb-2"
                                >
                                    <i className="bx bx-link-external" aria-hidden="true"></i> Ver Projeto
                                </Button>
                            )}

                            {project.projectUrl === PRIVATE_PROJECT && (
                                <Button
                                    variant="outline-secondary"
                                    className="w-100 mb-2"
                                    disabled
                                >
                                    <i className="bx bx-lock" aria-hidden="true"></i> Projeto Privado
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-light" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProjectModal;
