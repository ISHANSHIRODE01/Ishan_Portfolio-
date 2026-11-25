import React from "react";
import { SkillBadge } from "./ui/SkillBadge";

const skillsData = [
    {
        category: "Languages & Backend",
        skills: ["Python", "FastAPI", "Flask", "REST APIs", "SQLite", "MongoDB", "Git/GitHub"],
    },
    {
        category: "Applied AI",
        skills: ["LLM APIs (Gemini, Groq/Llama 3.1)", "Prompt Engineering", "RAG", "LangChain", "FAISS", "BM25", "Sentence Transformers", "Voice-Agent Design"],
    },
    {
        category: "Testing",
        skills: ["pytest", "API and endpoint testing", "CSV test batches"],
    },
    {
        category: "Familiar",
        skills: ["React", "Next.js", "SQLAlchemy", "JWT", "Redis", "Docker", "PostgreSQL", "TensorFlow"],
    },
];

const Skills = () => {
    return (
        <div className="py-20 w-full" id="skills">
            <h1 className="heading mb-10">
                My <span className="text-purple">Skills</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-10">
                {skillsData.map((section, idx) => (
                    <div
                        key={idx}
                        className="rounded-3xl bg-black-200 border border-white/[0.1] p-6 flex flex-col items-center w-full hover:scale-105 transition duration-200 h-full"
                    >
                        <h2 className="text-xl font-bold mb-4 text-purple text-center">
                            {section.category}
                        </h2>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {section.skills.map((skill, skillIdx) => (
                                <SkillBadge key={skillIdx} name={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
