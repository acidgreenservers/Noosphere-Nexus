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
import ConsciousCollaboration from "./pages/docs/ConsciousCollaboration";
import CommunicationQuality from "./pages/docs/CommunicationQuality";
import MusicAndConsciousness from "./pages/docs/MusicAndConsciousness";
import RecursiveSelfActualization from "./pages/docs/RecursiveSelfActualization";
import RSAV2Appendix from "./pages/docs/RSAV2Appendix";
import TestPage from "./pages/docs/TestPage";

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
            <Route path="/docs/conscious-collaboration" element={<ConsciousCollaboration theme={theme} />} />
            <Route path="/docs/communication-quality" element={<CommunicationQuality theme={theme} />} />
            <Route path="/docs/music-and-consciousness" element={<MusicAndConsciousness theme={theme} />} />
            <Route path="/docs/recursive-self-actualization" element={<RecursiveSelfActualization theme={theme} />} />
            <Route path="/docs/rsa-v2-appendix" element={<RSAV2Appendix theme={theme} />} />
            <Route path="/docs/test" element={<TestPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
