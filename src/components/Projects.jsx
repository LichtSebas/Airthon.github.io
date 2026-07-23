import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import satKioscoImg from '../imagenes/SATPresention.PNG';
import audioExtractorImg from '../imagenes/AudioExtractor.png';

const projects = [
  {
    id: 'sat-kiosco-inteligente',
    title: 'SAT Kiosco',
    category: 'UX & Civic Technology',
    image: satKioscoImg,
    description: 'Kiosco digital interactivo diseñado para ayudar a adultos mayores a realizar consultas, pagos y trámites tributarios de forma segura, intuitiva y asistida.'
  },
  {
    id: 'edam-web',
    title: 'EdanDecor Mueblería E-commerce',
    category: 'Fullstack E-Commerce',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    description: 'Plataforma e-commerce fullstack de muebles con catálogo desacoplado, autenticación OTP vía Supabase, carrito dinámico AJAX y panel de administración integral.'
  },
  {
    id: 'sorteos-plat',
    title: 'Plataforma de Sorteos',
    category: 'Automation & Web',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    description: 'Plataforma automatizada para la gestión de sorteos y verificación de usuarios.'
  },
  {
    id: 'audio-extractor',
    title: 'AudioExtractor',
    category: 'Utility & Tools',
    image: audioExtractorImg,
    description: 'Herramienta de escritorio eficiente para extraer y convertir audio desde archivos de video, optimizando el formato y la calidad de salida.'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-[var(--bg-color)]">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mis <span className="accent-text">Proyectos</span></h2>
          <p className="section-subtitle">Una selección de trabajos que demuestran mi capacidad técnica y creativa.</p>
        </div>

        <div className="grid-2" style={{ gap: '40px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
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
                  Ver Documentación <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
