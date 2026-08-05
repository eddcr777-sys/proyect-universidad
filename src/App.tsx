import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Justificacion from './pages/Justificacion/Justificacion';
import Indices from './pages/Acceder/Indices';
import SobreDevs from './pages/Nosotros/SobreDevs';
import SobreUE from './pages/Nosotros/SobreU.E';
import GuiasDocentes from './pages/Guias/Guias-Docentes';
import GuiasPadres from './pages/Guias/Guias-Padres';
import PresentacionGrado from './pages/Modulos/PresentacionGrado';
import DescripcionModulo from './pages/Modulos/DescripcionModulo';

// Enrutador Central de Módulos
import ModuloRouter from './pages/Modulos/ModuloRouter';

import Cabecera from './components/comunes/Cabecera';
import PiePagina from './components/comunes/PiePagina';
import './App.css';

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

            {/* Rutas de Presentación por Grado */}
            <Route path="/presentacion/:grado" element={<PresentacionGrado />} />
            <Route path="/dashboard/:grado" element={<PresentacionGrado />} />
            <Route path="/modulos/:moduloId" element={<DescripcionModulo />} />

            {/* RUTA DINÁMICA UNIVERSAL PARA TODOS LOS MÓDULOS */}
            <Route path="/modulos/:categoria/:grado" element={<ModuloRouter />} />
          </Routes>
        </main>
        <PiePagina />
      </div>
    </Router>
  );
};

export default App;