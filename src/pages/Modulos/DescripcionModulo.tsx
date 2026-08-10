import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CATALAGO_MODULOS, DICCIONARIO_GRADOS } from '../../data/datosModulos';
import { GLOSARIOS_MODULOS } from '../../data/glosarioModulos';
import type { GradoEscolar } from '../../data/datosModulos';
import DescripcionModuloUI from '../../components/comunes/PageComponents/Descriptions/DescriptModuls'; 
import { ShieldCheck, Lock, Share2, Download, Gamepad2, CheckSquare } from 'lucide-react';

const ICONOS_LUCIDE: Record<string, React.ReactNode> = {
  'phishing': <ShieldCheck size={48} color="#ffffff" />,
  'proteccion-cuentas': <Lock size={48} color="#ffffff" />,
  'redes-sociales': <Share2 size={48} color="#ffffff" />,
  'software-pirata': <Download size={48} color="#ffffff" />,
  'videojuegos': <Gamepad2 size={48} color="#ffffff" />,
  'auditorias': <CheckSquare size={48} color="#ffffff" />,
};

export const DescripcionModuloWrapper: React.FC = () => {
  const { moduloId, grado } = useParams<{ moduloId?: string; grado?: string }>();
  const navigate = useNavigate();

  const idValido = moduloId && CATALAGO_MODULOS[moduloId] ? moduloId : 'phishing';
  const moduloInfoBase = CATALAGO_MODULOS[idValido];
  const contextoExtendido = GLOSARIOS_MODULOS[idValido];

  const moduloInfo = {
    ...moduloInfoBase,
    icono: ICONOS_LUCIDE[idValido] || <ShieldCheck size={48} color="#ffffff" />
  };

  const gradoActual: GradoEscolar = (
    grado && ['1ro', '2do', '3ro', '4to', '5to'].includes(grado)
      ? grado
      : '1ro'
  ) as GradoEscolar;

  const contenidoGrado = moduloInfoBase.grados[gradoActual];
  const nombreGradoLegible = DICCIONARIO_GRADOS[gradoActual];

  return (
    <DescripcionModuloUI 
      moduloInfo={moduloInfo}
      contenidoGrado={contenidoGrado}
      contextoExtendido={contextoExtendido}
      gradoActual={gradoActual}
      nombreGradoLegible={nombreGradoLegible}
      // Acciones inyectadas desde el Router
      onCambiarGrado={(nuevoGrado) => navigate(`/modulos/info/${idValido}/${nuevoGrado}`)}
      onIniciarModulo={() => navigate(`/modulos/leccion/${idValido}/${gradoActual}`)}
      onVolver={() => navigate(`/modulos/grado/${gradoActual}`)}
    />
  );
};

export default DescripcionModuloWrapper;