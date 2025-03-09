import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Versión optimizada

const Particulas = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Carga la versión optimizada
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000000", // Cambia según tu diseño
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: false,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
    />
  );
};

export default Particulas;