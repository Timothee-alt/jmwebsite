"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TCBLightningProps {
  className?: string;
  animate?: boolean;
  size?: number;
}

export const TCBLightning: React.FC<TCBLightningProps> = ({ 
  className = "", 
  animate = true,
  size = 40 
}) => {
  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={animate ? {
        scale: [1, 1.1, 1],
        filter: [
          'drop-shadow(0 0 5px #00BFFF)',
          'drop-shadow(0 0 15px #00BFFF)',
          'drop-shadow(0 0 5px #00BFFF)',
        ],
      } : undefined}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lightning bolt */}
        <motion.path
          d="M25 10 L45 40 L35 40 L55 80 L35 50 L45 50 L25 10 Z"
          fill="url(#lightningGradient)"
          stroke="#00BFFF"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* TCB Text */}
        <text
          x="70"
          y="30"
          fontSize="8"
          fill="#D4AF37"
          fontFamily="Bebas Neue, sans-serif"
          fontWeight="bold"
        >
          TCB
        </text>
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00BFFF" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
};