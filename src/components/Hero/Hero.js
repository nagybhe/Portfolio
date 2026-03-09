import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import './Hero.css';

const Hero = () => {
    const typedRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Animação de entrada
        setIsVisible(true);

        const typed = new Typed(typedRef.current, {
            strings: [
                'QA Automation Engineer',
                'Test Automation Specialist',
                'Software Quality Engineer',
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

    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero-section">
            {/* Background Overlay */}
            <div className="hero-background">
                <div className="hero-gradient"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="hero-particles">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 20}s`,
                        animationDuration: `${15 + Math.random() * 10}s`
                    }}></div>
                ))}
            </div>

            <div className="container">
                <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
                    {/* Profile Image */}
                    <div className="hero-profile" data-aos="zoom-in" data-aos-delay="200">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/img/thotos/photo-rounded-circle.png`}
                            alt="André Nagybhe"
                            className="hero-img"
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

                        {/* CTA Buttons */}

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

                {/* Scroll Indicator */}
            </div>
        </section>
    );
};

export default Hero;