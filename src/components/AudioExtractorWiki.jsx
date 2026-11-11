import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scissors, 
  Layers, 
  Tag, 
  History, 
  Volume2, 
  Play, 
  FolderOpen, 
  Terminal, 
  Zap, 
  Download, 
  CheckCircle2, 
  ArrowLeft,
  Sparkles,
  Code,
  FileVideo,
  FileAudio,
  Info,
  Lightbulb,
  Headphones,
  Package,
  Clock,
  Lock,
  Rocket,
  RefreshCw
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import audioExtractorImg from '../imagenes/AudioExtractor.webp';
import { useLanguage } from '../context/LanguageContext';

const AudioExtractorWiki = () => {
  const [activeTab, setActiveTab] = useState('trim');
  const [copiedCmd, setCopiedCmd] = useState(false);
  const { lang } = useLanguage();
  const isEs = lang === 'ES';

  const tabs = [
    {
      id: 'trim',
      label: isEs ? '1. Conversión & Recorte' : '1. Conversion & Trimming',
      icon: <Scissors size={18} />,
      badge: 'Core Engine'
    },
    {
      id: 'batch',
      label: isEs ? '2. Cola por Lotes' : '2. Batch Queue',
      icon: <Layers size={18} />,
      badge: 'Multithreading'
    },
    {
      id: 'id3',
      label: isEs ? '3. Metadatos ID3' : '3. ID3 Metadata',
      icon: <Tag size={18} />,
      badge: 'Audio Tagging'
    },
    {
      id: 'history',
      label: isEs ? '4. Historial & Player' : '4. History & Player',
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
            <ArrowLeft size={18} /> {isEs ? 'Volver a Proyectos' : 'Back to Projects'}
          </Link>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.04)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <Info size={15} className="accent-text" />
            <span>
              {isEs ? (
                <>Formato de Wiki optimizado para <strong>Software de Escritorio</strong> (Java Swing / FFmpeg CLI)</>
              ) : (
                <>Wiki layout optimized for <strong>Desktop Software</strong> (Java Swing / FFmpeg CLI)</>
              )}
            </span>
          </div>
        </div>

        {/* Rationale Note */}
        <div style={{ padding: '16px 22px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Info className="accent-text" size={22} style={{ flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            <strong style={{ color: 'white', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Lightbulb size={16} className="accent-text" /> {isEs ? 'Filosofía de Documentación por Naturaleza de Proyecto:' : 'Documentation Philosophy by Project Nature:'}
            </strong><br />
            {isEs ? (
              <>A diferencia de las plataformas web (centradas en arquitecturas HTTP y APIs REST), <strong>AudioExtractor Pro v3.0</strong> es un software de escritorio local. Su Wiki utiliza un formato <strong>Studio Interactivo</strong> diseñado para mostrar la experiencia de usuario en Swing, la ejecución multihilo y la interacción CLI directa con FFmpeg.</>
            ) : (
              <>Unlike web platforms (centered on HTTP architectures and REST APIs), <strong>AudioExtractor Pro v3.0</strong> is a native local desktop application. Its Wiki uses an <strong>Interactive Studio</strong> format designed to showcase the Swing GUI experience, multithreaded execution, and direct FFmpeg CLI interaction.</>
            )}
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
                Stable v3.0
              </span>
              <span style={{ padding: '4px 12px', background: 'var(--accent-glow)', border: '1px solid var(--accent-color)', color: 'var(--accent-color)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700' }}>
                Open Source
              </span>
            </div>
          </div>

          <div className="grid-2" style={{ gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--accent-glow)', padding: '6px 14px', borderRadius: '20px', color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: '700', marginBottom: '20px' }}>
                <Sparkles size={16} /> {isEs ? 'Aplicación de Escritorio Nativa' : 'Native Desktop Application'}
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: '900', color: 'white', lineHeight: '1.15', marginBottom: '20px' }}>
                AudioExtractor <span className="accent-text">Pro v3.0</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px' }}>
                {isEs ? (
                  <>Suite de procesamiento de audio de alta velocidad desarrollada en <strong>Java 17+ (Swing/AWT)</strong>. Combina extracción de audio, recorte milimétrico por marcas de tiempo, ganancia de volumen, edición de etiquetas ID3 y colas por lotes mediante la integración directa de <strong>FFmpeg Core</strong>.</>
                ) : (
                  <>High-speed audio processing suite built in <strong>Java 17+ (Swing/AWT)</strong>. Combines audio extraction, timestamp precision trimming, volume gain boost, ID3 tag editing, and batch queues via direct <strong>FFmpeg Core</strong> integration.</>
                )}
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
                  <FaGithub size={20} /> {isEs ? 'Ver Repositorio GitHub' : 'View GitHub Repository'}
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
                  <Download size={20} /> {isEs ? 'Descargar .JAR' : 'Download .JAR'}
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
              {isEs ? 'Explora las ' : 'Explore the '}
              <span className="accent-text">{isEs ? '4 Pestañas de la Aplicación' : '4 Application Modules'}</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              {isEs
                ? 'Haz clic en cada pestaña para descubrir la arquitectura y características de cada módulo.'
                : 'Click on each tab to explore the architecture and features of each module.'}
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
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Headphones size={26} className="accent-text" /> {isEs ? 'Conversión Individual & Recorte de Precisión' : 'Single Conversion & Precision Trimming'}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '25px' }}>
                      {isEs
                        ? 'Permite arrastrar cualquier archivo de video (MP4, MKV, AVI, MOV, WEBM) a la pantalla principal. Puedes definir el tiempo exacto de inicio y fin para recortar solo la mejor parte del audio.'
                        : 'Drag and drop any video file (MP4, MKV, AVI, MOV, WEBM) onto the main window. Define exact start and end timestamps to extract only the desired audio segment.'}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                        <div style={{ padding: '8px', background: 'var(--accent-glow)', borderRadius: '10px', color: 'var(--accent-color)' }}>
                          <Scissors size={20} />
                        </div>
                        <div>
                          <h4 style={{ color: 'white', fontWeight: '700', margin: 0 }}>{isEs ? 'Trimming por Marcas de Tiempo' : 'Timestamp Trimming'}</h4>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
                            {isEs ? 'Especifica horas, minutos y segundos exactos (' : 'Specify exact hours, minutes, and seconds ('}
                            <code style={{ color: 'var(--accent-color)' }}>HH:MM:SS</code>).
                          </p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                        <div style={{ padding: '8px', background: 'var(--accent-glow)', borderRadius: '10px', color: 'var(--accent-color)' }}>
                          <Volume2 size={20} />
                        </div>
                        <div>
                          <h4 style={{ color: 'white', fontWeight: '700', margin: 0 }}>{isEs ? 'Aumento de Ganancia & Fade In/Out' : 'Gain Boost & Fade In/Out'}</h4>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
                            {isEs ? 'Sube el volumen hasta ' : 'Boost volume up to '}
                            <code style={{ color: 'var(--accent-color)' }}>+6 dB</code>
                            {isEs ? ' para videos con audio tenue y aplica desvanecimientos suaves.' : ' for quiet recordings and apply smooth fade transitions.'}
                          </p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                        <div style={{ padding: '8px', background: 'var(--accent-glow)', borderRadius: '10px', color: 'var(--accent-color)' }}>
                          <FileAudio size={20} />
                        </div>
                        <div>
                          <h4 style={{ color: 'white', fontWeight: '700', margin: 0 }}>{isEs ? 'Formatos & Bitrates Profesionales' : 'Professional Formats & Bitrates'}</h4>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
                            {isEs ? 'Exporta en MP3, WAV (lossless), AAC, M4A y FLAC a 320, 192 o 128 kbps.' : 'Export to MP3, WAV (lossless), AAC, M4A, and FLAC at 320, 192, or 128 kbps.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Trimming Simulator Box */}
                  <div style={{ background: '#0a0a0e', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>{isEs ? 'ZONA DRAG & DROP' : 'DRAG & DROP ZONE'}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: 'bold' }}>{isEs ? 'FORMATO: MP3 (320 kbps)' : 'FORMAT: MP3 (320 kbps)'}</span>
                    </div>

                    <div style={{ border: '2px dashed var(--accent-glow)', padding: '25px', borderRadius: '16px', textAlign: 'center', marginBottom: '25px', background: 'rgba(255,255,255,0.02)' }}>
                      <FileVideo size={36} className="accent-text" style={{ margin: '0 auto 10px auto' }} />
                      <p style={{ color: 'white', fontWeight: '600', margin: 0 }}>concierto_envivo_hd.mkv</p>
                      <span style={{ fontSize: '0.75rem', color: '#27C93F', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircle2 size={13} /> {isEs ? 'Carga completada con éxito' : 'File loaded successfully'}
                      </span>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                        <span>{isEs ? 'Tiempo Inicio: 00:01:30' : 'Start Time: 00:01:30'}</span>
                        <span>{isEs ? 'Tiempo Fin: 00:03:45' : 'End Time: 00:03:45'}</span>
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
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Package size={26} className="accent-text" /> {isEs ? 'Procesamiento por Lotes (Batch Queue)' : 'Batch Queue Processing'}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '25px' }}>
                      {isEs
                        ? 'Diseñado para procesar listas masivas de archivos o carpetas completas. El sistema gestiona una cola multihilo que convierte secuencialmente cada video en segundo plano sin bloquear la ventana de usuario.'
                        : 'Designed to process massive file lists or entire folders. Manages a multithreaded queue that sequentially converts each video in the background without freezing the user interface.'}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={18} className="accent-text" /> {isEs ? 'Soporte para arrastrar carpetas enteras con decenas de videos.' : 'Support for dragging entire folders containing dozens of videos.'}
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={18} className="accent-text" /> {isEs ? 'Monitoreo de estado por archivo: En Cola, Procesando, Completado, Error.' : 'Per-file status monitoring: Queued, Processing, Completed, Error.'}
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={18} className="accent-text" /> {isEs ? 'Control de errores aislado: si un video falla, la cola continúa normalmente.' : 'Isolated error handling: if one video fails, the queue continues smoothly.'}
                      </li>
                    </ul>
                  </div>

                  <div style={{ background: '#0a0a0e', padding: '25px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: 'white', fontWeight: '700', marginBottom: '15px', fontSize: '0.95rem' }}>{isEs ? 'COLA DE PROCESAMIENTO EN SEGUNDO PLANO' : 'BACKGROUND PROCESSING QUEUE'}</h4>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                        <span style={{ fontSize: '0.85rem', color: 'white' }}>01_entrevista_podcast.mp4</span>
                        <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(39,201,63,0.15)', color: '#27C93F', borderRadius: '10px', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <CheckCircle2 size={12} /> {isEs ? 'Completado' : 'Completed'}
                        </span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', border: '1px solid var(--accent-glow)' }}>
                        <span style={{ fontSize: '0.85rem', color: 'white' }}>02_concierto_completo.mkv</span>
                        <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'var(--accent-glow)', color: 'var(--accent-color)', borderRadius: '10px', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <RefreshCw size={12} className="spin" /> {isEs ? 'Procesando (68%)' : 'Processing (68%)'}
                        </span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>03_videoclip_oficial.avi</span>
                        <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={12} /> {isEs ? 'En Cola' : 'Queued'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'id3' && (
                <div className="grid-2" style={{ gap: '40px', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Tag size={26} className="accent-text" /> {isEs ? 'Editor de Metadatos ID3 Integrado' : 'Built-in ID3 Metadata Editor'}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '20px' }}>
                      {isEs
                        ? 'Personaliza las etiquetas de audio antes de exportar. Los metadatos ID3 permiten que reproductores de música reconozcan la canción correctamente.'
                        : 'Customize audio tags prior to exporting. ID3 metadata allows music players to properly identify song title, artist, album, and release year.'}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                      <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                        <strong style={{ color: 'var(--accent-color)', fontSize: '0.85rem', display: 'block' }}>{isEs ? 'TÍTULO DE CANCIÓN' : 'SONG TITLE'}</strong>
                        <span style={{ color: 'white', fontSize: '0.9rem' }}>{"{{from_video}} (Auto)"}</span>
                      </div>
                      <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                        <strong style={{ color: 'var(--accent-color)', fontSize: '0.85rem', display: 'block' }}>{isEs ? 'ARTISTA / BANDA' : 'ARTIST / BAND'}</strong>
                        <span style={{ color: 'white', fontSize: '0.9rem' }}>{isEs ? 'Nombre Personalizable' : 'Custom Artist'}</span>
                      </div>
                      <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                        <strong style={{ color: 'var(--accent-color)', fontSize: '0.85rem', display: 'block' }}>{isEs ? 'ÁLBUM' : 'ALBUM'}</strong>
                        <span style={{ color: 'white', fontSize: '0.9rem' }}>{isEs ? 'Colección / Single' : 'Collection / Single'}</span>
                      </div>
                      <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                        <strong style={{ color: 'var(--accent-color)', fontSize: '0.85rem', display: 'block' }}>{isEs ? 'AÑO DE LANZAMIENTO' : 'RELEASE YEAR'}</strong>
                        <span style={{ color: 'white', fontSize: '0.9rem' }}>2026</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: '#0a0a0e', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Tag size={40} className="accent-text" style={{ marginBottom: '15px' }} />
                    <h4 style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px' }}>{isEs ? 'Incrustación de Etiquetas ID3v2' : 'ID3v2 Binary Tag Embedding'}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                      {isEs
                        ? 'Al compilar la pista, el motor inyecta las etiquetas directamente en los cabezales binarios del archivo MP3/M4A sin alterar la calidad del sonido.'
                        : 'During compilation, the engine injects metadata directly into the binary headers of the MP3/M4A file without altering audio quality.'}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="grid-2" style={{ gap: '40px', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Clock size={26} className="accent-text" /> {isEs ? 'Historial Reciente & Reproductor Java Sound' : 'Recent History & Java Sound Player'}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '25px' }}>
                      {isEs
                        ? 'Al finalizar cada conversión, el mini reproductor nativo te permite escuchar la pista al instante. Además, incluye acceso en 1 clic para abrir el Explorador de archivos en la carpeta de salida.'
                        : 'Upon completing each conversion, the native mini player lets you preview the track immediately, with 1-click access to open the output folder in your system file explorer.'}
                    </p>

                    <div style={{ display: 'flex', gap: '15px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px', background: 'var(--accent-glow)', color: 'var(--accent-color)', borderRadius: '12px', fontWeight: 'bold' }}>
                        <Play size={18} /> {isEs ? 'Vista Previa Nativa' : 'Native Audio Preview'}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px', background: 'rgba(255,255,255,0.05)', color: 'white', borderRadius: '12px', fontWeight: 'bold' }}>
                        <FolderOpen size={18} /> {isEs ? 'Abrir Carpeta Salida' : 'Open Output Folder'}
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Terminal className="accent-text" size={24} /> {isEs ? 'Comando FFmpeg Generado Asíncronamente' : 'Asynchronously Generated FFmpeg Command'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '5px 0 0 0' }}>
                {isEs ? 'Demostración del comando CLI construido dinámicamente por ' : 'Demonstration of the CLI command dynamically built by '}
                <code style={{ color: 'var(--accent-color)' }}>AudioExtractorLogic.java</code>
                {isEs ? ' mediante ' : ' via '}
                <code style={{ color: 'var(--accent-color)' }}>ProcessBuilder</code>.
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
              {copiedCmd ? (isEs ? '¡Copiado!' : 'Copied!') : (isEs ? 'Copiar Comando CLI' : 'Copy CLI Command')}
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
            <div style={{ color: '#888', marginBottom: '10px' }}>
              {isEs ? '# Ejecución en ProcessBuilder (Thread Secundario EDT-Safe):' : '# Execution in ProcessBuilder (EDT-Safe Background Thread):'}
            </div>
            <div>{ffmpegCommand}</div>
          </div>
        </div>

        {/* Technical Comparison Table */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <Zap size={26} className="accent-text" /> {isEs ? 'Comparativa: ' : 'Comparison: '}
              <span className="accent-text">{isEs ? 'App de Escritorio vs Herramientas Web' : 'Desktop App vs Web Converters'}</span>
            </h3>
          </div>

          <div className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <th style={{ padding: '18px 24px', color: 'white' }}>{isEs ? 'Característica / Métrica' : 'Feature / Metric'}</th>
                  <th style={{ padding: '18px 24px', color: 'var(--accent-color)' }}>{isEs ? 'AudioExtractor Pro v3.0 (Nativo Java)' : 'AudioExtractor Pro v3.0 (Native Java)'}</th>
                  <th style={{ padding: '18px 24px', color: 'var(--text-secondary)' }}>{isEs ? 'Convertidores Web Gratuitos' : 'Free Online Web Converters'}</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '18px 24px', color: 'white', fontWeight: '600' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Lock size={16} className="accent-text" /> {isEs ? 'Privacidad de Datos' : 'Data Privacy'}
                    </div>
                  </td>
                  <td style={{ padding: '18px 24px', color: '#27C93F', fontWeight: 'bold' }}>{isEs ? '100% Local (Nunca sube tus archivos)' : '100% Local (Files never leave your PC)'}</td>
                  <td style={{ padding: '18px 24px', color: '#FF5F56' }}>{isEs ? 'Subida obligatoria a servidores de terceros' : 'Mandatory upload to third-party servers'}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '18px 24px', color: 'white', fontWeight: '600' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Package size={16} className="accent-text" /> {isEs ? 'Límite de Tamaño de Archivo' : 'File Size Limit'}
                    </div>
                  </td>
                  <td style={{ padding: '18px 24px', color: '#27C93F', fontWeight: 'bold' }}>{isEs ? 'Sin límites (Procesa archivos de 50+ GB)' : 'Unlimited (Processes 50+ GB files)'}</td>
                  <td style={{ padding: '18px 24px', color: '#FF5F56' }}>{isEs ? 'Limitado (max 100 MB o de pago)' : 'Restricted (max 100 MB or paid tier)'}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '18px 24px', color: 'white', fontWeight: '600' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Zap size={16} className="accent-text" /> {isEs ? 'Velocidad de Conversión' : 'Conversion Speed'}
                    </div>
                  </td>
                  <td style={{ padding: '18px 24px', color: '#27C93F', fontWeight: 'bold' }}>{isEs ? 'Procesamiento local nativo (Ultra rápido)' : 'Native local CPU processing (Ultra fast)'}</td>
                  <td style={{ padding: '18px 24px', color: '#FFBD2E' }}>{isEs ? 'Depende de la velocidad de subida/bajada' : 'Bottlenecked by upload/download bandwidth'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '18px 24px', color: 'white', fontWeight: '600' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Scissors size={16} className="accent-text" /> {isEs ? 'Trimming & Ganancia ID3' : 'Trimming & ID3 Gain'}
                    </div>
                  </td>
                  <td style={{ padding: '18px 24px', color: '#27C93F', fontWeight: 'bold' }}>{isEs ? 'Trimming milimétrico + volumen + ID3 integrados' : 'Precision trimming + volume boost + ID3 built-in'}</td>
                  <td style={{ padding: '18px 24px', color: '#FFBD2E' }}>{isEs ? 'Básico o requiere software de terceros' : 'Basic or requires separate tools'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Retrospective & Roadmap Section */}
        <div className="grid-2" style={{ gap: '30px' }}>
          <div className="glass-card" style={{ padding: '30px', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'white', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lightbulb size={22} className="accent-text" /> {isEs ? 'Lecciones Aprendidas de Arquitectura' : 'Architectural Lessons Learned'}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', position: 'relative', paddingLeft: '20px', textAlign: 'left' }}>
                <span className="accent-text" style={{ position: 'absolute', left: 0 }}>•</span>
                {isEs ? (
                  <>Manejo seguro de la <strong style={{ color: 'white' }}>Event Dispatch Thread (EDT)</strong> en Swing mediante hilos concurrentes para evitar congelamientos de interfaz.</>
                ) : (
                  <>Thread-safe management of the Swing <strong style={{ color: 'white' }}>Event Dispatch Thread (EDT)</strong> using worker threads to prevent UI freezes.</>
                )}
              </li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', position: 'relative', paddingLeft: '20px', textAlign: 'left' }}>
                <span className="accent-text" style={{ position: 'absolute', left: 0 }}>•</span>
                {isEs ? (
                  <>Captura asíncrona de transmisiones <code style={{ color: 'var(--accent-color)', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>stdout/stderr</code> con <strong style={{ color: 'white' }}>ProcessBuilder</strong> de Java para reportar progreso porcentual.</>
                ) : (
                  <>Asynchronous capture of <code style={{ color: 'var(--accent-color)', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>stdout/stderr</code> streams with Java <strong style={{ color: 'white' }}>ProcessBuilder</strong> to report real-time percentage progress.</>
                )}
              </li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '30px', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'white', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Rocket size={22} className="accent-text" /> {isEs ? 'Roadmap Futuro v3.5' : 'Future Roadmap v3.5'}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', position: 'relative', paddingLeft: '20px', textAlign: 'left' }}>
                <span className="accent-text" style={{ position: 'absolute', left: 0 }}>•</span>
                {isEs ? (
                  <>Integración de normalización de audio basada en volumen estándar <strong style={{ color: 'white' }}>EBU R128</strong>.</>
                ) : (
                  <>Integration of broadcast-standard <strong style={{ color: 'white' }}>EBU R128</strong> loudness normalization.</>
                )}
              </li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', position: 'relative', paddingLeft: '20px', textAlign: 'left' }}>
                <span className="accent-text" style={{ position: 'absolute', left: 0 }}>•</span>
                {isEs ? (
                  <>Extracción e incrustación de carátulas/portadas de álbum desde el video a los metadatos ID3.</>
                ) : (
                  <>Automatic extraction and embedding of album cover art from video frames into ID3 tags.</>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AudioExtractorWiki;
