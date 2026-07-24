import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  ES: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      certificates: 'Certificados',
      contact: 'Contacto'
    },
    hero: {
      tag: 'Bienvenido a mi mundo digital',
      availability: 'Disponible para Nuevas Oportunidades (Remoto / Freelance)',
      subtitlePrefix: 'Estudiante de ',
      softwareEng: 'Ingeniería de Software',
      and: ' & Programador ',
      fullstack: 'Fullstack',
      subtitleSuffix: ' especializado en soluciones eficientes y creativas.',
      downloadCv: 'Descargar CV',
      viewCertificates: 'Ver Certificados'
    },
    about: {
      title: 'Sobre',
      titleAccent: 'Mí',
      subtitle: 'Apasionado por la tecnología, la arquitectura limpia y el desarrollo fullstack.',
      p1: 'Soy un estudiante enfocado en la Ingeniería de Software con pasión por resolver problemas reales a través de código elegante, eficiente y mantenible.',
      p2: 'Me especializo en construir aplicaciones web modernas usando PHP Nativo, Node.js, PostgreSQL y React, cuidando tanto la seguridad en el servidor como la experiencia visual del usuario.',
      expMonths: 'Meses de Experiencia',
      completedProjects: 'Proyectos Completados',
      certificatesEarned: 'Certificados Obtenidos'
    },
    skills: {
      title: 'Mis',
      titleAccent: 'Habilidades',
      subtitle: 'Tecnologías y herramientas organizadas por arquitectura y dominio técnico.',
      backendTitle: 'Backend & Base de Datos',
      backendBadge: 'Server & DB Architecture',
      frontendTitle: 'Frontend & UI/UX',
      frontendBadge: 'Interactive UI & Web App',
      devopsTitle: 'DevOps & Herramientas',
      devopsBadge: 'Deployment & Workflows'
    },
    experience: {
      title: 'Experiencia',
      titleAccent: 'Laboral',
      viewProject: 'Ver Caso de Estudio'
    },
    projects: {
      title: 'Mis',
      titleAccent: 'Proyectos',
      subtitle: 'Una selección de trabajos que demuestran mi capacidad técnica y creativa.',
      viewCaseStudy: 'Ver Documentación'
    },
    contact: {
      title: '¿Hablamos de tu',
      titleAccent: 'Proyecto?',
      subtitle: 'Estoy disponible para nuevas oportunidades laborales, proyectos y colaboraciones.',
      directContact: 'Contacto Directo',
      emailLabel: 'Email Principal',
      phoneLabel: 'Teléfono / WhatsApp',
      locationLabel: 'Ubicación',
      locationValue: 'Lima, Perú',
      chatWhatsapp: 'Chatear por WhatsApp',
      quickReply: 'Respuesta en pocos minutos',
      sendMessageTitle: 'Envíame un Mensaje',
      nameLabel: 'Tu Nombre *',
      namePlaceholder: 'Ej. Carlos Mendoza',
      emailPlaceholder: 'ejemplo@correo.com',
      subjectLabel: 'Asunto (Opcional)',
      subjectPlaceholder: 'Propuesta de proyecto / Consulta',
      messageLabel: 'Mensaje *',
      messagePlaceholder: 'Cuéntame sobre tu proyecto o propuesta...',
      sendButton: 'Enviar Mensaje',
      sendingButton: 'Enviando mensaje...',
      successTitle: '¡Mensaje Recibido!',
      sendAnother: 'Enviar otro mensaje'
    }
  },
  EN: {
    nav: {
      home: 'Home',
      about: 'About Me',
      skills: 'Skills',
      experience: 'Experience',
      certificates: 'Certificates',
      contact: 'Contact'
    },
    hero: {
      tag: 'Welcome to my digital world',
      availability: 'Available for New Opportunities (Remote / Freelance)',
      subtitlePrefix: 'Student of ',
      softwareEng: 'Software Engineering',
      and: ' & ',
      fullstack: 'Fullstack Developer',
      subtitleSuffix: ' specialized in efficient and creative solutions.',
      downloadCv: 'Download Resume',
      viewCertificates: 'View Certificates'
    },
    about: {
      title: 'About',
      titleAccent: 'Me',
      subtitle: 'Passionate about technology, clean architecture, and fullstack development.',
      p1: 'I am a Software Engineering student passionate about solving real-world problems through elegant, efficient, and maintainable code.',
      p2: 'I specialize in building modern web applications using Native PHP, Node.js, PostgreSQL, and React, focusing on both server security and visual user experience.',
      expMonths: 'Months of Experience',
      completedProjects: 'Completed Projects',
      certificatesEarned: 'Certificates Earned'
    },
    skills: {
      title: 'My',
      titleAccent: 'Skills',
      subtitle: 'Technologies and tools organized by architecture and technical domain.',
      backendTitle: 'Backend & Database',
      backendBadge: 'Server & DB Architecture',
      frontendTitle: 'Frontend & UI/UX',
      frontendBadge: 'Interactive UI & Web App',
      devopsTitle: 'DevOps & Tools',
      devopsBadge: 'Deployment & Workflows'
    },
    experience: {
      title: 'Work',
      titleAccent: 'Experience',
      viewProject: 'View Case Study'
    },
    projects: {
      title: 'My',
      titleAccent: 'Projects',
      subtitle: 'A selection of works demonstrating my technical and creative capabilities.',
      viewCaseStudy: 'View Case Study'
    },
    contact: {
      title: "Let's Discuss Your",
      titleAccent: 'Project?',
      subtitle: 'Available for new job opportunities, projects, and exciting collaborations.',
      directContact: 'Direct Contact',
      emailLabel: 'Primary Email',
      phoneLabel: 'Phone / WhatsApp',
      locationLabel: 'Location',
      locationValue: 'Lima, Peru',
      chatWhatsapp: 'Chat on WhatsApp',
      quickReply: 'Quick reply',
      sendMessageTitle: 'Send Me a Message',
      nameLabel: 'Your Name *',
      namePlaceholder: 'e.g. John Doe',
      emailPlaceholder: 'example@email.com',
      subjectLabel: 'Subject (Optional)',
      subjectPlaceholder: 'Project proposal / Inquiry',
      messageLabel: 'Message *',
      messagePlaceholder: 'Tell me about your project or proposal...',
      sendButton: 'Send Message',
      sendingButton: 'Sending message...',
      successTitle: 'Message Received!',
      sendAnother: 'Send another message'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio_lang') || 'ES');

  const toggleLang = () => {
    const nextLang = lang === 'ES' ? 'EN' : 'ES';
    setLang(nextLang);
    localStorage.setItem('portfolio_lang', nextLang);
  };

  const t = translations[lang] || translations.ES;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
