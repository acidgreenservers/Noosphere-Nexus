import React from "react";

const PromptModal = ({ prompt, onClose, theme, copied, onCopy }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />
            <div className={`relative w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200 ${theme === 'dark'
                ? 'bg-[#0f0518] border border-orange-500/30'
                : 'bg-white border border-orange-200'}`}>

                {/* Modal Header */}
                <div className={`p-6 border-b flex items-start justify-between ${theme === 'dark' ? 'border-orange-500/20' : 'border-orange-100'}`}>
                    <div className="flex items-center gap-4">
                        <span className="text-3xl">{prompt.icon}</span>
                        <div>
                            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                                {prompt.title}
                            </h3>
                            <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-orange-300' : 'text-orange-600'}`}>
                                {prompt.description}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className={`p-2 rounded-lg transition-colors ${theme === 'dark'
                            ? 'hover:bg-orange-900/40 text-orange-400'
                            : 'hover:bg-orange-100 text-orange-600'
                            }`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    <pre className={`text-sm font-mono whitespace-pre-wrap ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                        {prompt.content}
                    </pre>
                </div>

                {/* Modal Footer (Copy Action) */}
                <div className={`p-4 border-t flex justify-end ${theme === 'dark' ? 'bg-orange-900/20 border-orange-500/20' : 'bg-orange-50 border-orange-100'}`}>
                    <button
                        onClick={onCopy}
                        className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all ${theme === 'dark'
                            ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-900/50'
                            : 'bg-orange-500 hover:bg-orange-400 text-white shadow-lg shadow-orange-200'
                            }`}
                    >
                        {copied ? (
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
    );
};

export default PromptModal;
