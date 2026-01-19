import React from "react";

const PromptCard = ({ prompt, onClick, theme }) => {
    return (
        <button
            onClick={() => onClick(prompt)}
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
    );
};

export default PromptCard;
