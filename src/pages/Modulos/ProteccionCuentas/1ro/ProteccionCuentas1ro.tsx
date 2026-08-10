import React, { useState } from 'react';
import {
  Key,
  EyeOff,
  Eye,
  CheckCircle2,
  XCircle,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  ShieldAlert
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import './ProteccionCuentas1ro.css';

export const ProteccionCuentas1ro: React.FC = () => {
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  // Evaluador simple de contraseñas
  const tieneMinimo = password.length >= 8;
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneNumero = /[0-9]/.test(password);
  const tieneSimbolo = /[^A-Za-z0-9]/.test(password);
  
  const esFecha = /^[0-9]{4,8}$/.test(password); // Si solo son números y parecen fechas

  let fortaleza = 0;
  if (tieneMinimo) fortaleza += 25;
  if (tieneMayuscula) fortaleza += 25;
  if (tieneNumero) fortaleza += 25;
  if (tieneSimbolo) fortaleza += 25;
  if (esFecha) fortaleza = 10; // Penalización fuerte por usar solo números como fechas

  let colorBarra = '#ef4444'; // Rojo (Débil)
  let textoFortaleza = 'Débil';
  
  if (fortaleza === 10) {
    textoFortaleza = '¡Peligro! Parece una fecha de nacimiento';
    colorBarra = '#dc2626';
  } else if (fortaleza >= 50 && fortaleza < 100) {
    colorBarra = '#f59e0b'; // Amarillo (Aceptable)
    textoFortaleza = 'Aceptable';
  } else if (fortaleza === 100) {
    colorBarra = '#10b981'; // Verde (Fuerte)
    textoFortaleza = 'Fuerte 🔒';
  }

  return (
    <main className="pagina-modulo-proteccion">
      <HeaderModulo
        grado="1ro"
        modulo="1: Contraseñas Seguras"
        titulo="Creación de Contraseñas Robustas"
        subTitulo="Una contraseña es la llave digital de tu casillero personal. Aprende a crear claves secretas en 1er Año."
        categoria="Protección de Cuentas y Accesos"
        tiempoEstimado="35 min"
        icono={<Key size={36} />}
      />

      <div className="contenedor-proteccion-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. El Peligro de las Claves Obvias</h2>
          </div>
          <p className="texto-lectura-modulo">
            Muchas personas usan "123456", "password" o su fecha de cumpleaños como contraseña. ¡Esto es un gran error! Los ciberdelincuentes usan programas que adivinan estas claves obvias en segundos.
          </p>

          <div className="grid-pilares-proteccion">
            <div className="caja-pilar-proteccion">
              <ShieldAlert className="icono-pilar rojo" size={28} />
              <h3>Lo que NO debes usar</h3>
              <p>Tu nombre, el nombre de tu mascota, fechas de cumpleaños, número de cédula o palabras simples del diccionario.</p>
            </div>

            <div className="caja-pilar-proteccion">
              <ShieldCheck className="icono-pilar verde" size={28} />
              <h3>Frases de Contraseña</h3>
              <p>Es más fácil recordar una frase larga y rara que una clave corta y confusa. Ejemplo: "Un-Perrito-Azul-Vuela-99!".</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR DE FORTALEZA */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <Key className="icono-bloque-azul" size={24} />
            <h2>2. Simulador: Crea tu Contraseña</h2>
          </div>
          <p className="subtitulo-bloque">
            Prueba a escribir una contraseña y observa cómo mejora su fortaleza al agregar diferentes caracteres (¡No uses tu contraseña real aquí!).
          </p>

          <div style={{ position: 'relative' }}>
            <input
              type={mostrarPassword ? 'text' : 'password'}
              className="input-password-simulador"
              placeholder="Escribe una contraseña de prueba..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              onClick={() => setMostrarPassword(!mostrarPassword)}
              style={{ position: 'absolute', right: '15px', top: '22px', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
            >
              {mostrarPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="medidor-fortaleza">
            <div className="barra-fortaleza" style={{ width: `${fortaleza}%`, backgroundColor: colorBarra }}></div>
          </div>
          <span className="texto-fortaleza" style={{ color: colorBarra }}>{textoFortaleza}</span>

          <div className="criterios-password">
            <div className={`criterio-item ${tieneMinimo ? 'cumple' : ''}`}>
              {tieneMinimo ? <CheckCircle2 size={18} /> : <XCircle size={18} />} Al menos 8 caracteres
            </div>
            <div className={`criterio-item ${tieneMayuscula ? 'cumple' : ''}`}>
              {tieneMayuscula ? <CheckCircle2 size={18} /> : <XCircle size={18} />} Una letra mayúscula
            </div>
            <div className={`criterio-item ${tieneNumero ? 'cumple' : ''}`}>
              {tieneNumero ? <CheckCircle2 size={18} /> : <XCircle size={18} />} Un número
            </div>
            <div className={`criterio-item ${tieneSimbolo ? 'cumple' : ''}`}>
              {tieneSimbolo ? <CheckCircle2 size={18} /> : <XCircle size={18} />} Un símbolo (@, $, !, %, etc.)
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
            <strong>Pregunta:</strong> Acabas de crear una cuenta nueva y te piden una contraseña. ¿Cuál de las siguientes opciones es la más segura?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) "JuanPerez2010" (Tu nombre y año de nacimiento).
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) "MeGustaComerArepa_15!" (Una frase aleatoria con un número y símbolo).
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> Usar frases sin sentido para otros (Passphrases) combinadas con símbolos y números es la mejor estrategia contra los ataques de adivinación (Fuerza Bruta).
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ProteccionCuentas1ro;
