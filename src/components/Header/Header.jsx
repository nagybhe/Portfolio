import React, { useState, useEffect } from 'react';
import './Header.css';

const SECTIONS = ['hero', 'about', 'skills', 'resume', 'portfolio'];

/*
 * Posição absoluta da seção no documento.
 * element.offsetTop é relativo ao offsetParent — e #main é position:relative
 * (fica acima da camada de partículas), o que zerava a conta.
 */
const documentTopOf = (element) =>
    element.getBoundingClientRect().top + window.scrollY;

const NAV_ITEMS = [
    { id: 'hero', icon: 'bx bx-home', label: 'Home' },
    { id: 'about', icon: 'bx bx-user', label: 'Sobre' },
    { id: 'skills', icon: 'bx bx-code-alt', label: 'Skills' },
    { id: 'resume', icon: 'bx bx-file-blank', label: 'Qualificações' },
    { id: 'portfolio', icon: 'bx bx-book-content', label: 'Projetos' },
    { id: 'contact', icon: 'bx bx-envelope', label: 'Contato' }
];

const Header = ({ onContactClick }) => {
    const [activeLink, setActiveLink] = useState('hero');
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        let frame = null;

        const syncActiveSection = () => {
            frame = null;
            const scrollY = window.scrollY;

            for (const section of SECTIONS) {
                const element = document.getElementById(section);
                if (!element) continue;

                const offset = documentTopOf(element) - 100;
                if (scrollY >= offset && scrollY < offset + element.offsetHeight) {
                    setActiveLink(section);
                    return;
                }
            }
        };

        // O handler original rodava a cada evento de scroll; agora no máximo
        // uma vez por frame.
        const handleScroll = () => {
            if (frame === null) {
                frame = window.requestAnimationFrame(syncActiveSection);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        syncActiveSection();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frame !== null) window.cancelAnimationFrame(frame);
        };
    }, []);

    // Esc fecha o menu mobile.
    useEffect(() => {
        if (!isNavOpen) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setIsNavOpen(false);
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isNavOpen]);

    const handleNavClick = (sectionId, e) => {
        e.preventDefault();
        setIsNavOpen(false);

        if (sectionId === 'contact') {
            onContactClick();
            return;
        }

        setActiveLink(sectionId);

        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: documentTopOf(element) - 70,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {/*
             * O CSS já previa .mobile-nav-active e .mobile-nav-toggle, mas o
             * botão nunca existiu no JSX — abaixo de 1200px a sidebar ficava em
             * left:-300px e o site ficava sem navegação nenhuma no celular.
             */}
            <button
                type="button"
                className="mobile-nav-toggle"
                aria-label={isNavOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isNavOpen}
                aria-controls="navbar"
                onClick={() => setIsNavOpen((open) => !open)}
            >
                <i className={isNavOpen ? 'bx bx-x' : 'bx bx-menu'} aria-hidden="true"></i>
            </button>

            {isNavOpen && (
                <div
                    className="mobile-nav-backdrop"
                    onClick={() => setIsNavOpen(false)}
                    aria-hidden="true"
                ></div>
            )}

            <header id="header" className={`header${isNavOpen ? ' mobile-nav-active' : ''}`}>
                <div className="d-flex flex-column">
                    {/* Profile Section */}
                    <div className="profile">
                        <img
                            src="/assets/img/thotos/photo-rounded-circle.webp"
                            alt="André Nagybhe"
                            className="img-fluid rounded-circle profile-img"
                            width="120"
                            height="120"
                            fetchPriority="high"
                            decoding="async"
                        />
                        {/* Marca da sidebar: o <h1> da página é o do Hero. */}
                        <p className="profile-name text-light">
                            <a href="#hero" onClick={(e) => handleNavClick('hero', e)}>
                                André Nagybhe
                            </a>
                        </p>
                        <div className="social-links mt-3">
                            <a href="https://t.me/NagybheHage" className="telegram" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                <i aria-hidden="true" className="bx bxl-telegram"></i>
                            </a>
                            <a href="https://www.instagram.com/nagybhe_/" className="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i aria-hidden="true" className="bx bxl-instagram"></i>
                            </a>
                            <a href="https://github.com/nagybhe" className="github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <i aria-hidden="true" className="bx bxl-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/andr%C3%A9-nagybhe-153b171b2/" className="linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i aria-hidden="true" className="bx bxl-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav id="navbar" className="nav-menu navbar" aria-label="Navegação principal">
                        <ul>
                            {NAV_ITEMS.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                                        aria-current={activeLink === item.id ? 'page' : undefined}
                                        onClick={(e) => handleNavClick(item.id, e)}
                                    >
                                        <i className={item.icon} aria-hidden="true"></i>
                                        <span>{item.label}</span>
                                        {activeLink === item.id && <div className="active-indicator"></div>}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
