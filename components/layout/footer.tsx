"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import boltImage from '@/components/public/bolt.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "Biographie", href: "#biographie" },
    { label: "Spectacles", href: "#spectacles" },
    { label: "Galerie", href: "#galerie" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-elvis-black/95 to-elvis-black border-t-2 border-elvis-gold/60 overflow-hidden">
      {/* Background pattern with animated elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="leather-texture h-full"></div>
        {/* Subtle animated background elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-elvis-gold rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-elvis-pink rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-elvis-red rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-elvis-blue rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Section */}
            <motion.div
              className="sm:col-span-2 lg:col-span-2 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-elvis-black/30 rounded-2xl border border-elvis-gold/20 backdrop-blur-sm"></div>
              <div className="relative z-10 p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="relative w-16 h-16 md:w-20 md:h-20"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={boltImage.src} 
                      alt="Elvis Bolt" 
                      className="w-full h-full object-contain filter brightness-110 drop-shadow-neon-gold"
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-broadway text-2xl md:text-3xl lg:text-4xl text-elvis-gold neon-text">
                      ELVIS
                    </h3>
                    <p className="font-bebas text-base md:text-lg text-elvis-gold uppercase tracking-wider">
                      Impresario
                    </p>
                  </div>
                </div>
              
                <p className="text-elvis-white/90 leading-relaxed mb-6 max-w-md text-sm md:text-base">
                  Depuis plus de 20 ans, nous perpétuons la magie d'Elvis Presley à travers 
                  des spectacles authentiques et émouvants. Le King vit éternellement à travers 
                  notre passion et notre respect de son héritage musical.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs md:text-sm text-elvis-white/70">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail className="w-4 h-4 text-elvis-gold" />
                    <span>jessymorgan@wanadoo.fr</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Phone className="w-4 h-4 text-elvis-gold" />
                    <span>+33 6 08 68 29 57</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-elvis-black/20 rounded-xl border border-elvis-gold/10"></div>
              <div className="relative z-10 p-4 md:p-6">
                <h4 className="font-bebas text-lg md:text-xl text-elvis-gold uppercase mb-4 md:mb-6">
                  Navigation
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li 
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href={link.href}
                        className="text-elvis-white/70 hover:text-elvis-gold transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base"
                        whileHover={{ x: 8 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-elvis-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.5 }}
                        ></motion.div>
                        {link.label}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-elvis-black/20 rounded-xl border border-elvis-gold/10"></div>
              <div className="relative z-10 p-4 md:p-6">
                <h4 className="font-bebas text-lg md:text-xl text-elvis-gold uppercase mb-4 md:mb-6">
                  Suivez-nous
                </h4>
                
                <div className="flex flex-col gap-3 md:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-3 text-elvis-white/70 hover:text-elvis-gold transition-colors duration-300 group"
                      whileHover={{ scale: 1.05, x: 8 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="p-2 border-2 border-elvis-gold/30 rounded-full group-hover:border-elvis-gold group-hover:shadow-neon-gold transition-all duration-300"
                        whileHover={{ rotate: 10 }}
                      >
                        <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.div>
                      <span className="font-bebas uppercase text-sm md:text-base">{social.label}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Newsletter */}
                <motion.div 
                  className="mt-6 md:mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h5 className="font-bebas text-base md:text-lg text-elvis-gold uppercase mb-2 md:mb-3">
                    Newsletter
                  </h5>
                  <p className="text-elvis-white/60 text-xs md:text-sm mb-3 md:mb-4">
                    Restez informé de nos prochains spectacles
                  </p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="flex-1 px-3 py-2 bg-elvis-black/80 border-2 border-elvis-gold/50 rounded-l-lg text-elvis-white placeholder-elvis-pink/60 focus:outline-none focus:border-elvis-blue focus:bg-elvis-black transition-all duration-300 text-xs md:text-sm"
                    />
                    <motion.button
                      className="px-3 md:px-4 py-2 bg-elvis-gold text-elvis-black border-2 border-elvis-gold rounded-r-lg hover:bg-elvis-gold hover:border-elvis-gold transition-colors duration-300 text-xs md:text-sm font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      OK
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-elvis-gold/30 py-6 md:py-8 bg-elvis-black/50 backdrop-blur-sm">
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <motion.p
                className="text-elvis-white/70 text-xs md:text-sm text-center md:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                © {currentYear} Jessy Morgan. Tous droits réservés. | 
                <span className="ml-1 text-elvis-pink font-semibold">Taking Care of Business</span>
              </motion.p>
              
              <motion.div
                className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-elvis-white/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="#" 
                  className="hover:text-elvis-gold transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Mentions légales
                </motion.a>
                <motion.a 
                  href="#" 
                  className="hover:text-elvis-gold transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Confidentialité
                </motion.a>
                <motion.a 
                  href="#" 
                  className="hover:text-elvis-gold transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  CGV
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bolt */}
      <motion.div
        className="absolute bottom-4 right-4 opacity-30 hidden md:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img 
          src={boltImage.src} 
          alt="Elvis Bolt" 
          className="w-16 h-16 lg:w-20 lg:h-20 object-contain filter brightness-110 drop-shadow-neon-gold"
        />
      </motion.div>
    </footer>
  );
};