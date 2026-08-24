import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Justificacion from './pages/Justificacion/Justificacion';
import Indices from './pages/Acceder/Indices';
import SobreDevs from './pages/Nosotros/SobreDevs';
import SobreUE from './pages/Nosotros/SobreU.E';
import GuiasDocentes from './pages/Guias/Guias-Docentes';
import GuiasPadres from './pages/Guias/Guias-Padres';

import ExploradorProyectos from './pages/ExploradorProyectos/ExploradorProyectos';
import InformaticaPage from './proyectos/informatica/InformaticaPage';

// ── Flujo de Módulos de Ciberseguridad ──
import LandingModulos from './pages/Modulos/LandingModulos';       // Nivel 1 — Bienvenida
import PresentacionGrado from './pages/Modulos/PresentacionGrado'; // Nivel 2 — Catálogo por grado
import DescripcionModulo from './pages/Modulos/DescripcionModulo'; // Nivel 3 — Pre-Lobby
import ModuloRouter from './pages/Modulos/ModuloRouter';           // Nivel 4 — Lección

import Cabecera from './components/comunes/Cabecera';
import PiePagina from './components/comunes/PiePagina';
import './App.css';

/** Redirecciones dinámicas con parámetros */
const RedireccionPresentacion: React.FC = () => {
  const { grado } = useParams<{ grado: string }>();
  return <Navigate to={`/proyectos/ciberseguridad/grado/${grado}`} replace />;
};

const RedireccionInfo: React.FC = () => {
  const { moduloId, grado } = useParams<{ moduloId: string; grado: string }>();
  return <Navigate to={`/proyectos/ciberseguridad/info/${moduloId}/${grado}`} replace />;
};

const RedireccionLeccion: React.FC = () => {
  const { moduloId, grado } = useParams<{ moduloId: string; grado: string }>();
  return <Navigate to={`/proyectos/ciberseguridad/leccion/${moduloId}/${grado}`} replace />;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Cabecera />
        <main>
          <Routes>
            {/* ── PORTAL DE LA ESCUELA ── */}
            <Route path="/" element={<HomePage />} />

            {/* ── SHOWCASE GENERAL DE PROYECTOS ESTUDIANTILES ── */}
            <Route path="/proyectos" element={<ExploradorProyectos />} />

            {/* ── PROYECTO 1: CIBERSEGURIDAD (ESTRUCTURA ANIDADA) ── */}
            <Route path="/proyectos/ciberseguridad" element={<LandingModulos />} />
            <Route path="/proyectos/ciberseguridad/justificacion" element={<Justificacion />} />
            <Route path="/proyectos/ciberseguridad/indices" element={<Indices />} />
            <Route path="/proyectos/ciberseguridad/nosotros/sobre-devs" element={<SobreDevs />} />
            <Route path="/proyectos/ciberseguridad/nosotros/sobre-ue" element={<SobreUE />} />
            <Route path="/proyectos/ciberseguridad/guias/docentes" element={<GuiasDocentes />} />
            <Route path="/proyectos/ciberseguridad/guias/padres" element={<GuiasPadres />} />
            <Route path="/proyectos/ciberseguridad/grado/:grado" element={<PresentacionGrado />} />
            <Route path="/proyectos/ciberseguridad/info/:moduloId/:grado" element={<DescripcionModulo />} />
            <Route path="/proyectos/ciberseguridad/leccion/:moduloId/:grado" element={<ModuloRouter />} />

            {/* ── PROYECTO 2: INFORMÁTICA ── */}
            <Route path="/proyectos/informatica" element={<InformaticaPage />} />

            {/* ── REDIRECCIONES DE RETROCOMPATIBILIDAD (URLs Antiguas) ── */}
            <Route path="/justificacion" element={<Navigate to="/proyectos/ciberseguridad/justificacion" replace />} />
            <Route path="/indices" element={<Navigate to="/proyectos/ciberseguridad/indices" replace />} />
            <Route path="/Indices" element={<Navigate to="/proyectos/ciberseguridad/indices" replace />} />
            <Route path="/nosotros/sobre-devs" element={<Navigate to="/proyectos/ciberseguridad/nosotros/sobre-devs" replace />} />
            <Route path="/nosotros/sobre-ue" element={<Navigate to="/proyectos/ciberseguridad/nosotros/sobre-ue" replace />} />
            <Route path="/guias/docentes" element={<Navigate to="/proyectos/ciberseguridad/guias/docentes" replace />} />
            <Route path="/guias/padres" element={<Navigate to="/proyectos/ciberseguridad/guias/padres" replace />} />
            <Route path="/modulos" element={<Navigate to="/proyectos/ciberseguridad" replace />} />
            <Route path="/modulos/grado/:grado" element={<RedireccionPresentacion />} />
            <Route path="/modulos/info/:moduloId/:grado" element={<RedireccionInfo />} />
            <Route path="/modulos/leccion/:moduloId/:grado" element={<RedireccionLeccion />} />
            <Route path="/presentacion/:grado" element={<RedireccionPresentacion />} />
            <Route path="/dashboard/:grado" element={<Navigate to="/proyectos/ciberseguridad" replace />} />
          </Routes>
        </main>
        <PiePagina />
      </div>
    </Router>
  );
};

export default App;