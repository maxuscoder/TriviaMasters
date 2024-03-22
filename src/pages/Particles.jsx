import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    if (engine.dom) {
      await loadSlim(engine);
    }
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  useEffect(() => {
    particlesInit("tsparticles");
  }, [particlesInit]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#1C1C1C",
          },
        },
        fpsLimit: 144,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "attract",
            },
            onHover: {
              enable: true,
              mode: "connect",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 50,
              duration: 0.8,
            },
            grab: {
              distance: 100,
              line_linked: {
                opacity: 0.3,
              },
            },
            bubble: {
              distance: 50,
              size: 25,
              duration: 1,
            },
            connect: {
              distance: 100,
              line_linked: {
                opacity: 0.3,
              },
              radius: 100,
            },
            attract: {
              distance: 300,
              duration: 0.5,
              speed: 1,
            },
          },
        },
        particles: {
          color: {
            value: ["#E8831E", "#F1C618", "#44B020", "#374151", "#2DD4BF"],
          },
          links: {
            color: "#ffffff",
            distance: 1,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 75,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "triangle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
