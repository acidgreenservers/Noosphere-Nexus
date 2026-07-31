import React, { useState, useMemo } from "react";
import PromptCard from "./PromptCard";
import { basicPrompts, alternatePrompts, experientialPrompts } from "./prompts/library";

// Enhance standard prompts with category tags for filtering
const tagMap = {
    // Basic Prompts
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

    // Alternate Prompts
    "Conversational Ascension Protocol": ["protocol", "dialectic", "dialogue"],
    "Three-System Workflow": ["structural", "protocol", "workflow"],
    "Vernacular Chunking System": ["cognitive", "linguistic", "parsing"],
    "ASCII Topology Visualization System": ["structural", "visual", "topology"],
    "Scattered Thought Capture": ["cognitive", "linguistic", "capture"],

    // Experiential Prompts
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

const PromptLibrary = ({ theme, onPromptClick }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("All");
    const [selectedTag, setSelectedTag] = useState("all");

    // Extract all unique tags
    const allTags = useMemo(() => {
        const tagsSet = new Set();
        allPrompts.forEach(p => p.tags.forEach(t => tagsSet.add(t)));
        return ["all", ...Array.from(tagsSet).sort()];
    }, []);

    // Filter prompts based on Search, Tab, and Tag
    const filteredPrompts = useMemo(() => {
        return allPrompts.filter(prompt => {
            const matchesSearch =
                prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                prompt.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesTab =
                activeTab === "All" ||
                prompt.group === activeTab;

            const matchesTag =
                selectedTag === "all" ||
                prompt.tags.includes(selectedTag);

            return matchesSearch && matchesTab && matchesTag;
        });
    }, [searchTerm, activeTab, selectedTag]);

    return (
        <section className="mb-12">
            {/* Header & Structural Whitespace */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                    <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                        Modular Prompt Registry
                    </h2>
                    <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-orange-300' : 'text-orange-700'}`}>
                        Filter, search, and discover tailored cognitive frameworks.
                    </p>
                </div>

                {/* Subtractive Search Input */}
                <div className="relative max-w-sm w-full">
                    <input
                        type="text"
                        placeholder="Search prompts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`w-full px-5 py-3 rounded-full border text-sm transition-all focus:outline-none focus:ring-2 ${theme === 'dark'
                            ? 'bg-[#0f0518]/60 border-orange-500/20 text-orange-100 placeholder-orange-300/40 focus:ring-orange-500/50 focus:border-orange-500/50'
                            : 'bg-white/60 border-orange-300/30 text-orange-950 placeholder-orange-900/40 focus:ring-orange-500/30 focus:border-orange-500/40'
                            }`}
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm("")}
                            className={`absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:scale-105 transition-all ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Filter Controls (Gestalt Proximity & Structural Alignment) */}
            <div className="space-y-4 mb-8">
                {/* Primary Category Tabs */}
                <div className="flex flex-wrap gap-2">
                    {["All", "Basic", "Alternate", "Experiential"].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${activeTab === tab
                                ? "bg-orange-600 text-white shadow-lg shadow-orange-500/20 scale-105"
                                : theme === "dark"
                                    ? "bg-orange-950/20 border border-orange-500/20 text-orange-300 hover:bg-orange-900/30 hover:text-orange-100"
                                    : "bg-white/40 border border-orange-300/30 text-orange-800 hover:bg-white/70 hover:text-orange-950"
                                }`}
                        >
                            {tab} Prompts
                        </button>
                    ))}
                </div>

                {/* Secondary Tag Filters */}
                <div className="flex flex-wrap gap-2 items-center">
                    <span className={`text-[10px] font-bold uppercase tracking-widest mr-2 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>
                        Filter Tag:
                    </span>
                    {allTags.map(tag => {
                        const isSelected = selectedTag === tag;
                        return (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all ${isSelected
                                    ? "bg-orange-700/80 text-orange-100 scale-105"
                                    : theme === "dark"
                                        ? "bg-orange-900/10 text-orange-400 hover:bg-orange-900/20"
                                        : "bg-orange-100/35 text-orange-700 hover:bg-orange-100/60"
                                    }`}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Results Grid (Progressive Disclosure & Whitespace) */}
            {filteredPrompts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-300">
                    {filteredPrompts.map((prompt, index) => (
                        <div key={`${prompt.title}-${index}`} className="h-full">
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
                    ? 'border-orange-500/20 bg-orange-900/10 text-orange-400'
                    : 'border-orange-300/30 bg-orange-50/40 text-orange-700'
                    }`}>
                    <div className="text-3xl mb-2">🔍</div>
                    <p className="font-medium text-sm">No cognitive frameworks matched your filtering options.</p>
                    <button
                        onClick={() => { setSearchTerm(""); setActiveTab("All"); setSelectedTag("all"); }}
                        className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-all"
                    >
                        Reset All Filters
                    </button>
                </div>
            )}
        </section>
    );
};

export default PromptLibrary;
