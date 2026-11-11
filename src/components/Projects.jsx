import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Layout, Terminal, Sparkles, Rocket, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projectsList } from '../data/projectsData';

const Projects = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('all');

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

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary-sm"
                        >
                          {content.demoLabel || (lang === 'ES' ? 'Web en Vivo' : 'Live Website')} <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
