import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        background: 'var(--secondary-bg)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '60px',
        paddingBottom: '40px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '30px', marginBottom: '40px' }}>
          {/* Logo & Tagline */}
          <div>
            <Link to="/" onClick={scrollToTop} className="logo text-gradient" style={{ fontSize: '1.8rem', fontWeight: '900', textDecoration: 'none' }}>
              SG.
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px', maxWidth: '350px' }}>
              Sebastian Gonzales — Software Engineer & Fullstack Developer.
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://github.com/LichtSebas" target="_blank" rel="noreferrer" className="social-icon">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sebastian-airthon-gonzales-aroni-13ba86344/" target="_blank" rel="noreferrer" className="social-icon">
              <FaLinkedin size={20} />
            </a>
            <a href="https://wa.me/51924461067" target="_blank" rel="noreferrer" className="social-icon">
              <FaWhatsapp size={20} />
            </a>
            <a href="mailto:sebastiangairthon@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>
          </div>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            title={lang === 'ES' ? 'Volver arriba' : 'Scroll to top'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'var(--accent-glow)',
              border: '1px solid var(--accent-color)',
              color: 'var(--accent-color)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ArrowUp size={22} />
          </button>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '25px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '15px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Sebastian Gonzales. {lang === 'ES' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27C93F', display: 'inline-block' }} />
            <span style={{ color: '#27C93F', fontWeight: '600' }}>
              {lang === 'ES' ? 'Disponible para Contratación & Freelance' : 'Available for Hire & Freelance'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
