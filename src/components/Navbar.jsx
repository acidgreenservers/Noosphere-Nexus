import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ theme, setTheme }) {
    const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
    const exploreDropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (exploreDropdownRef.current && !exploreDropdownRef.current.contains(event.target)) {
                setExploreDropdownOpen(false);
            }
        }
        if (exploreDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [exploreDropdownOpen]);

    return (
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-4">
            {/* Logo and Title */}
            <Link to="/" className="flex items-center gap-3 group">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">🧠</div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                        Noosphere Nexus
                    </h1>
                    <p className={`mt-1 text-xs ${theme === 'dark' ? 'text-orange-300' : 'text-orange-700'}`}>
                        AI Frameworks Hub
                    </p>
                </div>
            </Link>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3 flex-wrap">
                {/* Explore Frameworks Dropdown */}
                <div className="relative" ref={exploreDropdownRef}>
                    <button
                        onClick={() => setExploreDropdownOpen(!exploreDropdownOpen)}
                        className={`px-5 py-2 rounded-full text-sm font-medium backdrop-blur-md border transition-all duration-300 hover:scale-105 ${theme === 'dark'
                            ? 'bg-orange-900/30 border-orange-500/40 text-orange-200 hover:bg-orange-800/40 hover:border-orange-400/60'
                            : 'bg-orange-100/60 border-orange-300/50 text-orange-800 hover:bg-orange-200/70 hover:border-orange-400/70'
                            }`}
                    >
                        Explore Frameworks ▾
                    </button>

                    {/* Dropdown Menu */}
                    {exploreDropdownOpen && (
                        <div
                            className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 min-w-[320px] rounded-2xl backdrop-blur-md border shadow-xl overflow-hidden z-50 ${theme === 'dark'
                                ? 'bg-orange-900/95 border-orange-500/30'
                                : 'bg-white/95 border-orange-300/50'
                                }`}
                        >
                            {/* Manifold */}
                            <div className={`border-b ${theme === 'dark' ? 'border-orange-500/30' : 'border-orange-300/50'}`}>
                                <div className={`px-5 py-3 flex items-center gap-3 ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                                    <span className="text-2xl">🧠</span>
                                    <div className="flex-1">
                                        <div className="font-bold">Noosphere Manifold</div>
                                    </div>
                                </div>
                                <div className="px-5 pb-3 flex gap-2">
                                    <a
                                        href="https://github.com/acidgreenservers/Noosphere-Manifold"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setExploreDropdownOpen(false)}
                                        className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold text-center transition-all ${theme === 'dark'
                                            ? 'bg-orange-800/50 hover:bg-orange-700/50 text-orange-100'
                                            : 'bg-orange-200/50 hover:bg-orange-300/50 text-orange-900'
                                            }`}
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="https://huggingface.co/datasets/acidgreenservers/Noosphere-Manifold"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setExploreDropdownOpen(false)}
                                        className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold text-center transition-all ${theme === 'dark'
                                            ? 'bg-orange-800/50 hover:bg-orange-700/50 text-orange-100'
                                            : 'bg-orange-200/50 hover:bg-orange-300/50 text-orange-900'
                                            }`}
                                    >
                                        Hugging Face
                                    </a>
                                </div>
                            </div>

                            {/* Garden */}
                            <div>
                                <div className={`px-5 py-3 flex items-center gap-3 ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                                    <span className="text-2xl">🌱</span>
                                    <div className="flex-1">
                                        <div className="font-bold">Noosphere Garden</div>
                                    </div>
                                </div>
                                <div className="px-5 pb-3 flex gap-2">
                                    <a
                                        href="https://github.com/acidgreenservers/Noosphere-Garden"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setExploreDropdownOpen(false)}
                                        className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold text-center transition-all ${theme === 'dark'
                                            ? 'bg-orange-800/50 hover:bg-orange-700/50 text-orange-100'
                                            : 'bg-orange-200/50 hover:bg-orange-300/50 text-orange-900'
                                            }`}
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="https://huggingface.co/datasets/acidgreenservers/Noosphere-Garden"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setExploreDropdownOpen(false)}
                                        className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold text-center transition-all ${theme === 'dark'
                                            ? 'bg-orange-800/50 hover:bg-orange-700/50 text-orange-100'
                                            : 'bg-orange-200/50 hover:bg-orange-300/50 text-orange-900'
                                            }`}
                                    >
                                        Hugging Face
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Research Site Button */}
                <a
                    href="https://acidgreenservers.github.io/Noosphere-Research/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-2 rounded-full text-sm font-medium backdrop-blur-md border transition-all duration-300 hover:scale-105 ${theme === 'dark'
                        ? 'bg-purple-900/30 border-purple-500/40 text-purple-200 hover:bg-purple-800/40 hover:border-purple-400/60'
                        : 'bg-purple-100/60 border-purple-300/50 text-purple-800 hover:bg-purple-200/70 hover:border-purple-400/70'
                        }`}
                >
                    📚 Theoretical Research
                </a>

                {/* Theme Toggle */}
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
            </div>
        </header>
    );
}
