import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import profileImg from '../assets/SebastianGonzales.jpeg';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  { id: 'sat-kiosco-inteligente' },
  { id: 'edam-web' },
  { id: 'sorteos-plat' },
  { id: 'audio-extractor' }
];

const AnimatedCounter = ({ target, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const { t } = useLanguage();
  const totalProjects = projects.length;

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
            <h2 className="section-title">{t.about.title} <span className="accent-text">{t.about.titleAccent}</span></h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              {t.about.p1}
            </p>
            <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              {t.about.p2}
            </p>
            
            <div className="grid-2" style={{ gap: '20px' }}>
              <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h4 className="accent-text" style={{ fontSize: '2.5rem', fontWeight: '900' }}>
                  <AnimatedCounter target={6} suffix="+" />
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.about.expMonths}</p>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h4 className="accent-text" style={{ fontSize: '2.5rem', fontWeight: '900' }}>
                  <AnimatedCounter target={totalProjects} suffix="+" />
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.about.completedProjects}</p>
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
                  borderRadius: '30px'
                }} 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
