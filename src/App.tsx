import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Justificacion from './pages/Justificacion/Justificacion';
import Indices from './pages/Acceder/Indices';
import SobreDevs from './pages/Nosotros/SobreDevs';
import SobreUE from './pages/Nosotros/SobreU.E';
import GuiasDocentes from './pages/Guias/Guias-Docentes';
import GuiasPadres from './pages/Guias/Guias-Padres';
import Galeria from './pages/Galerias/Galeria';

// ── Páginas Institucionales (El Liceo) ──
import Historia from './pages/ElLiceo/Historia';
import Mision from './pages/ElLiceo/Mision';
import Vision from './pages/ElLiceo/Vision';
import Valores from './pages/ElLiceo/Valores';
import Simbolos from './pages/ElLiceo/Simbolos';
import NormasConvivencia from './pages/ElLiceo/NormasConvivencia';

import ExploradorProyectos from './pages/ExploradorProyectos/ExploradorProyectos';

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

            {/* ── SECCIÓN EL LICEO (Rutas Limpias) ── */}
            <Route path="/el-liceo/historia" element={<Historia />} />
            <Route path="/el-liceo/mision" element={<Mision />} />
            <Route path="/el-liceo/vision" element={<Vision />} />
            <Route path="/el-liceo/valores" element={<Valores />} />
            <Route path="/el-liceo/simbolos" element={<Simbolos />} />
            <Route path="/el-liceo/normas" element={<NormasConvivencia />} />

            {/* ── ADMISIÓN ── */}
            <Route path="/admision/requisitos" element={<NormasConvivencia />} />
            <Route path="/proyectos/ciberseguridad/admision/requisitos" element={<NormasConvivencia />} />

            {/* ── GALERÍAS ── */}
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/Galeria" element={<Galeria />} />

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
            <Route path="/proyectos/ciberseguridad/guias/alumnos" element={<GuiasPadres />} />
            <Route path="/proyectos/ciberseguridad/grado/:grado" element={<PresentacionGrado />} />
            <Route path="/proyectos/ciberseguridad/info/:moduloId/:grado" element={<DescripcionModulo />} />
            <Route path="/proyectos/ciberseguridad/leccion/:moduloId/:grado" element={<ModuloRouter />} />

            {/* Aliases bajo ciberseguridad para El Liceo */}
            <Route path="/proyectos/ciberseguridad/el-liceo/historia" element={<Historia />} />
            <Route path="/proyectos/ciberseguridad/el-liceo/mision" element={<Mision />} />
            <Route path="/proyectos/ciberseguridad/el-liceo/vision" element={<Vision />} />
            <Route path="/proyectos/ciberseguridad/el-liceo/valores" element={<Valores />} />
            <Route path="/proyectos/ciberseguridad/el-liceo/simbolos" element={<Simbolos />} />
            <Route path="/proyectos/ciberseguridad/el-liceo/normas" element={<NormasConvivencia />} />
            
            {/* ── RUTAS DIRECTAS Y RETROCOMPATIBILIDAD ── */}
            <Route path="/nosotros/sobre-devs" element={<SobreDevs />} />
            <Route path="/nosotros/sobre-ue" element={<SobreUE />} />
            <Route path="/guias/docentes" element={<GuiasDocentes />} />
            <Route path="/guias/padres" element={<GuiasPadres />} />
            <Route path="/justificacion" element={<Justificacion />} />
            <Route path="/indices" element={<Indices />} />
            <Route path="/Indices" element={<Indices />} />
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