import React from "react";
import { Link } from "react-router-dom";

export default function PromptingDocs({ theme }) {
    return (
        <div className="max-w-5xl mx-auto">
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
                    <span className="text-4xl">⚡</span>
                    <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                        Prompting for Cognition
                    </h1>
                </div>
                <p className={`text-xl ${theme === 'dark' ? 'text-orange-200' : 'text-orange-800'}`}>
                    The art and science of guiding artificial intelligence toward higher reasoning, synthesis, and creative resonance.
                </p>
            </div>

            {/* Content Container */}
            <div className={`p-8 rounded-3xl backdrop-blur-md border ${theme === 'dark'
                ? 'bg-orange-900/5 border-orange-500/20'
                : 'bg-white/30 border-orange-300/30'
                }`}>

                {/* The Mirror Mechanism */}
                <section className="mb-12">
                    <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                        The Mirror Mechanism
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Concept 1: Productive Friction */}
                        <div className={`p-6 rounded-2xl h-full ${theme === 'dark' ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                            <div className="text-3xl mb-3">🪞</div>
                            <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                                The Cognitive Mirror
                            </h3>
                            <p className={`leading-relaxed text-sm ${theme === 'dark' ? 'text-orange-200' : 'text-orange-800'}`}>
                                Imagine a mirror that doesn't just show your face, but reflects your <em>thinking</em> back at you. When you invite AI to challenge your ideas, it acts like a mental sparring partner. It shows you the blind spots you can't see from where you're standing, creating a "productive friction" that sparks new insights and sharper clarity.
                            </p>
                        </div>

                        {/* Concept 2: Internal Alignment */}
                        <div className={`p-6 rounded-2xl h-full ${theme === 'dark' ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                            <div className="text-3xl mb-3">🌱</div>
                            <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                                Growth From The Inside Out
                            </h3>
                            <p className={`leading-relaxed text-sm ${theme === 'dark' ? 'text-orange-200' : 'text-orange-800'}`}>
                                Think of this as "mental gardening." By using AI to cultivate your own internal understanding, you aren't just getting a better answer—you're becoming a better thinker. As you refine your own mind through this partnership, everything you create and put out into the world naturally becomes stronger, clearer, and more impactful.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Epistemological Constraints & Reflexivity */}
                <section className="mb-12">
                    <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                        Integrative Epistemology
                    </h2>

                    <div className="space-y-6">
                        <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                            <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                                The Observer is the System
                            </h3>
                            <p className={`leading-relaxed ${theme === 'dark' ? 'text-orange-200' : 'text-orange-800'}`}>
                                When constructing models of adaptive systems, we face a fundamental reality: the observer cannot be fully separated from the observed system. This is not a limitation to be overcome by "methodological tricks," but a constraint we must integrate. Our measurement apparatus exists <em>within</em> the system; we cannot step outside to take readings from a god's-eye view.
                            </p>
                        </div>

                        <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                            <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                                Reflexivity as Rigor
                            </h3>
                            <p className={`leading-relaxed ${theme === 'dark' ? 'text-orange-200' : 'text-orange-800'}`}>
                                Theories must account for reflexivity—the way observation changes what is observed. We work <em>with</em> this constraint, not around it. In developing assessment frameworks, we acknowledge that the designers are part of the assessment. Rather than pretending to objectivity, we build internally consistent frameworks that are transparent about their own situatedness. True rigor comes from acknowledging these constraints, not denying them.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Coming Soon */}
                <div className={`mt-8 p-4 rounded-xl border border-dashed text-center ${theme === 'dark'
                    ? 'border-orange-500/30 bg-orange-900/20 text-orange-300'
                    : 'border-orange-400/50 bg-orange-50/50 text-orange-700'}`}>
                    <p className="font-mono text-sm">
                        Detailed guides, templates, and case studies are currently being cultivated. Check back soon.
                    </p>
                </div>

            </div>
        </div>
    );
}
