"use client";

import { motion } from "framer-motion";
import { NeonButton } from "./ui/NeonButton";
import Image from "next/image";

const ModernHero = () => {
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
              <span className="text-sm font-bold text-neon-blue uppercase tracking-widest">Available immediately for full-time AI/SWE roles</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Ishan Shirode <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple">
                Production AI Engineer
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Bridging ML research with robust backend engineering. I architect and deploy scalable AI systems—from <span className="text-neon-blue font-medium">high-speed RAG pipelines</span> to <span className="text-neon-purple font-medium">automated MLOps architectures</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start w-full">
              <NeonButton href="#projects" variant="primary">
                View Production Systems
              </NeonButton>
              <NeonButton href="https://drive.google.com/file/d/1QUz_lPNTzgMJFgmoKDnjvVY1DLW0n0BR/view?usp=sharing" variant="secondary" className="flex items-center gap-2" external={true}>
                Download AI Resume
              </NeonButton>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,243,255,0.15)] group flex items-center justify-center bg-black-200">
              {/* Note: User must add profile.jpg to public folder */}
              <span className="text-slate-500 font-mono text-sm absolute z-0">[Add profile.png to public/]</span>
              <Image 
                src="/profile.png" 
                alt="Ishan Shirode" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 z-10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Metrics Bar */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-white/[0.1] pt-8"
        >
          {[
            { label: "AI Systems Built", value: "5+" },
            { label: "Industry Experiences", value: "2" },
            { label: "Production Projects", value: "4" },
            { label: "Graduate", value: "2026" },
          ].map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-1">{metric.value}</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider text-center">{metric.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModernHero;
