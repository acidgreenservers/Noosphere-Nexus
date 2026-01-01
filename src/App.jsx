import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ManifoldDocs from "./pages/docs/ManifoldDocs";
import GardenDocs from "./pages/docs/GardenDocs";
import CultivatedIntelligence from "./pages/docs/CultivatedIntelligence";
import CodexDocs from "./pages/docs/CodexDocs";
import ProtomindDocs from "./pages/docs/ProtomindDocs";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("nn-theme");
      if (stored) return stored;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  });
  const canvasRef = useRef(null);
  const ufoTimeoutRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("nn-theme", theme);
    }
  }, [theme]);

  // Starfield canvas + UFO animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = [];
    const STAR_COUNT = Math.floor((w * h) / 6000);

    function createStars() {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.2 + 0.2,
          flicker: Math.random() * 0.05 + 0.02,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function onResize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      createStars();
    }

    onResize();
    window.addEventListener("resize", onResize);

    let raf;
    let ufoActive = false;
    let ufoX = 0;
    let ufoY = 0;
    let ufoVx = 0;

    function startUFO() {
      ufoActive = true;
      ufoX = -100;
      ufoY = Math.random() * h * 0.3 + h * 0.1;
      ufoVx = 3 + Math.random() * 2;
    }

    function scheduleUFO() {
      const delay = (60 + Math.random() * 120) * 1000; // 1-3 minutes
      ufoTimeoutRef.current = setTimeout(startUFO, delay);
    }

    scheduleUFO();

    function render(t) {
      ctx.clearRect(0, 0, w, h);

      // Gradient background
      const g = ctx.createLinearGradient(0, 0, 0, h);
      if (theme === "dark") {
        g.addColorStop(0, "#1a0a00");
        g.addColorStop(1, "#2d1500");
      } else {
        g.addColorStop(0, "#fff5eb");
        g.addColorStop(1, "#fed7aa");
      }
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Draw stars
      stars.forEach((s) => {
        const alpha = 0.5 + 0.5 * Math.sin(t * 0.001 * s.flicker + s.phase);
        ctx.fillStyle = theme === "dark"
          ? `rgba(255, 200, 120, ${alpha})`
          : `rgba(200, 120, 50, ${alpha * 0.4})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw UFO
      if (ufoActive) {
        ufoX += ufoVx;

        ctx.save();
        ctx.translate(ufoX, ufoY);

        // Glow effect
        const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, 30);
        glow.addColorStop(0, "rgba(249, 115, 22, 0.3)");
        glow.addColorStop(1, "rgba(249, 115, 22, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(-30, -30, 60, 60);

        // Main disc
        ctx.fillStyle = "#f97316";
        ctx.beginPath();
        ctx.ellipse(0, 0, 25, 10, 0, 0, Math.PI * 2);
        ctx.fill();

        // Dome
        ctx.fillStyle = "#fb923c";
        ctx.beginPath();
        ctx.ellipse(0, -5, 12, 8, 0, 0, Math.PI, true);
        ctx.fill();

        // Lights
        for (let i = -1; i <= 1; i++) {
          ctx.fillStyle = `hsl(${(t * 0.5 + i * 120) % 360}, 100%, 70%)`;
          ctx.beginPath();
          ctx.arc(i * 12, 2, 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        if (ufoX > w + 100) {
          ufoActive = false;
          scheduleUFO();
        }
      }

      raf = requestAnimationFrame(render);
    }

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (ufoTimeoutRef.current) clearTimeout(ufoTimeoutRef.current);
    };
  }, [theme]);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className={`min-h-screen relative overflow-hidden ${theme === 'dark' ? 'text-orange-50' : 'text-orange-950'}`}>
        <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          <Navbar theme={theme} setTheme={setTheme} />

          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/docs/manifold" element={<ManifoldDocs theme={theme} />} />
            <Route path="/docs/garden" element={<GardenDocs theme={theme} />} />
            <Route path="/docs/garden/cultivated-intelligence" element={<CultivatedIntelligence theme={theme} />} />
            <Route path="/docs/codex" element={<CodexDocs theme={theme} />} />
            <Route path="/docs/protomind" element={<ProtomindDocs theme={theme} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
