"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface SmoothImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function SmoothImage({ src, alt, className = "" }: SmoothImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: isLoading ? 0 : 1,
      }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${className}`}
      />
    </motion.div>
  );
}