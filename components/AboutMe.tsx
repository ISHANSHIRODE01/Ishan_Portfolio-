"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="py-20 w-full relative z-10" id="about">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          About <span className="text-neon-blue">Me</span>
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 rounded-3xl bg-black-200 border border-white/10 shadow-[0_0_30px_rgba(0,243,255,0.05)] text-center md:text-left relative overflow-hidden"
        >
          {/* Subtle gradient background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl -z-10" />
          
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
            I specialize in building <span className="font-semibold text-white">production-grade AI systems</span> using RAG, FastAPI, MLOps, and LLM orchestration. 
            <br className="hidden md:block" /><br className="hidden md:block" />
            My focus is moving AI solutions <span className="text-neon-purple">beyond notebooks</span> and into scalable, deployable systems that drive real business value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
