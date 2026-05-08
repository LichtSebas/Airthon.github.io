import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

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
  'tech-store': {
    title: 'TechStore DB',
    description: 'Arquitectura de base de datos optimizada para retail tecnológico.',
    fullContent: 'Diseño lógico y físico de una base de datos escalable para manejar miles de transacciones diarias y gestión de stock multicanal.',
    tech: ['SQL Server', 'T-SQL', 'Database Tuning'],
    challenges: ['Normalización de datos complejos de proveedores.', 'Optimización de consultas para reportes de ventas masivos.'],
    results: ['Mejora del 60% en el tiempo de respuesta de reportes.', 'Integridad referencial 100% garantizada.'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2026&auto=format&fit=crop'
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
              <button className="social-icon" style={{ borderRadius: '12px', width: 'auto', padding: '0 25px', gap: '10px', background: 'var(--accent-color)', color: 'black', fontWeight: 'bold' }}>
                Ver Demo <ExternalLink size={18} />
              </button>
              <button className="social-icon" style={{ borderRadius: '12px', width: 'auto', padding: '0 25px', gap: '10px' }}>
                Código <FaGithub size={18} />
              </button>
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
