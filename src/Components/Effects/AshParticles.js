import React, { useEffect, useRef } from "react";

const MAX_PARTICLES = 50;
const PARTICLE_COLOR = "rgba(200, 200, 200, 0.4)";

const AshParticles = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  const createParticle = () => ({
    x: Math.random() * window.innerWidth,
    y: window.innerHeight,
    radius: Math.random() * 3 + 1,
    color: PARTICLE_COLOR,
    speed: Math.random() * 0.3 + 0.2,
    direction: Math.random() * (Math.PI * 2),
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const updateParticles = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.current.forEach((particle, index) => {
        particle.y -= particle.speed;
        particle.x += Math.cos(particle.direction) * particle.speed * 0.5;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        if (particle.y < 0) {
          particles.current.splice(index, 1);
        }
      });

      if (particles.current.length < MAX_PARTICLES && Math.random() < 0.05) {
        particles.current.push(createParticle());
      }

      requestAnimationFrame(updateParticles);
    };

    updateParticles();

    return () => {
      particles.current = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 800,
      }}
    />
  );
};

export default AshParticles;
