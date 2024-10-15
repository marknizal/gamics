import React, { useEffect, useRef } from "react";

const MAX_PARTICLES = 50;
const PARTICLE_COLORS = [
  "rgba(200, 200, 200, 0.4)", // Original color
  "rgba(150, 150, 150, 0.6)", // Light ash
  "rgba(100, 100, 100, 0.4)", // Darker ash
  "rgba(255, 0, 0, 0.3)", // Red
  "rgba(0, 255, 0, 0.3)", // Green
  "rgba(0, 0, 255, 0.3)", // Blue
  "rgba(255, 255, 0, 0.3)", // Yellow
];

const AshParticles = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  // Create a particle with a random color from the color palette
  const createParticle = () => ({
    x: Math.random() * window.innerWidth,
    y: window.innerHeight,
    radius: Math.random() * 3 + 1,
    color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)], // Randomly select a color
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

        // Draw the main particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color; // Set particle color
        ctx.fill();

        // Draw the blur effect using multiple overlapping circles
        const blurSteps = 2; // Number of blurred circles to draw
        for (let i = 1; i <= blurSteps; i++) {
          ctx.beginPath();
          ctx.arc(
            particle.x,
            particle.y,
            particle.radius + i * 2, // Increase radius for blur effect
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(200, 200, 200, ${0.1 / i})`; // Decrease opacity with each step
          ctx.fill();
        }

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
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 800,
      }}
    />
  );
};

export default AshParticles;
