import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  };

  const navLinks = [
    { name: t.nav.home, href: '/#home' },
    { name: t.nav.about, href: '/#about' },
    { name: t.nav.skills, href: '/#skills' },
    { name: t.nav.experience, href: '/#experience' },
    { name: t.nav.certificates, href: '/certificados' },
    { name: t.nav.contact, href: '/#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo text-gradient" onClick={() => window.scrollTo(0, 0)}>
          SG.
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Language Switcher Badge */}
          <button
            onClick={toggleLang}
            title={lang === 'ES' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--accent-glow)',
              borderRadius: '20px',
              padding: '6px 14px',
              color: 'white',
              fontSize: '0.82rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-color)';
              e.currentTarget.style.boxShadow = '0 0 15px var(--accent-glow)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-glow)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Globe size={15} className="accent-text" />
            <span style={{ color: lang === 'ES' ? 'var(--accent-color)' : 'var(--text-secondary)' }}>ES</span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ color: lang === 'EN' ? 'var(--accent-color)' : 'var(--text-secondary)' }}>EN</span>
          </button>

          {/* Mobile Toggle */}
          <button
            className="nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="nav-mobile-menu animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="nav-mobile-link"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
