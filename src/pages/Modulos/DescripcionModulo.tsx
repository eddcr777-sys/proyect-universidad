import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CATALAGO_MODULOS, DICCIONARIO_GRADOS } from '../../data/datosModulos';
import type { GradoEscolar } from '../../data/datosModulos';
import DescripcionModuloUI from '../../components/comunes/PageComponents/Descriptions/DescriptModuls'; 

export const DescripcionModuloWrapper: React.FC = () => {
  const { moduloId, grado } = useParams<{ moduloId?: string; grado?: string }>();
  const navigate = useNavigate();

  const idValido = moduloId && CATALAGO_MODULOS[moduloId] ? moduloId : 'phishing';
  const moduloInfo = CATALAGO_MODULOS[idValido];

  const gradoActual: GradoEscolar = (
    grado && ['1ro', '2do', '3ro', '4to', '5to'].includes(grado)
      ? grado
      : '1ro'
  ) as GradoEscolar;

  const contenidoGrado = moduloInfo.grados[gradoActual];
  const nombreGradoLegible = DICCIONARIO_GRADOS[gradoActual];

  return (
    <DescripcionModuloUI 
      moduloInfo={moduloInfo}
      contenidoGrado={contenidoGrado}
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