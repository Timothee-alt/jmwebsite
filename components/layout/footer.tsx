"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { TCBLightning } from '@/components/icons/tcb-lightning';

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
    <footer className="relative bg-elvis-black border-t-2 border-elvis-gold">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="leather-texture h-full"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <TCBLightning size={60} />
                <div>
                  <h3 className="font-broadway text-3xl text-elvis-gold">
                    ELVIS
                  </h3>
                  <p className="font-bebas text-lg text-elvis-gold uppercase tracking-wider">
                    Impresario
                  </p>
                </div>
              </div>
              
              <p className="text-elvis-white/80 leading-relaxed mb-6 max-w-md">
                Depuis plus de 10 ans, nous perpétuons la magie d'Elvis Presley à travers 
                des spectacles authentiques et émouvants. Le King vit éternellement à travers 
                notre passion et notre respect de son héritage musical.
              </p>

              <div className="flex items-center gap-4 text-sm text-elvis-white/60">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@elvis-impresario.fr</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+33 1 42 XX XX XX</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bebas text-xl text-elvis-gold uppercase mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-elvis-white/70 hover:text-elvis-gold transition-colors duration-300 flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-2 h-2 bg-elvis-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bebas text-xl text-elvis-gold uppercase mb-6">
                Suivez-nous
              </h4>
              
              <div className="flex flex-col gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-3 text-elvis-white/70 hover:text-elvis-gold transition-colors duration-300 group"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <div className="p-2 border-2 border-elvis-gold/30 rounded-full group-hover:border-elvis-gold group-hover:shadow-neon-gold transition-all duration-300">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bebas uppercase">{social.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <h5 className="font-bebas text-lg text-elvis-gold uppercase mb-3">
                  Newsletter
                </h5>
                <p className="text-elvis-white/60 text-sm mb-4">
                  Restez informé de nos prochains spectacles
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 bg-elvis-black border-2 border-elvis-gold rounded-l-lg text-elvis-white placeholder-elvis-pink/60 focus:outline-none focus:border-elvis-blue text-sm"
                  />
                  <motion.button
                    className="px-4 py-2 bg-elvis-gold text-elvis-black border-2 border-elvis-gold rounded-r-lg hover:bg-elvis-gold hover:border-elvis-gold transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    OK
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-elvis-gold/20 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.p
                className="text-elvis-white/60 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                © {currentYear} Elvis Impresario. Tous droits réservés. | 
                <span className="ml-1 text-elvis-pink">Taking Care of Business</span>
              </motion.p>
              
              <motion.div
                className="flex items-center gap-6 text-sm text-elvis-white/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a href="#" className="hover:text-elvis-gold transition-colors duration-300">
                  Mentions légales
                </a>
                <a href="#" className="hover:text-elvis-gold transition-colors duration-300">
                  Confidentialité
                </a>
                <a href="#" className="hover:text-elvis-gold transition-colors duration-300">
                  CGV
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating TCB Lightning */}
      <motion.div
        className="absolute bottom-4 right-4 opacity-20"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <TCBLightning size={80} animate={false} />
      </motion.div>
    </footer>
  );
};