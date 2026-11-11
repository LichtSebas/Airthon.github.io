import { useState } from 'react';
import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const FloatingContact = () => {
  const [hoveredTab, setHoveredTab] = useState(null);
  const { lang } = useLanguage();

  const tabs = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: <FaWhatsapp size={24} />,
      color: '#25D366',
      href: 'https://wa.me/51924461067'
    },
    {
      id: 'email',
      label: lang === 'ES' ? 'Correo' : 'Email',
      icon: <Mail size={24} />,
      color: 'var(--accent-color)',
      href: 'mailto:sebastiangairthon@gmail.com'
    }
  ];

  return (
    <div style={{
      position: 'fixed',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href={tab.href}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setHoveredTab(tab.id)}
          onMouseLeave={() => setHoveredTab(null)}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(20, 20, 20, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRight: 'none',
            padding: '12px',
            textDecoration: 'none',
            color: 'white',
            borderTopLeftRadius: '12px',
            borderBottomLeftRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: hoveredTab === tab.id ? 'translateX(0)' : 'translateX(calc(100% - 50px))',
            width: '160px',
            boxShadow: hoveredTab === tab.id ? `0 0 20px ${tab.color}40` : 'none'
          }}
        >
          <div style={{ 
            color: tab.color, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            width: '26px',
            minWidth: '26px'
          }}>
            {tab.icon}
          </div>
          <span style={{ 
            marginLeft: '15px', 
            fontWeight: '600', 
            fontSize: '0.9rem',
            whiteSpace: 'nowrap'
          }}>
            {tab.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingContact;
