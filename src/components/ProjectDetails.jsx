import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ExternalLink, CheckCircle2, Layers, ShieldCheck, 
  Cpu, Code2, Lock, X, Mail, Laptop, Server, KeyRound, Database, 
  GraduationCap, Rocket, ArrowRight, Sparkles, Workflow 
} from 'lucide-react';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import AudioExtractorWiki from './AudioExtractorWiki';
import { projectsList } from '../data/projectsData';
import { useLanguage } from '../context/LanguageContext';

const renderFlowIcon = (iconName) => {
  switch (iconName) {
    case 'Workflow': return <Workflow size={26} className="accent-text" />;
    case 'Laptop': return <Laptop size={26} className="accent-text" />;
    case 'Server': return <Server size={26} className="accent-text" />;
    case 'KeyRound': return <KeyRound size={26} className="accent-text" />;
    case 'Database': return <Database size={26} className="accent-text" />;
    default: return <Cpu size={26} className="accent-text" />;
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const { lang } = useLanguage();
  const [isPrivateModalOpen, setIsPrivateModalOpen] = useState(false);

  const projectItem = projectsList.find((p) => p.id === id);
  const content = projectItem ? (projectItem[lang] || projectItem.ES) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (id === 'audio-extractor') {
    return <AudioExtractorWiki />;
  }

  if (!projectItem || !content) {
    return (
      <div className="section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 className="section-title">{lang === 'ES' ? 'Proyecto no encontrado' : 'Project not found'}</h2>
        <Link to="/" className="accent-text" style={{ textDecoration: 'none', marginTop: '20px' }}>
          {lang === 'ES' ? 'Volver al inicio' : 'Back to home'}
        </Link>
      </div>
    );
  }

  const handleRepoClick = (e) => {
    if (projectItem.isPrivate) {
      e.preventDefault();
      setIsPrivateModalOpen(true);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="section"
      style={{ paddingTop: '150px' }}
    >
      <div className="container">
        <Link to="/#projects" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
          <ArrowLeft size={20} /> {lang === 'ES' ? 'Volver a Proyectos' : 'Back to Projects'}
        </Link>

        <div className="grid-2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="hero-title" style={{ fontSize: '3rem', textAlign: 'left', lineHeight: '1.2' }}>{content.title}</h1>
            <p className="hero-subtitle" style={{ textAlign: 'left', margin: '0 0 30px 0' }}>{content.description}</p>
            
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px' }}>
                {lang === 'ES' ? 'Tecnologías Utilizadas' : 'Technologies Used'}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {content.tech.map(t => (
                  <span key={t} style={{ padding: '8px 16px', background: 'var(--accent-glow)', borderRadius: '10px', color: 'var(--accent-color)', fontWeight: '600', fontSize: '0.9rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {projectItem.demoUrl && (
                <a href={projectItem.demoUrl} target="_blank" rel="noreferrer" className="social-icon" style={{ borderRadius: '12px', width: 'auto', padding: '0 25px', gap: '10px', background: 'var(--accent-color)', color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
                  {content.demoLabel || (lang === 'ES' ? 'Ver Web en Vivo' : 'View Live Website')} <ExternalLink size={18} />
                </a>
              )}
              {projectItem.docUrl && (
                <a
                  href={projectItem.isPrivate ? '#' : projectItem.docUrl}
                  target={projectItem.isPrivate ? '_self' : '_blank'}
                  rel="noreferrer"
                  onClick={handleRepoClick}
                  className="social-icon"
                  style={{ borderRadius: '12px', width: 'auto', padding: '0 25px', gap: '10px', textDecoration: 'none', cursor: 'pointer' }}
                >
                  {projectItem.isPrivate 
                    ? (lang === 'ES' ? 'Repositorio Privado' : 'Private Repository') 
                    : (lang === 'ES' ? 'Repositorio GitHub' : 'GitHub Repository')}{' '}
                  {projectItem.isPrivate ? <Lock size={18} className="accent-text" /> : <FaGithub size={18} />}
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card" style={{
              padding: projectItem.imageFit === 'contain' ? '3rem 2rem' : '10px',
              borderRadius: '30px',
              backgroundColor: projectItem.imageFit === 'contain' ? '#0d0d11' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img src={projectItem.image} alt={content.title} decoding="async" style={{
                width: '100%',
                maxHeight: '340px',
                objectFit: projectItem.imageFit || 'cover',
                objectPosition: 'center',
                borderRadius: '20px',
                display: 'block'
              }} />
            </div>
          </motion.div>
        </div>

        {/* Desafío y Resultados */}
        <div className="grid-2" style={{ marginTop: '80px', gap: '40px', alignItems: 'stretch' }}>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Code2 className="accent-text" size={26} /> {lang === 'ES' ? 'El Desafío Técnico' : 'The Technical Challenge'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '30px' }}>
              {content.fullContent}
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {content.challenges.map((c, i) => (
                <li key={i} style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: 'var(--text-secondary)' }}>
                  <span className="accent-text" style={{ marginTop: '4px' }}>→</span> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle2 className="accent-text" size={26} /> {lang === 'ES' ? 'Resultados e Impacto' : 'Results & Impact'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '30px' }}>
              {lang === 'ES'
                ? 'La implementación final superó las expectativas iniciales, logrando métricas clave de rendimiento, escalabilidad y satisfacción de usuario:'
                : 'The final implementation exceeded initial expectations, achieving key metrics in performance, scalability, and user satisfaction:'}
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {content.results.map((r, i) => (
                <li key={i} style={{ display: 'flex', gap: '15px', marginBottom: '20px', alignItems: 'flex-start' }}>
                  <CheckCircle2 className="accent-text" size={20} style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '1.05rem', fontWeight: '500' }}>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Diagrama Visual de Arquitectura (Flujo de Datos) */}
        {content.architectureFlow && (
          <div style={{ marginTop: '80px' }}>
            <h2 className="section-title" style={{ fontSize: '2.2rem', textAlign: 'left', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Workflow className="accent-text" size={30} /> {lang === 'ES' ? 'Arquitectura del Sistema (Flujo de Datos)' : 'System Architecture (Data Flow)'}
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '35px', fontSize: '1rem' }}>
              {lang === 'ES'
                ? 'Representación interactiva de las capas tecnológicas y cómo viaja la información de extremo a extremo.'
                : 'Interactive representation of the technology layers and how data flows end-to-end.'}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              position: 'relative'
            }}>
              {content.architectureFlow.map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card"
                  style={{
                    padding: '25px',
                    borderRadius: '20px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                      <div style={{
                        padding: '10px',
                        borderRadius: '12px',
                        background: 'var(--accent-glow)',
                        display: 'flex'
                      }}>
                        {renderFlowIcon(node.icon)}
                      </div>
                      <span style={{
                        fontSize: '0.8rem',
                        fontWeight: '800',
                        color: 'var(--accent-color)',
                        background: 'rgba(255,255,255,0.05)',
                        padding: '4px 10px',
                        borderRadius: '10px'
                      }}>
                        {lang === 'ES' ? `Paso ${node.step}` : `Step ${node.step}`}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '5px', color: 'white' }}>
                      {node.title}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: '600', display: 'block', marginBottom: '12px' }}>
                      {node.subtitle}
                    </span>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '15px' }}>
                      {node.desc}
                    </p>
                  </div>

                  <div style={{
                    marginTop: 'auto',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                      {node.tag}
                    </span>
                    {i < content.architectureFlow.length - 1 && (
                      <ArrowRight className="accent-text" size={16} style={{ opacity: 0.8 }} />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Funcionalidades Clave */}
        {content.features && (
          <div style={{ marginTop: '80px' }}>
            <h2 className="section-title" style={{ fontSize: '2.2rem', textAlign: 'left', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Layers className="accent-text" size={30} /> {lang === 'ES' ? 'Funcionalidades Clave' : 'Key Features'}
            </h2>
            <div className="grid-2" style={{ gap: '30px', alignItems: 'stretch' }}>
              {content.features.map((feat, i) => (
                <div key={i} className="glass-card" style={{ padding: '25px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--accent-color)', marginBottom: '10px' }}>
                    {feat.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Arquitectura y Seguridad */}
        {content.architecture && (
          <div style={{ marginTop: '80px' }}>
            <div className="glass-card" style={{ background: 'var(--card-bg)', border: '1px solid var(--accent-glow)', padding: '40px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShieldCheck className="accent-text" size={28} /> {lang === 'ES' ? 'Arquitectura & Medidas de Seguridad' : 'Architecture & Security Measures'}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {content.architecture.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Cpu className="accent-text" size={20} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Lecciones Aprendidas & Retrospectiva */}
        {content.retrospective && (
          <div style={{ marginTop: '80px', marginBottom: '40px' }}>
            <div className={content.retrospective.roadmap && content.retrospective.roadmap.length > 0 ? "grid-2" : ""} style={{ gap: '40px', alignItems: 'stretch' }}>
              {/* Lecciones Aprendidas */}
              {content.retrospective.lessons && (
                <div className="glass-card" style={{ padding: '30px' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <GraduationCap className="accent-text" size={26} /> {lang === 'ES' ? 'Lecciones Aprendidas' : 'Lessons Learned'}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {content.retrospective.lessons.map((lesson, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '15px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        <Sparkles className="accent-text" size={18} style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Roadmap V2.0 */}
              {content.retrospective.roadmap && content.retrospective.roadmap.length > 0 && (
                <div className="glass-card" style={{ padding: '30px', borderLeft: '4px solid var(--accent-color)' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Rocket className="accent-text" size={26} /> {lang === 'ES' ? 'Próximas Mejoras (Roadmap V2.0)' : 'Future Improvements (Roadmap V2.0)'}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {content.retrospective.roadmap.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '15px', alignItems: 'flex-start' }}>
                        <span style={{
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          color: 'black',
                          background: 'var(--accent-color)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          marginTop: '2px',
                          flexShrink: 0
                        }}>
                          V2.{idx + 1}
                        </span>
                        <span style={{ color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      {/* Modal interactivo para repositorios privados */}
      <AnimatePresence>
        {isPrivateModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPrivateModalOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card"
              style={{
                maxWidth: '500px',
                width: '100%',
                padding: '35px',
                borderRadius: '24px',
                border: '1px solid var(--accent-color)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
                position: 'relative',
                textAlign: 'center'
              }}
            >
              <button
                onClick={() => setIsPrivateModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--accent-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <Lock size={30} className="accent-text" />
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '12px' }}>
                {lang === 'ES' ? 'Repositorio Privado' : 'Private Repository'}
              </h3>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '28px', fontSize: '0.95rem' }}>
                {lang === 'ES' ? (
                  <>El código fuente de <strong style={{ color: 'white' }}>{content.title}</strong> es privado por motivos de seguridad comercial y protección de infraestructura. Si eres reclutador o deseas revisar la arquitectura del código, puedes solicitar acceso directo:</>
                ) : (
                  <>The source code for <strong style={{ color: 'white' }}>{content.title}</strong> is private for commercial security and infrastructure protection. If you are a recruiter or would like to review the code architecture, you can request direct access:</>
                )}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href={`https://wa.me/51924461067?text=Hola%20Sebastian,%20quisiera%20solicitar%20acceso%20al%20repositorio%20de%20${encodeURIComponent(content.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: '#25D366',
                    color: 'white',
                    padding: '14px 20px',
                    borderRadius: '12px',
                    fontWeight: '700',
                    textDecoration: 'none'
                  }}
                >
                  <FaWhatsapp size={20} /> {lang === 'ES' ? 'Solicitar acceso por WhatsApp' : 'Request access via WhatsApp'}
                </a>

                <a
                  href={`mailto:sebastiangairthon@gmail.com?subject=Solicitud%20de%20acceso%20a%20repositorio:%20${encodeURIComponent(content.title)}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: 'white',
                    padding: '14px 20px',
                    borderRadius: '12px',
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}
                >
                  <Mail size={18} /> {lang === 'ES' ? 'Solicitar por Correo Electrónico' : 'Request via Email'}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectDetails;
