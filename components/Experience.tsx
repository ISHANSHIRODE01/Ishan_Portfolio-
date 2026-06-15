import React from "react";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <a
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${card.className} h-full w-full`}
          >
            <div
              className="flex-1 text-white bg-black-100 border border-white/10 rounded-2xl transition-colors hover:border-white/20 hover:bg-white/[0.02] overflow-hidden h-full"
            >
              <div className="flex flex-col p-6 md:p-10 gap-4 h-full">
                <div>
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <div className="w-16 h-1 bg-neon-blue mt-4 rounded-full opacity-50" />
                  <p className="text-start text-white-100 mt-6 font-medium whitespace-pre-line leading-relaxed text-sm md:text-base">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experience;
