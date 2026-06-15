"use client";
/* eslint-disable */
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "hidden md:flex md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-6 py-3 md:px-10 md:py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        role="navigation"
        aria-label="Main navigation"
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple focus:ring-opacity-50 rounded-md px-2 py-1"
            )}
            aria-label={`Navigate to ${navItem.name}`}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            {/* add !cursor-pointer */}
            {/* remove hidden sm:block for the mobile responsive */}
            <span className="text-xs md:text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        <div className="flex items-center gap-2 shrink-0">
          <a 
            href="https://drive.google.com/file/d/1QUz_lPNTzgMJFgmoKDnjvVY1DLW0n0BR/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="border text-sm font-medium relative border-white/20 bg-black-200 text-slate-300 px-4 py-2 rounded-full hover:text-white transition-all hidden md:block"
            aria-label="Download Resume"
          >
            Resume
          </a>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ishanshirode7679@gmail.com&su=AI%20Engineer%20Opportunity" 
            target="_blank"
            rel="noopener noreferrer"
            className="border text-xs md:text-sm font-medium relative border-white/20 bg-neon-blue/10 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-neon-blue/20 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-black transition-all flex items-center"
            aria-label="Email Ishan regarding an AI Engineer Opportunity"
          >
            <span>Hire Me</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-neon-blue to-transparent h-px" />
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
