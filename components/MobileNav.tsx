"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { navItems } from '@/data';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[5001] p-3 rounded-full bg-black-200 border border-white/[0.1] backdrop-blur-lg md:hidden"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <FaTimes className="w-5 h-5 text-white" /> : <FaBars className="w-5 h-5 text-white" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[5000] bg-black-100/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-6">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-white hover:text-neon-blue transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-6 flex flex-col items-center gap-4 border-t border-white/10 w-48">
                <a
                  href="https://drive.google.com/file/d/1QUz_lPNTzgMJFgmoKDnjvVY1DLW0n0BR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center border border-white/20 bg-black-200 text-slate-300 px-6 py-3 rounded-full hover:text-white transition-all text-base font-medium"
                >
                  Resume
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ishanshirode7679@gmail.com&su=AI%20Engineer%20Opportunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center border border-neon-blue/50 bg-neon-blue/10 text-neon-blue px-6 py-3 rounded-full hover:bg-neon-blue/20 transition-all text-base font-medium"
                >
                  Hire Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;