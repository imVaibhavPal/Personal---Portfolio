import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="projects" className="section-padding projects">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="projects__label">— What I've Built</p>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Real-world projects spanning computer vision, data engineering, and backend systems.
                    </p>

                    <div className="projects__grid">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                className="project-card"
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                            >
                                {/* Top gradient bar */}
                                <div className="project-card__bar" style={{ background: project.gradient }} />

                                {/* Card body */}
                                <div className="project-card__body glass-card">
                                    {/* Icon & title */}
                                    <div className="project-card__header">
                                        <div
                                            className="project-card__icon"
                                            style={{ background: `${project.color}22`, border: `1px solid ${project.color}44` }}
                                        >
                                            {project.icon}
                                        </div>
                                        <div className="project-card__links">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-card__link"
                                                title="View on GitHub"
                                            >
                                                <FiGithub size={18} />
                                            </a>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-card__link"
                                                title="Live Demo"
                                            >
                                                <FiExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="project-card__title">{project.title}</h3>
                                    <p className="project-card__desc">{project.description}</p>

                                    {/* Highlights */}
                                    <div className="project-card__highlights">
                                        {project.highlights.map((h) => (
                                            <div key={h} className="project-card__highlight">
                                                <FiStar size={12} style={{ color: project.color }} />
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech stack */}
                                    <div className="project-card__techs">
                                        {project.techs.map((t) => (
                                            <span key={t} className="tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* GitHub CTA */}
                    <motion.div
                        className="projects__cta"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <p>More projects and contributions on GitHub</p>
                        <a
                            href="https://github.com/imVaibhavPal"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-outline"
                        >
                            <FiGithub /> View All Projects
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
