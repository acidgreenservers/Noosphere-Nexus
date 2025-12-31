import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ theme, setTheme }) {
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
        </header>
    );
}
