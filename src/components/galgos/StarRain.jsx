import { useEffect, useRef } from "react";

const StarRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Estrella {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 2 + 1;
      }

      actualizar() {
        this.y += this.speedY;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      dibujar() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const estrellas = Array.from({ length: 300 }, () => new Estrella());

    const animar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Mantiene la transparencia
      estrellas.forEach((estrella) => {
        estrella.actualizar();
        estrella.dibujar();
      });
      requestAnimationFrame(animar);
    };

    animar();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // Evita que interfiera con otros elementos
      }}
    />
  );
};

export default StarRain;    