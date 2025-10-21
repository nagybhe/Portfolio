import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about bg-dark text-white">
            <div className="container">
                <div className="section-title">
                    <h2 className="text-white">Sobre</h2>
                </div>

                <div className="row">
                    <div className="col-lg-3" data-aos="fade-right">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/img/thotos/photo-rounded-circle.png`}
                            alt="André Nagybhe"
                            className="img-fluid rounded-circle"
                        />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Nome:</strong> <span>André Nagybhe Hage Ramos</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Localização:</strong> <span>Amapá, Macapá, AP</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Idade:</strong> <span>27 Anos</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>Ins4nityhz@gmail.com</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-12">
                                <p className="text-justify">
                                    Olá! Sou formado em Sistemas para Internet pela Faculdade Meta e atualmente curso pós-graduação em Engenharia de Software, aprofundando meus conhecimentos em desenvolvimento, arquitetura e qualidade de sistemas.
                                    <br /><br />
                                    Iniciei minha trajetória em Customer Success, onde atuei como Head, com foco em retenção, onboarding estratégico e redução de churn. Essa base me proporcionou uma visão centrada no cliente e reforçou a importância da qualidade em todas as etapas do ciclo de vida do produto.
                                    <br /><br />
                                    Com o tempo, migrei para a área técnica, me especializando como RPA Developer em paralelo Quality Assurance. Tenho experiência com testes manuais e automatizados, integrações via API, Quality Analytics, além de atuar em Pentests White Box e Gray Box.
                                    <br /><br />
                                    Participei de projetos de automação de processos e testes de APIs, sempre com foco em confiabilidade, segurança e escalabilidade. Em 2024, conquistei o 1º lugar no Hackathon Gamefica (TITCS), reforçando minha capacidade de inovação, colaboração e entrega sob pressão.
                                    <br /><br />
                                    Sou também atleta de alto rendimento e faixa preta em judô, onde desenvolvi disciplina, resiliência e pensamento estratégico. Essas são características que aplico diariamente no ambiente profissional.
                                    <br /><br />
                                    Sou movido por desafios e aprendizado contínuo, sempre buscando entregar soluções eficientes, seguras e com alto padrão de qualidade. 🚀
                                </p>
                            </div>
                        </div>
                        <br />
                        <h5 className="text-white fst-italic">
                            QA Engineer | Test Automation (Cypress, Playwright, Robot Framework, Selenium, PHPUnit, Jest) | Load Testing (K6) | Node.js, JavaScript, Typescript, Laravel | Software Engineering
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;