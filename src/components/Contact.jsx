import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [feedbackMsg, setFeedbackMsg] = useState('');

  // EmailJS Configuration Keys
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_831uosd';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_u5cfzpg';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'wRJ-Yy4lv-buL74NS';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    if (EMAILJS_PUBLIC_KEY) {
      try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              subject: formData.subject || 'Consulta desde Portafolio',
              message: formData.message,
              to_email: 'sebastiangairthon@gmail.com'
            }
          })
        });

        if (response.ok) {
          setStatus('success');
          setFeedbackMsg(t.contact.successTitle);
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('No se pudo enviar el correo');
        }
      } catch (error) {
        setStatus('error');
        setFeedbackMsg('Ocurrió un error al enviar mediante EmailJS. Puedes escribirme directamente por WhatsApp o Email.');
      }
    } else {
      setTimeout(() => {
        setStatus('success');
        setFeedbackMsg(t.contact.successTitle);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 800);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.contact.title} <span className="accent-text">{t.contact.titleAccent}</span></h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="grid-2" style={{ gap: '50px', alignItems: 'start' }}>
          {/* Información de Contacto Directo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '30px' }}>{t.contact.directContact}</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '15px', background: 'var(--accent-glow)', borderRadius: '15px', color: 'var(--accent-color)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.contact.emailLabel}</p>
                  <a href="mailto:sebastiangairthon@gmail.com" style={{ fontWeight: '600', color: 'white', textDecoration: 'none' }}>sebastiangairthon@gmail.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '15px', background: 'var(--accent-glow)', borderRadius: '15px', color: 'var(--accent-color)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.contact.phoneLabel}</p>
                  <a href="https://wa.me/51924461067" target="_blank" rel="noreferrer" style={{ fontWeight: '600', color: 'white', textDecoration: 'none' }}>+51 924 461 067</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '15px', background: 'var(--accent-glow)', borderRadius: '15px', color: 'var(--accent-color)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.contact.locationLabel}</p>
                  <p style={{ fontWeight: '600', color: 'white' }}>{t.contact.locationValue}</p>
                </div>
              </div>
            </div>

            {/* Accesos rápidos */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <a 
                href="https://wa.me/51924461067" 
                target="_blank" 
                rel="noreferrer"
                className="glass-card"
                style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', padding: '18px 25px', color: 'white', borderRadius: '16px' }}
              >
                <div style={{ background: '#25D366', color: 'white', padding: '10px', borderRadius: '50%', display: 'flex' }}>
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>{t.contact.chatWhatsapp}</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{t.contact.quickReply}</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Formulario Interactivo con EmailJS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: '35px', borderRadius: '24px' }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '20px' }}>{t.contact.sendMessageTitle}</h3>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '25px',
                  borderRadius: '16px',
                  background: 'rgba(37, 211, 102, 0.1)',
                  border: '1px solid #25D366',
                  textAlign: 'center'
                }}
              >
                <CheckCircle2 size={45} color="#25D366" style={{ margin: '0 auto 15px auto' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>{t.contact.successTitle}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>{feedbackMsg}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="social-icon"
                  style={{
                    borderRadius: '10px',
                    width: 'auto',
                    padding: '8px 20px',
                    background: 'var(--accent-color)',
                    color: 'black',
                    fontWeight: 'bold',
                    margin: '0 auto',
                    cursor: 'pointer'
                  }}
                >
                  {t.contact.sendAnother}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {status === 'error' && (
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 77, 77, 0.1)',
                    border: '1px solid #ff4d4d',
                    color: '#ff4d4d',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <AlertCircle size={18} />
                    <span>{feedbackMsg}</span>
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: '500' }}>
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: '500' }}>
                    {t.contact.emailLabel} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: '500' }}>
                    {t.contact.subjectLabel}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.subjectPlaceholder}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: '500' }}>
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: 'var(--accent-color)',
                    color: 'black',
                    padding: '16px',
                    borderRadius: '14px',
                    fontSize: '1rem',
                    fontWeight: '800',
                    border: 'none',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'transform 0.3s ease',
                    marginTop: '5px'
                  }}
                  onMouseOver={(e) => {
                    if (status !== 'sending') e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="spin" size={20} /> {t.contact.sendingButton}
                    </>
                  ) : (
                    <>
                      <Send size={20} /> {t.contact.sendButton}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
