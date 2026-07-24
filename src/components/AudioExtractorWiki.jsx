import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Music, 
  Scissors, 
  Layers, 
  Tag, 
  History, 
  Volume2, 
  Play, 
  FolderOpen, 
  Terminal, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Download, 
  CheckCircle2, 
  ArrowLeft,
  Sparkles,
  ExternalLink,
  Code,
  FileVideo,
  FileAudio,
  Info
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import audioExtractorImg from '../imagenes/AudioExtractor.png';

const AudioExtractorWiki = () => {
  const [activeTab, setActiveTab] = useState('trim');
  const [copiedCmd, setCopiedCmd] = useState(false);

  const tabs = [
    {
      id: 'trim',
      label: '1. Conversión & Recorte',
      icon: <Scissors size={18} />,
      badge: 'Core Engine'
    },
    {
      id: 'batch',
      label: '2. Cola por Lotes',
      icon: <Layers size={18} />,
      badge: 'Multithreading'
    },
    {
      id: 'id3',
      label: '3. Metadatos ID3',
      icon: <Tag size={18} />,
      badge: 'Audio Tagging'
    },
    {
      id: 'history',
      label: '4. Historial & Player',
      icon: <History size={18} />,
      badge: 'Java Sound API'
    }
  ];

  const ffmpegCommand = `ffmpeg -i video_ejemplo.mp4 -ss 00:01:30 -to 00:03:45 -filter:a "volume=2.0,afade=t=in:ss=0:d=2,afade=t=out:st=133:d=2" -b:a 320k output_audio.mp3`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ffmpegCommand);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="section"
      style={{ paddingTop: '130px', paddingBottom: '100px' }}
    >
      <div className="container">
        {/* Header Breadcrumb & Architecture Justification Badge */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '20px' }}>
          <Link to="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <ArrowLeft size={18} /> Volver a Proyectos
          </Link>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.04)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <Info size={15} className="accent-text" />
            <span>Formato de Wiki optimizado para <strong>Software de Escritorio</strong> (Java Swing / FFmpeg CLI)</span>
          </div>
        </div>

        {/* Rationale Note: Why Desktop Apps have a tailored Studio Layout */}
        <div style={{ padding: '16px 22px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Info className="accent-text" size={22} style={{ flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            <strong style={{ color: 'white' }}>💡 Filosofía de Documentación por Naturaleza de Proyecto:</strong><br />
            A diferencia de las plataformas web (centradas en arquitecturas HTTP y APIs REST), <strong>AudioExtractor Pro v3.0</strong> es un software de escritorio local. Su Wiki utiliza un formato <strong>Studio Interactivo</strong> diseñado para mostrar la experiencia de usuario en Swing, la ejecución multihilo y la interacción CLI directa con FFmpeg.
          </p>
        </div>

        {/* Studio Hero Banner */}
        <div 
          className="glass-card"
          style={{
            padding: '40px',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, rgba(20, 20, 30, 0.9), rgba(10, 10, 18, 0.95))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '50px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--accent-glow)', filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none' }} />

          {/* Window Bar Mockup */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '20px', marginBottom: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56', display: 'inline-block' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F', display: 'inline-block' }} />
              <span style={{ marginLeft: '15px', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600', fontFamily: 'monospace' }}>
                AudioExtractor Pro v3.0 - Desktop Suite (.JAR / Java 17+)
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ padding: '4px 12px', background: 'rgba(39, 201, 63, 0.15)', border: '1px solid rgba(39, 201, 63, 0.3)', color: '#27C93F', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700' }}>
                ● Stable v3.0
              </span>
              <span style={{ padding: '4px 12px', background: 'var(--accent-glow)', border: '1px solid var(--accent-color)', color: 'var(--accent-color)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700' }}>
                Open Source
              </span>
            </div>
          </div>

          <div className="grid-2" style={{ gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--accent-glow)', padding: '6px 14px', borderRadius: '20px', color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: '700', marginBottom: '20px' }}>
                <Sparkles size={16} /> Aplicación de Escritorio Nativa
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: '900', color: 'white', lineHeight: '1.15', marginBottom: '20px' }}>
                AudioExtractor <span className="accent-text">Pro v3.0</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px' }}>
                Suite de procesamiento de audio de alta velocidad desarrollada en <strong>Java 17+ (Swing/AWT)</strong>. Combina extracción de audio, recorte milimétrico por marcas de tiempo, ganancia de volumen, edición de etiquetas ID3 y colas por lotes mediante la integración directa de <strong>FFmpeg Core</strong>.
              </p>

              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a 
                  href="https://github.com/LichtSebas/AudioExtractor" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'var(--accent-color)',
                    color: 'black',
                    padding: '12px 26px',
                    borderRadius: '12px',
                    fontWeight: '800',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 20px var(--accent-glow)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
                >
                  <FaGithub size={20} /> Ver Repositorio GitHub
                </a>

                <a 
                  href="https://github.com/LichtSebas/AudioExtractor/releases" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '12px 26px',
                    borderRadius: '12px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--accent-color)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'}
                >
                  <Download size={20} /> Descargar .JAR
                </a>
              </div>
            </div>

            {/* App Preview Frame */}
            <div style={{ position: 'relative' }}>
              <div 
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                  background: '#0d0d12',
                  padding: '15px'
                }}
              >
                <img 
                  src={audioExtractorImg} 
                  alt="AudioExtractor Pro GUI" 
                  style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive App Studio Tour */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'white', marginBottom: '10px' }}>
              Explora las <span className="accent-text">4 Pestañas de la Aplicación</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Haz clic en cada pestaña para descubrir la arquitectura y características de cada módulo.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div 
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '35px'
            }}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 24px',
                    borderRadius: '16px',
                    background: isActive ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? 'black' : 'white',
                    border: isActive ? '1px solid var(--accent-color)' : '1px solid rgba(255, 255, 255, 0.08)',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? '0 10px 25px var(--accent-glow)' : 'none'
                  }}
                >
                  {tab.icon}
                  {tab.label}
                  <span 
                    style={{ 
                      fontSize: '0.7rem', 
                      padding: '2px 8px', 
                      borderRadius: '10px', 
                      background: isActive ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.08)',
                      color: isActive ? 'black' : 'var(--text-secondary)'
                    }}
                  >
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass-card"
              style={{ padding: '40px', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)' }}
            >
              {activeTab === 'trim' && (
                <div className="grid-2" style={{ gap: '40px', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', marginBottom: '15px' }}>
                      🎧 Conversión Individual & Recorte de Precisión
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '25px' }}>
                      Permite arrastrar cualquier archivo de video (MP4, MKV, AVI, MOV, WEBM) a la pantalla principal. Puedes definir el tiempo exacto de inicio y fin para recortar solo la mejor parte del audio.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                        <div style={{ padding: '8px', background: 'var(--accent-glow)', borderRadius: '10px', color: 'var(--accent-color)' }}>
                          <Scissors size={20} />
                        </div>
                        <div>
                          <h4 style={{ color: 'white', fontWeight: '700', margin: 0 }}>Trimming por Marcas de Tiempo</h4>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>Especifica horas, minutos y segundos exactos (<code style={{ color: 'var(--accent-color)' }}>HH:MM:SS</code>).</p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                        <div style={{ padding: '8px', background: 'var(--accent-glow)', borderRadius: '10px', color: 'var(--accent-color)' }}>
                          <Volume2 size={20} />
                        </div>
                        <div>
                          <h4 style={{ color: 'white', fontWeight: '700', margin: 0 }}>Aumento de Ganancia & Fade In/Out</h4>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>Sube el volumen hasta <code style={{ color: 'var(--accent-color)' }}>+6 dB</code> para videos con audio tenue y aplica desvanecimientos suaves.</p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                        <div style={{ padding: '8px', background: 'var(--accent-glow)', borderRadius: '10px', color: 'var(--accent-color)' }}>
                          <FileAudio size={20} />
                        </div>
                        <div>
                          <h4 style={{ color: 'white', fontWeight: '700', margin: 0 }}>Formatos & Bitrates Profesionales</h4>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>Exporta en MP3, WAV (lossless), AAC, M4A y FLAC a 320, 192 o 128 kbps.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Trimming Simulator Box */}
                  <div style={{ background: '#0a0a0e', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>ZONA DRAG & DROP</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: 'bold' }}>FORMATO: MP3 (320 kbps)</span>
                    </div>

                    <div style={{ border: '2px dashed var(--accent-glow)', padding: '25px', borderRadius: '16px', textAlign: 'center', marginBottom: '25px', background: 'rgba(255,255,255,0.02)' }}>
                      <FileVideo size={36} className="accent-text" style={{ margin: '0 auto 10px auto' }} />
                      <p style={{ color: 'white', fontWeight: '600', margin: 0 }}>concierto_envivo_hd.mkv</p>
                      <span style={{ fontSize: '0.75rem', color: '#27C93F' }}>✔ Cargas completada con éxito</span>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                        <span>Tiempo Inicio: 00:01:30</span>
                        <span>Tiempo Fin: 00:03:45</span>
                      </div>
                      <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', left: '20%', right: '30%', height: '100%', background: 'var(--accent-color)', borderRadius: '4px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'batch' && (
                <div className="grid-2" style={{ gap: '40px', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', marginBottom: '15px' }}>
                      📦 Procesamiento por Lotes (Batch Queue)
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '25px' }}>
                      Diseñado para procesar listas masivas de archivos o carpetas completas. El sistema gestiona una cola multihilo que convierte secuencialmente cada video en segundo plano sin bloquear la ventana de usuario.
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={18} className="accent-text" /> Soporte para arrastrar carpetas enteras con decenas de videos.
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={18} className="accent-text" /> Monitoreo de estado por archivo: <em>En Cola, Procesando, Completado, Error</em>.
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={18} className="accent-text" /> Control de errores aislado: si un video falla, la cola continúa normalmente.
                      </li>
                    </ul>
                  </div>

                  <div style={{ background: '#0a0a0e', padding: '25px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: 'white', fontWeight: '700', marginBottom: '15px', fontSize: '0.95rem' }}>COLA DE PROCESAMIENTO EN SEGUNDO PLANO</h4>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                        <span style={{ fontSize: '0.85rem', color: 'white' }}>01_entrevista_podcast.mp4</span>
                        <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(39,201,63,0.15)', color: '#27C93F', borderRadius: '10px', fontWeight: 'bold' }}>✔ Completado</span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', border: '1px solid var(--accent-glow)' }}>
                        <span style={{ fontSize: '0.85rem', color: 'white' }}>02_concierto_completo.mkv</span>
                        <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'var(--accent-glow)', color: 'var(--accent-color)', borderRadius: '10px', fontWeight: 'bold' }}>⚙️ Procesando (68%)</span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>03_videoclip_oficial.avi</span>
                        <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', borderRadius: '10px' }}>⏳ En Cola</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'id3' && (
                <div className="grid-2" style={{ gap: '40px', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', marginBottom: '15px' }}>
                      🏷️ Editor de Metadatos ID3 Integrado
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '20.px' }}>
                      Personaliza las etiquetas de audio antes de exportar. Los metadatos ID3 permiten que reproductores de música (como Spotify, Apple Music o reproductores de coche) reconozcan la canción correctamente.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                      <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                        <strong style={{ color: 'var(--accent-color)', fontSize: '0.85rem', display: 'block' }}>TÍTULO DE CANCIÓN</strong>
                        <span style={{ color: 'white', fontSize: '0.9rem' }}>{"{{from_video}} (Auto-completado)"}</span>
                      </div>
                      <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                        <strong style={{ color: 'var(--accent-color)', fontSize: '0.85rem', display: 'block' }}>ARTISTA / BANDA</strong>
                        <span style={{ color: 'white', fontSize: '0.9rem' }}>Nombre Personalizable</span>
                      </div>
                      <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                        <strong style={{ color: 'var(--accent-color)', fontSize: '0.85rem', display: 'block' }}>ÁLBUM</strong>
                        <span style={{ color: 'white', fontSize: '0.9rem' }}>Colección / Single</span>
                      </div>
                      <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                        <strong style={{ color: 'var(--accent-color)', fontSize: '0.85rem', display: 'block' }}>AÑO DE LANZAMIENTO</strong>
                        <span style={{ color: 'white', fontSize: '0.9rem' }}>2026</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: '#0a0a0e', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Tag size={40} className="accent-text" style={{ marginBottom: '15px' }} />
                    <h4 style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px' }}>Incrustación de Etiquetas ID3v2</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                      Al compilar la pista, el motor inyecta las etiquetas directamente en los cabezales binarios del archivo MP3/M4A sin alterar la calidad del sonido.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="grid-2" style={{ gap: '40px', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', marginBottom: '15px' }}>
                      🕒 Historial Reciente & Reproductor Java Sound
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '25px' }}>
                      Al finalizar cada conversión, el mini reproductor nativo te permite escuchar la pista al instante. Además, incluye acceso en 1 clic para abrir el Explorador de Windows en la carpeta de salida.
                    </p>

                    <div style={{ display: 'flex', gap: '15px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px', background: 'var(--accent-glow)', color: 'var(--accent-color)', borderRadius: '12px', fontWeight: 'bold' }}>
                        <Play size={18} /> Vista Previa Nativa
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px', background: 'rgba(255,255,255,0.05)', color: 'white', borderRadius: '12px', fontWeight: 'bold' }}>
                        <FolderOpen size={18} /> Abrir Carpeta Salida
                      </div>
                    </div>
                  </div>

                  <div style={{ background: '#0a0a0e', padding: '25px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                      <div style={{ padding: '12px', background: 'var(--accent-glow)', borderRadius: '50%', color: 'var(--accent-color)' }}>
                        <Play size={24} />
                      </div>
                      <div>
                        <h4 style={{ color: 'white', margin: 0, fontWeight: 'bold' }}>concierto_trimmed.mp3</h4>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>02:15 / 02:15 | 320 kbps MP3</span>
                      </div>
                    </div>
                    <div style={{ height: '6px', background: 'var(--accent-color)', borderRadius: '3px' }} />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FFmpeg Engine CLI Terminal Box */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Terminal className="accent-text" size={24} /> Comando FFmpeg Generado Asíncronamente
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '5px 0 0 0' }}>
                Demostración del comando CLI construido dinámicamente por la clase Java <code style={{ color: 'var(--accent-color)' }}>AudioExtractorLogic.java</code> mediante <code style={{ color: 'var(--accent-color)' }}>ProcessBuilder</code>.
              </p>
            </div>

            <button
              onClick={copyToClipboard}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {copiedCmd ? <CheckCircle2 size={16} color="#27C93F" /> : <Code size={16} />}
              {copiedCmd ? '¡Copiado!' : 'Copiar Comando CLI'}
            </button>
          </div>

          <div 
            style={{
              background: '#07070a',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '18px',
              padding: '25px',
              fontFamily: 'Consolas, Monaco, monospace',
              fontSize: '0.9rem',
              color: '#46E3B7',
              overflowX: 'auto',
              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.8)'
            }}
          >
            <div style={{ color: '#888', marginBottom: '10px' }}># Ejecución en ProcessBuilder (Thread Secundario EDT-Safe):</div>
            <div>{ffmpegCommand}</div>
          </div>
        </div>

        {/* Technical Comparison Table */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white' }}>
              ⚡ Comparativa: <span className="accent-text">App de Escritorio vs Herramientas Web</span>
            </h3>
          </div>

          <div className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <th style={{ padding: '18px 24px', color: 'white' }}>Característica / Métrica</th>
                  <th style={{ padding: '18px 24px', color: 'var(--accent-color)' }}>AudioExtractor Pro v3.0 (Nativo Java)</th>
                  <th style={{ padding: '18px 24px', color: 'var(--text-secondary)' }}>Convertidores Web Gratuitos</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '18px 24px', color: 'white', fontWeight: '600' }}>🔒 Privacidad de Datos</td>
                  <td style={{ padding: '18px 24px', color: '#27C93F', fontWeight: 'bold' }}>100% Local (Nunca sube tus archivos)</td>
                  <td style={{ padding: '18px 24px', color: '#FF5F56' }}>Subida obligatoria a servidores de terceros</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '18px 24px', color: 'white', fontWeight: '600' }}>📦 Límite de Tamaño de Archivo</td>
                  <td style={{ padding: '18px 24px', color: '#27C93F', fontWeight: 'bold' }}>Sin límites (Procesa archivos de 50+ GB)</td>
                  <td style={{ padding: '18px 24px', color: '#FF5F56' }}>Limitado (max 100 MB o de pago)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '18px 24px', color: 'white', fontWeight: '600' }}>⚡ Velocidad de Conversión</td>
                  <td style={{ padding: '18px 24px', color: '#27C93F', fontWeight: 'bold' }}>Procesamiento local nativo (Ultra rápido)</td>
                  <td style={{ padding: '18px 24px', color: '#FFBD2E' }}>Depende de la velocidad de subida/bajada</td>
                </tr>
                <tr>
                  <td style={{ padding: '18px 24px', color: 'white', fontWeight: '600' }}>✂️ Trimming & Ganancia ID3</td>
                  <td style={{ padding: '18px 24px', color: '#27C93F', fontWeight: 'bold' }}>Trimming milimétrico + volumen + ID3 integrados</td>
                  <td style={{ padding: '18px 24px', color: '#FFBD2E' }}>Básico o requiere software de terceros</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Retrospective & Roadmap Section */}
        <div className="grid-2" style={{ gap: '30px' }}>
          <div className="glass-card" style={{ padding: '30px', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'white', marginBottom: '15px' }}>
              💡 Lecciones Aprendidas de Arquitectura
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', position: 'relative', paddingLeft: '20px', textAlign: 'left' }}>
                <span className="accent-text" style={{ position: 'absolute', left: 0 }}>•</span>
                Manejo seguro de la <strong style={{ color: 'white' }}>Event Dispatch Thread (EDT)</strong> en Swing mediante hilos concurrentes para evitar congelamientos de interfaz.
              </li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', position: 'relative', paddingLeft: '20px', textAlign: 'left' }}>
                <span className="accent-text" style={{ position: 'absolute', left: 0 }}>•</span>
                Captura asíncrona de transmisiones <code style={{ color: 'var(--accent-color)', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>stdout/stderr</code> con <strong style={{ color: 'white' }}>ProcessBuilder</strong> de Java para reportar progreso porcentual.
              </li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '30px', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'white', marginBottom: '15px' }}>
              🚀 Roadmap Futuro v3.5
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', position: 'relative', paddingLeft: '20px', textAlign: 'left' }}>
                <span className="accent-text" style={{ position: 'absolute', left: 0 }}>•</span>
                Integración de normalización de audio basada en volumen estándar <strong style={{ color: 'white' }}>EBU R128</strong>.
              </li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', position: 'relative', paddingLeft: '20px', textAlign: 'left' }}>
                <span className="accent-text" style={{ position: 'absolute', left: 0 }}>•</span>
                Extracción e incrustación de carátulas/portadas de álbum desde el video a los metadatos ID3.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AudioExtractorWiki;
