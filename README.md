# Portafolio Profesional - Sebastian Gonzales

Portafolio web interactivo y de alto rendimiento diseñado para destacar habilidades de desarrollo de software, proyectos y certificaciones.

🔗 **Sitio en vivo**: [https://sebastianga.xyz](https://sebastianga.xyz)

---

## 🚀 Características Clave

*   **Diseño Interactivo y Fluido**: Interfaz moderna de tipo *Glassmorphism* con animaciones dinámicas gestionadas por `framer-motion`.
*   **Cursor Inteligente**: Cursor personalizado con físicas inerciales (`useSpring`) que se adapta a elementos interactivos y se apaga automáticamente en pantallas táctiles.
*   **Sección de Certificados**: Visualizador dinámico de certificaciones que incluye un modal interactivo con detalles ampliados y habilidades validadas.
*   **Automatización con Python**: Script que analiza PDFs de certificados, genera previsualizaciones PNG optimizadas de manera automática y aprende a reconocer emisores cruzando las firmas MD5 de sus logos.
*   **Despliegue Continuo (CI/CD)**: Pipeline en GitHub Actions configurado para compilar y publicar los cambios en vivo en cada `git push`.

---

## 📖 Documentación Detallada

Toda la información de la arquitectura técnica, guías de mantenimiento local y automatización de certificados se encuentra documentada en español:

👉 **[DOCUMENTACION.md](file:///d:/Portfolio/DOCUMENTACION.md)**

---

## 🛠️ Comandos Rápidos

### Instalación de dependencias
```bash
npm install
```

### Iniciar servidor de desarrollo local
```bash
npm run dev
```

### Ejecutar compilación de producción local
```bash
npm run build
```

### Ejecutar script de procesamiento de certificados
```bash
python scripts/process_certificates.py
```
