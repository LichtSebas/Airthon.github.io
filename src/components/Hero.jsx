import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ChevronDown, Download, Award } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(39, 201, 63, 0.1)',
            border: '1px solid rgba(39, 201, 63, 0.3)',
            padding: '8px 20px',
            borderRadius: '30px',
            marginBottom: '25px',
            backdropFilter: 'blur(10px)'
          }}
        >
          <span style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#27C93F',
            boxShadow: '0 0 12px #27C93F',
            display: 'inline-block'
          }} />
          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#27C93F' }}>
            {t.hero.availability}
          </span>
        </motion.div>

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
          {t.hero.subtitlePrefix}<strong>{t.hero.softwareEng}</strong>{t.hero.and}<strong>{t.hero.fullstack}</strong>{t.hero.subtitleSuffix}
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
          <a href="https://www.linkedin.com/in/sebastian-airthon-gonzales-aroni-13ba86344/" target="_blank" rel="noreferrer" className="social-icon">
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
          style={{ display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
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
            {t.hero.downloadCv}
          </a>

          <Link
            to="/certificados"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--text-color)',
              border: '1px solid var(--accent-glow)',
              padding: '14px 32px',
              borderRadius: '14px',
              fontSize: '1rem',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'var(--transition)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--accent-color)';
              e.currentTarget.style.color = 'var(--accent-color)';
              e.currentTarget.style.boxShadow = '0 10px 30px var(--accent-glow)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'var(--accent-glow)';
              e.currentTarget.style.color = 'var(--text-color)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Award size={20} className="accent-text" />
            {t.hero.viewCertificates}
          </Link>
        </motion.div>

        <div className="scroll-indicator">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
