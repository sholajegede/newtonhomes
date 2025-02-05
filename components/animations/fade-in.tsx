"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  fullWidth?: boolean;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
  className = "",
}: FadeInProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  const motionProps = {
    initial: {
      opacity: 0,
      ...directionOffset[direction],
    },
    animate: inView ? { opacity: 1, x: 0, y: 0 } : {},
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
      delay,
    },
  };

  return (
    <motion.div
      ref={ref}
      {...motionProps}
      className={`${fullWidth ? "w-full" : "inline-block"} ${className}`}
    >
      {children}
    </motion.div>
  );
}