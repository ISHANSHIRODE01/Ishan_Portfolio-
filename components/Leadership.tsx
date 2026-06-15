import React from "react";

const leadership = [
    { role: "Anti-Ragging Head", org: "Student Council" },
    { role: "Joint Digital Head", org: "AS&H Department" },
];

const Leadership = () => {
    return (
        <div className="py-20 w-full" id="leadership">
            <h1 className="heading mb-10">
                Leadership & <span className="text-neon-purple">Activities</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto px-5">
                {leadership.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-3 bg-black-200 border border-white/10 rounded-full px-6 py-3 hover:border-neon-purple/50 transition duration-200 shadow-glass"
                    >
                        <span className="w-2 h-2 rounded-full bg-neon-purple" />
                        <h2 className="text-sm md:text-base font-bold text-white">
                            {item.role}
                        </h2>
                        <span className="text-slate-500 hidden sm:block">|</span>
                        <p className="text-slate-400 text-sm md:text-base">
                            {item.org}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leadership;
