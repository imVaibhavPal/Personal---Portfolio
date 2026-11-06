import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/portfolioData';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import './Contact.css';

const contactLinks = [
    {
        icon: <FiMail size={22} />,
        label: 'Email',
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
        color: '#6366f1',
    },
    {
        icon: <FiGithub size={22} />,
        label: 'GitHub',
        value: 'github.com/imVaibhavPal',
        href: personalInfo.github,
        color: '#8b5cf6',
    },
    {
        icon: <FiLinkedin size={22} />,
        label: 'LinkedIn',
        value: 'vaibhav-kumar-pal',
        href: personalInfo.linkedin,
        color: '#06b6d4',
    },
    {
        icon: <FiMapPin size={22} />,
        label: 'Location',
        value: personalInfo.location,
        href: '#',
        color: '#f59e0b',
    },
];

const Contact = () => {
    const ref = useRef(null);
    const formRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const [formState, setFormState] = useState({ from_name: '', from_email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // If EmailJS keys are not configured yet, fall back to mailto
        if (!serviceId || serviceId === 'your_service_id') {
            const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${formState.from_name}\nEmail: ${formState.from_email}\n\n${formState.message}`)}`;
            window.open(mailtoLink, '_self');
            setStatus('success');
            setTimeout(() => setStatus('idle'), 4000);
            return;
        }

        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
            setStatus('success');
            setFormState({ from_name: '', from_email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="section-padding contact">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="contact__label">— Get In Touch</p>
                    <h2 className="section-title">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="section-subtitle">
                        Open to internships, full-time opportunities, and collaboration. Drop a message and I'll respond soon!
                    </p>

                    <div className="contact__grid">
                        {/* Left: info */}
                        <motion.div
                            className="contact__info"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <div className="contact__info-header">
                                <h3>Vaibhav Kumar Pal</h3>
                                <p>Python Backend Developer based in Delhi, India</p>
                                <p className="contact__availability">
                                    <span className="contact__avail-dot" /> Currently seeking internship &amp; full-time roles
                                </p>
                            </div>

                            <div className="contact__links">
                                {contactLinks.map((link, i) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                                        rel="noreferrer"
                                        className="contact__link glass-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                                    >
                                        <div className="contact__link-icon" style={{ color: link.color, background: `${link.color}15` }}>
                                            {link.icon}
                                        </div>
                                        <div>
                                            <p className="contact__link-label">{link.label}</p>
                                            <p className="contact__link-value">{link.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: form */}
                        <motion.div
                            className="contact__form-wrap"
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <form ref={formRef} className="contact__form glass-card" onSubmit={handleSubmit}>
                                <h3 className="contact__form-title">Send a Message</h3>

                                <div className="contact__form-row">
                                    <div className="contact__form-group">
                                        <label htmlFor="contact-name">Your Name</label>
                                        <input
                                            id="contact-name"
                                            name="from_name"
                                            type="text"
                                            placeholder="John Doe"
                                            value={formState.from_name}
                                            onChange={handleChange}
                                            required
                                            disabled={status === 'sending'}
                                        />
                                    </div>
                                    <div className="contact__form-group">
                                        <label htmlFor="contact-email">Your Email</label>
                                        <input
                                            id="contact-email"
                                            name="from_email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formState.from_email}
                                            onChange={handleChange}
                                            required
                                            disabled={status === 'sending'}
                                        />
                                    </div>
                                </div>

                                <div className="contact__form-group">
                                    <label htmlFor="contact-subject">Subject</label>
                                    <input
                                        id="contact-subject"
                                        name="subject"
                                        type="text"
                                        placeholder="Internship Opportunity / Let's Collaborate"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        disabled={status === 'sending'}
                                    />
                                </div>

                                <div className="contact__form-group">
                                    <label htmlFor="contact-message">Message</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={5}
                                        placeholder="Tell me about the opportunity, project idea, or anything you'd like to discuss..."
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'sending'}
                                    />
                                </div>

                                {/* Status banner */}
                                {status === 'success' && (
                                    <div className="contact__status contact__status--success">
                                        <FiCheckCircle size={18} />
                                        Message sent! I'll get back to you soon.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="contact__status contact__status--error">
                                        <FiAlertCircle size={18} />
                                        Something went wrong. Please email me directly.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className={`btn-primary contact__submit ${status === 'sending' ? 'contact__submit--loading' : ''}`}
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <span className="contact__spinner" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <FiSend />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
