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
        className="fixed top-4 left-4 z-[5001] p-3 rounded-full bg-black-200 border border-white/[0.1] backdrop-blur-lg md:hidden"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed inset-0 z-[5000] bg-black-100/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-white hover:text-purple transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;