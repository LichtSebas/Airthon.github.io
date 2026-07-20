import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¿Hablamos de tu <span className="accent-text">Proyecto?</span></h2>
          <p className="section-subtitle">Estoy disponible para nuevas oportunidades y colaboraciones apasionantes.</p>
        </div>

        <div className="grid-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '40px' }}>Contacto Directo</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', color: 'var(--accent-color)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</p>
                  <p style={{ fontWeight: '500' }}>sebastiangairthon@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', color: 'var(--accent-color)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Teléfono</p>
                  <p style={{ fontWeight: '500' }}>+51 924 461 067</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', color: 'var(--accent-color)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Ubicación</p>
                  <p style={{ fontWeight: '500' }}>Lima, Perú</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'center' }}
          >
            <a 
              href="https://wa.me/51924461067" 
              target="_blank" 
              rel="noreferrer"
              className="glass-card"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', padding: '30px', color: 'white' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ background: '#25D366', color: 'white', padding: '15px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaWhatsapp size={30} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Escribir al WhatsApp</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Respuesta rápida</p>
                </div>
              </div>
              <ArrowRight className="accent-text" />
            </a>

            <a 
              href="mailto:sebastiangairthon@gmail.com" 
              className="glass-card"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', padding: '30px', color: 'white' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ background: 'var(--accent-glow)', color: 'var(--accent-color)', padding: '15px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={30} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Enviar Correo</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>sebastiangairthon@gmail.com</p>
                </div>
              </div>
              <ArrowRight className="accent-text" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
