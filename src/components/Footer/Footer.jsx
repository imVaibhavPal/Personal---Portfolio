import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__glow" />
            <div className="container footer__inner">
                <div className="footer__brand">
                    <span className="footer__logo">VKP</span>
                    <p className="footer__tagline">
                        Python Backend Developer & AI/ML Engineer
                    </p>
                </div>

                <div className="footer__nav">
                    {['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
                        <Link
                            key={section}
                            to={section}
                            smooth={true}
                            offset={-80}
                            duration={600}
                            className="footer__nav-link"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                    ))}
                </div>

                <div className="footer__socials">
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="footer__social">
                        <FiGithub size={20} />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="footer__social">
                        <FiLinkedin size={20} />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="footer__social">
                        <FiMail size={20} />
                    </a>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copy">
                        © {year} Vaibhav Kumar Pal. Built with <FiHeart className="footer__heart" /> using React & Three.js
                    </p>
                    <p className="footer__location">📍 Delhi, India</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
