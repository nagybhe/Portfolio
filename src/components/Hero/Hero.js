import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Hero.css';

const Hero = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['O sucesso não é o quanto você ganha, mas o quanto você melhora. — Unknown'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="hero" className="hero-section d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>André Nagybhe Hage Ramos</h1>
                <p><span className="typed" ref={typedRef}></span></p>
            </div>
        </section>
    );
};

export default Hero;