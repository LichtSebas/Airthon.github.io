import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { lang, t } = useLanguage();

  const experiencesES = [
    {
      company: "A.R.C.A. PROGRAM — Tecnología, Innovación y Aprendizaje",
      role: "Fundador y Presidente",
      period: "2025 - Presente",
      projectId: "arca-ecosystem",
      featured: true,
      description: [
        "Liderazgo estratégico: establecimiento de la visión, objetivos y dirección de crecimiento de la organización estudiantil.",
        "Dirección tecnológica y arquitectura: diseño y desarrollo de un ecosistema digital escalable con Monorepo Turborepo, React, TypeScript y Supabase.",
        "Gestión de equipos multidisciplinarios coordinando áreas de tecnología, innovación, marketing y desarrollo de proyectos.",
        "Impulso y desarrollo de plataformas digitales clave: A.R.C.A. Main Website, A.R.C.A. News y Banco de Exámenes con IA.",
        "Construcción de comunidad y alianzas: reducción de la brecha entre el aprendizaje teórico universitario y la aplicación en proyectos reales."
      ]
    },
    {
      company: "EdanDecor",
      role: "Programador Fullstack",
      period: "Jun 2025 - Ago 2025",
      projectId: "edam-web",
      description: [
        "Desarrollo y gestión del backend en PHP 8 y frontend responsivo.",
        "Integración de autenticación Supabase Auth y seguridad Anti-CSRF.",
        "Administración de base de datos PostgreSQL y optimización de carritos AJAX."
      ]
    },
    {
      company: "Makro",
      role: "Cajero",
      period: "Sep 2024 - Mar 2025",
      description: [
        "Atención al cliente y gestión de cobros.",
        "Resolución de incidencias y manejo de caja."
      ]
    },
    {
      company: "Bodega Susena",
      role: "Inspector de Calidad",
      period: "Jun 2023 - Dic 2023",
      description: [
        "Verificación de estado de conservación.",
        "Control de fechas de caducidad."
      ]
    }
  ];

  const experiencesEN = [
    {
      company: "A.R.C.A. PROGRAM — Tech, Innovation & Learning Student Community",
      role: "Founder & President",
      period: "2025 - Present",
      projectId: "arca-ecosystem",
      featured: true,
      description: [
        "Strategic leadership: establishing vision, strategic growth, and organizational structure for the software engineering student body.",
        "Technical direction & software architecture: designing and building a scalable digital ecosystem with Turborepo Monorepo, React, TypeScript, and Supabase.",
        "Cross-functional team management overseeing technology, innovation, marketing, and project initiatives.",
        "Development and supervision of core digital platforms: A.R.C.A. Main Website, A.R.C.A. News, and AI-assisted Exam Bank.",
        "Community building & partnerships: bridging academic knowledge with real-world tech project execution."
      ]
    },
    {
      company: "EdanDecor",
      role: "Fullstack Developer",
      period: "Jun 2025 - Aug 2025",
      projectId: "edam-web",
      description: [
        "Fullstack development and backend management using PHP 8 & responsive UI.",
        "Integration of Supabase Auth REST API and Anti-CSRF session security.",
        "PostgreSQL database administration and AJAX shopping cart optimization."
      ]
    },
    {
      company: "Makro",
      role: "Cashier",
      period: "Sep 2024 - Mar 2025",
      description: [
        "Customer service and payment processing.",
        "Issue resolution and cash register management."
      ]
    },
    {
      company: "Bodega Susena",
      role: "Quality Inspector",
      period: "Jun 2023 - Dec 2023",
      description: [
        "Product preservation condition verification.",
        "Expiration date control and inventory audit."
      ]
    }
  ];

  const experiences = lang === 'ES' ? experiencesES : experiencesEN;

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.experience.title} <span className="accent-text">{t.experience.titleAccent}</span></h2>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                paddingLeft: '40px',
                paddingBottom: '60px',
                borderLeft: exp.featured 
                  ? '2px solid var(--accent-color)' 
                  : '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div style={{
                position: 'absolute',
                left: exp.featured ? '-8px' : '-6px',
                top: '0',
                width: exp.featured ? '16px' : '12px',
                height: exp.featured ? '16px' : '12px',
                background: 'var(--accent-color)',
                borderRadius: '50%',
                boxShadow: exp.featured ? '0 0 20px var(--accent-color)' : '0 0 15px var(--accent-color)'
              }} />

              {exp.featured && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(243, 156, 18, 0.12)',
                  border: '1px solid rgba(243, 156, 18, 0.3)',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.78rem',
                  color: 'var(--accent-color)',
                  fontWeight: '700',
                  marginBottom: '10px'
                }}>
                  <Sparkles size={13} />
                  <span>{lang === 'ES' ? 'Liderazgo & Dirección Actual' : 'Current Leadership & Tech Direction'}</span>
                </div>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{exp.role}</h3>
                  <p className="accent-text" style={{ fontWeight: '600', fontSize: '1rem', marginTop: '4px' }}>{exp.company}</p>
                </div>
                <span style={{ 
                  fontSize: '0.85rem', 
                  color: exp.featured ? 'var(--accent-color)' : 'var(--text-secondary)',
                  fontWeight: exp.featured ? '700' : '500',
                  background: exp.featured ? 'rgba(243, 156, 18, 0.1)' : 'transparent',
                  padding: exp.featured ? '4px 12px' : '0',
                  borderRadius: '10px'
                }}>
                  {exp.period}
                </span>
              </div>

              <ul style={{ listStyle: 'none', padding: '0', marginBottom: exp.projectId ? '20px' : '0' }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', marginBottom: '10px', display: 'flex', gap: '10px', lineHeight: '1.6' }}>
                    <span className="accent-text" style={{ fontWeight: 'bold' }}>•</span> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {exp.projectId && (
                <Link
                  to={`/project/${exp.projectId}`}
                  className="accent-text"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    background: 'var(--accent-glow)',
                    padding: '8px 18px',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                    marginTop: '10px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
                >
                  {t.experience.viewProject} <ArrowRight size={16} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;