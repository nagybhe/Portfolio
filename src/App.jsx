import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';
import { Analytics } from "@vercel/analytics/react";

// Import dos componentes
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import ContactModal from './components/ContactModal/ContactModal';

function App() {
    const [showContactModal, setShowContactModal] = useState(false);

    useEffect(() => {
        // Respeita quem pediu menos animação no sistema operacional.
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        AOS.init({
            duration: prefersReducedMotion ? 0 : 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            disable: prefersReducedMotion
        });
    }, []);

    return (
        <div className="App">
            <Analytics />
            <ParticlesBackground />
            <Header onContactClick={() => setShowContactModal(true)} />
            <main id="main">
                <Hero />
                <About />
                <Skills />
                <Resume />
                <Portfolio />
            </main>
            <ContactModal
                show={showContactModal}
                handleClose={() => setShowContactModal(false)}
            />
        </div>
    );
}

export default App;