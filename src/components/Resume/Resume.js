import React from 'react';
import './Resume.css';

const Resume = () => {
    const education = [
        {
            institution: 'Estácio',
            period: '2025 - 2026',
            course: 'Engenharia de Software',
            type: 'Pós-graduação',
            status: 'Em andamento'
        },
        {
            institution: 'Faculdade de Informática e Administração Paulista (FIAP)',
            period: '2024',
            course: 'Offensive Cyber Security - Red Team Operations',
            type: 'Pós-graduação',
            status: 'Trancado'
        },
        {
            institution: 'Faculdade de Tecnologia do Amapá - Meta',
            period: '2021 - 2024',
            course: 'Sistemas para Internet',
            type: 'Graduação',
            status: 'Concluído'
        }
    ];

    const certificates = [
        {
            name: 'Orchestrator Admin: Automation Management with ElectroNeek Orchestrator',
            category: 'RPA & Automação'
        },
        {
            name: 'RPA Developer: Automation Development in ElectroNeek Studio Pro',
            category: 'RPA & Automação'
        },
        {
            name: 'Cybersecurity',
            category: 'Segurança Cibernética'
        },
        {
            name: 'DevOps & Agile Culture',
            category: 'Metodologias Ágeis'
        },
        {
            name: 'Projetos Ágeis com Scrum',
            category: 'Metodologias Ágeis'
        },
        {
            name: 'Fundamentos em Gestão por OKRs',
            category: 'Metodologias Ágeis'
        },
        {
            name: 'User Experience',
            category: 'Design & UX'
        },
        {
            name: 'Conceitos de Responsividade e Experiência do Usuário',
            category: 'Design & UX'
        },
        {
            name: 'Programação para internet com JavaScript',
            category: 'Desenvolvimento'
        },
        {
            name: 'Lógica de programação essencial',
            category: 'Desenvolvimento'
        },
        {
            name: 'Introdução a banco de dados com MySQL & PHPMyAdmin',
            category: 'Banco de Dados'
        },
        {
            name: 'Arquitetura de Sistemas',
            category: 'Arquitetura & Cloud'
        },
        {
            name: 'Fundamentos de Arquitetura de Sistemas',
            category: 'Arquitetura & Cloud'
        },
        {
            name: 'Cloud Computing & Serverless',
            category: 'Arquitetura & Cloud'
        },
        {
            name: 'Fundamentos da Computação em Nuvem',
            category: 'Arquitetura & Cloud'
        },
        {
            name: 'Fundamentos do Azure',
            category: 'Arquitetura & Cloud'
        },
        {
            name: 'Introdução aos Conceitos de Serverless e Azure Functions',
            category: 'Arquitetura & Cloud'
        },
        {
            name: 'Desenvolvimento de software com Azure Static Web Apps e GitHub Actions',
            category: 'Arquitetura & Cloud'
        },
        {
            name: 'Linux: A introdução ao sistema operacional',
            category: 'Sistemas & Infraestrutura'
        },
        {
            name: 'Criando um repositório para seus projetos inovadores',
            category: 'Ferramentas & Versionamento'
        },
        {
            name: 'Atendimento Surpreendente ao Cliente - Customer Service/SAC',
            category: 'Customer Success & Vendas'
        },
        {
            name: 'O Sucesso da Retenção de Clientes no Pós-Venda',
            category: 'Customer Success & Vendas'
        },
        {
            name: 'Fundamentos de Customer Success para Analistas',
            category: 'Customer Success & Vendas'
        },
        {
            name: 'Fundamentos em Experiência do Cliente',
            category: 'Customer Success & Vendas'
        },
        {
            name: 'Gatilhos Mentais em Vendas',
            category: 'Customer Success & Vendas'
        },
        {
            name: 'Vendas Pelo WhatsApp',
            category: 'Customer Success & Vendas'
        },
        {
            name: 'SMS Expert',
            category: 'Customer Success & Vendas'
        },
        {
            name: 'G4 Startups',
            category: 'Empreendedorismo'
        },
        {
            name: 'Entrepreneurship',
            category: 'Empreendedorismo'
        },
        {
            name: 'Inteligência Emocional',
            category: 'Soft Skills'
        },
        {
            name: 'Pensamento Crítico',
            category: 'Soft Skills'
        },
        {
            name: 'Fundamentos em Liderança',
            category: 'Soft Skills'
        },
        {
            name: 'Gente e Cultura 4.0',
            category: 'Gestão & Negócios'
        },
        {
            name: 'Indicadores e Métricas',
            category: 'Gestão & Negócios'
        },
        {
            name: 'Fundamentos em Finanças',
            category: 'Gestão & Negócios'
        },
        {
            name: 'Experiência do Cliente',
            category: 'Customer Success & Vendas'
        }
    ];

    // Agrupar certificações por categoria
    const groupedCertificates = certificates.reduce((acc, cert) => {
        if (!acc[cert.category]) {
            acc[cert.category] = [];
        }
        acc[cert.category].push(cert);
        return acc;
    }, {});

    const experiences = [
        {
            title: 'Analista de Requisitos (PO)',
            company: 'MSB Tecnologia',
            period: '2025 - 2025',
            location: 'Híbrido',
            type: 'Tempo integral',
            responsibilities: [
                'Levantamento, análise e gestão de requisitos funcionais e não funcionais',
                'Priorização e refinamento de backlog com foco em valor de negócio',
                'Facilitação de cerimônias ágeis (Scrum, Kanban)',
                'Elaboração de user stories e critérios de aceitação',
                'Facilitação de cerimônias ágeis (Scrum, Kanban)',
                'Modelagem de processos e fluxos (UML, BPMN)',
                'Gestão de demandas e documentação técnica',
                'Comunicação com stakeholders e validação de entregas',
            ],
            technologies: ['Jira', 'Confluence', 'Trello', 'Redmine', 'Lucidchart', 'Visio', 'Scrum', 'Kanban']
        },
        {
            title: 'Back-end Developer (RPA)',
            company: 'Tributei',
            period: '2023 - 2025',
            location: 'Híbrido',
            type: 'Tempo integral',
            responsibilities: [
                'Desenvolvimento e manutenção de robôs RPA',
                'Integração com APIs e sistemas legados',
                'Automação de processos fiscais e contábeis',
                'Otimização de performance e monitoramento',
                'Colaboração em arquitetura de soluções'
            ],
            technologies: ['Python', 'ElectroNeek', 'SQL', 'REST APIs', 'Azure']
        },
        {
            title: 'Head Customer Success',
            company: 'Tributei',
            period: '2023 (6 meses)',
            location: 'Híbrido',
            type: 'Tempo integral',
            responsibilities: [
                'Liderança da equipe de Customer Success',
                'Estratégia de retenção e expansão de clientes',
                'Análise de métricas NPS, CSAT e churn rate',
                'Desenvolvimento de processos de onboarding',
                'Gestão de relacionamento com clientes enterprise'
            ],
            technologies: ['CRM', 'Analytics', 'Zendesk', 'Metabase']
        },
        {
            title: 'Customer Support & Success',
            company: 'Tributei',
            period: '2021 - 2023',
            location: 'Híbrido',
            type: 'Tempo integral',
            responsibilities: [
                'Atendimento especializado a clientes',
                'Resolução de problemas técnicos complexos',
                'Treinamento e capacitação de usuários',
                'Documentação de base de conhecimento',
                'Suporte a processos de upsell e cross-sell'
            ],
            technologies: ['Zendesk', 'Intercom', 'Notion', 'Slack']
        }
    ];

    return (
        <section id="resume" className="resume">
            <div className="container">
                <div className="section-title">
                    <h2>Qualificações</h2>
                    <p>Minha jornada profissional e acadêmica</p>
                </div>

                <div className="row">
                    {/* Experiência Profissional */}
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Experiência Profissional</h3>
                        {experiences.map((exp, index) => (
                            <div key={index} className="resume-item">
                                <div className="resume-header">
                                    <h4>{exp.title}</h4>
                                    <div className="resume-meta">
                                        <span className="company">{exp.company}</span>
                                        <span className="period">{exp.period}</span>
                                    </div>
                                </div>
                                <div className="resume-details">
                                    <div className="job-info">
                                        <span className="location">{exp.location}</span>
                                        <span className="job-type">{exp.type}</span>
                                    </div>
                                    <ul>
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                    {exp.technologies && (
                                        <div className="technologies">
                                            {exp.technologies.map((tech, idx) => (
                                                <span key={idx} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Formação e Certificados */}
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        {/* Formação Acadêmica */}
                        <h3 className="resume-title">Formação Acadêmica</h3>
                        {education.map((edu, index) => (
                            <div key={index} className="resume-item">
                                <div className="resume-header">
                                    <h4>{edu.institution}</h4>
                                    <span className="period">{edu.period}</span>
                                </div>
                                <div className="resume-details">
                                    <p className="course">{edu.course}</p>
                                    <div className="education-meta">
                                        <span className="degree-type">{edu.type}</span>
                                        <span className={`status ${edu.status.toLowerCase().replace(' ', '-')}`}>
                                            {edu.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Certificados Organizados por Categoria */}
                        <h3 className="resume-title">Certificações</h3>
                        <div className="certificates-container">
                            {Object.entries(groupedCertificates).map(([category, certs]) => (
                                <div key={category} className="certificate-category">
                                    <h4 className="category-title">{category}</h4>
                                    <div className="certificates-grid">
                                        {certs.map((cert, index) => (
                                            <div key={index} className="certificate-card">
                                                <div className="certificate-content">
                                                    <h5>{cert.name}</h5>
                                                    <span className="certificate-category">{cert.category}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;