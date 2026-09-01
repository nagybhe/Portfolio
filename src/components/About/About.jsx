import React from 'react';
import './About.css';

const About = () => {
    
    return (
        <section id="about" className="about bg-dark text-white">
            <div className="container">
                <div className="section-title">
                    <h2 className="text-white">Sobre</h2>
                    <p className="text-white">Conheça mais sobre minha trajetória profissional</p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <div className="profile-card text-center">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/img/thotos/photo-rounded-circle.png`}
                                alt="André Nagybhe"
                                className="img-fluid rounded-circle profile-img"
                            />
                            <div className="profile-info mt-4">
                                <h4 className="text-white">André Nagybhe</h4>
                                <p className="text-white">QA Engineer & Software Developer</p>

                                <div className="personal-info">
                                    <div className="info-item">
                                        <i className="bx bx-map"></i>
                                        <span>Amapá, Macapá, AP</span>
                                    </div>
                                    <div className="info-item">
                                        <i className="bx bx-envelope"></i>
                                        <span>andre.nagybhe.ramos@gmail.com</span>
                                    </div>
                                    <div className="info-item">
                                        <i className="bx bx-cake"></i>
                                        <span>28 Anos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <div className="about-content">
                            <h3 className="text-white mb-4">Especialista em Qualidade de Software & QA</h3>

                            <div className="bio-text">
                                <p>
                                    Formado em <strong>Sistemas para Internet</strong> pela Faculdade Meta e atualmente
                                    cursando pós-graduação em <strong>Engenharia de Software</strong>, com foco em
                                    arquitetura de testes, qualidade de software e processos de garantia da qualidade.
                                </p>

                                <p>
                                    Minha trajetória em <strong>Customer Success</strong> me proporcionou uma visão
                                    centrada no usuário final, compreendendo profundamente a importância da qualidade
                                    em todas as etapas do ciclo de vida do produto e como bugs impactam a experiência do cliente.
                                </p>

                                <p>
                                    Atuo como <strong>Quality Assurance Engineer</strong> com expertise em:
                                    <strong> testes manuais e automatizados</strong>,
                                    <strong> desenvolvimento de frameworks de teste</strong>,
                                    <strong> integrações via API</strong>, e
                                    <strong> Quality Analytics</strong>. Experiência em Pentests White Box e Gray Box
                                    para validação de segurança em aplicações.
                                </p>

                                <p>
                                    Participei de projetos de automação de testes e processos, sempre com foco em
                                    confiabilidade, segurança e escalabilidade. Em 2024, conquistei o
                                    <strong> 1º lugar no Hackathon Gamefica (TITCS)</strong>, demonstrando capacidade de
                                    inovação e entrega de qualidade sob pressão.
                                </p>

                                <p>
                                    Como <strong>faixa preta em judô e atleta de alto rendimento</strong>, desenvolvi
                                    disciplina, resiliência e pensamento estratégico - habilidades que aplico na
                                    metodologia de testes, na antecipação de riscos e na busca constante pela excelência.
                                </p>
                            </div>

                            <div className="skills-highlight mt-4">
                                <h5 className="text-white mb-3">Especializações em QA & Testing</h5>
                                <div className="skills-tags">
                                    <span className="skill-tag">QA Engineering</span>
                                    <span className="skill-tag">Test Automation</span>
                                    <span className="skill-tag">Cypress</span>
                                    <span className="skill-tag">Playwright</span>
                                    <span className="skill-tag">Selenium WebDriver</span>
                                    <span className="skill-tag">Robot Framework</span>
                                    <span className="skill-tag">API Testing</span>
                                    <span className="skill-tag">Postman</span>
                                    <span className="skill-tag">Performance Testing</span>
                                    <span className="skill-tag">K6</span>
                                    <span className="skill-tag">Artillery</span>
                                    <span className="skill-tag">BDD</span>
                                    <span className="skill-tag">Gherkin</span>
                                    <span className="skill-tag">CI/CD Pipelines</span>
                                    <span className="skill-tag">Jenkins</span>
                                    <span className="skill-tag">Git</span>
                                    <span className="skill-tag">QAOps</span>
                                    <span className="skill-tag">Test Strategy</span>
                                    <span className="skill-tag">Quality Metrics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;