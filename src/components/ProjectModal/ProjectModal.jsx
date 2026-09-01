import React from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import './ProjectModal.css';

const ProjectModal = ({ show, handleClose, project }) => {
    if (!project) return null;

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered className="project-modal">
            <Modal.Header closeButton className="modal-header-custom">
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {/* Carousel de Imagens */}
                {project.images && project.images.length > 0 && !project.videoUrl && (
                    <div className="mb-4">
                        <Carousel>
                            {project.images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={image}
                                        alt={`${project.title} - Imagem ${index + 1}`}
                                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                )}

                {project.videoUrl && (
                    <div className="video-container mb-4">
                        <h5>Vídeo Demonstrativo</h5>
                        <video width="100%" controls className="project-video">
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
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tecnologias */}
                        {project.technologies && (
                            <div className="project-technologies mb-4">
                                <h5>Tecnologias Utilizadas</h5>
                                <div className="tech-tags">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
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
                                    <strong>Categoria:</strong>
                                    {project.category === 'filter-app' && ' React Native'}
                                    {project.category === 'filter-card' && ' Node.js'}
                                    {project.category === 'filter-web' && ' Web'}
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

                                {/* REMOVIDO: Exibição do URL como texto */}
                            </ul>
                        </div>

                        {/* Links Externos */}
                        <div className="project-links mt-4">
                            {project.githubUrl && (
                                <Button
                                    variant="outline-dark"
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="w-100 mb-2"
                                >
                                    <i className="bx bxl-github"></i> Ver Código no GitHub
                                </Button>
                            )}

                            {project.projectUrl && project.projectUrl !== 'Projeto Privado' && (
                                <Button
                                    variant="primary"
                                    href={project.projectUrl}
                                    target="_blank"
                                    className="w-100 mb-2"
                                >
                                    <i className="bx bx-link-external"></i> Ver Projeto
                                </Button>
                            )}

                            {project.projectUrl && project.projectUrl === 'Projeto Privado' && (
                                <Button
                                    variant="outline-secondary"
                                    className="w-100 mb-2"
                                    disabled
                                >
                                    <i className="bx bx-lock"></i> Projeto Privado
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProjectModal;