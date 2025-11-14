import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsByCategory = [
        {
            category: 'Qualidade de Software & Testes',
            skills: [
                { name: 'Testes Manuais', percentage: 100 },
                { name: 'Testes Automatizados', percentage: 70 },
                { name: 'Testes de Performance', percentage: 70 },
                { name: 'Testes de API', percentage: 70 },
                { name: 'Playwright', percentage: 80 },
                { name: 'Cypress', percentage: 80 },
                { name: 'K6 | Artillery', percentage: 70 },
                { name: 'Testes Mobile', percentage: 50 }
            ]
        },
        {
            category: 'Desenvolvimento Front-end',
            skills: [
                { name: 'HTML5', percentage: 100 },
                { name: 'CSS3', percentage: 100 },
                { name: 'JavaScript', percentage: 85 },
                { name: 'React.js', percentage: 80 },
                { name: 'TypeScript', percentage: 75 },
                { name: 'Bootstrap', percentage: 90 },
                { name: 'Responsive Design', percentage: 95 }
            ]
        },
        {
            category: 'Desenvolvimento Back-end & Automação',
            skills: [
                { name: 'Node.js', percentage: 70 },
                { name: 'PHP | Laravel', percentage: 50 },
                { name: 'SQL / Banco de Dados', percentage: 50 },
                { name: 'APIs REST', percentage: 60 },
                { name: 'RPA (Robotic Process Automation)', percentage: 80 },
                { name: 'Git | Versionamento', percentage: 80 }
            ]
        },
        {
            category: 'Metodologias & Ferramentas QA',
            skills: [
                { name: 'Metodologias Ágeis', percentage: 100 },
                { name: 'Test Case Design', percentage: 100 },
                { name: 'Test Management', percentage: 90 },
                { name: 'JIRA | ClickUp', percentage: 80 },
                { name: 'Bug Tracking', percentage: 90 },
                { name: 'CI/CD | Pipelines | Jenkins', percentage: 80 },

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
                    <p>Competências técnicas em Qualidade de Software e Desenvolvimento</p>
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