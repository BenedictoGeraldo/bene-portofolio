'use client';

import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

export default function EntranceAnimation() {
  const [show, setShow] = useState(true);
  const [particles, setParticles] = useState<
    Array<{ id: number; left: number; delay: number; duration: number }>
  >([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Reduce particles on mobile for better performance
    const particleCount =
      typeof window !== 'undefined' && window.innerWidth < 768 ? 6 : 12;

    // Generate random particles for atmospheric effect - only on client
    setParticles(
      Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.8,
        duration: 2 + Math.random() * 1,
      })),
    );
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Check if user has seen entrance
    const hasSeenEntrance = sessionStorage.getItem('hasSeenEntrance');

    if (hasSeenEntrance) {
      setShow(false);
      return;
    }

    // Hide after 4.5 seconds
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('hasSeenEntrance', 'true');
    }, 4500);

    // Prevent scrolling during entrance
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [isMounted]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden w-screen h-screen"
        >
          {/* Atmospheric fog/gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950 opacity-80" />

          {/* Mystical particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: [0, 0.6, 0], y: -200 }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                ease: 'easeOut',
              }}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-slate-400 rounded-full blur-sm"
              style={{ left: `${particle.left}%`, bottom: 0 }}
            />
          ))}

          {/* Central glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.3, 0.2], scale: [0, 2, 1.5] }}
            transition={{ duration: 3.2, ease: 'easeOut' }}
            className="absolute w-32 h-32 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-slate-600 rounded-full blur-3xl opacity-20 pointer-events-none"
          />

          {/* Main text container */}
          <div className="relative z-10 text-center px-2 sm:px-4 md:px-6 lg:px-8 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl">
            {/* Quote text - main */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              <h1
                className="font-serif text-base sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.05em] sm:tracking-[0.12em] md:tracking-[0.2em] text-amber-50 drop-shadow-2xl mb-2 sm:mb-4 md:mb-6 leading-tight whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-cinzel)',
                  textShadow:
                    '0 0 30px rgba(138, 138, 138, 0.5), 0 0 60px rgba(77, 76, 76, 0.3)',
                }}
              >
                Valar Morghulis
              </h1>
            </motion.div>

            {/* Subtitle - appears after main quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1.5,
                ease: 'easeOut',
              }}
            ></motion.div>

            {/* Decorative line - appears with quote */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.6 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: 'easeOut',
              }}
              className="my-2 sm:my-4 md:my-6 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent origin-center w-full"
            />

            {/* Fading text at bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: 2.2,
                ease: 'easeInOut',
              }}
            >
              <p className="text-xs sm:text-sm md:text-base lg:text-base tracking-tighter sm:tracking-wider md:tracking-widest text-slate-400 opacity-50 line-clamp-2 break-words">
                Welcome To My Personal Portofolio
              </p>
            </motion.div>
          </div>

          {/* Bottom fade gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
