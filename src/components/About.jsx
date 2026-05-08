import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/SebastianGonzales.jpeg';

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <div className="grid-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Sobre <span className="accent-text">Mí</span></h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Soy un apasionado de la tecnología con experiencia práctica en el desarrollo <strong>Fullstack</strong>, diseño web y automatización de procesos. Mi enfoque se centra en crear soluciones que no solo funcionen, sino que aporten un valor real al usuario final.
            </p>
            <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Actualmente estudio Ingeniería de Software en la <strong>Universidad Científica del Sur</strong>, donde sigo perfeccionando mis habilidades técnicas y mi capacidad para resolver problemas complejos mediante el código.
            </p>
            
            <div className="grid-2" style={{ gap: '20px' }}>
              <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h4 className="accent-text" style={{ fontSize: '2.5rem', fontWeight: '900' }}>1+</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Año de Exp.</p>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h4 className="accent-text" style={{ fontSize: '2.5rem', fontWeight: '900' }}>10+</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Proyectos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{ 
              borderRadius: '40px', 
              overflow: 'hidden', 
              aspectRatio: '1/1',
              border: '2px solid rgba(255,255,255,0.05)',
              padding: '15px',
              background: 'rgba(255,255,255,0.02)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              <img 
                src={profileImg} 
                alt="Sebastian Gonzales" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '30px', 
                  filter: 'contrast(1.1) brightness(0.9)',
                  transition: 'transform 0.5s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
            {/* Abstract Shape */}
            <div style={{ 
              position: 'absolute', 
              top: '-20px', 
              right: '-20px', 
              width: '100px', 
              height: '100px', 
              background: 'var(--accent-color)', 
              borderRadius: '20px', 
              zIndex: -1,
              opacity: 0.5
            }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
