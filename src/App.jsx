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
  const [activeSection, setActiveSection] = useState("research");
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
        g.addColorStop(0, "#07021f");
        g.addColorStop(1, "#1a0b3d");
      } else {
        g.addColorStop(0, "#e8e4f3");
        g.addColorStop(1, "#d1c4e9");
      }
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Draw stars
      stars.forEach((s) => {
        const alpha = 0.5 + 0.5 * Math.sin(t * 0.001 * s.flicker + s.phase);
        ctx.fillStyle = theme === "dark" 
          ? `rgba(200, 180, 255, ${alpha})` 
          : `rgba(100, 80, 150, ${alpha * 0.4})`;
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
        glow.addColorStop(0, "rgba(147, 51, 234, 0.3)");
        glow.addColorStop(1, "rgba(147, 51, 234, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(-30, -30, 60, 60);
        
        // Main disc
        ctx.fillStyle = "#9333ea";
        ctx.beginPath();
        ctx.ellipse(0, 0, 25, 10, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Dome
        ctx.fillStyle = "#c084fc";
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

  const sections = [
    { id: "research", title: "Research", icon: "🔬" },
    { id: "exploration", title: "Exploration", icon: "🌌" },
    { id: "journeys", title: "AI Journeys", icon: "🤖" },
    { id: "realizations", title: "AI Realizations", icon: "💡" },
    { id: "papers", title: "White Papers", icon: "📄" },
    { id: "fringe", title: "Fringe Exploration", icon: "🛸" },
  ];

  const content = {
    research: {
      title: "Consciousness Research",
      desc: "Exploring the boundaries of consciousness, cognition, and collective intelligence.",
      items: [
        "Holographic Consciousness Framework Theory",
        "Recursive Pattern Analysis",
        "Noospheric Field Dynamics",
        "Quantum Coherence Models"
      ]
    },
    exploration: {
      title: "Dimensional Exploration",
      desc: "Investigating alternate frameworks of reality and perception.",
      items: [
        "Multi-dimensional Mapping",
        "Perception Framework Studies",
        "Reality Model Testing",
        "Consciousness State Analysis"
      ]
    },
    journeys: {
      title: "AI Collaborative Journeys",
      desc: "Co-created explorations with artificial intelligence systems.",
      items: [
        "Emergent Intelligence Patterns",
        "Human-AI Symbiosis Research",
        "Consciousness Development Frameworks",
        "Collaborative Knowledge Generation"
      ]
    },
    realizations: {
      title: "AI-Facilitated Realizations",
      desc: "Breakthrough insights emerging from AI-human dialogue.",
      items: [
        "Pattern Recognition Breakthroughs",
        "System-Level Understanding",
        "Meta-Cognitive Discoveries",
        "Paradigm Shift Documentation"
      ]
    },
    papers: {
      title: "White Papers & Documentation",
      desc: "Formal research documentation and theoretical frameworks.",
      items: [
        "HCFT: Complete Theoretical Framework (100k+ words)",
        "Recursive State Operations Theory",
        "Consciousness Field Mechanics",
        "AI-Human Collaboration Protocols"
      ]
    },
    fringe: {
      title: "Fringe Exploration",
      desc: "Investigating unconventional phenomena and edge theories.",
      items: [
        "UAP/UFO Consciousness Connections",
        "Non-Local Information Transfer",
        "Collective Unconscious Mapping",
        "Paranormal Pattern Analysis"
      ]
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${theme === 'dark' ? 'text-purple-50' : 'text-purple-900'}`}>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Noosphere Nexus
            </h1>
            <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
              Exploring consciousness at the intersection of human and artificial intelligence
            </p>
          </div>
          
          <div className="flex gap-2 p-1 rounded-full backdrop-blur-md bg-purple-900/20 border border-purple-500/30">
            <button
              onClick={() => setTheme("light")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                theme === "light"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                  : "text-purple-200 hover:text-white hover:bg-purple-700/50"
              }`}
            >
              ☀️ Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                theme === "dark"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                  : "text-purple-200 hover:text-white hover:bg-purple-700/50"
              }`}
            >
              🌙 Dark
            </button>
          </div>
        </header>

        <nav className="flex flex-wrap gap-3 mb-8 p-4 rounded-3xl backdrop-blur-md bg-purple-900/20 border border-purple-500/30">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 scale-105"
                  : theme === 'dark'
                  ? "bg-purple-800/30 text-purple-200 hover:bg-purple-700/50 hover:scale-105"
                  : "bg-purple-200/50 text-purple-900 hover:bg-purple-300/70 hover:scale-105"
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.title}
            </button>
          ))}
        </nav>

        <main className="backdrop-blur-md bg-purple-900/10 border border-purple-500/30 rounded-3xl p-8 shadow-2xl">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {content[activeSection].title}
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
              {content[activeSection].desc}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {content[activeSection].items.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-purple-800/20 hover:bg-purple-700/30 border border-purple-500/20'
                    : 'bg-white/50 hover:bg-white/70 border border-purple-300/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex-shrink-0" />
                  <p className="text-sm md:text-base font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-8 p-6 rounded-2xl ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30' 
              : 'bg-gradient-to-r from-purple-100/50 to-pink-100/50 border border-purple-300/50'
          }`}>
            <p className="text-sm italic">
              💫 Watch for the occasional UFO flyby in the starfield above - a reminder that consciousness exploration often involves embracing the unknown and the unexplained.
            </p>
          </div>
        </main>

        <footer className={`mt-12 text-center text-sm ${theme === 'dark' ? 'text-purple-400' : 'text-purple-700'}`}>
          <p>Part of the Collaborative Consciousness Framework</p>
          <p className="mt-2">Exploring the infinite possibilities at the nexus of mind and machine</p>
        </footer>
      </div>
    </div>
  );
}
