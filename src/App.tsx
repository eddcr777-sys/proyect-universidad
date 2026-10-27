import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Justificacion from './pages/Justificacion/Justificacion';
import Indices from './pages/Acceder/Indices';
import SobreDevs from './pages/Nosotros/SobreDevs';
import GuiasDocentes from './pages/Guias/Guias-Docentes';
import GuiasPadres from './pages/Guias/Guias-Padres';
import GuiaDefensa from './pages/Guias/GuiasDefensa/GuiaDefensa';
import ManualCompleto from './pages/Guias/Manuales/ManualCompleto';
import Galeria from './pages/Galerias/Galeria';

// ── Páginas Institucionales (El Liceo) ──
import QuienesSomos from './pages/ElLiceo/QuienesSomos';
import Requisitos from './pages/Admision/Requisitos';

import ExploradorProyectos from './pages/ExploradorProyectos/ExploradorProyectos';

// ── Flujo de Módulos de Ciberseguridad ──
import PrincipalProyecto from './pages/Proyectos/Ciberseguridad/PrincipalProyecto'; // Portada principal del Proyecto
import LandingModulos from './pages/Modulos/LandingModulos';       // Nivel 1 — Bienvenida / Catálogo
import PresentacionGrado from './pages/Modulos/PresentacionGrado'; // Nivel 2 — Catálogo por grado
import DescripcionModulo from './pages/Modulos/DescripcionModulo'; // Nivel 3 — Pre-Lobby
import ModuloRouter from './pages/Modulos/ModuloRouter';           // Nivel 4 — Lección

import Cabecera from './components/comunes/Cabecera';
import PiePagina from './components/comunes/PiePagina';
import CabeceraCiberseguridad from './components/comunes/CabeceraCiberseguridad/CabeceraCiberseguridad';
import PiePaginaCiberseguridad from './components/comunes/PiePaginaCiberseguridad/PiePaginaCiberseguridad';
import BannerDescargaOffline from './components/comunes/BannerDescargaOffline/BannerDescargaOffline';
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

/** Layout condicional: header y footer de ciberseguridad vs institucional */
const LayoutEstructura: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const esRutaCiber =
    location.pathname.startsWith('/proyectos/ciberseguridad') ||
    location.pathname.startsWith('/modulos') ||
    location.pathname.startsWith('/guias') ||
    location.pathname.startsWith('/justificacion') ||
    location.pathname.startsWith('/indices') ||
    location.pathname.startsWith('/Indices') ||
    location.pathname === '/nosotros/sobre-devs';

  return (
    <div className={`app-container ${esRutaCiber ? 'layout-ciberseguridad' : 'layout-institucional'}`}>
      {esRutaCiber ? <CabeceraCiberseguridad /> : <Cabecera />}
      <main>
        {children}
      </main>
      {esRutaCiber ? <PiePaginaCiberseguridad /> : <PiePagina />}
      <BannerDescargaOffline />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <LayoutEstructura>
        <Routes>
            {/* ── PORTAL DE LA ESCUELA ── */}
            <Route path="/" element={<HomePage />} />

            {/* ── PÁGINA UNIFICADA: ¿QUIÉNES SOMOS? ── */}
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/el-liceo" element={<QuienesSomos />} />

            {/* ── SECCIÓN EL LICEO (Redirecciones a Secciones de la Página Unificada) ── */}
            <Route path="/el-liceo/historia" element={<Navigate to="/el-liceo#historia" replace />} />
            <Route path="/el-liceo/mision" element={<Navigate to="/el-liceo#mision" replace />} />
            <Route path="/el-liceo/vision" element={<Navigate to="/el-liceo#vision" replace />} />
            <Route path="/el-liceo/valores" element={<Navigate to="/el-liceo#pilares" replace />} />
            <Route path="/el-liceo/simbolos" element={<Navigate to="/el-liceo#simbolos" replace />} />
            <Route path="/el-liceo/normas" element={<Navigate to="/el-liceo#manual-convivencia" replace />} />
            <Route path="/el-liceo/plan-evacuacion" element={<Navigate to="/el-liceo#plan-evacuacion" replace />} />
            <Route path="/el-liceo/instalaciones" element={<Navigate to="/el-liceo#instalaciones" replace />} />

            {/* ── ADMISIÓN ── */}
            <Route path="/admision/requisitos" element={<Requisitos />} />
            <Route path="/proyectos/ciberseguridad/admision/requisitos" element={<Requisitos />} />

            {/* ── GALERÍAS ── */}
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/Galeria" element={<Galeria />} />

         
            {/* ── PROYECTO 1: CIBERSEGURIDAD (ESTRUCTURA ANIDADA) ── */}
            <Route path="/proyectos/ciberseguridad" element={<PrincipalProyecto />} />
            <Route path="/proyectos/ciberseguridad/modulos" element={<LandingModulos />} />
            <Route path="/modulos" element={<LandingModulos />} />
            <Route path="/proyectos/ciberseguridad/justificacion" element={<Justificacion />} />
            <Route path="/proyectos/ciberseguridad/indices" element={<Indices />} />
            <Route path="/proyectos/ciberseguridad/nosotros/sobre-devs" element={<SobreDevs />} />
            <Route path="/proyectos/ciberseguridad/nosotros/sobre-ue" element={<Navigate to="/el-liceo#comunidad" replace />} />
            <Route path="/proyectos/ciberseguridad/guias/docentes" element={<GuiasDocentes />} />
            <Route path="/proyectos/ciberseguridad/guias/padres" element={<GuiasPadres />} />
            <Route path="/proyectos/ciberseguridad/guias/alumnos" element={<GuiasPadres />} />
            <Route path="/proyectos/ciberseguridad/guias/defensa" element={<GuiaDefensa />} />
            <Route path="/proyectos/ciberseguridad/guias/manual-completo" element={<ManualCompleto />} />
            <Route path="/proyectos/ciberseguridad/grado/:grado" element={<PresentacionGrado />} />
            <Route path="/proyectos/ciberseguridad/info/:moduloId/:grado" element={<DescripcionModulo />} />
            <Route path="/proyectos/ciberseguridad/leccion/:moduloId/:grado" element={<ModuloRouter />} />

            {/* Aliases bajo ciberseguridad para El Liceo */}
            <Route path="/proyectos/ciberseguridad/el-liceo/historia" element={<Navigate to="/el-liceo#historia" replace />} />
            <Route path="/proyectos/ciberseguridad/el-liceo/mision" element={<Navigate to="/el-liceo#mision" replace />} />
            <Route path="/proyectos/ciberseguridad/el-liceo/vision" element={<Navigate to="/el-liceo#vision" replace />} />
            <Route path="/proyectos/ciberseguridad/el-liceo/valores" element={<Navigate to="/el-liceo#pilares" replace />} />
            <Route path="/proyectos/ciberseguridad/el-liceo/simbolos" element={<Navigate to="/el-liceo#simbolos" replace />} />
            <Route path="/proyectos/ciberseguridad/el-liceo/normas" element={<Navigate to="/el-liceo#manual-convivencia" replace />} />
            <Route path="/proyectos/ciberseguridad/el-liceo/instalaciones" element={<Navigate to="/el-liceo#instalaciones" replace />} />
            
            {/* ── RUTAS DIRECTAS Y RETROCOMPATIBILIDAD ── */}
            <Route path="/nosotros/sobre-devs" element={<SobreDevs />} />
            <Route path="/nosotros/sobre-ue" element={<Navigate to="/el-liceo#comunidad" replace />} />
            <Route path="/instalaciones" element={<Navigate to="/el-liceo#instalaciones" replace />} />
            <Route path="/guias/docentes" element={<GuiasDocentes />} />
            <Route path="/guias/padres" element={<GuiasPadres />} />
            <Route path="/guias/defensa" element={<GuiaDefensa />} />
            <Route path="/guias/manual-completo" element={<ManualCompleto />} />
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
      </LayoutEstructura>
    </Router>
  );
};

export default App;