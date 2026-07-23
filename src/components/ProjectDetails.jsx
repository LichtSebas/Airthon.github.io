import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, BookOpen, Layers, ShieldCheck, Cpu, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import satKioscoImg from '../imagenes/SATPresention.PNG';
import audioExtractorImg from '../imagenes/AudioExtractor.png';
import edanDecorImg from '../imagenes/1logo.png';

const projectData = {
  'edam-web': {
    title: 'EdanDecor Mueblería E-commerce',
    description: 'Plataforma e-commerce fullstack para exhibición, gestión e inventario de muebles con catálogo desacoplado y arquitectura modular.',
    fullContent: 'EdanDecor nació de la necesidad de digitalizar la experiencia de compra de muebles, combinando una interfaz elegante y accesible con una arquitectura backend robusta basada en PHP nativo y PostgreSQL (alojado en Supabase). La plataforma resolvió el reto de exhibir variantes complejas de muebles (muestras de color Hexadecimal, dimensiones, materiales) y asegurar las transacciones mediante un sistema de autenticación seguro de doble flujo y protección Anti-CSRF.',
    tech: ['PHP 8 Nativo', 'PostgreSQL (Supabase)', 'Docker', 'Render', 'JavaScript (Fetch API / AJAX)', 'Supabase Auth', 'CSS3 (Mobile-First)', 'PDO'],
    challenges: [
      'Implementación de un catálogo 100% responsive a ancho completo con filtro lateral fijo y muestras de color en códigos Hexadecimales reales.',
      'Construcción de un flujo de autenticación seguro integrando Supabase Auth REST API con código OTP de 8 dígitos y Magic Links de 1 solo clic.',
      'Optimización de la experiencia de compra mediante carrito dinámico procesado en segundo plano con Fetch API / AJAX sin recargas de página.',
      'Garantizar la seguridad del servidor mediante protección Anti-CSRF tokenizada de 32 bytes y consultas preparadas PDO contra inyección SQL.'
    ],
    results: [
      'Despliegue automatizado en producción con contenedor Docker parametrizado en Render.',
      'Arquitectura segura libre de inyecciones SQL, ataques CSRF y secuestro de sesiones.',
      'Integración directa de cotizaciones rápidas a WhatsApp desde el Showcase / Modal de Vista Rápida.',
      'Panel de Staff/Administración integral (`admin/panel.php`) para control de catálogo CRUD, stock, órdenes de compra y comentarios.'
    ],
    features: [
      {
        title: 'Catálogo & Modal Showcase',
        desc: 'Filtros por categoría, precio y muestras circulares de color Hexadecimal. Vista Rápida con ficha técnica sin recortes de imagen y cotización directa a WhatsApp.'
      },
      {
        title: 'Carrito de Compras Asíncrono',
        desc: 'Modificación de cantidades, recálculo de subtotales y eliminación de productos mediante Fetch API (AJAX) sin refrescar la página.'
      },
      {
        title: 'Panel de Administración Staff',
        desc: 'Gestión CRUD de muebles, edición de paletas Hexadecimales, actualización de stock, cambio de estado de pedidos y moderación de testimonios.'
      },
      {
        title: 'Doble Flujo de Autenticación',
        desc: 'Registro seguro en Supabase Auth, verificación por código OTP de 8 dígitos con temporizador y Magic Link para inicio de sesión inmediato.'
      }
    ],
    architecture: [
      'Backend en PHP nativo con patrón de diseño modular (`includes/`, `admin/`, `database/`).',
      'Base de datos PostgreSQL en Supabase con Prepared Statements PDO y Triggers de validación.',
      'Despliegue contenerizado en Docker parametrizado mediante variables de entorno (`.env`).',
      'Protección Anti-CSRF (tokens de 32 bytes) y cookies de sesión seguras (`HttpOnly`, `SameSite=Lax`).'
    ],
    image: edanDecorImg,
    demoUrl: 'https://tienda-muebles-7hft.onrender.com/index.php',
    docUrl: 'https://github.com/LichtSebas/tienda-muebles'
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
    fullContent: 'AudioExtractor fue desarrollado para automatizar y simplificar la extracción de pistas de audio (MP3, WAV) a partir de archivos de video en múltiples formatos (MP4, MKV, AVI). Su enfoque principal es la rapidez, conservando la mayor fidelidad de sonido posible.',
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
            <h1 className="hero-title" style={{ fontSize: '3rem', textAlign: 'left', lineHeight: '1.2' }}>{project.title}</h1>
            <p className="hero-subtitle" style={{ textAlign: 'left', marginBottom: '30px' }}>{project.description}</p>
            
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px' }}>Tecnologías Utilizadas</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {project.tech.map(t => (
                  <span key={t} style={{ padding: '8px 16px', background: 'var(--accent-glow)', borderRadius: '10px', color: 'var(--accent-color)', fontWeight: '600', fontSize: '0.9rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="social-icon" style={{ borderRadius: '12px', width: 'auto', padding: '0 25px', gap: '10px', background: 'var(--accent-color)', color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
                  Ver Web en Vivo <ExternalLink size={18} />
                </a>
              )}
              {project.docUrl && (
                <a href={project.docUrl} target="_blank" rel="noreferrer" className="social-icon" style={{ borderRadius: '12px', width: 'auto', padding: '0 25px', gap: '10px', textDecoration: 'none' }}>
                  Repositorio GitHub <FaGithub size={18} />
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

        {/* Desafío y Resultados */}
        <div className="grid-2" style={{ marginTop: '80px', gap: '40px' }}>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Code2 className="accent-text" size={26} /> El Desafío Técnico
            </h3>
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
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle2 className="accent-text" size={26} /> Resultados e Impacto
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {project.results.map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <CheckCircle2 className="accent-text" size={22} style={{ flexShrink: 0 }} />
                  <p style={{ fontWeight: '500', color: 'var(--text-color)' }}>{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección Wiki: Funcionalidades Clave */}
        {project.features && (
          <div style={{ marginTop: '80px' }}>
            <h2 className="section-title" style={{ fontSize: '2.2rem', textAlign: 'left', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Layers className="accent-text" size={30} /> Funcionalidades Clave
            </h2>
            <div className="grid-2" style={{ gap: '30px' }}>
              {project.features.map((feat, i) => (
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

        {/* Sección Wiki: Arquitectura y Seguridad */}
        {project.architecture && (
          <div style={{ marginTop: '80px', marginBottom: '40px' }}>
            <div className="glass-card" style={{ background: 'var(--card-bg)', border: '1px solid var(--accent-glow)', padding: '40px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShieldCheck className="accent-text" size={28} /> Arquitectura & Medidas de Seguridad
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {project.architecture.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Cpu className="accent-text" size={20} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
};

export default ProjectDetails;
