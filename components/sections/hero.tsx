"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import goldGlitter from '@/components/public/gold-glitter.png';
import vegasBg from '@/components/public/the-famous-las-vegas-strip.webp';

export const HeroSection: React.FC = () => {
  const [bulbCountHorizontal, setBulbCountHorizontal] = useState<number>(36);
  const [bulbCountVertical, setBulbCountVertical] = useState<number>(10);

  useEffect(() => {
    const computeCounts = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setBulbCountHorizontal(24);
        setBulbCountVertical(8);
      } else if (width < 768) {
        setBulbCountHorizontal(32);
        setBulbCountVertical(8);
      } else if (width < 1024) {
        setBulbCountHorizontal(44);
        setBulbCountVertical(8);
      } else if (width < 1280) {
        setBulbCountHorizontal(56);
        setBulbCountVertical(8);
      } else {
        // Grand écran: garder la densité horizontale élevée mais réduire légèrement la verticale (gauche/droite)
        setBulbCountHorizontal(72);
        setBulbCountVertical(12);
      }
    };

    computeCounts();
    window.addEventListener('resize', computeCounts);
    return () => window.removeEventListener('resize', computeCounts);
  }, []);
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: Vegas at night photo */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0.85 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          backgroundImage: `url(${vegasBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Color wash + vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Vegas lights simulations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scanning light beams */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute -left-1/4 top-0 h-[200%] w-1/3 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent blur-3xl"
            style={{ rotate: -25 + i * 15 }}
            animate={{ x: ['-20%', '120%'], opacity: [0.05, 0.18, 0.05] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 }}
          />
        ))}

        {/* Sparkling bulbs */}
        {[...Array(28)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute w-1.5 h-1.5 bg-elvis-gold rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [0.6, 1.4, 0.8], opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}

        {/* Soft bokeh circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bokeh-${i}`}
            className="absolute rounded-full bg-amber-200/10 blur-3xl"
            style={{
              width: `${60 + Math.random() * 140}px`,
              height: `${60 + Math.random() * 140}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.08, 0.2, 0.08], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* Blur veil over background (intensified) */}
      <div className="absolute inset-0 bg-black/15 backdrop-blur-[8px] sm:backdrop-blur-[12px]" />

      {/* Centered title block */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <motion.div
          className="relative text-center group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Title with gold glitter texture and rectangular bulbs around */}
          <div className="relative inline-block">
            {/* Bulbs rectangle frame (responsive counts) */}
            <div className="pointer-events-none absolute -inset-4 sm:-inset-5 md:-inset-6">
              {/* Top edge */}
              <div className="absolute left-0 right-0 top-0 flex items-center justify-between">
                {Array.from({ length: bulbCountHorizontal }).map((_, i) => (
                  <motion.span
                    key={`rect-top-${i}`}
                    aria-hidden
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-elvis-gold/90 shadow-neon-gold"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.2 + (i % 4) * 0.2, repeat: Infinity, delay: i * 0.05 }}
                  />
                ))}
              </div>
              {/* Bottom edge */}
              <div className="absolute left-0 right-0 bottom-0 flex items-center justify-between">
                {Array.from({ length: bulbCountHorizontal }).map((_, i) => (
                  <motion.span
                    key={`rect-bottom-${i}`}
                    aria-hidden
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-elvis-gold/90 shadow-neon-gold"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1 + (i % 5) * 0.18, repeat: Infinity, delay: i * 0.04 }}
                  />
                ))}
              </div>
              {/* Left edge */}
              <div className="absolute top-0 bottom-0 left-0 flex flex-col items-center justify-between">
                {Array.from({ length: bulbCountVertical }).map((_, i) => (
                  <motion.span
                    key={`rect-left-${i}`}
                    aria-hidden
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-elvis-gold/90 shadow-neon-gold"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.4 + (i % 3) * 0.25, repeat: Infinity, delay: i * 0.07 }}
                  />
                ))}
              </div>
              {/* Right edge */}
              <div className="absolute top-0 bottom-0 right-0 flex flex-col items-center justify-between">
                {Array.from({ length: bulbCountVertical }).map((_, i) => (
                  <motion.span
                    key={`rect-right-${i}`}
                    aria-hidden
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-elvis-gold/90 shadow-neon-gold"
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 1.3 + (i % 4) * 0.22, repeat: Infinity, delay: i * 0.06 }}
                  />
                ))}
              </div>
            </div>

            <h1 className="font-broadway uppercase tracking-widest mx-auto leading-none select-none relative">
              {/* 3D depth layers */}
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={`depth-${i}`}
                  aria-hidden
                  className="absolute inset-0 text-elvis-black/90"
                  style={{
                    transform: `translate(${i + 1}px, ${i + 1}px)`,
                    opacity: 0.06 + i * 0.06,
                    filter: 'blur(0.3px)',
                    WebkitTextStroke: '0px transparent',
                    fontSize: 'clamp(52px, 10vw, 168px)',
                    lineHeight: 1,
                    letterSpacing: '0.12em',
                  }}
                >
                  JESSY MORGAN
                </span>
              ))}
              
              {/* Main glossy layer */}
              <span
                className="relative text-transparent bg-clip-text drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
                style={{
                  backgroundImage: `url(${goldGlitter.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  fontSize: 'clamp(52px, 10vw, 168px)',
                  lineHeight: 1,
                  letterSpacing: '0.12em',
                  textShadow: '0 1px 0 #C59A2A, 0 2px 0 #AA8424, 0 3px 0 #8F6E1E, 0 4px 12px rgba(0,0,0,0.45)'
                }}
              >
                JESSY MORGAN
              </span>
            </h1>
          </div>

          
          {/* CTA under the title */}
          <motion.div
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 rounded-full bg-elvis-red text-white font-bebas tracking-widest uppercase shadow-neon-red hover:shadow-neon-gold transition-all duration-300 hover:-translate-y-0.5"
            >
              Réserver maintenant
            </a>
            <a
              href="#spectacles"
              className="px-6 sm:px-8 py-3 rounded-full border-2 border-elvis-gold/80 text-elvis-gold font-bebas tracking-widest uppercase bg-black/30 backdrop-blur-sm transition-all duration-300 hover:bg-black/50 hover:shadow-neon-gold hover:-translate-y-0.5"
            >
              Voir les spectacles
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Person image removed per request */}
    </section>
  );
};