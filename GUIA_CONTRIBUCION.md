# Guía de Contribución: Portal Web Escolar

¡Bienvenido a la plataforma web de la institución! Este repositorio está concebido para ser un **portal escolar abierto y dinámico** alojado en GitHub, permitiendo que diferentes estudiantes y equipos de trabajo sumen sus proyectos educativos (Ciberseguridad, Informática, Robótica, Ciencias, etc.).

---

## 🚀 Principios del Proyecto

1. **Aplicación Estática Colaborativa**: Funciona 100% en el navegador (React + TypeScript + Vite). No requiere servidor backend, lo que facilita su despliegue gratuito en **GitHub Pages**.
2. **Arquitectura Modular**: Cada proyecto estudiantil vive dentro de su propia carpeta en `src/proyectos/` o se registra en `src/config/registroProyectos.ts`.
3. **Consistencia Visual**: Todos los proyectos deben reutilizar los componentes y estilos base (`src/components/comunes/`) para mantener una imagen profesional y cohesiva.

---

## 🛠️ Cómo Agregar un Nuevo Proyecto Paso a Paso

### Paso 1: Clonar el Repositorio e Instalar Dependencias
```bash
git clone https://github.com/tu-usuario/LB-LEMUS.git
cd LB-LEMUS
npm install
npm run dev
```

### Paso 2: Copiar la Plantilla del Proyecto
Duplica la carpeta `src/proyectos/_plantilla/` y mebrala con el nombre de tu proyecto (por ejemplo `src/proyectos/mi-nuevo-proyecto/`).

```
src/proyectos/
├── ciberseguridad/
├── informatica/
└── mi-nuevo-proyecto/    <-- Tu nueva carpeta
    ├── index.tsx
    ├── MiNuevoProyectoPage.tsx
    └── MiNuevoProyectoPage.css
```

### Paso 3: Registrar tu Proyecto
Abre el archivo [registroProyectos.ts](file:///home/delacruzcr/LB-LEMUS/src/config/registroProyectos.ts) localizado en `src/config/registroProyectos.ts` y agrega la configuración de tu proyecto en la lista `PROYECTOS_REGISTRADOS`:

```typescript
{
  id: 'mi-nuevo-proyecto',
  titulo: 'Mi Nuevo Proyecto Escolar',
  categoria: 'Área Técnica',
  descripcion: 'Explicación concisa de lo que trata tu proyecto.',
  autores: 'Nombres de los Integrantes / Grado',
  gradoOComunidad: '4to Año B',
  icono: 'Code', // Icono de Lucide React
  rutaBase: '/proyectos/mi-nuevo-proyecto',
  activo: true,
  fechaCreacion: '2026',
  etiquetas: ['Informática', 'Educación', 'Innovación']
}
```

### Paso 4: Definir la Ruta en `App.tsx`
Importa la vista principal de tu proyecto en `src/App.tsx` y agrega la ruta correspondiente:

```tsx
import MiNuevoProyectoPage from './proyectos/mi-nuevo-proyecto/MiNuevoProyectoPage';

// En el componente de rutas:
<Route path="/proyectos/mi-nuevo-proyecto" element={<MiNuevoProyectoPage />} />
```

### Paso 5: Validar y Subir Cambios a GitHub
Antes de enviar un Pull Request, ejecuta la verificación local:

```bash
# Probar que no hay errores de sintaxis ni de TypeScript
npm run build

# Subir tus cambios
git checkout -b proyecto/mi-nuevo-proyecto
git add .
git commit -m "feat: Agregar proyecto de Mi Nuevo Proyecto Escolar"
git push origin proyecto/mi-nuevo-proyecto
```

---

## 🎨 Lineamientos de Estilo y Nomenclatura

- **Idioma de Nomenclatura**: Las funciones, tipos, interfaces y estados deben escribirse en español (ej. `const cargarDatos = () => {}`, `interface DatosModulo`).
- **Iconos**: Utiliza la librería [lucide-react](https://lucide.dev/) para iconos uniformes.
- **Responsividad**: Garantiza que tu interfaz se adapte perfectamente a teléfonos móviles y computadoras.
