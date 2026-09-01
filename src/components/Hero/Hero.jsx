import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Hero.css';

const Hero = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                'QA Automation Engineer',
                'Test Automation Specialist',
                'Software Quality Engineer'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="hero" className="hero-section">
            <div className="container">
                <div className="hero-content">
                    {/* Profile Image */}
                    <div className="hero-profile" data-aos="zoom-in" data-aos-delay="200">
                        <img
                            src="/assets/img/thotos/photo-rounded-circle.webp"
                            alt="André Nagybhe"
                            className="hero-img"
                            width="220"
                            height="220"
                            fetchPriority="high"
                            decoding="async"
                        />
                        <div className="profile-glow"></div>
                    </div>

                    {/* Main Content */}
                    <div className="hero-text" data-aos="fade-up" data-aos-delay="400">
                        <div className="hero-badge">
                            <span>👋 Olá, eu sou</span>
                        </div>

                        <h1 className="hero-title">
                            André <span className="highlight">Nagybhe</span>
                        </h1>

                        <div className="hero-subtitle">
                            <span className="typed" ref={typedRef}></span>
                        </div>

                        {/* Quick Stats */}
                        <div className="hero-stats" data-aos="fade-up" data-aos-delay="1000">
                            <div className="stat-item">
                                <span className="stat-number">4+</span>
                                <span className="stat-label">Anos de Experiência</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projetos Concluídos</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">30+</span>
                                <span className="stat-label">Certificações</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
