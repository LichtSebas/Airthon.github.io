import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import satKioscoImg from '../imagenes/SATPresention.PNG';
import audioExtractorImg from '../imagenes/AudioExtractor.png';

const projectData = {
  'edam-web': {
    title: 'Edam Mueblería Web',
    description: 'Una plataforma completa diseñada para modernizar la presencia digital de una mueblería local.',
    fullContent: 'Este proyecto consistió en el rediseño total de la experiencia de usuario y la implementación de un backend robusto para la gestión de inventario y pedidos.',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    challenges: ['Sincronización de inventario en tiempo real.', 'Optimización de carga de imágenes de alta resolución.'],
    results: ['Incremento del 40% en consultas online.', 'Reducción de errores en la gestión de pedidos.'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  },
  'sorteos-plat': {
    title: 'Plataforma de Sorteos',
    description: 'Sistema automatizado para la realización de sorteos transparentes y seguros.',
    fullContent: 'Desarrollé un algoritmo de aleatoriedad verificable y una interfaz intuitiva para que los usuarios puedan participar y ver resultados en tiempo real.',
    tech: ['JavaScript', 'Node.js', 'PostgreSQL', 'Framer Motion'],
    challenges: ['Seguridad contra scripts de participación automática.', 'Manejo de picos de tráfico durante los sorteos.'],
    results: ['Más de 500 sorteos realizados con éxito.', 'Cero incidencias de seguridad reportadas.'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
  },
  'sat-kiosco-inteligente': {
    title: 'SAT Kiosco',
    description: 'Kiosco digital para facilitar los trámites tributarios a adultos mayores.',
    fullContent: 'El proyecto "SAT Kiosco" surge de la necesidad de cerrar la brecha digital en la atención al público adulto mayor. Se diseñó una interfaz interactiva y amigable que simplifica procesos complejos, pagos y consultas, reduciendo la fricción y el tiempo de espera en ventanillas.',
    tech: ['React', 'Figma', 'UX/UI Design', 'Accesibilidad'],
    challenges: ['Diseñar una interfaz altamente intuitiva para usuarios con poca experiencia digital.', 'Integración fluida con los sistemas heredados de la institución tributaria.'],
    results: ['Reducción del 50% en los tiempos de espera presencial.', 'Altos índices de satisfacción reportados por usuarios mayores de 60 años.'],
    image: satKioscoImg,
    demoUrl: 'https://lichtsebas.github.io/sat-kiosco-demo/',
    docUrl: 'https://github.com/LichtSebas/sat-kiosco-demo'
  },
  'audio-extractor': {
    title: 'AudioExtractor',
    description: 'Herramienta de escritorio eficiente para extraer y convertir audio desde archivos de video.',
    fullContent: 'AudioExtractor fue desarrollado para automatizar y simplificar la extracción de pistas de audio (MP3, WAV) a partir de videos en múltiples formatos (MP4, MKV, AVI). Su enfoque principal es la rapidez, conservando la mayor fidelidad de sonido posible.',
    tech: ['Python', 'FFmpeg', 'Tkinter/PyQt', 'Audio Processing'],
    challenges: ['Manejo eficiente de archivos de video pesados (varios GB) sin saturar la memoria RAM.', 'Interfaz de usuario sencilla pero potente para usuarios no técnicos.'],
    results: ['Procesamiento hasta un 30% más rápido que herramientas gratuitas genéricas.', 'Conversión exitosa de más de 20 formatos de video distintos a audio de alta calidad.'],
    image: audioExtractorImg
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 className="section-title">Proyecto no encontrado</h2>
        <Link to="/" className="accent-text" style={{ textDecoration: 'none', marginTop: '20px' }}>Volver al inicio</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="section"
      style={{ paddingTop: '150px' }}
    >
      <div className="container">
        <Link to="/" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
          <ArrowLeft size={20} /> Volver a Proyectos
        </Link>

        <div className="grid-2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="hero-title" style={{ fontSize: '3.5rem', textAlign: 'left' }}>{project.title}</h1>
            <p className="hero-subtitle" style={{ textAlign: 'left', marginBottom: '30px' }}>{project.description}</p>
            
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px' }}>Tecnologías</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {project.tech.map(t => (
                  <span key={t} style={{ padding: '8px 16px', background: 'var(--accent-glow)', borderRadius: '10px', color: 'var(--accent-color)', fontWeight: '600', fontSize: '0.9rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="social-icon" style={{ borderRadius: '12px', width: 'auto', padding: '0 25px', gap: '10px', background: 'var(--accent-color)', color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
                  Ver Demo <ExternalLink size={18} />
                </a>
              )}
              {project.docUrl && (
                <a href={project.docUrl} target="_blank" rel="noreferrer" className="social-icon" style={{ borderRadius: '12px', width: 'auto', padding: '0 25px', gap: '10px', textDecoration: 'none' }}>
                  Documentación <BookOpen size={18} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card" style={{ padding: '10px', borderRadius: '30px' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '20px', display: 'block' }} />
            </div>
          </motion.div>
        </div>

        <div className="grid-2" style={{ marginTop: '100px', gap: '60px' }}>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '25px' }}>El Desafío</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '30px' }}>
              {project.fullContent}
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {project.challenges.map((c, i) => (
                <li key={i} style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: 'var(--text-secondary)' }}>
                  <span className="accent-text" style={{ marginTop: '4px' }}>→</span> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '25px' }}>Resultados</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {project.results.map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <CheckCircle2 className="accent-text" size={24} />
                  <p style={{ fontWeight: '500' }}>{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
