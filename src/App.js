import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';

// Import dos componentes
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import ContactModal from './components/ContactModal/ContactModal'; // ← APENAS O MODAL

function App() {
    const [showContactModal, setShowContactModal] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }, []);

    return (
        <div className="App">
            <Header onContactClick={() => setShowContactModal(true)} />

            <main id="main">
                <Hero />
                <About />
                <Skills />
                <Resume />
                <Portfolio />
                {/* REMOVIDO: <ContactUs /> */}
            </main>

            <ContactModal
                show={showContactModal}
                handleClose={() => setShowContactModal(false)}
            />
        </div>
    );
}

export default App;