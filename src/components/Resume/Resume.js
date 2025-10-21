import React from 'react';
import './Resume.css';

const Resume = () => {
    const education = [
        {
            institution: 'Estácio',
            period: '2025 - 2026 (Data de término ou prevista)',
            course: 'Engenharia de Software',
            type: 'Pós-graduação'
        },
        {
            institution: 'Faculdade de Informática e Administração Paulista (FIAP)',
            period: '2024',
            course: 'Offensive Cyber Security - Red Team Operations',
            type: 'Pós-graduação'
        },
        {
            institution: 'Faculdade de Tecnólogia do Amapá - Meta',
            period: '2024 - 2021',
            course: 'Sistemas para Internet',
            type: 'Graduação'
        },
        {
            institution: 'Ensino Médio Completo',
            period: '2017',
            course: 'Escola – Centro de Ensino Supletivo Prof°. Paulo Melo.',
            type: ''
        }
    ];

    const certificates = [
        'Orchestrator Admin: Automation Management with ElectroNeek Orchestrator',
        'RPA Developer: Automation Development in ElectroNeek Studio Pro',
        'Atendimento Surpreendente ao Cliente - Customer Service/SAC',
        'Cybersecurity',
        'DevOps & Agile Culture',
        'User Experience',
        'G4 Startups',
        'Gatilhos Mentais em Vendas',
        'Vendas Pelo WhatsApp',
        'Inteligência Emocional',
        'O Sucesso da Retenção de Clientes no Pós-Venda',
        'Fundamentos de Customer Success para Analistas',
        'Fundamentos em Experiência do Cliente',
        'Fundamentos em Finanças',
        'Gente e Cultura 4.0',
        'Pensamento Crítico',
        'Indicadores e Métricas',
        'Fundamentos em Gestão por OKRs',
        'Programação para internet com JavaScript',
        'Entrepreneurship',
        'Conceitos de Responsividade e Experiência do Usuário',
        'Introdução a banco de dados com MySQL & PHPMyAdmin',
        'Arquitetura de Sistemas',
        'Cloud Computing & Serverless',
        'Desenvolvimento de software com Azure Static Web Apps e GitHub Actions',
        'Fundamentos de Arquitetura de Sistemas',
        'Linux: A introdução ao sistema operacional',
        'Criando um repositório para seus projetos inovadores',
        'Fundamentos da Computação em Nuvem',
        'Fundamentos do Azure',
        'Introdução aos Conceitos de Serverless e Azure Functions',
        'Lógica de programação essencial',
        'SMS Expert',
        'Projetos Ágeis com Scrum',
        'Fundamentos em Liderança',
        'Experiência do Cliente'
    ];

    const experiences = [
        {
            title: 'Analista de Requisitos (PO)',
            company: 'MSB Tecnologia',
            period: '2025 - 2025',
            responsibilities: [
                'Metodologias Ágeis (Scrum, Kanban)',
                'Gestão de Requisitos',
                'Ferramentas de Gestão de Projetos',
                'Diagramação e Modelagem de Processos',
                'Gerenciamento de Riscos e Qualidade',
                'Gestão de Stakeholders',
                'Análise de Dados e Relatórios',
                'Desenvolvimento de Documentação Técnica',
                'Gestão de Equipes',
                'Automação de Processos'
            ]
        },
        {
            title: 'Back-end Developer(RPA)',
            company: 'Tributei',
            period: '2023 - 2025',
            responsibilities: [
                'Desenvolvimento de Robôs',
                'Integração do cliente',
                'Integração com Sistemas',
                'Manipulação e Processamento de Dados',
                'Monitoramento e Manutenção',
                'Análise de Processos',
                'Colaboração com Equipes Multidisciplinares'
            ]
        },
        {
            title: 'Head Customer Success',
            company: 'Tributei',
            period: '6 Meses',
            responsibilities: [
                'Definição de Estratégia e Planejamento',
                'Gestão de Equipe',
                'Engajamento e Retenção de Clientes',
                'Estratégias de Expansão e Crescimento',
                'Interação com outras Áreas',
                'Análise e Relatórios de Performance'
            ]
        },
        {
            title: 'Customer Support',
            company: 'Tributei',
            period: '2022 - 2023',
            responsibilities: [
                'Atendimento ao Cliente',
                'Resolução de Problemas',
                'Documentação e Registros',
                'Treinamento e Orientação',
                'Feedback e Melhoria Contínua',
                'Manutenção da Base de Conhecimento',
                'Análise e Relatórios'
            ]
        },
        {
            title: 'Customer success',
            company: 'Tributei',
            period: '2021 - 2022',
            responsibilities: [
                'Monitoramento de Métricas',
                'Integração do cliente',
                'Upsell e Cross-sell',
                'Onboarding'
            ]
        },
        {
            title: 'Sonoplasta',
            company: 'Op\'Art',
            period: '2013 / 2018',
            responsibilities: [
                'Criação de Artes',
                'Edição de Vídeo',
                'Edição de Audio'
            ]
        },
        {
            title: 'T.I',
            company: 'Casa do Sofá',
            period: '2015 / 2015',
            responsibilities: [
                'Manutenção de Microcomputadores'
            ]
        }
    ];

    return (
        <section id="resume" className="resume bg-dark">
            <div className="container">
                <div className="section-title">
                    <h2 className="text-white">Qualificações</h2>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title text-white">Formação</h3>
                        {education.map((edu, index) => (
                            <div key={index} className="resume-item">
                                <h4 className="text-white">{edu.institution}</h4>
                                <h5 className="bg-dark text-white">{edu.period}</h5>
                                <p className="text-white"><em>{edu.course}</em></p>
                                {edu.type && <p className="text-white"><em>{edu.type}</em></p>}
                            </div>
                        ))}

                        <h3 className="resume-title text-white">Licenças e Certificados</h3>
                        {certificates.map((cert, index) => (
                            <div key={index} className="resume-item">
                                <p className="text-white"><em>{cert}</em></p>
                            </div>
                        ))}
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title text-white">Experiência Profissional</h3>
                        {experiences.map((exp, index) => (
                            <div key={index} className="resume-item">
                                <h4 className="text-white">{exp.title}</h4>
                                <p className="bg-dark text-white"><em>{exp.company}</em></p>
                                <h5 className="bg-dark text-white">{exp.period}</h5>
                                <ul>
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="bg-dark text-white">{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;