import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../../data/portfolioData';
import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="section-padding experience">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="experience__label">— Work History</p>
                    <h2 className="section-title">
                        My <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-subtitle">
                        Real-world impact through backend engineering, data pipelines, and dashboard development.
                    </p>

                    <div className="experience__timeline">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                className="exp-card glass-card"
                                initial={{ opacity: 0, x: -40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                            >
                                {/* Timeline dot */}
                                <div className="exp-card__dot" style={{ background: exp.color }} />
                                <div className="exp-card__line" />

                                {/* Header */}
                                <div className="exp-card__header">
                                    <div className="exp-card__icon-wrap" style={{ background: `${exp.color}22` }}>
                                        <span className="exp-card__icon">{exp.icon}</span>
                                    </div>
                                    <div className="exp-card__meta">
                                        <h3 className="exp-card__role">{exp.role}</h3>
                                        <p className="exp-card__company">
                                            <FiBriefcase size={14} style={{ color: exp.color }} /> {exp.company}{' '}
                                            <span className="exp-card__type">({exp.type})</span>
                                        </p>
                                        <p className="exp-card__period">
                                            <FiCalendar size={13} /> {exp.period}
                                        </p>
                                    </div>
                                    <div className="exp-card__badge" style={{ borderColor: `${exp.color}44`, color: exp.color }}>
                                        Current
                                    </div>
                                </div>

                                {/* Highlights */}
                                <ul className="exp-card__highlights">
                                    {exp.highlights.map((h, i) => (
                                        <li key={i} className="exp-card__highlight">
                                            <FiCheckCircle className="exp-card__check" style={{ color: exp.color }} />
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech stack */}
                                <div className="exp-card__techs">
                                    {exp.techs.map((t) => (
                                        <span key={t} className="tag">{t}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}

                        {/* Seeking role card */}
                        <motion.div
                            className="exp-card exp-card--seeking glass-card"
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="exp-card__dot exp-card__dot--seeking" />
                            <div className="exp-seeking">
                                <span className="exp-seeking__icon">🚀</span>
                                <div>
                                    <h4>Open to Internships & Full-time Roles</h4>
                                    <p>Actively seeking Python Backend / AI-ML Engineering positions.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
