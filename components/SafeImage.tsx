"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  fallbackSrc?: string;
}

const SafeImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  fill = false, 
  priority = false,
  fallbackSrc = "/placeholder.svg"
}: SafeImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  // Removed isLoading state that hid the image
  
  // Sync state with prop
  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        className={className}
        onError={handleError}
        // Removed onLoad handler as we don't need to track loading state for visibility anymore
      />
    </div>
  );
};

export default SafeImage;