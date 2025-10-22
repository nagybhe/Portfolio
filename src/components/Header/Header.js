import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onContactClick }) => {
    const [activeLink, setActiveLink] = useState('hero');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200);
        };

        const handleScroll = () => {
            const sections = ['hero', 'about', 'resume', 'portfolio', 'skills'];
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const offset = element.offsetTop - 100;
                    const height = element.offsetHeight;
                    const id = element.getAttribute('id');

                    if (scrollY >= offset && scrollY < offset + height) {
                        setActiveLink(id);
                    }
                }
            });
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (sectionId, e) => {
        if (sectionId === 'contact') {
            e.preventDefault();
            onContactClick();
            return;
        }

        e.preventDefault();
        setActiveLink(sectionId);

        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 70;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    const navItems = [
        { id: 'hero', icon: 'bx bx-home', label: 'Home' },
        { id: 'about', icon: 'bx bx-user', label: 'Sobre' },
        { id: 'skills', icon: 'bx bx-code-alt', label: 'Skills' },
        { id: 'resume', icon: 'bx bx-file-blank', label: 'Qualificações' },
        { id: 'portfolio', icon: 'bx bx-book-content', label: 'Projetos' },
        { id: 'contact', icon: 'bx bx-envelope', label: 'Contato' }
    ];

    return (
        <header id="header" className="header">
            <div className="d-flex flex-column">
                {/* Profile Section */}
                <div className="profile">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/img/thotos/photo-rounded-circle.png`}
                        alt="André Nagybhe"
                        className="img-fluid rounded-circle profile-img"
                    />
                    <h1 className="text-light">
                        <a href="#hero">André Nagybhe</a>
                    </h1>
                    <div className="social-links mt-3">
                        <a href="https://t.me/NagybheHage" className="telegram" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-telegram"></i>
                        </a>
                        <a href="https://www.instagram.com/nagybhe_/" className="instagram" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-instagram"></i>
                        </a>
                        <a href="https://github.com/nagybhe" className="github" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/andr%C3%A9-nagybhe-153b171b2/" className="linkedin" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick(item.id, e)}
                                >
                                    <i className={item.icon}></i>
                                    <span>{item.label}</span>
                                    {activeLink === item.id && <div className="active-indicator"></div>}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;