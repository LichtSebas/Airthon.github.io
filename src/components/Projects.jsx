import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Layout, Terminal, Sparkles, Rocket } from 'lucide-react';
import satKioscoImg from '../imagenes/SATPresention.PNG';
import audioExtractorImg from '../imagenes/AudioExtractor.png';
import edanDecorImg from '../imagenes/1logo.png';
import arcaPageImg from '../imagenes/ARCAPage.png';
import arcaNewImg from '../imagenes/ARCANEW.png';
import { useLanguage } from '../context/LanguageContext';

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

  const projectsES = [
    {
      id: 'arca-ecosystem',
      group: 'arca',
      title: 'A.R.C.A. Digital Ecosystem',
      category: 'Ecosistema & Arquitectura',
      image: arcaPageImg,
      description: 'Ecosistema tecnológico modular para transformar la experiencia universitaria: centraliza portal institucional, noticias, banco de exámenes con IA y gestión de proyectos estudiantiles.'
    },
    {
      id: 'arca-news',
      group: 'arca',
      title: 'A.R.C.A. News',
      category: 'Medios Digitales & Prensa',
      image: arcaNewImg,
      description: 'Plataforma de comunicación digital estudiantil diseñada con experiencia editorial moderna, noticias destacadas, artículos técnicos, avisos y agenda de eventos.'
    },
    {
      id: 'sat-kiosco-inteligente',
      group: 'ux',
      title: 'SAT Kiosco',
      category: 'UX & Civic Technology',
      image: satKioscoImg,
      description: 'Kiosco digital interactivo diseñado para ayudar a adultos mayores a realizar consultas, pagos y trámites tributarios de forma segura, intuitiva y asistida.'
    },
    {
      id: 'edam-web',
      group: 'fullstack',
      title: 'EdanDecor Mueblería E-commerce',
      category: 'Fullstack E-Commerce',
      image: edanDecorImg,
      imageFit: 'contain',
      description: 'Plataforma e-commerce fullstack de muebles con catálogo desacoplado, autenticación OTP vía Supabase, carrito dinámico AJAX y panel de administración integral.'
    },
    {
      id: 'sorteos-plat',
      group: 'fullstack',
      title: 'Plataforma de Sorteos',
      category: 'Automation & Web',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
      description: 'Plataforma automatizada para la gestión de sorteos transparentes y verificación de usuarios.'
    },
    {
      id: 'audio-extractor',
      group: 'desktop',
      title: 'AudioExtractor Pro v3.0',
      category: 'Desktop App & Java',
      image: audioExtractorImg,
      description: 'Aplicación de escritorio en Java 17+ y FFmpeg para conversión, recorte preciso por tiempo, efectos de ganancia, metadatos ID3 y cola por lotes.'
    }
  ];

  const projectsEN = [
    {
      id: 'arca-ecosystem',
      group: 'arca',
      title: 'A.R.C.A. Digital Ecosystem',
      category: 'Ecosystem & Architecture',
      image: arcaPageImg,
      description: 'Modular tech ecosystem designed to transform the university experience: centralizes institutional portal, news platform, AI-assisted exam bank, and student projects.'
    },
    {
      id: 'arca-news',
      group: 'arca',
      title: 'A.R.C.A. News',
      category: 'Digital Media & Editorial',
      image: arcaNewImg,
      description: 'Digital student communication platform with modern editorial UX, publishing featured news, software engineering articles, announcements, and events.'
    },
    {
      id: 'sat-kiosco-inteligente',
      group: 'ux',
      title: 'SAT Kiosk',
      category: 'UX & Civic Technology',
      image: satKioscoImg,
      description: 'Interactive digital kiosk designed to assist senior citizens with tax inquiries, payments, and procedures in a secure and intuitive manner.'
    },
    {
      id: 'edam-web',
      group: 'fullstack',
      title: 'EdanDecor Furniture E-commerce',
      category: 'Fullstack E-Commerce',
      image: edanDecorImg,
      imageFit: 'contain',
      description: 'Fullstack furniture e-commerce platform featuring decoupled catalog, Supabase Auth OTP, AJAX dynamic cart, and comprehensive admin panel.'
    },
    {
      id: 'sorteos-plat',
      group: 'fullstack',
      title: 'Raffle & Sweepstakes Platform',
      category: 'Automation & Web',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
      description: 'Automated platform for running transparent, secure raffles and verifying participant eligibility.'
    },
    {
      id: 'audio-extractor',
      group: 'desktop',
      title: 'AudioExtractor Pro v3.0',
      category: 'Desktop App & Java',
      image: audioExtractorImg,
      description: 'Desktop application built with Java 17+ and FFmpeg for fast audio extraction, trimming, volume gain, ID3 metadata editing, and batch queues.'
    }
  ];

  const projects = lang === 'ES' ? projectsES : projectsEN;
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'arca'
      ? projects.filter(p => p.group === 'arca')
      : filter === 'fullstack'
        ? projects.filter(p => p.group === 'fullstack' || p.group === 'arca')
        : projects.filter(p => p.group === filter);

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
        <motion.div layout className="grid-2" style={{ gap: '40px' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card"
                style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  aspectRatio: '16/9',
                  backgroundColor: project.imageFit === 'contain' ? '#0d0d11' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: project.imageFit === 'contain' ? '2.5rem' : '0'
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: project.imageFit || 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'var(--accent-color)',
                    color: 'black',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}>
                    {project.category}
                  </div>
                </div>

                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '15px' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.7' }}>
                    {project.description}
                  </p>
                  <Link
                    to={`/project/${project.id}`}
                    className="accent-text"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      textDecoration: 'none',
                      fontWeight: '700',
                      fontSize: '1rem',
                      transition: 'gap 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.gap = '15px'}
                    onMouseOut={(e) => e.currentTarget.style.gap = '10px'}
                  >
                    {t.projects.viewCaseStudy} <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;