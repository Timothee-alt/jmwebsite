"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Zap } from 'lucide-react';

interface ElvisButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  withLightning?: boolean;
}

export const ElvisButton: React.FC<ElvisButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
  withLightning = false,
}) => {
  const baseClasses = "relative font-bebas uppercase tracking-wider transition-all duration-300 border-2 rounded-lg vegas-stud overflow-hidden";
  
  const variantClasses = {
    primary: "bg-elvis-gold border-elvis-gold text-elvis-black hover:shadow-scintillant",
    secondary: "bg-transparent border-elvis-gold text-elvis-gold hover:bg-elvis-gold hover:text-elvis-black hover:shadow-scintillant",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-lg",
    md: "px-6 py-3 text-xl",
    lg: "px-8 py-4 text-2xl",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      whileHover={{ 
        scale: disabled ? 1 : 1.05,
        boxShadow: '0 0 20px #D4AF37'
      }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      animate={{
        boxShadow: [
          '0 0 5px rgba(212, 175, 55, 0.5)',
          '0 0 15px rgba(212, 175, 55, 0.8)',
          '0 0 5px rgba(212, 175, 55, 0.5)',
        ],
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {/* Lightning flash overlay */}
      <motion.div
        className="absolute inset-0 bg-elvis-blue opacity-0"
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: Math.random() * 5 + 3,
        }}
      />
      
      <span className="relative z-10 flex items-center gap-2">
        {withLightning && <Zap className="w-4 h-4" />}
        {children}
        {withLightning && <Zap className="w-4 h-4" />}
      </span>
    </motion.button>
  );
};