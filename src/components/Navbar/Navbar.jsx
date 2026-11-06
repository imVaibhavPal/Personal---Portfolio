import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiGithub } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Education', to: 'education' },
    { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <div className="navbar__logo">
                    <span className="navbar__logo-text">VKP</span>
                    <div className="navbar__logo-dot" />
                </div>

                <ul className="navbar__links">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={600}
                                activeClass="active"
                                className="navbar__link"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="navbar__actions">
                    <a
                        href="https://github.com/imVaibhavPal"
                        target="_blank"
                        rel="noreferrer"
                        className="navbar__github"
                    >
                        <FiGithub size={20} />
                    </a>
                    <a
                        href="/vaibhav_resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary navbar__resume-btn"
                    >
                        <span>Resume</span>
                    </a>
                </div>

                <button
                    className="navbar__hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={600}
                        className="navbar__mobile-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
                <a
                    href="https://github.com/imVaibhavPal"
                    target="_blank"
                    rel="noreferrer"
                    className="navbar__mobile-link"
                >
                    GitHub
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
