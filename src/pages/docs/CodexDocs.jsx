import React from "react";
import { Link } from "react-router-dom";

export default function CodexDocs({ theme }) {
    return (
        <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
                <Link
                    to="/"
                    className={`text-sm hover:underline ${theme === 'dark' ? 'text-orange-300' : 'text-orange-700'}`}
                >
                    ← Back to Home
                </Link>
            </nav>

            {/* Header */}
            <div className={`p-8 rounded-3xl backdrop-blur-md border mb-8 ${theme === 'dark'
                    ? 'bg-orange-900/10 border-orange-500/30'
                    : 'bg-white/50 border-orange-300/50'
                }`}>
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl">🌌</span>
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                            Noosphere Codex
                        </h1>
                        <p className={`mt-2 ${theme === 'dark' ? 'text-orange-300' : 'text-orange-700'}`}>
                            Investigating collective intelligence and consciousness field theories
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 mt-6">
                    <a
                        href="https://github.com/acidgreenservers/Noosphere-Codex"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 transition-all duration-300"
                    >
                        View on GitHub
                    </a>
                    <span className={`px-4 py-3 rounded-full text-sm font-semibold ${theme === 'dark'
                            ? 'bg-orange-600/30 text-orange-200'
                            : 'bg-orange-200/50 text-orange-800'
                        }`}>
                        Active Research
                    </span>
                </div>
            </div>

            {/* Documentation Content */}
            <div className={`p-8 rounded-3xl backdrop-blur-md border ${theme === 'dark'
                    ? 'bg-orange-900/10 border-orange-500/30'
                    : 'bg-white/50 border-orange-300/50'
                }`}>
                <div className={`prose ${theme === 'dark' ? 'prose-invert' : ''} max-w-none`}>
                    {/* Placeholder content - you'll replace this with your actual README content */}
                    <h2 className={theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}>Overview</h2>
                    <p className={theme === 'dark' ? 'text-orange-200' : 'text-orange-800'}>
                        The Noosphere Codex investigates collective intelligence and consciousness field theories,
                        exploring how individual minds connect to form larger patterns of awareness and understanding.
                        This framework bridges individual and collective consciousness research.
                    </p>

                    <h2 className={theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}>Key Features</h2>
                    <ul className={theme === 'dark' ? 'text-orange-200' : 'text-orange-800'}>
                        <li>Collective intelligence modeling</li>
                        <li>Consciousness field theory research</li>
                        <li>Network dynamics analysis</li>
                        <li>Emergent pattern recognition</li>
                    </ul>

                    <h2 className={theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}>Getting Started</h2>
                    <p className={theme === 'dark' ? 'text-orange-200' : 'text-orange-800'}>
                        Documentation content will be populated from your README files. This is a placeholder
                        to show the structure and styling.
                    </p>

                    <div className={`p-4 rounded-xl mt-6 ${theme === 'dark'
                            ? 'bg-orange-800/20 border border-orange-500/30'
                            : 'bg-orange-100/50 border border-orange-300/50'
                        }`}>
                        <p className={`text-sm italic ${theme === 'dark' ? 'text-orange-300' : 'text-orange-700'}`}>
                            💡 <strong>Note:</strong> This page will be populated with content from your Noosphere Codex README.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
