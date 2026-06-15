"use client";

import { FaExclamationTriangle } from 'react-icons/fa';
import MagicButton from './MagicButton';

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

const ErrorFallback = ({ error, resetError }: ErrorFallbackProps) => {
  return (
    <div className="min-h-screen bg-black-100 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <FaExclamationTriangle className="mx-auto text-6xl text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-white-200 mb-6">
          {error.message || "An unexpected error occurred"}
        </p>
        <MagicButton
          title="Try Again"
          icon={<span>↻</span>}
          position="right"
          handleClick={resetError}
        />
      </div>
    </div>
  );
};

export default ErrorFallback;