import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Layout, Terminal, Sparkles, Rocket, ExternalLink, Lock, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { projectsList } from '../data/projectsData';

const Projects = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [privateModalProject, setPrivateModalProject] = useState(null);

  const filterButtonsES = [
    { id: 'all', label: 'Todos los Proyectos', icon: <Layers size={16} /> },
    { id: 'arca', label: 'Ecosistema A.R.C.A.', icon: <Rocket size={16} /> },
    { id: 'fullstack', label: 'Web Fullstack', icon: <Layout size={16} /> },
    { id: 'desktop', label: 'Apps de Escritorio', icon: <Terminal size={16} /> },
    { id: 'ux', label: 'UX & Tecnología Cívica', icon: <Sparkles size={16} /> }
  ];

  const filterButtonsEN = [
    { id: 'all', label: 'All Projects', icon: <Layers size={16} /> },
    { id: 'arca', label: 'A.R.C.A. Ecosystem', icon: <Rocket size={16} /> },
    { id: 'fullstack', label: 'Fullstack Web', icon: <Layout size={16} /> },
    { id: 'desktop', label: 'Desktop Apps', icon: <Terminal size={16} /> },
    { id: 'ux', label: 'UX & Civic Tech', icon: <Sparkles size={16} /> }
  ];

  const filterButtons = lang === 'ES' ? filterButtonsES : filterButtonsEN;

  const filteredProjects = filter === 'all' 
    ? projectsList 
    : filter === 'arca'
      ? projectsList.filter(p => p.group === 'arca')
      : filter === 'fullstack'
        ? projectsList.filter(p => p.group === 'fullstack' || p.group === 'arca')
        : projectsList.filter(p => p.group === filter);

  return (
    <section id="projects" className="section bg-[var(--bg-color)]">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.projects.title} <span className="accent-text">{t.projects.titleAccent}</span></h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>

        {/* Dynamic Category Filter Pills */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '50px'
          }}
        >
          {filterButtons.map((btn) => {
            const isActive = filter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  borderRadius: '20px',
                  background: isActive ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? 'black' : 'white',
                  border: isActive ? '1px solid var(--accent-color)' : '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 8px 20px var(--accent-glow)' : 'none'
                }}
              >
                {btn.icon}
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const content = project[lang] || project.ES;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="glass-card project-card"
                >
                  <div style={{
                    position: 'relative',
                    overflow: 'hidden',
                    aspectRatio: '16/9',
                    backgroundColor: project.imageFit === 'contain' ? '#0d0d11' : '#0a0a0e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: project.imageFit === 'contain' ? '2.5rem' : '0'
                  }}>
                    <img
                      src={project.image}
                      alt={content.title}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: project.imageFit || 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '18px',
                      right: '18px',
                      background: 'var(--accent-color)',
                      color: 'black',
                      padding: '5px 14px',
                      borderRadius: '20px',
                      fontSize: '0.7rem',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {content.category}
                    </div>
                  </div>

                  <div style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexGrow: 1
                  }}>
                    <div>
                      <h3 style={{ fontSize: '1.65rem', fontWeight: '800', marginBottom: '12px', lineHeight: '1.25' }}>
                        {content.title}
                      </h3>

                      <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.7', fontSize: '0.96rem' }}>
                        {content.shortDescription}
                      </p>

                      {/* Tech Stack Chips */}
                      {project.tags && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                          {project.tags.map((tag) => (
                            <span key={tag} className="tech-chip">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginTop: 'auto', paddingTop: '10px' }}>
                      <Link
                        to={`/project/${project.id}`}
                        className="btn-primary-sm"
                      >
                        {t.projects.viewCaseStudy} <ArrowRight size={17} />
                      </Link>

                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary-sm"
                        >
                          {content.demoLabel || (lang === 'ES' ? 'Web en Vivo' : 'Live Website')} <ExternalLink size={16} />
                        </a>
                      ) : project.isPrivate ? (
                        <button
                          type="button"
                          onClick={() => setPrivateModalProject(project)}
                          className="btn-secondary-sm"
                          style={{ cursor: 'pointer' }}
                        >
                          <Lock size={15} />
                          {lang === 'ES' ? 'Repositorio Privado' : 'Private Repository'}
                        </button>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Private Repository Modal */}
      <AnimatePresence>
        {privateModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPrivateModalProject(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card"
              style={{
                maxWidth: '480px',
                width: '100%',
                padding: '35px',
                borderRadius: '24px',
                position: 'relative',
                textAlign: 'center'
              }}
            >
              <button
                type="button"
                onClick={() => setPrivateModalProject(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--accent-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <Lock size={30} className="accent-text" />
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>
                {lang === 'ES' ? 'Repositorio Privado' : 'Private Repository'}
              </h3>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '25px', fontSize: '0.92rem' }}>
                {lang === 'ES' ? (
                  <>El código fuente y la versión productiva de <strong style={{ color: 'white' }}>{(privateModalProject[lang] || privateModalProject.ES).title}</strong> están en acceso privado por motivos de seguridad comercial. Si deseas evaluar la arquitectura o código, puedes solicitar acceso directo:</>
                ) : (
                  <>The source code and production deployment of <strong style={{ color: 'white' }}>{(privateModalProject[lang] || privateModalProject.ES).title}</strong> are private for commercial security. If you are reviewing my work as a recruiter or engineer, you can request direct access:</>
                )}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href={`https://wa.me/51924461067?text=Hola%20Sebastian,%20quisiera%20solicitar%20acceso%20al%20repositorio%20de%20${encodeURIComponent((privateModalProject[lang] || privateModalProject.ES).title)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: '#25D366',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    fontSize: '0.92rem'
                  }}
                >
                  <FaWhatsapp size={18} /> {lang === 'ES' ? 'Solicitar acceso por WhatsApp' : 'Request access via WhatsApp'}
                </a>

                <a
                  href={`mailto:sebastiangairthon@gmail.com?subject=Solicitud%20de%20acceso%20a%20repositorio:%20${encodeURIComponent((privateModalProject[lang] || privateModalProject.ES).title)}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    fontSize: '0.92rem'
                  }}
                >
                  {lang === 'ES' ? 'Solicitar por Correo Electrónico' : 'Request via Email'}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
