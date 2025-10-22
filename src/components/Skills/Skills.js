import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsByCategory = [
        {
            category: 'Desenvolvimento Front-end & Design',
            skills: [
                { name: 'HTML5', percentage: 100 },
                { name: 'CSS3', percentage: 100 },
                { name: 'Framework Bootstrap', percentage: 100 },
                { name: 'JavaScript', percentage: 80 },
                { name: 'React Native', percentage: 70 },
                { name: 'Figma', percentage: 100 },
                { name: 'Adobe Photoshop', percentage: 100 },
                { name: 'Adobe Illustrator', percentage: 100 }
            ]
        },
        {
            category: 'Desenvolvimento Back-end & Infraestrutura',
            skills: [
                { name: 'Node.js', percentage: 80 },
                { name: 'PHP', percentage: 70 },
                { name: 'Banco de Dados', percentage: 70 },
                { name: 'RPA (Robotic Process Automation)', percentage: 90 },
                { name: 'GitHub | GitLab', percentage: 90 }
            ]
        },
        {
            category: 'Gestão & Metodologias',
            skills: [
                { name: 'Metodologias Ágeis', percentage: 100 },
                { name: 'Gestão de Projetos', percentage: 80 },
                { name: 'Análise de Dados e Relatórios', percentage: 100 },
                { name: 'Resolução de Problemas Técnicos', percentage: 100 }
            ]
        },
        {
            category: 'Customer Success & Suporte',
            skills: [
                { name: 'Plataformas de Suporte e CRMs', percentage: 100 },
                { name: 'Sistemas de Tickets', percentage: 100 },
                { name: 'Suporte por Canal Específico', percentage: 100 },
                { name: 'Compreensão de Produtos/Serviços', percentage: 100 }
            ]
        }
    ];

    const SkillCard = ({ category, skills }) => (
        <div className="skill-category" data-aos="fade-up">
            <h3 className="skill-category-title">{category}</h3>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.percentage}%</span>
                        </div>
                        <div className="skill-bar-container">
                            <div
                                className="skill-bar"
                                style={{ width: `${skill.percentage}%` }}
                            >
                                <div className="skill-bar-progress"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-title">
                    <h2>Hard Skills</h2>
                    <p>Minhas competências técnicas e profissionais</p>
                </div>

                <div className="skills-container">
                    <div className="row">
                        {skillsByCategory.map((category, index) => (
                            <div key={index} className="col-lg-6">
                                <SkillCard
                                    category={category.category}
                                    skills={category.skills}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;