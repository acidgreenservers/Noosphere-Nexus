import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ManifoldDocs from "./pages/docs/ManifoldDocs";
import GardenDocs from "./pages/docs/GardenDocs";
import CultivatedIntelligence from "./pages/docs/CultivatedIntelligence";
import CodexDocs from "./pages/docs/CodexDocs";
import ProtomindDocs from "./pages/docs/ProtomindDocs";
import PromptingDocs from "./pages/docs/PromptingDocs";

import Starfield from "./components/Starfield";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("nn-theme");
      if (stored) return stored;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("nn-theme", theme);
    }
  }, [theme]);

  // Canvas logic moved to Starfield.jsx

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className={`min-h-screen relative overflow-hidden ${theme === 'dark' ? 'text-orange-50' : 'text-orange-950'}`}>
        <Starfield theme={theme} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          <Navbar theme={theme} setTheme={setTheme} />

          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/docs/manifold" element={<ManifoldDocs theme={theme} />} />
            <Route path="/docs/garden" element={<GardenDocs theme={theme} />} />
            <Route path="/docs/garden/cultivated-intelligence" element={<CultivatedIntelligence theme={theme} />} />
            <Route path="/docs/codex" element={<CodexDocs theme={theme} />} />
            <Route path="/docs/protomind" element={<ProtomindDocs theme={theme} />} />
            <Route path="/docs/prompting-for-cognition" element={<PromptingDocs theme={theme} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
