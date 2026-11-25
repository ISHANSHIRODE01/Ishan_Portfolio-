"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NeonButton } from "./ui/NeonButton";
import Image from "next/image";

const ModernHero = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-28 pb-20">



      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start justify-center text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-bold text-neon-blue uppercase tracking-widest">Open to full-time AI/ML and Python backend roles</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Ishan Shirode
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple block text-2xl sm:text-3xl md:text-4xl mt-3 font-semibold">
                Entry-Level AI/ML Engineer | Python Backend &amp; GenAI
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              AI/ML engineer (B.E. 2026) building Python backends, RAG pipelines and AI voice agents. I like testing and hardening AI-built systems so they hold up in production.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start w-full">
              <NeonButton href="#projects" variant="primary">
                View Projects
              </NeonButton>
              <NeonButton href="/Ishan_Shirode_Resume.pdf" variant="secondary" className="flex items-center gap-2" external={true}>
                Download Resume
              </NeonButton>
            </div>
          </motion.div>

          {/* Profile Photo */}
          {!imgError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,243,255,0.15)] group flex items-center justify-center bg-black-200">
                <Image 
                  src="/profile.png" 
                  alt="Ishan Shirode" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 z-10"
                  onError={() => setImgError(true)}
                />
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Metrics Bar */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full border-t border-white/[0.1] pt-8"
        >
          {[
            { label: "Projects", value: "3" },
            { label: "Roles", value: "3" },
            { label: "Tasks Delivered", value: "15+" },
            { label: "Graduate", value: "2026" },
          ].map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</span>
              <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wider text-center">{metric.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModernHero;
