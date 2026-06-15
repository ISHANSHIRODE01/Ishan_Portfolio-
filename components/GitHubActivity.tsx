"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCodeBranch } from "react-icons/fa";

const GitHubActivity = () => {
  return (
    <section className="py-20 w-full relative z-10" id="github">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Engineering <span className="text-white">Activity</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center p-8 rounded-2xl bg-black-200 border border-white/10 hover:border-white/20 transition-colors shadow-glass"
          >
            <FaGithub className="text-4xl text-slate-400 mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2">120+</h3>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-semibold">Contributions</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center justify-center p-8 rounded-2xl bg-black-200 border border-white/10 hover:border-white/20 transition-colors shadow-glass"
          >
            <FaCodeBranch className="text-4xl text-neon-purple mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2">15</h3>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-semibold">Repositories</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center p-8 rounded-2xl bg-neon-blue/5 border border-neon-blue/30 relative overflow-hidden shadow-[0_0_20px_rgba(0,243,255,0.1)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 blur-2xl rounded-full" />
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-neon-blue animate-pulse" />
              <span className="text-neon-blue text-sm uppercase tracking-widest font-bold">Currently Building</span>
            </div>
            <h3 className="text-2xl font-bold text-white text-center">Multi-LLM Council</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
