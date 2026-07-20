import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronDown, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-tag"
        >
          Bienvenido a mi mundo digital
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-title"
        >
          Sebastian <span className="text-gradient">Gonzales</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hero-subtitle"
        >
          Estudiante de <strong>Ingeniería de Software</strong> & Programador <strong>Fullstack</strong> especializado en soluciones eficientes y creativas.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="social-links"
        >
          <a href="https://github.com/LichtSebas" target="_blank" rel="noreferrer" className="social-icon">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sebastian-airthon-gonzales-aroni-13ba86344/" className="social-icon">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:sebastiangairthon@gmail.com" className="social-icon">
            <Mail size={24} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <a
            href="/CV_Sebastian_Gonzales.pdf"
            download="CV_Sebastian_Gonzales.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--accent-color)',
              color: 'black',
              padding: '14px 32px',
              borderRadius: '14px',
              fontSize: '1rem',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'var(--transition)',
              boxShadow: '0 4px 20px var(--accent-glow)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 30px var(--accent-glow)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 20px var(--accent-glow)';
            }}
          >
            <Download size={20} />
            Descargar CV
          </a>
        </motion.div>

        <div className="scroll-indicator">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
