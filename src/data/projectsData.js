import satKioscoImg from '../imagenes/SATPresention.webp';
import audioExtractorImg from '../imagenes/AudioExtractor.webp';
import edanDecorImg from '../imagenes/1logo.webp';
import arcaPageImg from '../imagenes/ARCAPage.webp';
import arcaNewImg from '../imagenes/ARCANEW.webp';

export const projectsList = [
  {
    id: 'arca-ecosystem',
    group: 'arca',
    featured: true,
    image: arcaPageImg,
    isPrivate: false,
    demoUrl: 'https://www.arca-program.com/',
    tags: ['React 19', 'TypeScript', 'Turborepo', 'pnpm', 'Supabase', 'PostgreSQL'],
    ES: {
      title: 'A.R.C.A. Digital Ecosystem',
      category: 'Ecosistema & Arquitectura',
      demoLabel: 'Visitar Plataforma Web',
      shortDescription: 'Ecosistema tecnológico modular para transformar la experiencia universitaria: centraliza portal institucional, noticias, banco de exámenes con IA y gestión de proyectos estudiantiles.',
      description: 'Ecosistema tecnológico modular diseñado para centralizar herramientas, recursos académicos e información para la comunidad de Ingeniería de Software.',
      fullContent: 'A.R.C.A. Digital Ecosystem es una iniciativa tecnológica impulsada por A.R.C.A. PROGRAM que busca centralizar herramientas, recursos académicos, información y oportunidades en diferentes plataformas digitales interconectadas. Nace de la necesidad de construir soluciones propias para la comunidad universitaria, aprovechando el desarrollo de software como medio para democratizar el acceso al conocimiento, facilitar el aprendizaje y promover la colaboración activa entre estudiantes. Como fundador y director tecnológico, definí una arquitectura modular monorepo con Turborepo y pnpm, frontend en React y TypeScript, base de datos relacional PostgreSQL y servicios de autenticación centralizada con Supabase.',
      tech: ['React', 'TypeScript', 'Turborepo (Monorepo)', 'pnpm Workspaces', 'Supabase Auth', 'PostgreSQL', 'CSS3 Modern UI', 'REST APIs', 'Multi-domain Architecture'],
      challenges: [
        'Orquestación de un Monorepo centralizado con Turborepo y pnpm que permita gestionar múltiples plataformas compartiendo paquetes y componentes de diseño sin fricciones ni duplicación de código.',
        'Diseño de una arquitectura desacoplada para desplegar plataformas mediante dominios y subdominios independientes mientras mantienen una identidad de marca coherente.',
        'Configuración de autenticación centralizada con Supabase para compartir sesiones seguras entre diferentes aplicaciones del ecosistema.',
        'Establecimiento de una infraestructura escalable que permita incorporar progresivamente nuevas iniciativas como A.R.C.A. Projects, A.R.C.A. Networking y Banco de Exámenes con IA.'
      ],
      results: [
        'Ecosistema digital activo con plataformas institucionales y de comunicación en producción y desarrollo.',
        'Reducción drástica del tiempo de configuración de nuevas aplicaciones gracias a la reutilización de librerías y componentes UI compartidos en el monorepo.',
        'Creación de un espacio real donde los estudiantes de Ingeniería de Software adquieren experiencia práctica en proyectos reales de alto nivel.'
      ],
      features: [
        {
          title: 'A.R.C.A. Main Website',
          desc: 'Portal institucional y punto de acceso al ecosistema: comunica la misión, objetivos, iniciativas, equipo de colaboradores y soluciones tecnológicas.'
        },
        {
          title: 'A.R.C.A. News',
          desc: 'Plataforma digital de noticias y comunicación estudiantil con experiencia editorial contemporánea, eventos, convocatorias y avisos destacados.'
        },
        {
          title: 'A.R.C.A. Banco de Exámenes (IA)',
          desc: 'Plataforma de recursos académicos y repositorio de evaluaciones guiado por modelos de inteligencia artificial para potenciar el estudio.'
        },
        {
          title: 'Arquitectura Monorepo & Subdominios',
          desc: 'Infraestructura modular preparada para incorporar nuevas herramientas y plataformas de forma independiente sin comprometer el núcleo del ecosistema.'
        }
      ],
      architecture: [
        'Estructura Monorepo gestionada con Turborepo y pnpm para optimizar builds y compartir librerías UI.',
        'Frontend moderno desarrollado en React y TypeScript con principios de diseño de alta fidelidad.',
        'Backend y autenticación centralizada mediante Supabase y PostgreSQL con políticas de seguridad RLS.',
        'Despliegue multizona y modular a través de dominios y subdominios independientes.'
      ],
      architectureFlow: [
        {
          step: '01',
          title: 'Orquestación & Monorepo',
          subtitle: 'Turborepo + pnpm Workspaces',
          desc: 'Estructura centralizada de repositorios, scripts compartidos y dependencias optimizadas para alto rendimiento en desarrollo.',
          icon: 'Workflow',
          tag: 'Monorepo'
        },
        {
          step: '02',
          title: 'Frontend & UI Modular',
          subtitle: 'React 19 + TypeScript',
          desc: 'Aplicaciones desacopladas (Portal, News, Recursos) que consumen componentes de interfaz compartidos.',
          icon: 'Laptop',
          tag: 'React / TS'
        },
        {
          step: '03',
          title: 'Capa de Servicios & Auth',
          subtitle: 'Supabase REST & Auth',
          desc: 'Servicios transversales de autenticación segura, control de acceso y gestión de sesiones entre plataformas.',
          icon: 'KeyRound',
          tag: 'Supabase'
        },
        {
          step: '04',
          title: 'Base de Datos Centralizada',
          subtitle: 'PostgreSQL Relacional',
          desc: 'Almacenamiento persistente para contenidos, noticias, recursos estudiantiles y trazabilidad de eventos.',
          icon: 'Database',
          tag: 'PostgreSQL'
        }
      ],
      retrospective: {
        lessons: [
          'La implementación temprana de un Monorepo con Turborepo y pnpm ahorra semanas de esfuerzo en la estandarización de componentes y estilos.',
          'La arquitectura basada en subdominios independientes permite iterar en cada plataforma sin riesgos de regresión en las demás.',
          'Construir una iniciativa comunitaria requiere tanto liderazgo humano como bases técnicas sólidas y bien documentadas.'
        ]
      }
    },
    EN: {
      title: 'A.R.C.A. Digital Ecosystem',
      category: 'Ecosystem & Architecture',
      demoLabel: 'Visit Live Platform',
      shortDescription: 'Modular tech ecosystem designed to transform the university experience: centralizes institutional portal, news platform, AI-assisted exam bank, and student projects.',
      description: 'Modular technological ecosystem designed to centralize tools, academic resources, and information for the Software Engineering community.',
      fullContent: 'A.R.C.A. Digital Ecosystem is a technological initiative driven by A.R.C.A. PROGRAM aimed at centralizing tools, academic resources, information, and opportunities across interconnected digital platforms. It was born from the need to build in-house solutions for the university community, leveraging software development to democratize access to knowledge, facilitate learning, and promote active student collaboration. As founder and tech lead, I designed a modular monorepo architecture using Turborepo and pnpm, a React and TypeScript frontend, a PostgreSQL relational database, and centralized authentication services powered by Supabase.',
      tech: ['React', 'TypeScript', 'Turborepo (Monorepo)', 'pnpm Workspaces', 'Supabase Auth', 'PostgreSQL', 'CSS3 Modern UI', 'REST APIs', 'Multi-domain Architecture'],
      challenges: [
        'Orchestrating a centralized Monorepo with Turborepo and pnpm to manage multiple platforms sharing design packages and UI components without friction or code duplication.',
        'Designing a decoupled architecture to deploy platforms across independent domains and subdomains while maintaining a cohesive brand identity.',
        'Configuring centralized authentication with Supabase to share secure sessions across different ecosystem applications.',
        'Establishing a scalable infrastructure capable of progressively incorporating new initiatives such as A.R.C.A. Projects, A.R.C.A. Networking, and the AI Exam Bank.'
      ],
      results: [
        'Active digital ecosystem with institutional and communication platforms in production and continuous development.',
        'Drastic reduction in setup time for new applications thanks to reusable libraries and shared UI components in the monorepo.',
        'Creation of a real-world environment where Software Engineering students gain hands-on experience in production-grade projects.'
      ],
      features: [
        {
          title: 'A.R.C.A. Main Website',
          desc: 'Institutional portal and ecosystem gateway: communicates the mission, objectives, initiatives, team members, and technological solutions.'
        },
        {
          title: 'A.R.C.A. News',
          desc: 'Digital student news and communication platform featuring a contemporary editorial experience, events, calls for participation, and announcements.'
        },
        {
          title: 'A.R.C.A. Exam Bank (AI)',
          desc: 'Academic resource platform and evaluation repository guided by artificial intelligence models to enhance student learning.'
        },
        {
          title: 'Monorepo & Subdomain Architecture',
          desc: 'Modular infrastructure prepared to incorporate new tools and platforms independently without compromising the ecosystem core.'
        }
      ],
      architecture: [
        'Monorepo structure managed with Turborepo and pnpm to optimize builds and share UI libraries.',
        'Modern frontend developed in React and TypeScript with high-fidelity design principles.',
        'Centralized backend and authentication via Supabase and PostgreSQL with Row Level Security (RLS) policies.',
        'Multi-zone modular deployment across independent domains and subdomains.'
      ],
      architectureFlow: [
        {
          step: '01',
          title: 'Orchestration & Monorepo',
          subtitle: 'Turborepo + pnpm Workspaces',
          desc: 'Centralized repository structure, shared scripts, and optimized dependencies for high-performance development.',
          icon: 'Workflow',
          tag: 'Monorepo'
        },
        {
          step: '02',
          title: 'Modular Frontend & UI',
          subtitle: 'React 19 + TypeScript',
          desc: 'Decoupled applications (Portal, News, Resources) consuming shared interface components.',
          icon: 'Laptop',
          tag: 'React / TS'
        },
        {
          step: '03',
          title: 'Services & Auth Layer',
          subtitle: 'Supabase REST & Auth',
          desc: 'Cross-platform secure authentication, access control, and session management across subdomains.',
          icon: 'KeyRound',
          tag: 'Supabase'
        },
        {
          step: '04',
          title: 'Centralized Database',
          subtitle: 'Relational PostgreSQL',
          desc: 'Persistent storage for content, news, student resources, and event tracking.',
          icon: 'Database',
          tag: 'PostgreSQL'
        }
      ],
      retrospective: {
        lessons: [
          'Early implementation of a Monorepo with Turborepo and pnpm saves weeks of effort in component and style standardization.',
          'Independent subdomain architecture allows iterating on each platform without regression risks on others.',
          'Building a community initiative requires both human leadership and solid, well-documented technical foundations.'
        ]
      }
    }
  },
  {
    id: 'arca-news',
    group: 'arca',
    featured: false,
    image: arcaNewImg,
    isPrivate: false,
    demoUrl: 'https://news.arca-program.com/',
    tags: ['React', 'TypeScript', 'Supabase', 'UI Editorial', 'Framer Motion'],
    ES: {
      title: 'A.R.C.A. News',
      category: 'Medios Digitales & Prensa',
      demoLabel: 'Visitar A.R.C.A. News',
      shortDescription: 'Plataforma de comunicación digital estudiantil diseñada con experiencia editorial moderna, noticias destacadas, artículos técnicos, avisos y agenda de eventos.',
      description: 'Plataforma digital de noticias y comunicación estudiantil con experiencia editorial moderna, cobertura de eventos y avisos institucionales.',
      fullContent: 'A.R.C.A. News es una plataforma de comunicación digital desarrollada para centralizar y difundir información relevante para la comunidad universitaria. Su propósito es ofrecer un espacio donde los estudiantes puedan mantenerse informados sobre noticias, eventos, actividades, iniciativas y novedades de A.R.C.A. PROGRAM y el entorno de la ingeniería de software. La interfaz ofrece una experiencia editorial moderna, priorizando la presentación de noticias destacadas, artículos de divulgación tecnológica y avisos importantes.',
      tech: ['React', 'TypeScript', 'Supabase', 'CSS3 (Editorial Layout)', 'Responsive Design', 'Framer Motion'],
      challenges: [
        'Diseño de una cuadrícula editorial dinámica y adaptable que destaque noticias principales sin saturar al usuario.',
        'Organización de publicaciones por categorías temáticas (talleres, convocatorias, tecnología y vida universitaria).',
        'Optimización de tiempos de carga en dispositivos móviles para facilitar la lectura rápida en el campus.'
      ],
      results: [
        'Canal oficial de información con alta legibilidad y navegación orientada al descubrimiento de contenidos.',
        'Mayor participación y visibilidad de los proyectos y talleres impulsados por la asociación.',
        'Identidad visual moderna perfectamente integrada con los lineamientos gráficos de A.R.C.A.'
      ],
      features: [
        {
          title: 'Portada Editorial & Artículos Destacados',
          desc: 'Módulo principal con titulares dinámicos, noticias destacadas y presentación visual de alto impacto.'
        },
        {
          title: 'Agenda de Eventos y Talleres',
          desc: 'Sección especializada para el anuncio de webinars, hackathones y sesiones de aprendizaje colaborativo.'
        },
        {
          title: 'Sistema de Avisos Destacados',
          desc: 'Alertas prioritarias en la interfaz para comunicar novedades institucionales urgentes a la comunidad.'
        },
        {
          title: 'Categorización & Búsqueda Rápida',
          desc: 'Filtros ágiles para descubrir artículos técnicos, novedades de proyectos y comunicados oficiales.'
        }
      ],
      architecture: [
        'Frontend en React y TypeScript con maquetación editorial responsiva.',
        'Integración con la capa de datos de Supabase para publicación y actualización de notas.',
        'Animaciones y transiciones de lectura fluidas con Framer Motion.'
      ],
      retrospective: {
        lessons: [
          'Una tipografía cuidada y un espaciado equilibrado marcan la diferencia en plataformas de lectura digital.',
          'La jerarquía visual con titulares destacados incrementa el engagement del estudiante con las noticias.'
        ]
      }
    },
    EN: {
      title: 'A.R.C.A. News',
      category: 'Digital Media & Editorial',
      demoLabel: 'Visit A.R.C.A. News',
      shortDescription: 'Digital student communication platform with modern editorial UX, publishing featured news, software engineering articles, announcements, and events.',
      description: 'Digital student news and communication platform with a modern editorial experience, event coverage, and institutional announcements.',
      fullContent: 'A.R.C.A. News is a digital communication platform developed to centralize and broadcast relevant information for the university community. Its purpose is to provide a dedicated space where students can stay informed about news, events, activities, initiatives, and updates from A.R.C.A. PROGRAM and the software engineering environment. The interface delivers a modern editorial experience, prioritizing featured news, tech articles, and key announcements.',
      tech: ['React', 'TypeScript', 'Supabase', 'CSS3 (Editorial Layout)', 'Responsive Design', 'Framer Motion'],
      challenges: [
        'Designing a dynamic and responsive editorial grid that highlights top stories without overwhelming the reader.',
        'Organizing publications by thematic categories (workshops, calls, technology, and university life).',
        'Optimizing load times on mobile devices to facilitate quick reading on campus.'
      ],
      results: [
        'Official communication channel with high readability and content-discovery navigation.',
        'Increased student participation and visibility for association-driven projects and workshops.',
        'Modern visual identity seamlessly integrated with A.R.C.A. brand guidelines.'
      ],
      features: [
        {
          title: 'Editorial Frontpage & Featured Articles',
          desc: 'Main module with dynamic headlines, featured stories, and high-impact visual presentation.'
        },
        {
          title: 'Events & Workshops Schedule',
          desc: 'Specialized section announcing webinars, hackathons, and collaborative learning sessions.'
        },
        {
          title: 'Priority Announcements System',
          desc: 'Highlighted interface alerts to communicate urgent institutional updates to the community.'
        },
        {
          title: 'Categorization & Quick Discovery',
          desc: 'Agile filters to explore technical articles, project updates, and official statements.'
        }
      ],
      architecture: [
        'React and TypeScript frontend with responsive editorial layout.',
        'Integration with Supabase data layer for article publishing and updates.',
        'Smooth reading animations and transitions powered by Framer Motion.'
      ],
      retrospective: {
        lessons: [
          'Careful typography and balanced spacing make a decisive difference in digital reading platforms.',
          'Visual hierarchy with featured headlines boosts student engagement with community news.'
        ]
      }
    }
  },
  {
    id: 'edam-web',
    group: 'fullstack',
    featured: false,
    image: edanDecorImg,
    imageFit: 'contain',
    isPrivate: true,
    demoUrl: null,
    docUrl: 'https://github.com/LichtSebas/tienda-muebles',
    tags: ['PHP 8 Nativo', 'PostgreSQL', 'Supabase Auth', 'Docker', 'AJAX'],
    ES: {
      title: 'EdanDecor Mueblería E-commerce',
      category: 'Fullstack E-Commerce',
      demoLabel: 'Repositorio Privado',
      shortDescription: 'Plataforma e-commerce fullstack de muebles con catálogo desacoplado, autenticación OTP vía Supabase, carrito dinámico AJAX y panel de administración integral.',
      description: 'Plataforma e-commerce fullstack para exhibición, gestión e inventario de muebles con catálogo desacoplado y arquitectura modular.',
      fullContent: 'EdanDecor nació de la necesidad de digitalizar la experiencia de compra de muebles, combinando una interfaz elegante y accesible con una arquitectura backend robusta basada en PHP nativo y PostgreSQL (alojado en Supabase). La plataforma resolvió el reto de exhibir variantes complejas de muebles (muestras de color Hexadecimal, dimensiones, materiales) y asegurar las transacciones mediante un sistema de autenticación seguro de doble flujo y protección Anti-CSRF.',
      tech: ['PHP 8 Nativo', 'PostgreSQL (Supabase)', 'Docker', 'Render', 'JavaScript (Fetch API / AJAX)', 'Supabase Auth', 'CSS3 (Mobile-First)', 'PDO'],
      challenges: [
        'Implementación de un catálogo 100% responsive a ancho completo con filtro lateral fijo y muestras de color en códigos Hexadecimales reales.',
        'Construcción de un flujo de autenticación seguro integrando Supabase Auth REST API con código OTP de 8 dígitos y Magic Links de 1 solo clic.',
        'Optimización de la experiencia de compra mediante carrito dinámico procesado en segundo plano con Fetch API / AJAX sin recargas de página.',
        'Garantizar la seguridad del servidor mediante protección Anti-CSRF tokenizada de 32 bytes y consultas preparadas PDO contra inyección SQL.'
      ],
      results: [
        'Despliegue automatizado en producción con contenedor Docker parametrizado en Render.',
        'Arquitectura segura libre de inyecciones SQL, ataques CSRF y secuestro de sesiones.',
        'Integración directa de cotizaciones rápidas a WhatsApp desde el Showcase / Modal de Vista Rápida.',
        'Panel de Staff/Administración integral (admin/panel.php) para control de catálogo CRUD, stock, órdenes de compra y comentarios.'
      ],
      features: [
        {
          title: 'Catálogo & Modal Showcase',
          desc: 'Filtros por categoría, precio y muestras circulares de color Hexadecimal. Vista Rápida con ficha técnica sin recortes de imagen y cotización directa a WhatsApp.'
        },
        {
          title: 'Carrito de Compras Asíncrono',
          desc: 'Modificación de cantidades, recálculo de subtotales y eliminación de productos mediante Fetch API (AJAX) sin refrescar la página.'
        },
        {
          title: 'Panel de Administración Staff',
          desc: 'Gestión CRUD de muebles, edición de paletas Hexadecimales, actualización de stock, cambio de estado de pedidos y moderación de testimonios.'
        },
        {
          title: 'Doble Flujo de Autenticación',
          desc: 'Registro seguro en Supabase Auth, verificación por código OTP de 8 dígitos con temporizador y Magic Link para inicio de sesión inmediato.'
        }
      ],
      architecture: [
        'Backend en PHP nativo con patrón de diseño modular (includes/, admin/, database/).',
        'Base de datos PostgreSQL en Supabase con Prepared Statements PDO y Triggers de validación.',
        'Despliegue contenerizado en Docker parametrizado mediante variables de entorno (.env).',
        'Protección Anti-CSRF (tokens de 32 bytes) y cookies de sesión seguras (HttpOnly, SameSite=Lax).'
      ],
      architectureFlow: [
        {
          step: '01',
          title: 'Cliente / UI (Navegador)',
          subtitle: 'Vanilla JS + Fetch API + CSS3',
          desc: 'Interfaz responsive desacoplada. Peticiones AJAX asíncronas con envío de tokens Anti-CSRF de 32 bytes en cada interacción.',
          icon: 'Laptop',
          tag: 'HTTPS / JSON'
        },
        {
          step: '02',
          title: 'Backend en Render (Docker)',
          subtitle: 'PHP 8 Nativo + PDO Controllers',
          desc: 'Procesamiento modular, sanitización de entradas de usuario, lógica del carrito y gestión de sesiones seguras.',
          icon: 'Server',
          tag: 'PDO Prepared'
        },
        {
          step: '03',
          title: 'Supabase Auth API',
          subtitle: 'REST API + SMTP Mailer',
          desc: 'Gestión cifrada de contraseñas, generación de códigos OTP de 8 dígitos y verificación automática por Magic Links.',
          icon: 'KeyRound',
          tag: 'OTP / Magic Links'
        },
        {
          step: '04',
          title: 'PostgreSQL DB (Supabase)',
          subtitle: 'PostgreSQL 15 + Triggers SQL',
          desc: 'Persistencia del catálogo, paletas Hexadecimales, inventario, carritos permanentes y restricciones por Triggers.',
          icon: 'Database',
          tag: 'PostgreSQL'
        }
      ],
      retrospective: {
        lessons: [
          'Integración fluida de la REST API de Supabase Auth en un entorno PHP Nativo sin utilizar SDKs pesados de terceros.',
          'Desacoplamiento efectivo de la vista de catálogo a 100% de ancho con filtro lateral fijo de 260px en CSS Vanilla.',
          'Diseño de seguridad multicapa con tokens Anti-CSRF de 32 bytes y parametrización mediante Docker/Render.'
        ],
        roadmap: [
          'Integración de pasarela de pago directa (MercadoPago / Yape / Plin) dentro del proceso de checkout.',
          'Implementación de sistema de caché con Redis para optimizar el rendimiento del catálogo en picos de alta demanda.',
          'Envío automatizado de comprobantes y alertas de pedido mediante la API oficial de WhatsApp Business.'
        ]
      }
    },
    EN: {
      title: 'EdanDecor Furniture E-commerce',
      category: 'Fullstack E-Commerce',
      demoLabel: 'Private Repository',
      shortDescription: 'Fullstack furniture e-commerce platform featuring decoupled catalog, Supabase Auth OTP, AJAX dynamic cart, and comprehensive admin panel.',
      description: 'Fullstack e-commerce platform for furniture display, inventory management, and sales with a decoupled catalog and modular architecture.',
      fullContent: 'EdanDecor was created to digitize the furniture shopping experience, combining an elegant, accessible interface with a robust backend architecture built on native PHP 8 and PostgreSQL (hosted on Supabase). The platform solved the challenge of displaying complex furniture variants (real Hexadecimal color swatches, dimensions, materials) and securing transactions through a dual-flow authentication system and Anti-CSRF protection.',
      tech: ['Native PHP 8', 'PostgreSQL (Supabase)', 'Docker', 'Render', 'JavaScript (Fetch API / AJAX)', 'Supabase Auth', 'CSS3 (Mobile-First)', 'PDO'],
      challenges: [
        'Implementing a 100% responsive full-width catalog with a fixed sidebar filter and real Hexadecimal color swatches.',
        'Building a secure authentication flow integrating the Supabase Auth REST API with 8-digit OTP codes and 1-click Magic Links.',
        'Optimizing the shopping experience via a dynamic background cart powered by Fetch API / AJAX without page reloads.',
        'Ensuring server security with 32-byte tokenized Anti-CSRF protection and PDO prepared statements against SQL injection.'
      ],
      results: [
        'Automated production deployment using a parameterized Docker container on Render.',
        'Secure architecture protected against SQL injection, CSRF attacks, and session hijacking.',
        'Direct quick-quote integration with WhatsApp from the Quick View Showcase modal.',
        'Comprehensive Staff/Admin panel (admin/panel.php) for CRUD catalog control, stock, orders, and reviews.'
      ],
      features: [
        {
          title: 'Catalog & Showcase Modal',
          desc: 'Category, price, and circular Hexadecimal color filters. Quick View with uncropped technical specs and direct WhatsApp quoting.'
        },
        {
          title: 'Asynchronous Shopping Cart',
          desc: 'Quantity updates, subtotal recalculation, and item removal via Fetch API (AJAX) without refreshing the page.'
        },
        {
          title: 'Staff Administration Panel',
          desc: 'Furniture CRUD management, Hexadecimal palette editing, stock updates, order status tracking, and testimonial moderation.'
        },
        {
          title: 'Dual Authentication Flow',
          desc: 'Secure registration in Supabase Auth, 8-digit timed OTP verification, and instant Magic Link login.'
        }
      ],
      architecture: [
        'Native PHP backend with modular design pattern (includes/, admin/, database/).',
        'PostgreSQL database on Supabase with PDO Prepared Statements and validation Triggers.',
        'Containerized Docker deployment parameterized via environment variables (.env).',
        'Anti-CSRF protection (32-byte tokens) and secure session cookies (HttpOnly, SameSite=Lax).'
      ],
      architectureFlow: [
        {
          step: '01',
          title: 'Client / UI (Browser)',
          subtitle: 'Vanilla JS + Fetch API + CSS3',
          desc: 'Decoupled responsive interface. Asynchronous AJAX requests sending 32-byte Anti-CSRF tokens on every interaction.',
          icon: 'Laptop',
          tag: 'HTTPS / JSON'
        },
        {
          step: '02',
          title: 'Render Backend (Docker)',
          subtitle: 'Native PHP 8 + PDO Controllers',
          desc: 'Modular processing, user input sanitization, cart business logic, and secure session management.',
          icon: 'Server',
          tag: 'PDO Prepared'
        },
        {
          step: '03',
          title: 'Supabase Auth API',
          subtitle: 'REST API + SMTP Mailer',
          desc: 'Encrypted password management, 8-digit OTP code generation, and automatic Magic Link verification.',
          icon: 'KeyRound',
          tag: 'OTP / Magic Links'
        },
        {
          step: '04',
          title: 'PostgreSQL DB (Supabase)',
          subtitle: 'PostgreSQL 15 + SQL Triggers',
          desc: 'Catalog persistence, Hexadecimal palettes, inventory, permanent carts, and Trigger constraints.',
          icon: 'Database',
          tag: 'PostgreSQL'
        }
      ],
      retrospective: {
        lessons: [
          'Seamless integration of the Supabase Auth REST API in a Native PHP environment without heavy third-party SDKs.',
          'Effective decoupling of the full-width catalog view with a fixed 260px sidebar filter in Vanilla CSS.',
          'Multi-layered security design with 32-byte Anti-CSRF tokens and Docker/Render parameterization.'
        ],
        roadmap: [
          'Direct payment gateway integration (MercadoPago / Yape / Plin) within the checkout flow.',
          'Redis caching layer implementation to optimize catalog performance during high-traffic peaks.',
          'Automated receipt and order alert delivery via the official WhatsApp Business API.'
        ]
      }
    }
  },
  {
    id: 'sat-kiosco-inteligente',
    group: 'ux',
    featured: false,
    image: satKioscoImg,
    isPrivate: false,
    demoUrl: 'https://lichtsebas.github.io/sat-kiosco-demo/',
    docUrl: 'https://github.com/LichtSebas/sat-kiosco-demo',
    tags: ['React', 'Figma', 'UX/UI Design', 'Accesibilidad'],
    ES: {
      title: 'SAT Kiosco',
      category: 'UX & Civic Technology',
      demoLabel: 'Ver Demo Interactiva',
      shortDescription: 'Kiosco digital interactivo diseñado para ayudar a adultos mayores a realizar consultas, pagos y trámites tributarios de forma segura, intuitiva y asistida.',
      description: 'Kiosco digital para facilitar los trámites tributarios a adultos mayores.',
      fullContent: 'El proyecto "SAT Kiosco" surge de la necesidad de cerrar la brecha digital en la atención al público adulto mayor. Se diseñó una interfaz interactiva y amigable que simplifica procesos complejos, pagos y consultas, reduciendo la fricción y el tiempo de espera en ventanillas.',
      tech: ['React', 'Figma', 'UX/UI Design', 'Accesibilidad'],
      challenges: [
        'Diseñar una interfaz altamente intuitiva para usuarios con poca experiencia digital.',
        'Integración fluida con los sistemas heredados de la institución tributaria.'
      ],
      results: [
        'Reducción del 50% en los tiempos de espera presencial.',
        'Altos índices de satisfacción reportados por usuarios mayores de 60 años.'
      ]
    },
    EN: {
      title: 'SAT Kiosk',
      category: 'UX & Civic Technology',
      demoLabel: 'View Interactive Demo',
      shortDescription: 'Interactive digital kiosk designed to assist senior citizens with tax inquiries, payments, and procedures in a secure and intuitive manner.',
      description: 'Digital kiosk designed to simplify tax procedures for senior citizens.',
      fullContent: 'The "SAT Kiosk" project arose from the need to bridge the digital divide in public service for senior citizens. We designed an interactive, senior-friendly interface that simplifies complex procedures, payments, and inquiries, reducing friction and waiting times at service windows.',
      tech: ['React', 'Figma', 'UX/UI Design', 'Accessibility'],
      challenges: [
        'Designing a highly intuitive interface for users with limited digital literacy.',
        'Seamless integration with legacy tax institution systems.'
      ],
      results: [
        '50% reduction in in-person waiting times.',
        'High satisfaction rates reported by users over 60 years old.'
      ]
    }
  },
  {
    id: 'audio-extractor',
    group: 'desktop',
    featured: false,
    image: audioExtractorImg,
    isPrivate: false,
    docUrl: 'https://github.com/LichtSebas/AudioExtractor',
    tags: ['Java 17+', 'Swing GUI', 'FFmpeg CLI', 'Multi-threading', 'ID3 Tags'],
    ES: {
      title: 'AudioExtractor Pro v3.0',
      category: 'Desktop App & Java',
      shortDescription: 'Aplicación de escritorio en Java 17+ y FFmpeg para conversión, recorte preciso por tiempo, efectos de ganancia, metadatos ID3 y cola por lotes.',
      description: 'Aplicación de escritorio Java Swing/AWT de alto rendimiento para extracción, recorte milimétrico, edición de metadatos ID3 y procesamiento de audio por lotes con FFmpeg.',
      fullContent: 'AudioExtractor Pro v3.0 es una potente aplicación de escritorio desarrollada en Java 17+ que automatiza el procesamiento multimedia mediante la integración directa del ejecutable FFmpeg.',
      tech: ['Java 17+ (JDK)', 'Swing / AWT (GUI)', 'FFmpeg Core', 'ProcessBuilder CLI', 'Multi-threading', 'ID3 Tagging', 'Java Sound API', 'Batch Processing'],
      challenges: [],
      results: []
    },
    EN: {
      title: 'AudioExtractor Pro v3.0',
      category: 'Desktop App & Java',
      shortDescription: 'Desktop application built with Java 17+ and FFmpeg for fast audio extraction, trimming, volume gain, ID3 metadata editing, and batch queues.',
      description: 'High-performance Java Swing/AWT desktop application for audio extraction, precision trimming, ID3 metadata editing, and batch processing with FFmpeg.',
      fullContent: 'AudioExtractor Pro v3.0 is a desktop application built in Java 17+ that automates multimedia processing through direct integration with the FFmpeg executable.',
      tech: ['Java 17+ (JDK)', 'Swing / AWT (GUI)', 'FFmpeg Core', 'ProcessBuilder CLI', 'Multi-threading', 'ID3 Tagging', 'Java Sound API', 'Batch Processing'],
      challenges: [],
      results: []
    }
  },
  {
    id: 'sorteos-plat',
    group: 'fullstack',
    featured: false,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    isPrivate: false,
    tags: ['JavaScript', 'Node.js', 'PostgreSQL', 'Framer Motion'],
    ES: {
      title: 'Plataforma de Sorteos',
      category: 'Automation & Web',
      shortDescription: 'Plataforma automatizada para la gestión de sorteos transparentes y verificación de usuarios.',
      description: 'Sistema automatizado para la realización de sorteos transparentes y seguros.',
      fullContent: 'Desarrollé un algoritmo de aleatoriedad verificable y una interfaz intuitiva para que los usuarios puedan participar y ver resultados en tiempo real.',
      tech: ['JavaScript', 'Node.js', 'PostgreSQL', 'Framer Motion'],
      challenges: [
        'Seguridad contra scripts de participación automática.',
        'Manejo de picos de tráfico durante los sorteos.'
      ],
      results: [
        'Más de 500 sorteos realizados con éxito.',
        'Cero incidencias de seguridad reportadas.'
      ]
    },
    EN: {
      title: 'Raffle & Sweepstakes Platform',
      category: 'Automation & Web',
      shortDescription: 'Automated platform for running transparent, secure raffles and verifying participant eligibility.',
      description: 'Automated system for conducting transparent and secure raffles.',
      fullContent: 'Developed a verifiable randomness algorithm and an intuitive interface allowing users to participate and view results in real time.',
      tech: ['JavaScript', 'Node.js', 'PostgreSQL', 'Framer Motion'],
      challenges: [
        'Security against automated participation scripts.',
        'Handling traffic spikes during live draws.'
      ],
      results: [
        'Over 500 raffles successfully executed.',
        'Zero security incidents reported.'
      ]
    }
  }
];

