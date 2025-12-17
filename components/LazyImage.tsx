"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

const LazyImage = ({ src, alt, width, height, className = "", fill = false, priority = false }: LazyImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const shimmer = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#333" />
      <rect id="r" width="400" height="300" fill="url(#g)" opacity="0.5" />
      <animateTransform attributeName="transform" type="translate" values="-400 0;400 0;-400 0" dur="1s" repeatCount="indefinite"/>
    </svg>
  `;

  const toBase64 = (str: string) => {
    if (typeof window === 'undefined') {
      return Buffer.from(str).toString('base64');
    }
    return btoa(str);
  };

  if (error) {
    return (
      <div className={`bg-gray-300 flex items-center justify-center ${className}`}>
        <span className="text-gray-500">Failed to load image</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer)}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setError(true)}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
      />
    </motion.div>
  );
};

export default LazyImage;