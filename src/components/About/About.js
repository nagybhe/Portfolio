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
                                        <span>Ins4nityhz@gmail.com</span>
                                    </div>
                                    <div className="info-item">
                                        <i className="bx bx-cake"></i>
                                        <span>27 Anos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <div className="about-content">
                            <h3 className="text-white mb-4">Desenvolvedor & Especialista em Qualidade de Software</h3>

                            <div className="bio-text">
                                <p>
                                    Formado em <strong>Sistemas para Internet</strong> pela Faculdade Meta e atualmente
                                    cursando pós-graduação em <strong>Engenharia de Software</strong>, aprofundando conhecimentos
                                    em desenvolvimento, arquitetura e qualidade de sistemas.
                                </p>

                                <p>
                                    Minha trajetória começou em <strong>Customer Success</strong>, atuando como Head com foco em
                                    retenção, onboarding estratégico e redução de churn. Essa experiência me proporcionou
                                    uma visão centrada no cliente e reforçou a importância da qualidade em todas as etapas
                                    do ciclo de vida do produto.
                                </p>

                                <p>
                                    Migrei para a área técnica, especializando-me como <strong>RPA Developer</strong> em paralelo
                                    com <strong>Quality Assurance</strong>. Tenho experiência com testes manuais e automatizados,
                                    integrações via API, Quality Analytics, além de atuar em Pentests White Box e Gray Box.
                                </p>

                                <p>
                                    Participei de projetos de automação de processos e testes de APIs, sempre com foco em
                                    confiabilidade, segurança e escalabilidade. Em 2024, conquistei o
                                    <strong> 1º lugar no Hackathon Gamefica (TITCS)</strong>, reforçando minha capacidade de
                                    inovação, colaboração e entrega sob pressão.
                                </p>

                                <p>
                                    Como atleta de alto rendimento e <strong>faixa preta em judô</strong>, desenvolvi disciplina,
                                    resiliência e pensamento estratégico - características que aplico diariamente no
                                    ambiente profissional.
                                </p>
                            </div>

                            <div className="skills-highlight mt-4">
                                <h5 className="text-white mb-3">Especializações Técnicas</h5>
                                <div className="skills-tags">
                                    <span className="skill-tag">QA Engineer</span>
                                    <span className="skill-tag">Test Automation</span>
                                    <span className="skill-tag">Cypress</span>
                                    <span className="skill-tag">Playwright</span>
                                    <span className="skill-tag">Robot Framework</span>
                                    <span className="skill-tag">Selenium</span>
                                    <span className="skill-tag">PHPUnit</span>
                                    <span className="skill-tag">Jest</span>
                                    <span className="skill-tag">Load Testing (K6)</span>
                                    <span className="skill-tag">Node.js</span>
                                    <span className="skill-tag">JavaScript</span>
                                    <span className="skill-tag">TypeScript</span>
                                    <span className="skill-tag">Laravel</span>
                                    <span className="skill-tag">Software Engineering</span>
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