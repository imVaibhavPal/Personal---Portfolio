import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education, certifications, activities } from '../../data/portfolioData';
import { FiAward, FiStar, FiExternalLink } from 'react-icons/fi';
import './Education.css';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="education" className="section-padding education">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="education__label">— Academic Background</p>
                    <h2 className="section-title">
                        Education & <span className="gradient-text">Certs</span>
                    </h2>
                    <p className="section-subtitle">
                        Academic foundations at VIT Vellore, backed by industry certifications from Google, AWS, Coursera, and Udemy.
                    </p>

                    <div className="education__grid">
                        {/* Left: Education + Activities */}
                        <div className="education__col">
                            <h3 className="education__col-title">🎓 Education</h3>
                            <div className="education__edu-list">
                                {education.map((edu, i) => (
                                    <motion.div
                                        key={edu.institution}
                                        className="edu-card glass-card"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: i * 0.15, duration: 0.6 }}
                                        style={{ borderLeft: `4px solid ${edu.color}` }}
                                    >
                                        <div className="edu-card__icon">{edu.icon}</div>
                                        <div className="edu-card__body">
                                            <h4 className="edu-card__degree">{edu.degree}</h4>
                                            <p className="edu-card__institution">{edu.institution}</p>
                                            <div className="edu-card__footer">
                                                <span className="edu-card__period">{edu.period}</span>
                                                <span className="edu-card__cgpa" style={{ color: edu.color }}>
                                                    <FiStar size={12} /> GPA: {edu.cgpa}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Activities */}
                            <h3 className="education__col-title" style={{ marginTop: '32px' }}>🏆 Activities</h3>
                            <div className="education__edu-list">
                                {activities.map((act, i) => (
                                    <motion.div
                                        key={act.title}
                                        className="edu-card glass-card"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                                        style={{ borderLeft: '4px solid #f59e0b' }}
                                    >
                                        <div className="edu-card__icon">{act.icon}</div>
                                        <div className="edu-card__body">
                                            <h4 className="edu-card__degree" style={{ fontSize: '0.95rem' }}>{act.title}</h4>
                                            <p className="edu-card__institution">{act.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Certifications */}
                        <div className="education__col">
                            <h3 className="education__col-title">🏅 Certifications</h3>
                            <div className="cert-grid">
                                {certifications.map((cert, i) => (
                                    <motion.div
                                        key={cert.name}
                                        className="cert-card glass-card"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                    >
                                        <div className="cert-card__icon">{cert.icon}</div>
                                        <div className="cert-card__body">
                                            <p className="cert-card__name">{cert.name}</p>
                                            <p className="cert-card__provider">{cert.provider}</p>
                                        </div>
                                        {cert.link ? (
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="cert-card__link-btn"
                                                title="View Certificate"
                                            >
                                                <FiExternalLink size={16} />
                                                <span>View</span>
                                            </a>
                                        ) : (
                                            <span className="cert-card__no-link" title="Link coming soon">
                                                <FiAward size={16} />
                                            </span>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
