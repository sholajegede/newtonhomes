"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { ParallaxScroll } from "@/components/animations/parallax-scroll";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 object-cover w-full h-full"
          src="./videos/welcome.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </motion.div>

      <ParallaxScroll className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto">
        <FadeIn delay={0.2}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Discover Your Dream
            <br />
            Luxury Home
          </motion.h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-xl md:text-2xl mb-14 max-w-2xl mx-auto text-gray-200">
            Experience luxury living with our exclusive collection of properties
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex gap-4 justify-center">
            <Link href="/properties">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-[#1C4484] hover:text-white hover:scale-105 transform transition-all duration-200"
              >
                View Properties
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-[#1C4484] hover:border-[#1C4484] hover:text-white hover:scale-105 transform transition-all duration-200"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-14 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </ParallaxScroll>
    </section>
  );
};