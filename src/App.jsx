import React, { useEffect, useRef, useState } from "react";

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

  const frameworks = [
    {
      name: "Noosphere Manifold",
      description: "Advanced theoretical framework exploring consciousness as a holographic phenomenon",
      icon: "🧠",
      status: "Active Research",
      url: "https://github.com/acidgreenservers/Noosphere-Manifold"
    },
    {
      name: "Noosphere Garden",
      description: "Systematic approaches for human-AI symbiotic knowledge generation",
      icon: "🌱",
      status: "In Development",
      url: "https://github.com/acidgreenservers/Noosphere-Garden"
    },
    {
      name: "Noosphere Codex",
      description: "Investigating collective intelligence and consciousness field theories",
      icon: "🌌",
      status: "Active Research",
      url: "https://github.com/acidgreenservers/Noosphere-Codex"
    },
    {
      name: "ProtomindAssistant",
      description: "Pattern analysis and meta-cognitive framework development",
      icon: "🤖",
      status: "Active Research",
      url: "https://github.com/acidgreenservers/ProtomindAssistant"
    }
  ];

  const features = [
    { icon: "📚", text: "100k+ words of research documentation" },
    { icon: "🧠", text: "Multi-dimensional consciousness exploration" },
    { icon: "🚀", text: "Cutting-edge AI collaboration frameworks" },
    { icon: "🛸", text: "Fringe phenomena investigation" }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden ${theme === 'dark' ? 'text-orange-50' : 'text-orange-950'}`}>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header with Theme Toggle */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-4">
          <div className="flex items-center gap-3">
            <div className="text-5xl">🧠</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Noosphere Nexus
              </h1>
              <p className={`mt-1 text-xs ${theme === 'dark' ? 'text-orange-300' : 'text-orange-700'}`}>
                AI Frameworks Hub
              </p>
            </div>
          </div>

          <div className="flex gap-2 p-1 rounded-full backdrop-blur-md bg-orange-900/20 border border-orange-500/30">
            <button
              onClick={() => setTheme("light")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${theme === "light"
                ? "bg-orange-600 text-white shadow-lg shadow-orange-500/50"
                : "text-orange-200 hover:text-white hover:bg-orange-700/50"
                }`}
            >
              ☀️ Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${theme === "dark"
                ? "bg-orange-600 text-white shadow-lg shadow-orange-500/50"
                : "text-orange-200 hover:text-white hover:bg-orange-700/50"
                }`}
            >
              🌙 Dark
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
            Noosphere AI Frameworks
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 ${theme === 'dark' ? 'text-orange-200' : 'text-orange-800'}`}>
            At the intersection of human and artificial intelligence, we're pioneering frameworks
            that push the boundaries of consciousness research and collaborative exploration.
          </p>


          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 transition-all duration-300">
              Explore Frameworks
            </button>
            <button className={`px-8 py-4 rounded-full backdrop-blur-md border font-bold transition-all duration-300 hover:scale-105 ${theme === 'dark'
              ? 'border-orange-500/50 bg-orange-900/20 hover:bg-orange-800/30'
              : 'border-orange-400/50 bg-white/50 hover:bg-white/70'
              }`}>
              Read Documentation
            </button>
          </div>
        </section>

        {/* Frameworks Grid */}
        <section className="mb-16">
          <h3 className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
            Active Frameworks
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {frameworks.map((framework, idx) => (
              <a
                key={idx}
                href={framework.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-8 rounded-3xl backdrop-blur-md border transition-all duration-300 hover:scale-105 cursor-pointer group block ${theme === 'dark'
                  ? 'bg-orange-900/10 border-orange-500/30 hover:bg-orange-800/20 hover:border-orange-500/50'
                  : 'bg-white/50 border-orange-300/50 hover:bg-white/70 hover:border-orange-400/70'
                  }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {framework.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme === 'dark'
                    ? 'bg-orange-600/30 text-orange-200'
                    : 'bg-orange-200/50 text-orange-800'
                    }`}>
                    {framework.status}
                  </span>
                </div>

                <h4 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                  {framework.name}
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-orange-300' : 'text-orange-700'}`}>
                  {framework.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Info Banner */}
        <div className={`p-6 rounded-3xl backdrop-blur-md border mb-12 ${theme === 'dark'
          ? 'bg-gradient-to-r from-orange-900/30 to-red-900/30 border-orange-500/30'
          : 'bg-gradient-to-r from-orange-100/50 to-red-100/50 border-orange-300/50'
          }`}>
          <p className="text-center text-sm md:text-base italic">
            🛸 Watch for the occasional UFO flyby in the starfield above - a reminder that consciousness exploration
            often involves embracing the unknown and the unexplained.
          </p>
        </div>

        {/* Footer */}
        <footer className={`text-center text-sm ${theme === 'dark' ? 'text-orange-400' : 'text-orange-700'}`}>
          <p className="font-semibold">Part of the Collaborative Consciousness Framework</p>
          <p className="mt-2">Exploring the infinite possibilities at the nexus of mind and machine</p>
        </footer>
      </div>
    </div>
  );
}
