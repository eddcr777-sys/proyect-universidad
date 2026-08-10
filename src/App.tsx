import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Justificacion from './pages/Justificacion/Justificacion';
import Indices from './pages/Acceder/Indices';
import SobreDevs from './pages/Nosotros/SobreDevs';
import SobreUE from './pages/Nosotros/SobreU.E';
import GuiasDocentes from './pages/Guias/Guias-Docentes';
import GuiasPadres from './pages/Guias/Guias-Padres';

// ── Flujo de Módulos (4 Niveles) ──
import LandingModulos from './pages/Modulos/LandingModulos';       // Nivel 1 — Bienvenida
import PresentacionGrado from './pages/Modulos/PresentacionGrado'; // Nivel 2 — Catálogo
import DescripcionModulo from './pages/Modulos/DescripcionModulo'; // Nivel 3 — Pre-Lobby
import ModuloRouter from './pages/Modulos/ModuloRouter';           // Nivel 4 — Lección

import Cabecera from './components/comunes/Cabecera';
import PiePagina from './components/comunes/PiePagina';
import './App.css';

/** Redirige /presentacion/:grado → /modulos/grado/:grado preservando el parámetro */
const RedireccionPresentacion: React.FC = () => {
  const { grado } = useParams<{ grado: string }>();
  return <Navigate to={`/modulos/grado/${grado}`} replace />;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Cabecera />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/justificacion" element={<Justificacion />} />
            <Route path="/indices" element={<Indices />} />
            <Route path="/nosotros/sobre-devs" element={<SobreDevs />} />
            <Route path="/nosotros/sobre-ue" element={<SobreUE />} />
            <Route path="/guias/docentes" element={<GuiasDocentes />} />
            <Route path="/guias/padres" element={<GuiasPadres />} />

            {/* ── FLUJO DE MÓDULOS (4 NIVELES) ── */}
            {/* Nivel 1: Bienvenida y selección de grado */}
            <Route path="/modulos" element={<LandingModulos />} />

            {/* Nivel 2: Catálogo personalizado por grado */}
            <Route path="/modulos/grado/:grado" element={<PresentacionGrado />} />

            {/* Nivel 3: Pre-Lobby / Descripción del módulo */}
            <Route path="/modulos/info/:moduloId/:grado" element={<DescripcionModulo />} />

            {/* Nivel 4: Lección interactiva */}
            <Route path="/modulos/leccion/:moduloId/:grado" element={<ModuloRouter />} />

            {/* ── REDIRECCIONES DE COMPATIBILIDAD (rutas antiguas) ── */}
            <Route path="/presentacion/:grado" element={<RedireccionPresentacion />} />
            <Route path="/dashboard/:grado" element={<Navigate to="/modulos" replace />} />
          </Routes>
        </main>
        <PiePagina />
      </div>
    </Router>
  );
};

export default App;