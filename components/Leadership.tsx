import React from "react";

const leadership = [
    { role: "Anti-Ragging Head", org: "Student Council" },
    { role: "Joint Digital Head", org: "AS&H Department" },
];

const Leadership = () => {
    return (
        <div className="py-20 w-full" id="leadership">
            <h1 className="heading mb-10">
                Leadership <span className="text-purple">Roles</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-w-7xl mx-auto px-10">
                {leadership.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center bg-black-200 border border-white/[0.1] rounded-2xl p-8 w-full md:w-80 hover:scale-105 transition duration-200"
                    >
                        <h2 className="text-2xl font-bold text-purple text-center">
                            {item.role}
                        </h2>
                        <p className="mt-2 text-white-100 text-lg text-center">
                            {item.org}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leadership;
