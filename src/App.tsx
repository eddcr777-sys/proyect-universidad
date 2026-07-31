import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Justificacion from './pages/Justificacion/Justificacion';
import Indices from './pages/Acceder/Indices';
import SobreDevs from './pages/Nosotros/SobreDevs';
import SobreUE from './pages/Nosotros/SobreU.E';
import GuiasDocentes from './pages/Guias/Guias-Docentes';
import GuiasPadres from './pages/Guias/Guias-Padres';
import Cabecera from './components/comunes/Cabecera';
import PiePagina from './components/comunes/PiePagina';
import './App.css';

// Placeholder para componentes futuros
const DashboardEstudiante = () => <div>Dashboard Estudiante</div>;
const LandingModulo = () => <div>Landing Modulo</div>;
const PresentacionGrado = () => <div>Presentación Grado</div>;

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

            {/* Nuevas rutas de navegación */}
            <Route path="/dashboard/:grado" element={<DashboardEstudiante />} />
            <Route path="/modulos/:moduloId" element={<LandingModulo />} />
            <Route path="/modulos/:moduloId/:grado" element={<PresentacionGrado />} />
          </Routes>
        </main>
        <PiePagina />
      </div>
    </Router>
  );
};

export default App;
