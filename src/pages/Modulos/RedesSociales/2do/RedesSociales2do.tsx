import React, { useState } from 'react';
import {
  MapPin,
  Camera,
  Ghost,
  CheckCircle2,
  XCircle,
  Sparkles,
  HelpCircle,
  Image as ImageIcon,
  Info
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/RedesSociales1ro.css'; // Reutilizamos estilos base

export const RedesSociales2do: React.FC = () => {
  const [mostrarMetadatos, setMostrarMetadatos] = useState(false);
  const [fotoLimpia, setFotoLimpia] = useState(false);
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const limpiarFoto = () => {
    setFotoLimpia(true);
  };

  const reiniciarSimulador = () => {
    setMostrarMetadatos(false);
    setFotoLimpia(false);
  };

  return (
    <main className="pagina-modulo-redes">
      <HeaderModulo
        grado="2do"
        modulo="2: Metadatos y Catfishing"
        titulo="El mapa oculto en tus fotos"
        subTitulo="Aprenderás a limpiar la información de ubicación de tus imágenes y a identificar perfiles falsos que se hacen pasar por adolescentes."
        categoria="Redes Sociales e Identidad"
        tiempoEstimado="40 min"
        icono={<Camera size={36} />}
      />

      <div className="contenedor-redes-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Más que simples píxeles</h2>
          </div>
          <p className="texto-lectura-modulo">
            Cada vez que tomas una foto con tu teléfono, este guarda información invisible llamada <strong>Metadatos EXIF</strong>. Esta información incluye la fecha, hora exacta y las coordenadas GPS donde tomaste la foto.
          </p>

          <div className="grid-pilares-redes">
            <div className="caja-pilar-redes">
              <MapPin className="icono-pilar rojo" size={28} />
              <h3>Geolocalización Involuntaria</h3>
              <p>Si subes una foto original sin limpiar, un acosador podría extraer las coordenadas y saber exactamente dónde vives o estudias.</p>
            </div>

            <div className="caja-pilar-redes">
              <Camera className="icono-pilar azul" size={28} />
              <h3>Desactivar GPS en Cámara</h3>
              <p>Puedes ir a la configuración de tu cámara (iOS/Android) y apagar el permiso de "Ubicación" para que las fotos nazcan seguras.</p>
            </div>

            <div className="caja-pilar-redes">
              <Ghost className="icono-pilar verde" size={28} />
              <h3>Catfishing (Perfiles Falsos)</h3>
              <p>Adultos malintencionados roban fotos de adolescentes para crear perfiles falsos. Mantener tu cuenta privada evita que roben tus fotos.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR DE METADATOS */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ImageIcon className="icono-bloque-azul" size={24} />
            <h2>2. Simulador: Escáner de Metadatos</h2>
          </div>
          <p className="subtitulo-bloque">
            Un usuario acaba de publicar esta foto inocente desde su casa. Presiona "Escanear EXIF" para ver lo que un acosador puede descubrir.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Representación de la Foto */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', backgroundColor: '#e2e8f0', borderRadius: 'var(--radio-principal)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ImageIcon size={64} color="#94a3b8" />
                <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.85rem' }}>
                  IMG_2026.jpg
                </div>
              </div>
              
              {!mostrarMetadatos ? (
                <button onClick={() => setMostrarMetadatos(true)} className="btn-decision seguro" style={{ justifyContent: 'center' }}>
                  <Info size={18} /> Escanear Datos EXIF
                </button>
              ) : (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={limpiarFoto} className="btn-decision" style={{ flex: '1', justifyContent: 'center', backgroundColor: '#10b981', color: 'white', borderColor: '#10b981' }}>
                    <Sparkles size={18} /> Limpiar Metadatos
                  </button>
                  <button onClick={reiniciarSimulador} className="btn-decision" style={{ flex: '1', justifyContent: 'center' }}>
                    Reiniciar
                  </button>
                </div>
              )}
            </div>

            {/* Panel EXIF */}
            <div style={{ backgroundColor: '#1e293b', color: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radio-principal)', fontFamily: 'monospace' }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#38bdf8', fontSize: '1.1rem', borderBottom: '1px solid #334155', paddingBottom: '0.5rem' }}>Visor EXIF Forense</h3>
              
              {!mostrarMetadatos ? (
                <p style={{ color: '#64748b' }}>Esperando archivo de imagen...</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Dispositivo:</span>
                    <span>{fotoLimpia ? 'Desconocido' : 'iPhone 13 Pro'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Fecha original:</span>
                    <span>{fotoLimpia ? 'Eliminada' : '2026-10-15 14:32'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Latitud:</span>
                    <span style={{ color: fotoLimpia ? '#f8fafc' : '#ef4444' }}>{fotoLimpia ? 'Eliminada' : '10.4806° N'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Longitud:</span>
                    <span style={{ color: fotoLimpia ? '#f8fafc' : '#ef4444' }}>{fotoLimpia ? 'Eliminada' : '66.9036° W'}</span>
                  </div>
                  
                  {fotoLimpia ? (
                    <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10b981', color: '#10b981', borderRadius: '4px' }}>
                      <CheckCircle2 size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }}/>
                      Foto segura para publicar
                    </div>
                  ) : (
                    <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: 'rgba(239, 68, 68, 0.2)', border: '1px solid #ef4444', color: '#fca5a5', borderRadius: '4px' }}>
                      <MapPin size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }}/>
                      ¡Peligro! Ubicación exacta expuesta.
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </section>

        {/* SECCIÓN 3: QUIZ */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>3. Evaluación Diagnóstica</h2>
          </div>
          <p className="texto-lectura-modulo">
            <strong>Pregunta:</strong> Te envían una solicitud de amistad en Facebook. La foto de perfil es de un chico de tu edad muy atractivo, pero su cuenta fue creada ayer y no tiene publicaciones previas ni etiquetas con otras personas. ¿Qué deberías hacer?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Aceptarlo de inmediato para conocerlo y ver qué me dice por mensaje privado.
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Rechazar la solicitud e informarle a mis padres o profesores. Es una "bandera roja" (Red Flag) muy común de Catfishing (Perfil Falso).
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> Las cuentas creadas recientemente, con una sola foto muy perfecta y sin interacciones reales (Catfishing), suelen ser operadas por adultos intentando engañar a menores de edad.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default RedesSociales2do;
