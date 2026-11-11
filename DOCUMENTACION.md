# Documentación del Portafolio - Guía Completa de Desarrollo y Automatización

Esta guía detalla la arquitectura del proyecto, la infraestructura de despliegue y el funcionamiento de la automatización de certificados. Úsala como referencia a futuro para mantener, actualizar y expandir tu portafolio.

---

## 1. Stack Tecnológico

El proyecto está construido sobre tecnologías web modernas e infraestructura automatizada:

*   **Frontend**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) (para un entorno de desarrollo ultrarrápido).
*   **Enrutamiento**: `react-router-dom` para gestionar las páginas (`/` y `/certificados`) sin recargar el navegador.
*   **Animaciones**: `framer-motion` para transiciones suaves, hover en tarjetas y efectos de entrada de componentes.
*   **Estilos**: CSS Vanilla con variables globales definidas en [index.css](file:///d:/Portfolio/src/index.css).
*   **Automatización**: Python 3 con la biblioteca `PyMuPDF` (`fitz`) para procesar archivos PDF y renderizado de imágenes.
*   **CI/CD**: GitHub Actions para compilación y despliegue automático hacia GitHub Pages.

---

## 2. Estructura de Carpetas

A continuación se muestra la arquitectura de directorios del proyecto:

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Configuración del despliegue automático en GitHub Actions
├── Certificados/               # Carpeta donde colocas tus certificados en formato PDF
├── public/                     # Archivos estáticos servidos directamente
│   ├── certificados/           # Imágenes PNG de certificados generadas por el script
│   └── CV_Sebastian_Gonzales.pdf # Tu currículum listo para descarga
├── scripts/
│   └── process_certificates.py # Script de Python para procesamiento de PDFs
├── src/
│   ├── assets/                 # Imágenes estáticas y recursos de la app
│   ├── components/             # Componentes React de la interfaz
│   │   ├── About.jsx           # Sección "Sobre Mí" con contador dinámico
│   │   ├── Certificates.jsx    # Página de Certificados con visualizador modal
│   │   ├── Header.jsx          # Barra de navegación adaptable
│   │   ├── Hero.jsx            # Banner principal con descarga de CV
│   │   └── ...
│   ├── data/
│   │   ├── certificates.json   # Datos de certificados (autogenerado y editable)
│   │   └── logo_mappings.json  # Base de datos de firmas (MD5) de logos
│   ├── App.jsx                 # Configuración de rutas y footer
│   ├── index.css               # Diseño global, variables y estilos de la aplicación
│   └── main.jsx                # Punto de entrada de React
├── vite.config.js              # Configuración del empaquetador Vite
├── package.json                # Dependencias y scripts del proyecto
└── DOCUMENTACION.md            # Este archivo de documentación
```

---

## 3. Flujo de Trabajo para Nuevos Certificados

El script de Python automatiza el tedioso trabajo de recortar imágenes y escribir JSONs. Sigue estos pasos para añadir nuevos certificados:

### Paso 1: Colocar el PDF
Copia tu nuevo certificado en formato `.pdf` dentro del directorio local [Certificados/](file:///d:/Portfolio/Certificados/).

### Paso 2: Ejecutar el Script
Abre tu consola en la raíz del proyecto y ejecuta:
```bash
python scripts/process_certificates.py
```

### Paso 3: Interacción (Solo la primera vez por plataforma)
*   Si el script encuentra un logo que **ya conoce** (como *Becas Grupo Romero*), asignará el emisor de inmediato.
*   Si encuentra un **logo nuevo**, la terminal te preguntará una sola vez:
    `¿Quién emitió este certificado? (Ej: Becas Grupo Romero, Udemy, Platzi):`
*   Escribe el nombre y presiona **Enter**. El script guardará esa firma del logo en [logo_mappings.json](file:///d:/Portfolio/src/data/logo_mappings.json) y nunca más te volverá a preguntar por certificados de esa misma plataforma.

### Paso 4: Opcional - Personalizar Datos
Abre el archivo [certificates.json](file:///d:/Portfolio/src/data/certificates.json). Verás un nuevo bloque correspondiente a tu certificado. Si quieres, puedes:
*   Añadirle un enlace de validación en la clave `"credentialUrl"`.
*   Personalizar la lista de `"skills"` para que se muestren etiquetas de tecnologías en el modal.
*   Mejorar la `"description"`.
*   *Nota*: El script **respeta y no sobreescribe** los cambios que hagas manualmente dentro del archivo JSON en las siguientes ejecuciones.

---

## 4. Despliegue Automático (GitHub Actions)

Hemos configurado un pipeline profesional para que nunca más tengas que compilar tu proyecto a mano y subir la carpeta `dist` manualmente a la web de GitHub.

### El flujo es automático:
1. Cuando realizas cambios en tu portafolio local, añades los cambios y haces un commit:
   ```bash
   git add .
   git commit -m "Añadidos nuevos certificados y optimización"
   ```
2. Envías tus commits a tu rama en GitHub:
   ```bash
   git push origin main
   ```
3. GitHub Actions detectará la subida y ejecutará la receta escrita en [deploy.yml](file:///d:/Portfolio/.github/workflows/deploy.yml):
   - Descarga tu código fuente.
   - Instala Node.js y las dependencias de `package.json`.
   - Compila tu proyecto (`npm run build`).
   - Sube la salida directamente a los servidores de GitHub Pages.
4. Puedes monitorizar si el despliegue fue exitoso entrando en la pestaña **Actions** de tu repositorio en la web de GitHub.

---

## 5. Mantenimiento del Servidor Local (Desarrollo)

Para visualizar y editar tu portafolio en tiempo real en tu computadora:

*   **Instalar Dependencias** (si clonas el proyecto en otra PC):
    ```bash
    npm install
    ```
*   **Correr el Servidor Local**:
    ```bash
    npm run dev
    ```
    Abre en tu navegador la dirección `http://localhost:5173`. Todos los cambios que hagas en los archivos `.jsx` o `.css` se reflejarán instantáneamente gracias al Hot Module Replacement (HMR) de Vite.
*   **Probar Compilación de Producción**:
    ```bash
    npm run build
    ```
    Útil para comprobar antes de subir los cambios que no haya errores tipográficos de JS o referencias rotas.
