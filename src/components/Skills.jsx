import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript,
  SiNodedotjs, 
  SiReact, 
  SiGithub, 
  SiVite,
  SiPhp,
  SiPostgresql,
  SiSupabase,
  SiTurborepo,
  SiPnpm,
  SiHtml5,
  SiFramer,
  SiDocker
} from 'react-icons/si';
import { FaDatabase, FaCss3Alt, FaGithub as FaGithubIcon } from 'react-icons/fa';
import { Cpu, Layout, Terminal, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t, lang } = useLanguage();
  const isEs = lang === 'ES';

  const skillGroups = [
    {
      title: t.skills.frontendTitle,
      badge: t.skills.frontendBadge,
      icon: <Layout className="accent-text" size={24} />,
      skills: [
        { name: "React 19", icon: <SiReact color="#61DAFB" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "Framer Motion", icon: <SiFramer color="#0055FF" /> },
        { name: "CSS Vanilla / Mobile-First", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "HTML5 Semántico", icon: <SiHtml5 color="#E34F26" /> }
      ]
    },
    {
      title: t.skills.backendTitle,
      badge: t.skills.backendBadge,
      icon: <Cpu className="accent-text" size={24} />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
        { name: "Supabase & Auth", icon: <SiSupabase color="#3ECF8E" /> },
        { name: "PHP 8 Nativo", icon: <SiPhp color="#777BB4" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "MySQL & PDO Prepared", icon: <FaDatabase color="var(--accent-color)" /> }
      ]
    },
    {
      title: t.skills.devopsTitle,
      badge: t.skills.devopsBadge,
      icon: <Terminal className="accent-text" size={24} />,
      skills: [
        { name: "Turborepo (Monorepo)", icon: <SiTurborepo color="#EF4444" /> },
        { name: "pnpm", icon: <SiPnpm color="#F69220" /> },
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Git / GitHub", icon: <SiGithub color="#FFFFFF" /> },
        { name: "GitHub Actions CI/CD", icon: <FaGithubIcon color="#2088FF" /> },
        { name: "Vite & Render", icon: <SiVite color="#646CFF" /> }
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: 'var(--accent-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>{group.title}</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{group.badge}</span>
                  </div>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginTop: '10px'
              }}>
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 14px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      fontSize: '0.88rem',
                      fontWeight: '500',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  >
                    <span style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Highlight CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{
            marginTop: '40px',
            padding: '28px 36px',
            borderRadius: '24px',
            border: '1px solid rgba(255, 165, 0, 0.25)',
            background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.06) 0%, rgba(15, 15, 20, 0.85) 100%)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 400px' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              background: 'var(--accent-glow)',
              border: '1px solid rgba(255, 165, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Award className="accent-text" size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '6px', color: 'white' }}>
                {isEs ? 'Certificaciones & Acreditaciones Oficiales' : 'Official Certifications & Accreditations'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0, lineHeight: '1.5' }}>
                {isEs
                  ? 'Formación complementaria certificada en Gestión Ágil (SCRUM), Análisis de Datos con Power BI, Fundamentos de UX, Design Thinking y Excel Avanzado.'
                  : 'Certified training in Agile Project Management (SCRUM), Data Analysis with Power BI, UX Fundamentals, Design Thinking, and Advanced Excel.'}
              </p>
            </div>
          </div>

          <Link to="/certificados" className="btn-primary-sm" style={{ flexShrink: 0 }}>
            <Award size={16} />
            {isEs ? 'Explorar 5 Certificados' : 'Explore 5 Certificates'}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;