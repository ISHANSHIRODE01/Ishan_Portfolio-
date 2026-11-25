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
import { FaGithub, FaLinkedin } from "react-icons/fa6";
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
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;

    if (current < 80) {
      setVisible(true);
    } else if (diff < -6) {
      setVisible(true);
    } else if (diff > 6) {
      setVisible(false);
    }
  });

  return (
    <motion.div
      initial={false}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "hidden md:flex w-fit max-w-[92vw] fixed z-[5000] top-5 inset-x-0 mx-auto px-5 py-2.5 rounded-full border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)] items-center justify-center gap-4 backdrop-blur-xl bg-[#111928]/75",
        className
      )}
      role="navigation"
      aria-label="Main navigation"
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
            href="https://github.com/ISHANSHIRODE01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full border border-white/10 bg-black-200 text-slate-300 hover:text-white hover:border-neon-blue/50 transition-all"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/ishan-shirode-556534375/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full border border-white/10 bg-black-200 text-slate-300 hover:text-white hover:border-neon-blue/50 transition-all"
          >
            <FaLinkedin size={16} />
          </a>
          <a 
            href="/Ishan_Shirode_Resume.pdf" 
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
  );
};
