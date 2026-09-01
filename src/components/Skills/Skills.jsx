import React from 'react';
import { skillCategories, LEVELS } from '../../data/skills';
import './Skills.css';

const SkillCard = ({ category, icon, skills }) => (
    <div className="skill-card" data-aos="fade-up">
        <header className="skill-card-header">
            <span className="skill-card-icon" aria-hidden="true">
                <i className={icon}></i>
            </span>
            <h3 className="skill-card-title">{category}</h3>
            <span className="skill-card-count">{skills.length}</span>
        </header>

        <div className="skill-groups">
            {LEVELS.map((level) => {
                const doNivel = skills.filter((skill) => skill.level === level.id);
                if (doNivel.length === 0) return null;

                return (
                    <div key={level.id} className="skill-group">
                        <p className={`skill-group-label level-${level.id}`}>
                            <i className={level.icon} aria-hidden="true"></i>
                            {level.label}
                        </p>
                        <ul className="skill-chips">
                            {doNivel.map((skill) => (
                                <li
                                    key={skill.name}
                                    className={`skill-chip level-${level.id}`}
                                >
                                    <i className={skill.icon} aria-hidden="true"></i>
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    </div>
);

const Skills = () => (
    <section id="skills" className="skills">
        <div className="container">
            <div className="section-title">
                <h2>Hard Skills</h2>
                <p>
                    Competências técnicas em Qualidade de Software, Automação de Testes
                    e Engenharia de Testes
                </p>
            </div>

            {/* Legenda: explica o que cada nível significa, no lugar do número. */}
            <ul className="skill-legend" data-aos="fade-up">
                {LEVELS.map((level) => (
                    <li key={level.id} className={`skill-legend-item level-${level.id}`}>
                        <i className={level.icon} aria-hidden="true"></i>
                        <span className="skill-legend-label">{level.label}</span>
                        <span className="skill-legend-description">
                            {level.description}
                        </span>
                    </li>
                ))}
            </ul>

            <div className="skills-grid">
                {skillCategories.map((category) => (
                    <SkillCard
                        key={category.id}
                        category={category.category}
                        icon={category.icon}
                        skills={category.skills}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
