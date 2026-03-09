import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsByCategory = [
{
    category: 'Automação de Testes',
    skills: [
        { name: 'Playwright', percentage: 80 },
        { name: 'Cypress', percentage: 80 },
        { name: 'Robot Framework', percentage: 70 },
        { name: 'Testes Automatizados', percentage: 70 }
    ]
},
{
    category: 'Testes de Software',
    skills: [
        { name: 'Testes Manuais', percentage: 100 },
        { name: 'Testes de API', percentage: 70 },
        { name: 'Testes de Performance', percentage: 70 },
        { name: 'Testes Mobile', percentage: 50 }
    ]
},
{
    category: 'Ferramentas & QAOps',
    skills: [
        { name: 'Git', percentage: 80 },
        { name: 'CI/CD', percentage: 80 },
        { name: 'Jenkins', percentage: 70 },
        { name: 'K6', percentage: 70 },
        { name: 'Artillery', percentage: 70 }
    ]
},
{
    category: 'Fundamentos Técnicos',
    skills: [
        { name: 'JavaScript', percentage: 85 },
        { name: 'Node.js', percentage: 70 },
        { name: 'APIs REST', percentage: 60 },
        { name: 'SQL / Banco de Dados', percentage: 50 }
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
                    <p>Competências técnicas em Qualidade de Software, Automação de Testes e Engenharia de Testes</p>
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