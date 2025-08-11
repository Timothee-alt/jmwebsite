"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Music, Award } from 'lucide-react';

const timelineData = [
  {
    year: "1935",
    title: "Naissance à Tupelo",
    description: "Elvis Aaron Presley naît le 8 janvier à Tupelo, Mississippi, dans une famille modeste.",
    icon: Calendar,
    color: "elvis-pink"
  },
  {
    year: "1954",
    title: "Premiers enregistrements",
    description: "Elvis enregistre 'My Happiness' aux Sun Records, marquant le début de sa carrière légendaire.",
    icon: Music,
    color: "elvis-gold"
  },
  {
    year: "1956",
    title: "Breakthrough national",
    description: "Avec 'Heartbreak Hotel', Elvis devient une sensation nationale et révolutionne la musique populaire.",
    icon: Award,
    color: "elvis-red"
  },
  {
    year: "1968",
    title: "The Comeback Special",
    description: "Le célèbre '68 Comeback Special marque le retour triomphal d'Elvis à la performance live.",
    icon: Music,
    color: "elvis-blue"
  },
  {
    year: "1969-1977",
    title: "Vegas Era",
    description: "Les légendaires concerts à Las Vegas établissent Elvis comme l'entertainer ultime.",
    icon: MapPin,
    color: "elvis-gold"
  }
];

export const BiographySection: React.FC = () => {
  return (
    <section id="biographie" className="py-20 bg-gradient-to-b from-elvis-black to-elvis-black/95 leather-texture">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-broadway text-4xl md:text-6xl text-elvis-red neon-text uppercase mb-4">
            La Légende
          </h2>
          <p className="text-elvis-gold font-bebas text-xl uppercase tracking-wider">
            L'histoire du King of Rock'n'Roll
          </p>
          <div className="w-24 h-1 bg-elvis-gradient mx-auto mt-4"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-elvis-gradient hidden md:block"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              className={`relative mb-12 md:mb-16 flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                <motion.div
                  className="bg-elvis-black/80 border-2 border-elvis-gold rounded-lg p-6 backdrop-blur-sm vegas-stud"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' }}
                >
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`p-2 rounded-full bg-${item.color} bg-opacity-20 border border-${item.color}`}>
                      <item.icon className={`w-5 h-5 text-${item.color}`} />
                    </div>
                    <span className="font-broadway text-2xl text-elvis-red">{item.year}</span>
                  </div>
                  <h3 className="font-bebas text-xl text-elvis-gold uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-elvis-white/90 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Center point */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-elvis-gold rounded-full border-4 border-elvis-black z-10">
                <motion.div
                  className="w-full h-full bg-elvis-gold rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote section */}
        <motion.div
          className="mt-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-elvis-black/60 border-2 border-elvis-gold rounded-2xl p-8 backdrop-blur-sm">
            <blockquote className="text-2xl md:text-3xl text-elvis-pink italic font-light mb-4">
              "J'ai toujours été un rêveur. Si vous croyez en vos rêves, 
              ils peuvent devenir réalité."
            </blockquote>
            <p className="text-elvis-gold font-bebas text-lg uppercase tracking-wider">
              - Elvis Presley
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};