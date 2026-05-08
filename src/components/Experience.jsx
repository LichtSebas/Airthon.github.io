import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Edam Mueblería",
      role: "Programador Fullstack",
      period: "Jun 2025 - Ago 2025",
      description: [
        "Desarrollo y gestión del backend y frontend del sitio web.",
        "Priorización de usabilidad y experiencia de usuario.",
        "Administración de datos y optimización de procesos."
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

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experiencia <span className="accent-text">Laboral</span></h2>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
                borderLeft: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ 
                position: 'absolute', 
                left: '-6px', 
                top: '0', 
                width: '12px', 
                height: '12px', 
                background: 'var(--accent-color)', 
                borderRadius: '50%',
                boxShadow: '0 0 15px var(--accent-color)'
              }} />
              
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>{exp.role}</h3>
                  <p className="accent-text" style={{ fontWeight: '500' }}>{exp.company}</p>
                </div>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{exp.period}</span>
              </div>
              
              <ul style={{ listStyle: 'none', padding: '0' }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', marginBottom: '10px', display: 'flex', gap: '10px' }}>
                    <span className="accent-text">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
