import React from "react";
import PromptCard from "./PromptCard";
import { thermodynamicConsciousnessPrompt } from "./prompts/thermodynamic-consciousness";

const PromptCollection = ({ theme, onPromptClick }) => {
    return (
        <>
            {/* Wide Button Section */}
            <section className="mb-12">
                <div className="col-span-full py-4">
                    <div className={`h-px ${theme === 'dark' ? 'bg-orange-500/30' : 'bg-orange-300/50'}`}></div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <PromptCard
                        prompt={thermodynamicConsciousnessPrompt}
                        onClick={onPromptClick}
                        theme={theme}
                    />
                </div>
            </section>
        </>
    );
};

export default PromptCollection;
