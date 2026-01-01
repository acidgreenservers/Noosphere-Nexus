import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { frameworks } from "../data/frameworks";

export default function Home({ theme }) {
    const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);
    const docsDropdownRef = useRef(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (docsDropdownRef.current && !docsDropdownRef.current.contains(event.target)) {
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
                    {/* Prompting for Cognition Button */}
                    <div className="relative">
                        <Link
                            to="/docs/prompting-for-cognition"
                            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 transition-all duration-300"
                        >
                            Prompt Collection ⚡
                        </Link>
                    </div>

                    {/* Documentation Button with Dropdown */}
                    <div className="relative" ref={docsDropdownRef}>
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
                <p className={`text-center max-w-3xl mx-auto mb-6 text-xl leading-relaxed ${theme === 'dark' ? 'text-orange-200' : 'text-orange-800'}`}>
                    Each framework represents a unique approach to understanding and cultivating intelligence—whether exploring consciousness as holographic patterns, developing bio-inspired alignment systems, or investigating collective intelligence fields. These are living research projects, evolving through collaborative exploration between human and artificial minds.
                </p>

                <h3 className={`text-3xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
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
            <footer className="space-y-6">
                {/* Footer Text */}
                <div className={`text-center text-sm ${theme === 'dark' ? 'text-orange-400' : 'text-orange-700'}`}>
                    <p className="font-semibold">Part of the Collaborative Consciousness Framework</p>
                    <p className="mt-2">Exploring the infinite possibilities at the nexus of mind and machine</p>
                </div>

                {/* Profile Buttons */}
                <div className="flex justify-center gap-4">
                    {/* GitHub Profile */}
                    <a
                        href="https://github.com/acidgreenservers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-md border transition-all duration-300 hover:scale-105 ${theme === 'dark'
                            ? 'bg-gray-900/40 border-gray-500/40 text-gray-200 hover:bg-gray-800/50 hover:border-gray-400/60'
                            : 'bg-gray-100/60 border-gray-300/50 text-gray-800 hover:bg-gray-200/70 hover:border-gray-400/70'
                            }`}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub Profile
                    </a>

                    {/* Hugging Face Profile */}
                    <a
                        href="https://huggingface.co/acidgreenservers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-md border transition-all duration-300 hover:scale-105 ${theme === 'dark'
                            ? 'bg-yellow-900/30 border-yellow-500/40 text-yellow-200 hover:bg-yellow-800/40 hover:border-yellow-400/60'
                            : 'bg-yellow-100/60 border-yellow-300/50 text-yellow-800 hover:bg-yellow-200/70 hover:border-yellow-400/70'
                            }`}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zM8.4 7.2c-.993 0-1.8.807-1.8 1.8v6c0 .993.807 1.8 1.8 1.8h7.2c.993 0 1.8-.807 1.8-1.8V9c0-.993-.807-1.8-1.8-1.8H8.4zm1.2 2.4h1.2v4.8H9.6V9.6zm3.6 0h1.2v4.8h-1.2V9.6z" />
                        </svg>
                        Hugging Face Profile
                    </a>
                </div>
            </footer>
        </>
    );
}
