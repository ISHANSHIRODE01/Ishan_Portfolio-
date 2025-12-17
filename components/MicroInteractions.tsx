"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const HoverCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`cursor-pointer ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingButton = ({ children, onClick, className = "" }: { 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <motion.button
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px rgba(203, 172, 249, 0.3)"
      }}
      whileTap={{ y: 0 }}
      animate={{ 
        y: [0, -3, 0],
      }}
      transition={{ 
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        hover: { duration: 0.2 }
      }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export const PulseIcon = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const TypewriterText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-purple ml-1"
      />
    </span>
  );
};