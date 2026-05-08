import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <input 
                type="text" 
                placeholder="Nombre" 
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px', color: 'white', outline: 'none' }}
              />
              <input 
                type="email" 
                placeholder="Email" 
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px', color: 'white', outline: 'none' }}
              />
            </div>
            <textarea 
              placeholder="¿En qué puedo ayudarte?" 
              rows="6"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px', color: 'white', outline: 'none', resize: 'none' }}
            ></textarea>
            <button 
              style={{ 
                background: 'var(--accent-color)', 
                color: 'black', 
                fontWeight: '900', 
                padding: '20px', 
                borderRadius: '15px', 
                border: 'none', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '10px',
                fontSize: '1rem'
              }}
            >
              Enviar Mensaje <Send size={20} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
