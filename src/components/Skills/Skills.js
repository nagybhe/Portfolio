import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsLeft = [
        { name: 'HTML5', percentage: 100 },
        { name: 'CSS3', percentage: 100 },
        { name: 'FRAMEWORK BOOTSTRAP', percentage: 100 },
        { name: 'GITHUB | GITLAB', percentage: 90 },
        { name: 'RPA(Robotic Process Automation)', percentage: 80 },
        { name: 'JavaScript', percentage: 70 },
        { name: 'REACT NATIVE', percentage: 60 },
        { name: 'GÊRENCIA DE PROJETOS', percentage: 60 },
        { name: 'PLATAFORMAS DE SUPORTE E CRMS', percentage: 90 },
        { name: 'SISTEMAS DE TICKETS', percentage: 90 }
    ];

    const skillsRight = [
        { name: 'ADOBE PHOTOSHOP', percentage: 100 },
        { name: 'ADOBE ILLUSTRATOR', percentage: 100 },
        { name: 'FIGMA', percentage: 100 },
        { name: 'METODOLOGIAS ÁGEIS', percentage: 100 },
        { name: 'NODE JS', percentage: 70 },
        { name: 'PHP', percentage: 60 },
        { name: 'BANCO DE DADOS', percentage: 60 },
        { name: 'SUPORTE POR CANAL ESPECÍFICO', percentage: 90 },
        { name: 'RESOLUÇÃO DE PROBLEMAS TÉCNICOS', percentage: 100 },
        { name: 'ANÁLISE DE DADOS E RELATÓRIOS', percentage: 100 },
        { name: 'COMPREENSÃO APROFUNDADA DO FUNCIONAMENTO DE UM PRODUTO(s) OU SERVIÇO(s)', percentage: 90 }
    ];

    const SkillProgress = ({ skill }) => (
        <div className="progress">
      <span className="skill text-white">
        {skill.name} <i className="val">{skill.percentage}%</i>
      </span>
            <div className="progress-bar-wrap">
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.percentage}%` }}
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    );

    return (
        <section id="skills" className="skills section-bg bg-dark text-white">
            <div className="container">
                <div className="section-title">
                    <h2 className="text-white">Hard Skills</h2>
                </div>

                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        {skillsLeft.map((skill, index) => (
                            <SkillProgress key={index} skill={skill} />
                        ))}
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        {skillsRight.map((skill, index) => (
                            <SkillProgress key={index} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;