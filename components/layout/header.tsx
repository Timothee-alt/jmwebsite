"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music, Calendar, Camera, Mail } from 'lucide-react';
import boltPng from '@/components/public/bolt.png';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#accueil', label: 'Accueil', icon: Music },
    { href: '#biographie', label: 'Biographie', icon: Music },
    { href: '#spectacles', label: 'Spectacles', icon: Calendar },
    { href: '#galerie', label: 'Galerie', icon: Camera },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-elvis-black/95 backdrop-blur-md shadow-vegas-glow' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 sm:gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={boltPng.src}
              alt="Jessy Morgan - Bolt"
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-[0_0_14px_rgba(212,175,55,0.6)]"
            />
            <div className="block">
              <h1 className="font-broadway text-xl sm:text-2xl lg:text-3xl text-elvis-red neon-text leading-none">
                JESSY MORGAN
              </h1>
              <p className="text-elvis-gold text-xs sm:text-sm font-bebas tracking-wider">
                IMPRESARIO
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="font-bebas text-lg uppercase tracking-wider text-elvis-white hover:text-elvis-gold transition-all duration-300 relative group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="relative">
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-elvis-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                </span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-elvis-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-elvis-black/98 backdrop-blur-md border-t border-elvis-gold/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="container mx-auto px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 font-bebas text-xl uppercase tracking-wider text-elvis-white hover:text-elvis-gold transition-all duration-300"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon size={20} />
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};