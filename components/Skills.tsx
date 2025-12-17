import React from "react";

const skillsData = [
    {
        category: "Machine Learning & AI",
        skills: ["Transformers", "LLMs", "YOLOv8", "OpenCV", "OpenAI Whisper", "Scikit-Learn", "RAG Architectures"],
    },
    {
        category: "Deep Learning & GenAI",
        skills: ["TensorFlow", "HuggingFace", "LangChain", "MarianMT", "Prompt Engineering"],
    },
    {
        category: "Data Stack",
        skills: ["Python", "SQL", "C++", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel"],
    },
    {
        category: "MLOps & Deployment",
        skills: ["FastAPI", "Streamlit", "Docker (basic)", "AWS EC2", "AWS S3", "GitHub Actions"],
    },
    {
        category: "Developer Tools",
        skills: ["Git & GitHub", "Linux", "VS Code", "Jupyter Notebook", "Postman"],
    },
    {
        category: "Soft Skills",
        skills: ["Problem Solving", "Communication", "Leadership", "Collaboration"],
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
                                <span
                                    key={skillIdx}
                                    className="px-3 py-1 bg-[#10132E] rounded-full text-white text-sm border border-white/[0.1]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
