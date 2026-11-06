import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { FiMapPin, FiMail, FiGithub, FiCode, FiCpu, FiDatabase } from 'react-icons/fi';
import './About.css';

const stats = [
    { icon: <FiCode />, label: 'Python Backend', value: 'Expert', color: '#6366f1' },
    { icon: <FiCpu />, label: 'AI / ML', value: 'Proficient', color: '#8b5cf6' },
    { icon: <FiDatabase />, label: 'Databases', value: 'Advanced', color: '#06b6d4' },
];

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section id="about" className="section-padding about">
            <div className="container">
                <motion.div
                    ref={ref}
                    className="about__inner"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Left: Text */}
                    <div className="about__left">
                        <motion.p className="about__label" variants={itemVariants}>
                            — Get to know me
                        </motion.p>
                        <motion.h2 className="section-title" variants={itemVariants}>
                            About <span className="gradient-text">Me</span>
                        </motion.h2>
                        <motion.p className="about__bio" variants={itemVariants}>
                            I'm a <strong>Python Backend Developer</strong> and B.Tech CS (AI & ML) undergraduate at{' '}
                            <strong>Vellore Institute of Technology</strong>, with hands-on industry experience building
                            production-grade backend services and analytics platforms.
                        </motion.p>
                        <motion.p className="about__bio" variants={itemVariants}>
                            Currently interning at <strong>Pratinik Infotech</strong>, I design RESTful APIs, optimize
                            large-scale data pipelines with <strong>Pandas</strong>, and deliver interactive dashboards
                            using Streamlit and Plotly. I'm passionate about building systems that are scalable,
                            clean, and impactful.
                        </motion.p>
                        <motion.p className="about__bio" variants={itemVariants}>
                            Beyond backend work, I actively explore <strong>Machine Learning</strong>, computer vision
                            with YOLOv8, and prompt engineering with OpenAI APIs. I love bridging the gap between
                            data science and engineering.
                        </motion.p>

                        <motion.div className="about__meta" variants={itemVariants}>
                            <div className="about__meta-item">
                                <FiMapPin className="about__meta-icon" />
                                <span>{personalInfo.location}</span>
                            </div>
                            <div className="about__meta-item">
                                <FiMail className="about__meta-icon" />
                                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                            </div>
                            <div className="about__meta-item">
                                <FiGithub className="about__meta-icon" />
                                <a href={personalInfo.github} target="_blank" rel="noreferrer">
                                    github.com/imVaibhavPal
                                </a>
                            </div>
                        </motion.div>

                        <motion.div className="about__actions" variants={itemVariants}>
                            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-primary">
                                <FiGithub />
                                <span>View GitHub</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Cards */}
                    <div className="about__right">
                        {/* Avatar Card */}
                        <motion.div className="about__avatar-card glass-card" variants={itemVariants}>
                            <div className="about__avatar">
                                <div className="about__avatar-inner">
                                    <span className="about__avatar-initials">VKP</span>
                                </div>
                                <div className="about__avatar-ring about__avatar-ring--1" />
                                <div className="about__avatar-ring about__avatar-ring--2" />
                            </div>
                            <div className="about__avatar-info">
                                <h3>{personalInfo.name}</h3>
                                <p>{personalInfo.title}</p>
                                <div className="about__avatar-tags">
                                    {['Python', 'Flask', 'FastAPI', 'ML/AI'].map((t) => (
                                        <span key={t} className="tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Stat Cards */}
                        <div className="about__stat-cards">
                            {stats.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    className="about__stat-card glass-card"
                                    variants={itemVariants}
                                    style={{ borderTop: `3px solid ${s.color}` }}
                                >
                                    <div className="about__stat-icon" style={{ color: s.color }}>
                                        {s.icon}
                                    </div>
                                    <div>
                                        <div className="about__stat-value">{s.value}</div>
                                        <div className="about__stat-label">{s.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quote */}
                        <motion.div className="about__quote glass-card" variants={itemVariants}>
                            <span className="about__quote-mark">"</span>
                            <p>Building systems that are fast, clean, and quietly brilliant.</p>
                            <span className="about__quote-mark about__quote-mark--right">"</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
