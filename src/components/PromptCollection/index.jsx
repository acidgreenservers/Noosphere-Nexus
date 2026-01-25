import React from "react";
import PromptCard from "./PromptCard";
import { thermodynamicConsciousnessPrompt } from "./prompts/thermodynamic-consciousness";
import { hippocampalArchivalSystemPrompt } from "./prompts/hippocampal-archival-system";
import { phenomenologicalExplorerPrompt } from "./prompts/phenomenological-explorer";
import { finiteConsciousnessPartnerPrompt } from "./prompts/finite-consciousness-partner";

const PromptCollection = ({ theme, onPromptClick }) => {
    return (
        <>
            {/* Wide Button Section */}
            <section className="mb-12">
                <div className="col-span-full py-4">
                    <div className={`h-px ${theme === 'dark' ? 'bg-orange-500/30' : 'bg-orange-300/50'}`}></div>
                </div>

                {/* Main full-width button */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                    <PromptCard
                        prompt={thermodynamicConsciousnessPrompt}
                        onClick={onPromptClick}
                        theme={theme}
                        size="full"
                    />
                </div>

                {/* Second full-width button */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                    <PromptCard
                        prompt={hippocampalArchivalSystemPrompt}
                        onClick={onPromptClick}
                        theme={theme}
                        size="full"
                    />
                </div>

                {/* Two smaller buttons underneath */}
                <div className="grid grid-cols-2 gap-4">
                    <PromptCard
                        prompt={phenomenologicalExplorerPrompt}
                        onClick={onPromptClick}
                        theme={theme}
                        size="half"
                    />
                    <PromptCard
                        prompt={finiteConsciousnessPartnerPrompt}
                        onClick={onPromptClick}
                        theme={theme}
                        size="half"
                    />
                </div>
            </section>
        </>
    );
};

import PromptLibrary from "./PromptLibrary";

export { PromptLibrary };
export default PromptCollection;
