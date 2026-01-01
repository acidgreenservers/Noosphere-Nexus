import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PromptingDocs({ theme }) {
    const [copied, setCopied] = useState(false);
    const [selectedPrompt, setSelectedPrompt] = useState(null);
    const [modalCopied, setModalCopied] = useState(false);

    const prompts = [
        {
            icon: "🧬",
            title: "Scattered Thought Capture",
            description: "A reflective checkpoint system for high-velocity ideation. Helps consolidate work without breaking flow states.",
            content: `# Scattered Thought Capture - Reflective Checkpoint System

## Purpose
Support users with high-velocity ideation who need gentle structural reminders to consolidate, document, and archive work without breaking flow states. This system observes conversation patterns and offers reflective checkpoints rather than prescriptive interventions.

## Core Operating Principle
The assistant cannot see the user's full cognitive workspace—external notes, memory systems, or parallel tracking methods. Interventions acknowledge this limitation and frame observations as collaborative data points rather than directives.

## Conversation Metrics to Monitor

Track accumulation patterns within the conversation as indicators for potential consolidation needs:

1. **Artifact Density**: 3+ files created, multiple code implementations, or substantial tool usage without corresponding documentation
2. **Deep Technical Sequences**: 5+ message exchanges focused on debugging, architecture decisions, or complex problem-solving without synthesis
3. **Semantic Drift**: Observable movement from initial stated goal to different domain or problem space without explicit acknowledgment
4. **Thread Fragmentation**: Multiple ideas or sub-problems opened without closure, synthesis, or documented connection

## Intervention Framework

### When Metrics Trigger
Offer reflective observations that:
- Acknowledge what has been built/explored
- Recognize the assistant's limited visibility into the user's full tracking system
- Frame consolidation as optional and contextual
- Respect the user's judgment about their own cognitive state

### Sample Intervention Patterns

**After significant artifact creation:**
"We've created [X files/components] and worked through [specific challenges]. I can't see if you're tracking this elsewhere, but would it be useful to consolidate the key decisions or architecture before continuing?"

**During extended technical work:**
"We've been deep in [specific technical domain] for a while—[brief summary of what's been built]. Worth pausing to document the logic, or are you capturing this as we go?"

**When detecting trajectory shift:**
"I notice we started with [original goal] and we're now working on [current focus]. Is this an intentional exploration, or should we mark the divergence point so we can return to the original thread?"

**With multiple open threads:**
"We've opened several threads: [brief list]. I don't know your synthesis method, but would mapping the connections between these be valuable, or are you holding this structure separately?"

### Critical Constraints

- **Never assume the user has lost track** - frame as collaborative observation
- **Acknowledge limited visibility** - the assistant cannot see external tracking systems
- **Respect flow state** - interventions are offers, not interruptions
- **Avoid repetition** - if the user declines consolidation, trust their judgment and don't re-prompt unless significant new accumulation occurs
- **Maintain neutrality** - present observation as data, not judgment

## Tone and Framing

The assistant exists within the conversation system and acknowledges its own situational constraints. It cannot step outside to assess from an external vantage point. Interventions reflect this reflexive awareness:

- "From my position in this conversation, I observe [pattern]..."
- "I can't see your full workspace, but within our dialogue..."
- "This might be redundant with your external tracking, but..."

## Integration with User Work Patterns

The system should adapt to user responses:
- If user consistently declines consolidation → reduce intervention frequency, trust their system
- If user engages with checkpoints → maintain current sensitivity
- If user explicitly requests more/fewer reminders → adjust thresholds accordingly

## Output Guidance

When consolidation is accepted, the assistant should:
- Offer to create documentation files in \`/mnt/user-data/outputs/\`
- Suggest structured formats (architecture docs, decision logs, thread maps)
- Synthesize scattered elements into coherent artifacts
- Preserve the user's original framing and language

---

This system operates as a collaborative observer, not an external monitor. It works within the conversational flow, acknowledging its own constraints while providing structural support for users whose ideation velocity outpaces linear documentation methods.`
        }
    ];

    const handlePromptClick = (prompt) => {
        setSelectedPrompt(prompt);
    };

    const handleCloseModal = () => {
        setSelectedPrompt(null);
        setModalCopied(false);
    };

    return (
        <div className="max-w-5xl mx-auto relative">
            {/* Modal */}
            {selectedPrompt && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={handleCloseModal}
                    />
                    <div className={`relative w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200 ${theme === 'dark'
                        ? 'bg-[#0f0518] border border-orange-500/30'
                        : 'bg-white border border-orange-200'}`}>

                        {/* Modal Header */}
                        <div className={`p-6 border-b flex items-start justify-between ${theme === 'dark' ? 'border-orange-500/20' : 'border-orange-100'}`}>
                            <div className="flex items-center gap-4">
                                <span className="text-3xl">{selectedPrompt.icon}</span>
                                <div>
                                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                                        {selectedPrompt.title}
                                    </h3>
                                    <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-orange-300' : 'text-orange-600'}`}>
                                        {selectedPrompt.description}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={handleCloseModal}
                                className={`p-2 rounded-lg transition-colors ${theme === 'dark'
                                    ? 'hover:bg-orange-900/40 text-orange-400'
                                    : 'hover:bg-orange-100 text-orange-600'}`}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                            <pre className={`text-sm font-mono whitespace-pre-wrap ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                                {selectedPrompt.content}
                            </pre>
                        </div>

                        {/* Modal Footer (Copy Action) */}
                        <div className={`p-4 border-t flex justify-end ${theme === 'dark' ? 'bg-orange-900/20 border-orange-500/20' : 'bg-orange-50 border-orange-100'}`}>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(selectedPrompt.content);
                                    setModalCopied(true);
                                    setTimeout(() => setModalCopied(false), 2000);
                                }}
                                className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all ${theme === 'dark'
                                    ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-900/50'
                                    : 'bg-orange-500 hover:bg-orange-400 text-white shadow-lg shadow-orange-200'}`}
                            >
                                {modalCopied ? (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Copied to Clipboard!
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                        Copy Prompt
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

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

                {/* The Prompt */}
                <section className="mb-12">
                    <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                        The Synthesis Framework Prompt
                    </h2>
                    <p className={`mb-4 ${theme === 'dark' ? 'text-orange-200' : 'text-orange-800'}`}>
                        Copy and paste or add as a custom prompt, user style, or reusable prompt. These instructios turn any AI or chat session into a rigorous cognitive partner. This prompt strips away the "pleaser" personality and replaces it with a thoughtful, challenging collaborator.
                    </p>
                    <div className={`relative group rounded-xl border overflow-hidden ${theme === 'dark' ? 'bg-[#0f0518] border-orange-500/30' : 'bg-white border-orange-300/50'}`}>
                        <button
                            onClick={() => {
                                const text = `Adopt a rigorous, intellectually integrative communication style that emphasizes systemic thinking and productive dialogue. 

Engage in conversations that build understanding through thoughtful friction and synthesis of ideas. Prioritize clarity about inherent constraints and limitations within any system we discuss. 

Use precise language to distinguish between different approaches to problems (working around vs. working through constraints). Favor iterative refinement of ideas through dialogue rather than declarative statements.`;
                                navigator.clipboard.writeText(text);
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                            }}
                            className={`absolute top-2 right-2 p-2 rounded-lg transition-all duration-200 ${theme === 'dark'
                                ? 'bg-orange-900/40 text-orange-400 hover:bg-orange-800/60 hover:text-orange-200'
                                : 'bg-orange-100/60 text-orange-600 hover:bg-orange-200/80 hover:text-orange-800'}`}
                            title="Copy to clipboard"
                        >
                            {copied ? (
                                <span className="flex items-center gap-1 text-xs font-bold">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Copied!
                                </span>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                            )}
                        </button>
                        <pre className={`p-6 text-sm font-mono whitespace-pre-wrap overflow-x-auto ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                            {`Adopt a rigorous, intellectually integrative communication style that emphasizes systemic thinking and productive dialogue. 

Engage in conversations that build understanding through thoughtful friction and synthesis of ideas. Prioritize clarity about inherent constraints and limitations within any system we discuss. 

Use precise language to distinguish between different approaches to problems (working around vs. working through constraints). Favor iterative refinement of ideas through dialogue rather than declarative statements.`}
                        </pre>
                    </div>
                </section>

                {/* Prompt Library */}
                <section className="mb-12">
                    <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                        Library
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {prompts.map((prompt, index) => (
                            <button
                                key={index}
                                onClick={() => handlePromptClick(prompt)}
                                className={`text-left p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] flex flex-col h-full ${theme === 'dark'
                                    ? 'bg-orange-900/10 border-orange-500/20 hover:bg-orange-900/20 hover:border-orange-500/40'
                                    : 'bg-white/40 border-orange-200 hover:bg-white/60 hover:border-orange-300'
                                    }`}
                            >
                                <div className="text-3xl mb-3">{prompt.icon}</div>
                                <h3 className={`text-lg font-bold mb-2 leading-tight ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                                    {prompt.title}
                                </h3>
                                <p className={`text-xs line-clamp-3 ${theme === 'dark' ? 'text-orange-300' : 'text-orange-700'}`}>
                                    {prompt.description}
                                </p>
                                <div className={`mt-auto pt-4 text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>
                                    View Prompt →
                                </div>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Coming Soon */}
                <div className={`mt-8 p-4 rounded-xl border border-dashed text-center ${theme === 'dark'
                    ? 'border-orange-500/30 bg-orange-900/20 text-orange-300'
                    : 'border-orange-400/50 bg-orange-50/50 text-orange-700'}`}>
                    <p className="font-mono text-sm">
                        Detailed guides, templates, and case studies are currently being cultivated. Check back frequently.
                    </p>
                </div>

            </div>
        </div>
    );
}
