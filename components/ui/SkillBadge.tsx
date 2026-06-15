"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
}

export const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 15px rgba(188, 19, 254, 0.5)"
      }}
      className="cursor-pointer rounded-full border border-white/[0.1] bg-black-200 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-md transition-colors hover:border-neon-purple hover:bg-black-300 hover:text-white"
    >
      {name}
    </motion.div>
  );
};
