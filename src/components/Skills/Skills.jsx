import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import './Skills.css';

const categories = Object.keys(skills);

const SkillBar = ({ name, level, index }) => {
    return (
        <motion.div
            className="skill-bar"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
        >
            <div className="skill-bar__header">
                <span className="skill-bar__name">{name}</span>
                <span className="skill-bar__level">{level}%</span>
            </div>
            <div className="skill-bar__track">
                <motion.div
                    className="skill-bar__fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: 'easeOut' }}
                    style={{
                        background: `linear-gradient(90deg, var(--accent-purple), var(--accent-cyan))`,
                    }}
                />
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState(categories[0]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="section-padding skills">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="skills__label">— My Expertise</p>
                    <h2 className="section-title">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle">
                        A curated stack built through hands-on projects, internship work, and continuous learning.
                    </p>

                    {/* Tab Nav */}
                    <div className="skills__tabs">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`skills__tab ${activeTab === cat ? 'skills__tab--active' : ''}`}
                                onClick={() => setActiveTab(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Skills grid */}
                    <div className="skills__grid glass-card">
                        {skills[activeTab].map((skill, i) => (
                            <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
                        ))}
                    </div>

                    {/* Tech chips cloud */}
                    <div className="skills__cloud">
                        {Object.values(skills).flat().map((s) => s.name).filter((v, i, a) => a.findIndex((x) => x === v) === i).map((name) => (
                            <span key={name} className="tag">{name}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
