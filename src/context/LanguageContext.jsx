import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  ES: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      certificates: 'Certificados',
      contact: 'Contacto'
    },
    hero: {
      tag: 'Bienvenido a mi portafolio',
      availability: 'Disponible para Nuevas Oportunidades (Remoto / Freelance)',
      subtitlePrefix: 'Estudiante de ',
      softwareEng: 'Ingeniería de Software',
      and: ' & Programador ',
      fullstack: 'Fullstack',
      subtitleSuffix: ' especializado en soluciones eficientes y creativas.',
      downloadCv: 'Descargar CV',
      viewCertificates: 'Ver Certificados',
      viewEcosystem: 'Ver Ecosistema A.R.C.A.'
    },
    about: {
      title: 'Sobre',
      titleAccent: 'Mí',
      subtitle: 'Aprender, colaborar, crear y compartir.',
      badge: 'Estudiante de Ingeniería de Software & Fundador de A.R.C.A.',
      p1: 'Soy estudiante de Ingeniería de Software apasionado por la tecnología, el desarrollo de software y la creación de soluciones que generen un impacto real. Me interesa transformar ideas en productos tecnológicos, explorar nuevas herramientas y diseñar sistemas que resuelvan problemas mediante la innovación y la colaboración.',
      p2: 'A lo largo de mi formación he desarrollado plataformas web, arquitectura de software, integración de servicios y herramientas digitales. Mi enfoque no se limita a escribir código: también busco comprender las necesidades detrás de cada proyecto, definir soluciones, organizar su desarrollo y construir productos que puedan evolucionar a largo plazo.',
      p3: 'Soy fundador y presidente de A.R.C.A. PROGRAM, una iniciativa estudiantil orientada a impulsar el desarrollo tecnológico, académico y profesional mediante la creación de proyectos y un ecosistema de plataformas digitales para la comunidad universitaria.',
      philosophy: 'Mi filosofía: aprender, colaborar, crear y compartir.',
      expMonths: 'Meses de Trayectoria',
      completedProjects: 'Proyectos en Portafolio',
      activePlatforms: 'Plataformas del Ecosistema'
    },
    skills: {
      title: 'Mis',
      titleAccent: 'Habilidades',
      subtitle: 'Tecnologías y herramientas organizadas por arquitectura, dominio técnico y orquestación.',
      backendTitle: 'Backend & Base de Datos',
      backendBadge: 'Server & DB Architecture',
      frontendTitle: 'Frontend & UI/UX',
      frontendBadge: 'Interactive UI & Web App',
      devopsTitle: 'Arquitectura & DevOps',
      devopsBadge: 'Monorepo, CI/CD & Tooling'
    },
    experience: {
      title: 'Experiencia &',
      titleAccent: 'Liderazgo',
      viewProject: 'Ver Caso de Estudio'
    },
    projects: {
      title: 'Mis',
      titleAccent: 'Proyectos',
      subtitle: 'Una selección de iniciativas y plataformas que demuestran mi capacidad técnica, arquitectónica y creativa.',
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
      projects: 'Projects',
      experience: 'Experience',
      certificates: 'Certificates',
      contact: 'Contact'
    },
    hero: {
      tag: 'Welcome to my portfolio',
      availability: 'Available for New Opportunities (Remote / Freelance)',
      subtitlePrefix: 'Student of ',
      softwareEng: 'Software Engineering',
      and: ' & ',
      fullstack: 'Fullstack Developer',
      subtitleSuffix: ' specialized in efficient and creative solutions.',
      downloadCv: 'Download Resume',
      viewCertificates: 'View Certificates',
      viewEcosystem: 'View A.R.C.A. Ecosystem'
    },
    about: {
      title: 'About',
      titleAccent: 'Me',
      subtitle: 'Learn, collaborate, create, and share.',
      badge: 'Software Engineering Student & Founder of A.R.C.A.',
      p1: 'I am a Software Engineering student passionate about technology, software development, and building solutions that deliver real impact. I love transforming ideas into tech products, exploring new tools, and architecting systems that solve real problems through innovation and collaboration.',
      p2: 'Throughout my education, I have developed web platforms, software architectures, third-party service integrations, and digital tools. My approach goes beyond writing code: I seek to understand project needs, define solutions, organize development, and build products designed to evolve long-term.',
      p3: 'I am the founder and president of A.R.C.A. PROGRAM, a student initiative driving technological, academic, and professional growth through hands-on projects and a digital platform ecosystem for the university community.',
      philosophy: 'My philosophy: learn, collaborate, create, and share.',
      expMonths: 'Months of Journey',
      completedProjects: 'Portfolio Projects',
      activePlatforms: 'Ecosystem Platforms'
    },
    skills: {
      title: 'My',
      titleAccent: 'Skills',
      subtitle: 'Technologies and tools structured by architecture, technical domain, and orchestration.',
      backendTitle: 'Backend & Database',
      backendBadge: 'Server & DB Architecture',
      frontendTitle: 'Frontend & UI/UX',
      frontendBadge: 'Interactive UI & Web App',
      devopsTitle: 'Architecture & DevOps',
      devopsBadge: 'Monorepo, CI/CD & Tooling'
    },
    experience: {
      title: 'Experience &',
      titleAccent: 'Leadership',
      viewProject: 'View Case Study'
    },
    projects: {
      title: 'My',
      titleAccent: 'Projects',
      subtitle: 'A selection of initiatives and platforms demonstrating technical, architectural, and creative skills.',
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