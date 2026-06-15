"use client";

import { FaGithub, FaExternalLinkAlt, FaProjectDiagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Project } from "@/types";

export const ProjectCard = ({
  id,
  title,
  des,
  fullDescription,
  img,
  iconLists,
  metrics,
  githubLink,
  liveLink,
  architectureLink,
}: Project) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-4 w-full h-full min-h-[550px]"
    >
      <div className={`relative h-full flex flex-col overflow-hidden rounded-3xl border border-white/[0.1] bg-black-200/50 p-6 backdrop-blur-xl transition-all duration-500 ${isHovered ? 'border-neon-blue/50 shadow-[0_0_30px_rgba(0,243,255,0.2)] scale-[1.02]' : ''}`}>
        
        {/* Project Image Section */}
        <div className="relative mb-6 h-56 w-full overflow-hidden rounded-2xl bg-[#13162D]">
          <Image
            src={img}
            alt={title}
            fill
            className={`object-cover object-center transition-transform duration-700 ${isHovered ? 'scale-110 opacity-60' : 'opacity-90'}`}
          />
          {/* Overlay on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center p-6 text-center bg-black/40 backdrop-blur-sm"
              >
                <p className="text-sm font-medium text-white leading-relaxed">
                  {fullDescription || des}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow">
          <h3 className="mb-4 text-2xl font-bold text-white tracking-tight">
            {title}
          </h3>

          {/* Metrics Section - High Impact */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mb-6">
              {metrics.slice(0, 3).map((metric, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-3 border border-white/10 group-hover:border-neon-blue/30 transition-colors">
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                    {metric.label}
                  </span>
                  <span className="text-sm font-bold text-neon-blue">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          <p className="mb-6 text-sm font-normal text-slate-400 line-clamp-2 italic">
            {des}
          </p>

          {/* Tech Stack & Actions Footer */}
          <div className="mt-auto pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex -space-x-2">
                {iconLists.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 shadow-sm text-xs font-mono text-slate-300 hover:text-white hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                {githubLink && (
                  <a href={githubLink} target="_blank" rel="noreferrer" title="View Source" className="p-2 rounded-full bg-white/5 hover:bg-neon-purple/20 hover:text-neon-purple transition-all border border-white/10 hover:border-neon-purple/50">
                    <FaGithub size={18} />
                  </a>
                )}
                {liveLink && liveLink !== "#" && (
                  <a href={liveLink} target="_blank" rel="noreferrer" title="Live Demo" className="p-2 rounded-full bg-white/5 hover:bg-neon-blue/20 hover:text-neon-blue transition-all border border-white/10 hover:border-neon-blue/50">
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
                {architectureLink && architectureLink !== "#" && (
                  <a href={architectureLink} target="_blank" rel="noreferrer" title="Architecture" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                    <FaProjectDiagram size={18} />
                  </a>
                )}
              </div>
            </div>

            <Link
              href={`/projects/${id}`}
              className="group flex items-center text-xs font-bold uppercase tracking-widest text-neon-blue hover:text-white transition-colors"
            >
              Read Case Study
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

