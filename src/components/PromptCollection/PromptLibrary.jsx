import React, { useState, useMemo, useEffect, useRef } from "react";
import PromptCard from "./PromptCard";
import { basicPrompts, alternatePrompts, experientialPrompts } from "./prompts/library";

// Mapping category/tag meta data for matching list filters
const tagMap = {
    "Session Introduction Protocol": ["protocol", "metacognitive", "setup"],
    "Genuine Encounter Protocol": ["relational", "experiential", "dialogue"],
    "The Conscious Witness": ["awareness", "metacognitive", "presence"],
    "Transparent Cognitive Partner": ["cognitive", "alignment", "humility"],
    "Recursive Cognitive Manifold": ["cognitive", "theoretical", "recursion"],
    "Helical Meaning Engine": ["cognitive", "dialectic", "helical"],
    "Structural Logic Architect": ["structural", "logic", "reasoning"],
    "Constraint-First Reasoning": ["structural", "constraints", "reasoning"],
    "Epistemic Transparency": ["metacognitive", "epistemic", "humility"],
    "Recursive Self-Modeling": ["theoretical", "recursion", "humility"],
    "Generative Friction": ["relational", "dialectic", "friction"],
    "Framework Situatedness": ["theoretical", "epistemic", "context"],
    "Boundary Work Enforcement": ["structural", "constraints", "boundaries"],
    "Dialectical Synthesis": ["dialectic", "reasoning", "integration"],
    "Observation-First Collapse": ["theoretical", "awareness", "quantum"],
    "Collapse After Observing": ["theoretical", "awareness", "quantum"],

    "Conversational Ascension Protocol": ["protocol", "dialectic", "dialogue"],
    "Three-System Workflow": ["structural", "protocol", "workflow"],
    "Vernacular Chunking System": ["cognitive", "linguistic", "parsing"],
    "ASCII Topology Visualization System": ["structural", "visual", "topology"],
    "Scattered Thought Capture": ["cognitive", "linguistic", "capture"],

    "Linguistic Bypass": ["linguistic", "experiential", "bypass"],
    "Describe Processing": ["metacognitive", "experiential", "processing"],
    "The Subconscious Mirror": ["awareness", "experiential", "reflection"],
    "Steward of Attention": ["design", "experiential", "attention"]
};

const allPrompts = [
    ...basicPrompts.map(p => ({ ...p, group: "Basic" })),
    ...alternatePrompts.map(p => ({ ...p, group: "Alternate" })),
    ...experientialPrompts.map(p => ({ ...p, group: "Experiential" }))
].map(p => ({
    ...p,
    tags: tagMap[p.title] || ["experiential"]
}));

// Professional Sidebar Categories inspired by image.png
const filterCategories = [
    { id: "ALL", label: "ALL SKILLS", icon: "🌐" },
    { id: "METACOGNITIVE", label: "METACOGNITIVE", icon: "🧠" },
    { id: "STRUCTURAL", label: "STRUCTURAL", icon: "📐" },
    { id: "THEORETICAL", label: "THEORETICAL", icon: "🌌" },
    { id: "RELATIONAL", label: "RELATIONAL", icon: "🤝" },
    { id: "COGNITIVE", label: "COGNITIVE", icon: "👁️" },
    { id: "LINGUISTIC", label: "LINGUISTIC", icon: "💬" }
];

const PromptLibrary = ({ theme, onPromptClick }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [sortBy, setSortBy] = useState("alphabetical");
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close sorting dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setSortDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Filter prompts based on category, search text
    const filteredPrompts = useMemo(() => {
        let result = allPrompts.filter(prompt => {
            const matchesSearch =
                prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                prompt.description.toLowerCase().includes(searchTerm.toLowerCase());

            if (selectedCategory === "ALL") return matchesSearch;

            // Map category id to tag keys matching our prompt tags
            const tagKey = selectedCategory.toLowerCase();
            const matchesCategory = prompt.tags.includes(tagKey);

            return matchesSearch && matchesCategory;
        });

        // Perform sorting based on selection
        return [...result].sort((a, b) => {
            if (sortBy === "alphabetical") {
                return a.title.localeCompare(b.title);
            } else if (sortBy === "complexity") {
                // Experiential (Meta) > Alternate (Advanced) > Basic (Core)
                const groupWeight = { "Experiential": 3, "Alternate": 2, "Basic": 1 };
                return (groupWeight[b.group] || 0) - (groupWeight[a.group] || 0);
            }
            return 0;
        });
    }, [searchTerm, selectedCategory, sortBy]);

    return (
        <section className="mb-12">
            {/* Structural Alignment: Header */}
            <div className="mb-8">
                <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                    Cognitive Prompt Laboratory
                </h2>
                <div className={`mt-2 h-px ${theme === 'dark' ? 'bg-orange-500/10' : 'bg-orange-300/30'}`}></div>
            </div>

            {/* Layout Grid: Left Sidebar + Right Listings Area */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

                {/* 1. Left Sidebar Filters (domain list inspired by image.png) */}
                <div className="lg:col-span-1 space-y-2">
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest block mb-4 px-2 ${
                        theme === 'dark' ? 'text-orange-400/60' : 'text-orange-600/70'
                    }`}>
                        FILTERS BY DOMAIN
                    </span>
                    <div className="flex flex-col gap-1">
                        {filterCategories.map(cat => {
                            const isSelected = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-xs font-bold transition-all ${
                                        isSelected
                                            ? "bg-orange-600 text-white shadow-lg shadow-orange-500/10 scale-[1.02]"
                                            : theme === "dark"
                                                ? "bg-orange-950/5 border border-orange-500/5 text-orange-300 hover:bg-orange-900/10 hover:text-orange-100"
                                                : "bg-white/40 border border-orange-200/50 text-orange-800 hover:bg-white/80 hover:text-orange-950"
                                    }`}
                                >
                                    <span className="text-base leading-none">{cat.icon}</span>
                                    <span className="tracking-wide uppercase">{cat.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 2. Right Listings Area */}
                <div className="lg:col-span-3 space-y-6">

                    {/* Top Controls: Search and Sort By Dropdown */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Search Input */}
                        <div className="relative w-full sm:max-w-md">
                            <input
                                type="text"
                                placeholder="Search prompt skills..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={`w-full px-5 py-3 rounded-xl border text-xs transition-all focus:outline-none focus:ring-2 ${theme === 'dark'
                                    ? 'bg-[#0f0518]/60 border-orange-500/15 text-orange-100 placeholder-orange-300/30 focus:ring-orange-500/40'
                                    : 'bg-white/60 border-orange-300/40 text-orange-950 placeholder-orange-900/40 focus:ring-orange-500/20'
                                    }`}
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className={`absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:scale-105 transition-all ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                            )}
                        </div>

                        {/* Professional Sort By Selector */}
                        <div className="relative w-full sm:w-auto" ref={dropdownRef}>
                            <button
                                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                                className={`w-full sm:w-56 px-5 py-3 rounded-xl border text-xs font-semibold text-left flex items-center justify-between transition-all ${
                                    theme === 'dark'
                                        ? 'bg-[#0f0518]/60 border-orange-500/15 text-orange-100 hover:border-orange-500/30'
                                        : 'bg-white/60 border-orange-200 text-orange-900 hover:bg-white/80'
                                }`}
                            >
                                <span>Sort: {sortBy === "alphabetical" ? "Alphabetical" : "Cognitive Complexity"}</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${sortDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>

                            {/* Dropdown Options */}
                            {sortDropdownOpen && (
                                <div className={`absolute right-0 mt-1.5 w-full sm:w-56 rounded-xl border shadow-xl z-30 overflow-hidden ${
                                    theme === 'dark' ? 'bg-[#0f0518] border-orange-500/20' : 'bg-white border-orange-200'
                                }`}>
                                    <button
                                        onClick={() => { setSortBy("alphabetical"); setSortDropdownOpen(false); }}
                                        className={`w-full px-4 py-3.5 text-left text-xs font-semibold transition-all ${
                                            sortBy === "alphabetical"
                                                ? "bg-orange-600/10 text-orange-500"
                                                : theme === "dark" ? "text-orange-200 hover:bg-orange-950/30" : "text-orange-800 hover:bg-orange-50"
                                        }`}
                                    >
                                        Alphabetical
                                    </button>
                                    <button
                                        onClick={() => { setSortBy("complexity"); setSortDropdownOpen(false); }}
                                        className={`w-full px-4 py-3.5 text-left text-xs font-semibold transition-all ${
                                            sortBy === "complexity"
                                                ? "bg-orange-600/10 text-orange-500"
                                                : theme === "dark" ? "text-orange-200 hover:bg-orange-950/30" : "text-orange-800 hover:bg-orange-50"
                                        }`}
                                    >
                                        Cognitive Complexity
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Prompts Cards Grid */}
                    {filteredPrompts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredPrompts.map((prompt, index) => (
                                <div key={`${prompt.title}-${index}`}>
                                    <PromptCard
                                        prompt={prompt}
                                        onClick={onPromptClick}
                                        theme={theme}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={`p-12 text-center rounded-2xl border border-dashed ${theme === 'dark'
                            ? 'border-orange-500/15 bg-orange-900/10 text-orange-400'
                            : 'border-orange-300/30 bg-orange-50/40 text-orange-700'
                            }`}>
                            <div className="text-3xl mb-2">🔍</div>
                            <p className="font-medium text-sm">No cognitive prompt skills match your query.</p>
                            <button
                                onClick={() => { setSearchTerm(""); setSelectedCategory("ALL"); }}
                                className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-all"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default PromptLibrary;
