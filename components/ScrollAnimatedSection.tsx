"use client";

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollAnimatedSection = ({ children, className = "", delay = 0 }: ScrollAnimatedSectionProps) => {
  const { ref, controls } = useScrollAnimation();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimatedSection;