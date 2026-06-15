import React from "react";
import { SkillBadge } from "./ui/SkillBadge";

const skillsData = [
    {
        category: "Artificial Intelligence",
        skills: ["Machine Learning", "Natural Language Processing (NLP)", "Large Language Models (LLMs)", "Generative AI", "Transformers", "RAG Architectures", "Prompt Engineering"],
    },
    {
        category: "Expertise & Tools",
        skills: ["Computer Vision (YOLOv8)", "OpenCV", "OpenAI Whisper", "HuggingFace", "LangChain", "TensorFlow", "Scikit-Learn"],
    },
    {
        category: "MLOps & Engineering",
        skills: ["FastAPI", "Docker", "AWS Cloud (EC2/S3)", "MLOps Pipelines", "GitHub Actions", "Linux", "Postman"],
    },
    {
        category: "Data & Programming",
        skills: ["Python", "C++", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Business Analytics"],
    },
    {
        category: "Professional Skills",
        skills: ["Problem Solving", "System Design", "Technical Leadership", "Agile Methodology"],
    },
];

const Skills = () => {
    return (
        <div className="py-20 w-full" id="skills">
            <h1 className="heading mb-10">
                My <span className="text-purple">Skills</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-10">
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
