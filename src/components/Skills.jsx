import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiJavascript, 
  SiNodedotjs, 
  SiReact, 
  SiMysql, 
  SiGit, 
  SiGithub, 
  SiFigma, 
  SiVite,
  SiPhp,
  SiPostgresql,
  SiHtml5,
  SiFramer,
  SiDocker,
  SiRender
} from 'react-icons/si';
import { FaDatabase, FaCss3Alt, FaGithub as FaGithubIcon } from 'react-icons/fa';
import { Cpu, Layout, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillGroups = [
    {
      title: t.skills.backendTitle,
      badge: t.skills.backendBadge,
      icon: <Cpu className="accent-text" size={24} />,
      skills: [
        { name: "PHP 8 Nativo", icon: <SiPhp color="#777BB4" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "PostgreSQL (Supabase)", icon: <SiPostgresql color="#4169E1" /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "PDO / Prepared SQL", icon: <FaDatabase color="var(--accent-color)" /> }
      ]
    },
    {
      title: t.skills.frontendTitle,
      badge: t.skills.frontendBadge,
      icon: <Layout className="accent-text" size={24} />,
      skills: [
        { name: "React 19", icon: <SiReact color="#61DAFB" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS Vanilla / Mobile-First", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "Framer Motion", icon: <SiFramer color="#0055FF" /> }
      ]
    },
    {
      title: t.skills.devopsTitle,
      badge: t.skills.devopsBadge,
      icon: <Terminal className="accent-text" size={24} />,
      skills: [
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Git / GitHub", icon: <SiGithub color="#FFFFFF" /> },
        { name: "GitHub Actions", icon: <FaGithubIcon color="#2088FF" /> },
        { name: "Render CI/CD", icon: <SiRender color="#46E3B7" /> },
        { name: "Vite", icon: <SiVite color="#646CFF" /> },
        { name: "Figma", icon: <SiFigma color="#F24E1E" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-[var(--secondary-bg)]">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.skills.title} <span className="accent-text">{t.skills.titleAccent}</span></h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '30px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-color)';
                e.currentTarget.style.boxShadow = '0 10px 30px var(--accent-glow)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '10px', background: 'var(--accent-glow)', borderRadius: '12px', display: 'flex' }}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, color: 'white' }}>{group.title}</h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-color)', fontWeight: '600' }}>{group.badge}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                {group.skills.map(skill => (
                  <div key={skill.name} style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 14px',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '14px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'var(--accent-glow)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.transform = 'none';
                  }}
                  >
                    <span style={{ fontSize: '1.4rem', display: 'flex', flexShrink: 0 }}>{skill.icon}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'white', lineHeight: '1.2' }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
