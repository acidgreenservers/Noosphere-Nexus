import React from "react";

const PromptCard = ({ prompt, onClick, theme }) => {
    // Map groups/complexity to structured level badges
    const getLevelBadge = (group) => {
        switch (group) {
            case "Basic":
                return { text: "CORE", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" };
            case "Alternate":
                return { text: "ADVANCED", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" };
            case "Experiential":
                return { text: "META", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" };
            default:
                return { text: "CORE", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" };
        }
    };

    const level = getLevelBadge(prompt.group);

    return (
        <button
            onClick={() => onClick(prompt)}
            className={`text-left p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.01] flex flex-col h-full ${theme === 'dark'
                ? 'bg-orange-950/10 border-orange-500/15 hover:bg-orange-900/15 hover:border-orange-500/30'
                : 'bg-white/50 border-orange-200/60 hover:bg-white/70 hover:border-orange-300'
                }`}
        >
            {/* Top row: Icon box and Level badge */}
            <div className="flex items-center justify-between w-full mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm ${
                    theme === 'dark' ? 'bg-[#0f0518]/60 border border-orange-500/10' : 'bg-orange-100/40 border border-orange-200/50'
                }`}>
                    {prompt.icon}
                </div>
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${level.color}`}>
                    {level.text}
                </span>
            </div>

            {/* Title */}
            <h3 className={`text-base font-bold mb-2 leading-snug tracking-tight ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                {prompt.title}
            </h3>

            {/* Description */}
            <p className={`text-xs line-clamp-3 mb-6 leading-relaxed ${theme === 'dark' ? 'text-orange-300/80' : 'text-orange-700'}`}>
                {prompt.description}
            </p>

            {/* Footer Row */}
            <div className="mt-auto pt-4 border-t border-orange-500/5 flex items-center justify-between w-full text-[10px] font-bold uppercase tracking-wider">
                <span className={theme === 'dark' ? 'text-orange-400/50' : 'text-orange-600/60'}>
                    {prompt.tags ? prompt.tags[0] : "cognition"}
                </span>
                <span className={`flex items-center gap-1 transition-colors ${theme === 'dark' ? 'text-orange-400 hover:text-orange-200' : 'text-orange-600 hover:text-orange-800'}`}>
                    VIEW PROMPT →
                </span>
            </div>
        </button>
    );
};

export default PromptCard;
