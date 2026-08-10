import React, { Suspense, lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Mapa de importaciones perezosas (Lazy Loading) para optimizar el rendimiento de la app
const modulosMap: Record<string, Record<string, React.LazyExoticComponent<React.FC>>> = {
  auditorias: {
    '1ro': lazy(() => import('./Auditorias/1ro/AuditoriaDigital1ro')),
    '2do': lazy(() => import('./Auditorias/2do/AuditoriaDigital2do')),
    '3ro': lazy(() => import('./Auditorias/3ro/AuditoriaDigital3ro')),
    '4to': lazy(() => import('./Auditorias/4to/AuditoriaDigital4to')),
    '5to': lazy(() => import('./Auditorias/5to/AuditoriaDigital5to')),
  },
  phishing: {
    '1ro': lazy(() => import('./Phishing/1ro/Phishing1ro')),
    '2do': lazy(() => import('./Phishing/2do/Phishing2do')),
    '3ro': lazy(() => import('./Phishing/3ro/Phishing3ro')),
    '4to': lazy(() => import('./Phishing/4to/Phishing4to')),
    '5to': lazy(() => import('./Phishing/5to/Phishing5to')),
  },
  'video-juegos': {
    '1ro': lazy(() => import('./VideoJuegos/1ro/VideoJuegos1ro')),
    '2do': lazy(() => import('./VideoJuegos/2do/VideoJuegos2do')),
    '3ro': lazy(() => import('./VideoJuegos/3ro/VideoJuegos3ro')),
    '4to': lazy(() => import('./VideoJuegos/4to/VideoJuegos4to')),
    '5to': lazy(() => import('./VideoJuegos/5to/VideoJuegos5to')),
  },
  videojuegos: {
    '1ro': lazy(() => import('./VideoJuegos/1ro/VideoJuegos1ro')),
    '2do': lazy(() => import('./VideoJuegos/2do/VideoJuegos2do')),
    '3ro': lazy(() => import('./VideoJuegos/3ro/VideoJuegos3ro')),
    '4to': lazy(() => import('./VideoJuegos/4to/VideoJuegos4to')),
    '5to': lazy(() => import('./VideoJuegos/5to/VideoJuegos5to')),
  },
  'software-pirata': {
    '1ro': lazy(() => import('./SoftwarePiratas/1ro/SoftwarePirata1ro')),
    '2do': lazy(() => import('./SoftwarePiratas/2do/SoftwarePirata2do')),
    '3ro': lazy(() => import('./SoftwarePiratas/3ro/SoftwarePirata3ro')),
    '4to': lazy(() => import('./SoftwarePiratas/4to/SoftwarePirata4to')),
    '5to': lazy(() => import('./SoftwarePiratas/5to/SoftwarePirata5to')),
  },
  'software-piratas': {
    '1ro': lazy(() => import('./SoftwarePiratas/1ro/SoftwarePirata1ro')),
    '2do': lazy(() => import('./SoftwarePiratas/2do/SoftwarePirata2do')),
    '3ro': lazy(() => import('./SoftwarePiratas/3ro/SoftwarePirata3ro')),
    '4to': lazy(() => import('./SoftwarePiratas/4to/SoftwarePirata4to')),
    '5to': lazy(() => import('./SoftwarePiratas/5to/SoftwarePirata5to')),
  },
  'proteccion-cuentas': {
    '1ro': lazy(() => import('./ProteccionCuentas/1ro/ProteccionCuentas1ro')),
    '2do': lazy(() => import('./ProteccionCuentas/2do/ProteccionCuentas2do')),
    '3ro': lazy(() => import('./ProteccionCuentas/3ro/ProteccionCuentas3ro')),
    '4to': lazy(() => import('./ProteccionCuentas/4to/ProteccionCuentas4to')),
    '5to': lazy(() => import('./ProteccionCuentas/5to/ProteccionCuentas5to')),
  },
  'redes-sociales': {
    '1ro': lazy(() => import('./RedesSociales/1ro/RedesSociales1ro')),
    '2do': lazy(() => import('./RedesSociales/2do/RedesSociales2do')),
    '3ro': lazy(() => import('./RedesSociales/3ro/RedesSociales3ro')),
    '4to': lazy(() => import('./RedesSociales/4to/RedesSociales4to')),
    '5to': lazy(() => import('./RedesSociales/5to/RedesSociales5to')),
  },
};

const ModuloRouter: React.FC = () => {
  // Lee los parámetros del nuevo esquema de rutas: /modulos/leccion/:moduloId/:grado
  const { moduloId, grado } = useParams<{ moduloId: string; grado: string }>();

  const keyNormalizada = moduloId?.toLowerCase() || '';
  const ComponenteModulo = keyNormalizada && grado ? modulosMap[keyNormalizada]?.[grado] : null;

  if (!ComponenteModulo) {
    return (
      <div style={{ padding: '4rem 1.5rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h2>Módulo no encontrado</h2>
        <p>El módulo <strong>{moduloId}</strong> para el grado <strong>{grado}</strong> no existe o está en desarrollo.</p>
        <Link to={grado ? `/modulos/grado/${grado}` : '/modulos'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: '#2563eb', fontWeight: 'bold' }}>
          <ArrowLeft size={18} /> Volver al catálogo del grado
        </Link>
      </div>
    );
  }

  return (
    <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: '#2563eb', fontWeight: 'bold' }}>Cargando lección interactiva...</div>}>
      <ComponenteModulo />
    </Suspense>
  );
};

export default ModuloRouter;