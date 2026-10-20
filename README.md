# Portal Web Escolar y Showcase de Proyectos Estudiantiles — C.E. Antonio Lemus Pérez

Plataforma web estática y colaborativa diseñada para dar a conocer la institución educativa **C.E. Antonio Lemus Pérez** y servir como un espacio abierto en GitHub donde estudiantes y profesores puedan publicar e integrar sus propios proyectos educativos (Ciberseguridad, Informática, Robótica, Ciencias, etc.).

---

## 🌟 Características Principales

- **100% Estático y Gratuito**: Construido con **React 19 + TypeScript + Vite**. No requiere backend y es totalmente desplegable en **GitHub Pages**, Vercel o Netlify.
- **Showcase de Proyectos Estudiantiles**: Registro dinámico de proyectos integrados (`/proyectos`), empezando por Ciberseguridad e Informática.
- **Plantilla para Nuevos Proyectos**: Incluye un proyecto modelo (`src/proyectos/_plantilla/`) listo para ser duplicado por nuevos estudiantes.
- **Progresive Web App (PWA)**: Preparado para funcionamiento sin conexión.

---

## 🚀 Cómo Ejecutar en Desarrollo Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/LB-LEMUS.git

# 2. Entrar a la carpeta del proyecto
cd LB-LEMUS

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

---

## 🤝 ¿Cómo Agregar un Nuevo Proyecto Estudiantil?

Cualquier estudiante o equipo puede sumar su trabajo siguiendo nuestra guía paso a paso:
👉 **[Lee la Guía de Contribución en GUIA_CONTRIBUCION.md](./GUIA_CONTRIBUCION.md)**

---

## 📁 Estructura del Repositorio

- `src/config/registroProyectos.ts`: Registro centralizado de proyectos activos.
- `src/proyectos/`: Directorio de proyectos estudiantiles (`ciberseguridad`, `informatica`, `_plantilla`).
- `src/pages/`: Páginas estáticas del portal institucional (Inicio, Nosotros, Guías, Showcase).
- `src/components/comunes/`: Sistema de componentes de diseño reutilizables.

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Libre para ser utilizado, mejorado y compartido por la comunidad educativa.
