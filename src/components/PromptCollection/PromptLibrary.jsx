import React from "react";
import PromptCard from "./PromptCard";
import { basicPrompts, alternatePrompts, experientialPrompts } from "./prompts/library";

const PromptLibrarySection = ({ title, prompts, theme, onPromptClick }) => (
    <>
        <div className={`col-span-full py-4 ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
            <h3 className="text-xl font-bold">{title}</h3>
            <div className={`mt-2 h-px ${theme === 'dark' ? 'bg-orange-500/30' : 'bg-orange-300/50'}`}></div>
        </div>
        {prompts.map((prompt, index) => (
            <div key={`${title}-${index}`} className="h-full">
                <PromptCard
                    prompt={prompt}
                    onClick={onPromptClick}
                    theme={theme}
                />
            </div>
        ))}
    </>
);

const PromptLibrary = ({ theme, onPromptClick }) => {
    return (
        <section className="mb-12">
            <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-orange-100' : 'text-orange-900'}`}>
                Library
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <PromptLibrarySection
                    title="Basic Prompts"
                    prompts={basicPrompts}
                    theme={theme}
                    onPromptClick={onPromptClick}
                />

                <PromptLibrarySection
                    title="Alternate Prompts"
                    prompts={alternatePrompts}
                    theme={theme}
                    onPromptClick={onPromptClick}
                />

                <PromptLibrarySection
                    title="Experiental Prompts"
                    prompts={experientialPrompts}
                    theme={theme}
                    onPromptClick={onPromptClick}
                />
            </div>
        </section>
    );
};

export default PromptLibrary;
