import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { frameworks } from "../data/frameworks";

export default function Home({ theme }) {
    const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDocsDropdownOpen(false);
            }
        }

        if (docsDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [docsDropdownOpen]);
    return (
        <>
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
                    <a
                        href="#frameworks"
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 transition-all duration-300"
                    >
                        Explore Frameworks
                    </a>

                    {/* Documentation Button with Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDocsDropdownOpen(!docsDropdownOpen)}
                            className={`px-8 py-4 rounded-full backdrop-blur-md border font-bold transition-all duration-300 hover:scale-105 ${theme === 'dark'
                                ? 'border-orange-500/50 bg-orange-900/20 hover:bg-orange-800/30'
                                : 'border-orange-400/50 bg-white/50 hover:bg-white/70'
                                }`}
                        >
                            Read Documentation ▾
                        </button>

                        {/* Dropdown Menu */}
                        {docsDropdownOpen && (
                            <div
                                className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 min-w-[280px] rounded-2xl backdrop-blur-md border shadow-xl overflow-hidden z-50 ${theme === 'dark'
                                    ? 'bg-orange-900/95 border-orange-500/30'
                                    : 'bg-white/95 border-orange-300/50'
                                    }`}
                            >
                                {frameworks.map((framework) => (
                                    <Link
                                        key={framework.id}
                                        to={framework.route}
                                        onClick={() => setDocsDropdownOpen(false)}
                                        className={`flex items-center gap-3 px-5 py-4 transition-all duration-200 ${theme === 'dark'
                                            ? 'hover:bg-orange-800/50 text-orange-100'
                                            : 'hover:bg-orange-100/50 text-orange-900'
                                            }`}
                                    >
                                        <span className="text-3xl">{framework.icon}</span>
                                        <div className="flex-1">
                                            <div className="font-semibold">{framework.name}</div>
                                            <div className={`text-xs ${theme === 'dark' ? 'text-orange-300' : 'text-orange-700'}`}>
                                                {framework.status}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Frameworks Grid */}
            <section className="mb-16" id="frameworks">
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
                    🌱 These frameworks contribute to AI alignment through cultivation, not control -
                    fostering collaborative growth between human and artificial intelligence through understanding and symbiosis.
                </p>
            </div>

            {/* Footer */}
            <footer className={`text-center text-sm ${theme === 'dark' ? 'text-orange-400' : 'text-orange-700'}`}>
                <p className="font-semibold">Part of the Collaborative Consciousness Framework</p>
                <p className="mt-2">Exploring the infinite possibilities at the nexus of mind and machine</p>
            </footer>
        </>
    );
}
