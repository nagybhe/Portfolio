import React from 'react';
import './Header.css';

const Header = ({ onContactClick }) => { // ← ADICIONE A PROP AQUI
    return (
        <header id="header" className="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/img/thotos/photo-rounded-circle.png`}
                        alt="André Nagybhe"
                        className="img-fluid rounded-circle"
                    />
                    <h1 className="text-light"><a href="#hero">André Nagybhe</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="https://t.me/NagybheHage" className="telegram">
                            <i className="bx bxl-telegram"></i>
                        </a>
                        <a href="https://www.instagram.com/nagybhe_/" className="instagram">
                            <i className="bx bxl-instagram"></i>
                        </a>
                        <a href="https://github.com/nagybhe" className="github">
                            <i className="bx bxl-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/andr%C3%A9-nagybhe-153b171b2/" className="linkedin">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li>
                            <a href="#hero" className="nav-link scrollto active">
                                <i className="bx bx-home"></i> <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="nav-link scrollto">
                                <i className="bx bx-user"></i> <span>Sobre</span>
                            </a>
                        </li>
                        <li>
                            <a href="#resume" className="nav-link scrollto">
                                <i className="bx bx-file-blank"></i> <span>Qualificações</span>
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" className="nav-link scrollto">
                                <i className="bx bx-book-content"></i> <span>Projetos</span>
                            </a>
                        </li>
                        {/* NOVO ITEM DE CONTATO */}
                        <li>
                            <a
                                href="#contact"
                                className="nav-link scrollto"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onContactClick();
                                }}
                            >
                                <i className="bx bx-envelope"></i> <span>Contato</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;