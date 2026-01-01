import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Starfield({ theme }) {
    const canvasRef = useRef(null);
    const ufoTimeoutRef = useRef(null);
    const location = useLocation();

    // Check if we are on the Codex page
    const isCodexPage = location.pathname.includes("/docs/codex");

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
            const delay = (5 + Math.random() * 10) * 1000; // 5-15 seconds for testing
            ufoTimeoutRef.current = setTimeout(startUFO, delay);
        }

        scheduleUFO();

        function render(t) {
            ctx.clearRect(0, 0, w, h);

            // Gradient background
            const g = ctx.createLinearGradient(0, 0, 0, h);

            if (isCodexPage) {
                // Purple/Indigo Theme for Codex
                if (theme === "dark") {
                    g.addColorStop(0, "#0f0518"); // Deep Cosmic Void
                    g.addColorStop(1, "#2e1065"); // Deep Purple
                } else {
                    g.addColorStop(0, "#f3e8ff"); // Light Purple
                    g.addColorStop(1, "#e0e7ff"); // Light Indigo
                }
            } else {
                // Standard Orange Theme
                if (theme === "dark") {
                    g.addColorStop(0, "#1a0a00");
                    g.addColorStop(1, "#2d1500");
                } else {
                    g.addColorStop(0, "#fff5eb");
                    g.addColorStop(1, "#fed7aa");
                }
            }

            ctx.fillStyle = g;
            ctx.fillRect(0, 0, w, h);

            // Draw stars
            stars.forEach((s) => {
                const alpha = 0.5 + 0.5 * Math.sin(t * 0.001 * s.flicker + s.phase);

                let starColor;
                if (isCodexPage) {
                    starColor = theme === "dark"
                        ? `rgba(216, 180, 254, ${alpha * 0.8 + 0.2})` // Boosted Purple stars
                        : `rgba(147, 51, 234, ${alpha * 0.6 + 0.2})`; // Boosted Light stars
                } else {
                    starColor = theme === "dark"
                        ? `rgba(255, 200, 120, ${alpha})`
                        : `rgba(200, 120, 50, ${alpha * 0.4})`;
                }

                ctx.fillStyle = starColor;
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

                // UFO Colors based on theme
                const glowColorStart = isCodexPage ? "rgba(168, 85, 247, 0.3)" : "rgba(249, 115, 22, 0.3)";
                const glowColorEnd = isCodexPage ? "rgba(168, 85, 247, 0)" : "rgba(249, 115, 22, 0)";
                const discColor = isCodexPage ? "#9333ea" : "#f97316"; // Purple-600 vs Orange-500
                const domeColor = isCodexPage ? "#a855f7" : "#fb923c"; // Purple-500 vs Orange-400

                glow.addColorStop(0, glowColorStart);
                glow.addColorStop(1, glowColorEnd);
                ctx.fillStyle = glow;
                ctx.fillRect(-30, -30, 60, 60);

                // Main disc
                ctx.fillStyle = discColor;
                ctx.beginPath();
                ctx.ellipse(0, 0, 25, 10, 0, 0, Math.PI * 2);
                ctx.fill();

                // Dome
                ctx.fillStyle = domeColor;
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
    }, [theme, isCodexPage]);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
}
