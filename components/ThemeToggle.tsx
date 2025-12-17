"use client";

import { useTheme } from '@/hooks/useTheme';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-[5001] p-3 rounded-full bg-black-200 border border-white/[0.1] backdrop-blur-lg hover:bg-purple/20 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FaSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FaMoon className="w-5 h-5 text-blue-400" />
      )}
    </button>
  );
};

export default ThemeToggle;