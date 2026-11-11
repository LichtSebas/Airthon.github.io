import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Calendar, ExternalLink, X, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import certificatesData from '../data/certificates.json';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const { lang } = useLanguage();
  const isEs = lang === 'ES';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section" style={{ paddingTop: '150px', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        {/* Back Button */}
        <Link to="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
          <ArrowLeft size={20} /> {isEs ? 'Volver al Inicio' : 'Back to Home'}
        </Link>

        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '60px' }}>
          <h2 className="section-title">
            {isEs ? 'Mis ' : 'My '}
            <span className="accent-text">{isEs ? 'Certificados' : 'Certificates'}</span>
          </h2>
          <p className="section-subtitle">
            {isEs
              ? 'Acreditaciones y certificaciones profesionales que respaldan mi formación y experiencia técnica.'
              : 'Professional accreditations and certifications backing my academic background and technical expertise.'}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid-2" style={{ gap: '30px' }}>
          {certificatesData.map((cert, index) => {
            const title = isEs ? cert.title : (cert.titleEn || cert.title);
            const date = isEs ? cert.date : (cert.dateEn || cert.date);
            const description = isEs ? cert.description : (cert.descriptionEn || cert.description);

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card"
                style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                {/* Image Preview */}
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <img
                    src={cert.image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'rgba(10, 10, 10, 0.85)',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <Award size={14} className="accent-text" />
                    {cert.issuer}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '10px', lineHeight: '1.3' }}>{title}</h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                    <Calendar size={14} />
                    <span>{date}</span>
                  </div>

                  {/* Skill Chips Preview */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="tech-chip">{skill}</span>
                    ))}
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '25px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: '1.6', flexGrow: 1 }}>
                    {description}
                  </p>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="btn-secondary-sm"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    <FileText size={16} /> {isEs ? 'Ver Detalles' : 'View Details'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(6, 6, 6, 0.9)',
              backdropFilter: 'blur(12px)',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card"
              style={{
                maxWidth: '850px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '0',
                position: 'relative',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  transition: 'var(--transition)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-color)';
                  e.currentTarget.style.color = 'var(--accent-color)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'white';
                }}
              >
                <X size={20} />
              </button>

              {/* Modal Body */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0' }}>
                {/* Certificate Big Image */}
                <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', background: '#000', position: 'relative' }}>
                  <img
                    src={selectedCert.image}
                    alt={isEs ? selectedCert.title : (selectedCert.titleEn || selectedCert.title)}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>

                {/* Details Information */}
                <div style={{ padding: '2.5rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                    <span style={{
                      background: 'var(--accent-glow)',
                      color: 'var(--accent-color)',
                      padding: '6px 16px',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <Award size={14} />
                      {selectedCert.issuer}
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={14} />
                      {isEs ? selectedCert.date : (selectedCert.dateEn || selectedCert.date)}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
                    {isEs ? selectedCert.title : (selectedCert.titleEn || selectedCert.title)}
                  </h2>
                  
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                    {isEs ? selectedCert.description : (selectedCert.descriptionEn || selectedCert.description)}
                  </p>

                  {/* Skills tags */}
                  <div style={{ marginBottom: '35px' }}>
                    <h4 style={{ fontSize: '0.95rem', color: 'white', fontWeight: '700', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {isEs ? 'Habilidades validadas:' : 'Validated skills:'}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {selectedCert.skills.map((skill) => (
                        <span key={skill} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '5px 12px', borderRadius: '8px', fontSize: '0.85rem', color: 'white' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verify Link */}
                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary-sm"
                    >
                      {isEs ? 'Verificar Credencial' : 'Verify Credential'} <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
