import React, { useRef, useEffect } from 'react';

interface ParallaxSeccionProps {
  imagen: string;
  velocidad?: number; // Factor de velocidad (0 a 1, por defecto 0.3)
  className?: string;
  children: React.ReactNode;
}

const ParallaxSeccion: React.FC<ParallaxSeccionProps> = ({
  imagen,
  velocidad = 0.3,
  className = '',
  children,
}) => {
  const seccionRef = useRef<HTMLElement>(null);
  const imagenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;

    const actualizarParallax = () => {
      const seccion = seccionRef.current;
      const imagen = imagenRef.current;
      if (!seccion || !imagen) return;

      const rect = seccion.getBoundingClientRect();
      const alturaViewport = window.innerHeight;
      const centroViewport = alturaViewport / 2;
      const centroSeccion = rect.top + rect.height / 2;
      const distancia = centroSeccion - centroViewport; // píxeles de desplazamiento

      // Calcula el desplazamiento vertical de la imagen
      const desplazamiento = distancia * velocidad;
      imagen.style.transform = `translateY(${desplazamiento}px)`;
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(actualizarParallax);
    };

    // Observa si la sección está en el viewport para activar/desactivar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener('scroll', onScroll, { passive: true });
            actualizarParallax();
          } else {
            window.removeEventListener('scroll', onScroll);
          }
        });
      },
      { threshold: 0 }
    );

    if (seccionRef.current) observer.observe(seccionRef.current);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [velocidad]);

  return (
    <section ref={seccionRef} className={`parallax-seccion ${className}`}>
      <div ref={imagenRef} className="parallax-fondo">
        <img src={imagen} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="parallax-contenido">{children}</div>
    </section>
  );
};

export default ParallaxSeccion;