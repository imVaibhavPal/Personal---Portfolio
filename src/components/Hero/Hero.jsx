import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

// 3D Animated Sphere
function AnimatedSphere() {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
            <Sphere args={[1.8, 100, 200]} scale={1}>
                <MeshDistortMaterial
                    color="#6366f1"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.1}
                    metalness={0.8}
                    wireframe={false}
                />
            </Sphere>
        </Float>
    );
}

// Orbiting Ring
function OrbitRing() {
    const meshRef = useRef();
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
        }
    });
    return (
        <mesh ref={meshRef}>
            <torusGeometry args={[2.5, 0.03, 16, 200]} />
            <meshStandardMaterial color="#06b6d4" metalness={1} roughness={0} />
        </mesh>
    );
}

function OrbitRing2() {
    const meshRef = useRef();
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = -state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.z = state.clock.elapsedTime * 0.4;
        }
    });
    return (
        <mesh ref={meshRef}>
            <torusGeometry args={[3.2, 0.02, 16, 200]} />
            <meshStandardMaterial color="#ec4899" metalness={1} roughness={0} opacity={0.6} transparent />
        </mesh>
    );
}

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.7, ease: 'easeOut' },
    }),
};

const Hero = () => {
    return (
        <section id="hero" className="hero">
            {/* 3D Canvas */}
            <div className="hero__canvas">
                <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
                    <ambientLight intensity={0.3} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} color="#6366f1" />
                    <pointLight position={[-10, -10, -5]} intensity={1} color="#06b6d4" />
                    <pointLight position={[5, 5, 5]} intensity={0.8} color="#ec4899" />
                    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                    <AnimatedSphere />
                    <OrbitRing />
                    <OrbitRing2 />
                </Canvas>
            </div>

            {/* Content */}
            <div className="hero__content">
                <motion.div
                    className="hero__badge"
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <span className="hero__badge-dot" />
                    Available for Opportunities
                </motion.div>

                <motion.div
                    className="hero__greeting"
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <span className="hero__greeting-text">Hi, I'm</span>
                </motion.div>

                <motion.h1
                    className="hero__name"
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    {personalInfo.name}
                </motion.h1>

                <motion.div
                    className="hero__title-wrapper"
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <span className="hero__title gradient-text">{personalInfo.title}</span>
                    <br />
                    <span className="hero__subtitle gradient-text-pink">{personalInfo.subtitle}</span>
                </motion.div>

                <motion.p
                    className="hero__bio"
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    {personalInfo.bio}
                </motion.p>

                <motion.div
                    className="hero__actions"
                    custom={5}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <Link to="projects" smooth={true} offset={-80} duration={600}>
                        <button className="btn-primary">
                            <span>View My Work</span>
                        </button>
                    </Link>
                    <Link to="contact" smooth={true} offset={-80} duration={600}>
                        <button className="btn-outline">Contact Me</button>
                    </Link>
                </motion.div>

                <motion.div
                    className="hero__socials"
                    custom={6}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hero__social-link">
                        <FiGithub size={22} />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hero__social-link">
                        <FiLinkedin size={22} />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="hero__social-link">
                        <FiMail size={22} />
                    </a>
                    <div className="hero__social-line" />
                </motion.div>

                <motion.div
                    className="hero__stats"
                    custom={7}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <div className="hero__stat">
                        <span className="hero__stat-value gradient-text">5+</span>
                        <span className="hero__stat-label">REST APIs Built</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-value gradient-text">100K+</span>
                        <span className="hero__stat-label">Records Processed</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-value gradient-text">7.47</span>
                        <span className="hero__stat-label">CGPA at VIT</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <Link to="about" smooth={true} offset={-80} duration={600} className="hero__scroll">
                <span>Scroll Down</span>
                <FiArrowDown className="hero__scroll-icon" />
            </Link>
        </section>
    );
};

export default Hero;
