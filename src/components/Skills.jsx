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
  SiExpress,
  SiVite
} from 'react-icons/si';
import { FaJava, FaFileExcel, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const skillGroups = [
    {
      title: "Lenguajes",
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Java", icon: <FaJava /> },
        { name: "SQL", icon: <FaDatabase /> }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Vite", icon: <SiVite /> }
      ]
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQL Server", icon: <FaDatabase /> }
      ]
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Excel", icon: <FaFileExcel /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-[var(--secondary-bg)]">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mis <span className="accent-text">Habilidades</span></h2>
          <p className="section-subtitle">Tecnologías que domino para construir el futuro digital.</p>
        </div>

        <div className="grid-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', textAlign: 'center' }}>{group.title}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                {group.skills.map(skill => (
                  <div key={skill.name} style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '10px',
                    padding: '15px 10px',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '15px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'var(--accent-glow)';
                    e.currentTarget.style.color = 'var(--accent-color)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.color = 'white';
                  }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{skill.icon}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: '500' }}>{skill.name}</span>
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
