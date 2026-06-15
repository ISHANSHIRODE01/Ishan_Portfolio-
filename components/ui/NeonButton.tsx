"use client";

import React from "react";
import { motion } from "framer-motion";

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export const NeonButton = ({
  children,
  href = "#",
  variant = "primary",
  className = "",
  external = false,
  onClick,
}: NeonButtonProps) => {
  const isPrimary = variant === "primary";
  
  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold transition-all duration-300 px-8 py-3 group";
  
  const primaryStyles = "bg-neon-purple text-white shadow-[0_0_20px_rgba(188,19,254,0.5)] hover:shadow-[0_0_30px_rgba(188,19,254,0.7)] hover:bg-opacity-80";
  
  const secondaryStyles = "border border-neon-blue text-neon-blue hover:bg-neon-blue/10 shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]";

  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${isPrimary ? primaryStyles : secondaryStyles} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {isPrimary && (
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] transition-transform duration-1000 group-hover:translate-x-[200%]" />
      )}
    </motion.button>
  );

  return href ? (
    <a 
      href={href} 
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {content}
    </a>
  ) : (
    content
  );
};
