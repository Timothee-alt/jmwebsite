"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Star } from 'lucide-react';
import { ElvisButton } from '@/components/ui/elvis-button';

const upcomingShows = [
  {
    id: 1,
    title: "Elvis: The Early Years",
    date: "15 Mars 2024",
    time: "20h30",
    venue: "Casino de Paris",
    location: "Paris, France",
    capacity: "1,200 places",
    price: "À partir de 45€",
    description: "Revivez les débuts du King avec ses premiers hits de Sun Records.",
    image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true
  },
  {
    id: 2,
    title: "Vegas Nights - Tribute Show",
    date: "22 Mars 2024",
    time: "21h00",
    venue: "Olympia",
    location: "Paris, France",
    capacity: "2,000 places",
    price: "À partir de 55€",
    description: "L'époque dorée de Las Vegas avec les costumes iconiques et les tubes légendaires.",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: false
  },
  {
    id: 3,
    title: "The Comeback Special",
    date: "5 Avril 2024",
    time: "20h00",
    venue: "Zénith",
    location: "Lyon, France",
    capacity: "3,000 places",
    price: "À partir de 50€",
    description: "Reproduction fidèle du célèbre '68 Comeback Special en cuir noir.",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: false
  },
  {
    id: 4,
    title: "Elvis Gospel & Spirituals",
    date: "12 Avril 2024",
    time: "19h30",
    venue: "Théâtre des Champs-Élysées",
    location: "Paris, France",
    capacity: "1,900 places",
    price: "À partir de 40€",
    description: "Une soirée dédiée aux racines gospel d'Elvis avec un chœur exceptionnel.",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: false
  }
];

export const ShowsSection: React.FC = () => {
  return (
    <section id="spectacles" className="py-20 bg-gradient-to-b from-elvis-black/95 to-elvis-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-broadway text-4xl md:text-6xl text-elvis-gold neon-text uppercase mb-4">
            Spectacles
          </h2>
          <p className="text-elvis-gold font-bebas text-xl uppercase tracking-wider">
            Prochaines représentations à ne pas manquer
          </p>
          <div className="w-24 h-1 bg-elvis-gradient mx-auto mt-4"></div>
        </motion.div>

        {/* Shows Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {upcomingShows.map((show, index) => (
            <motion.div
              key={show.id}
              className={`relative overflow-hidden rounded-2xl border-2 border-elvis-gold backdrop-blur-sm ${
                show.featured ? 'lg:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)'
              }}
            >
              {/* Featured badge */}
              {show.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <motion.div
                    className="bg-elvis-gold text-elvis-black px-3 py-1 rounded-full flex items-center gap-2"
                    animate={{
                      boxShadow: [
                        '0 0 5px #D4AF37',
                        '0 0 15px #D4AF37',
                        '0 0 5px #D4AF37'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Star className="w-4 h-4 text-elvis-black" fill="currentColor" />
                    <span className="text-elvis-black font-bebas text-sm uppercase">
                      À l'affiche
                    </span>
                  </motion.div>
                </div>
              )}

              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${show.image})` }}
              >
                <div className="absolute inset-0 bg-elvis-black/80"></div>
              </div>

              {/* Content */}
              <div className={`relative z-10 p-6 ${show.featured ? 'md:p-8' : ''}`}>
                <div className={`${show.featured ? 'md:flex md:items-center md:gap-8' : ''}`}>
                  <div className={`${show.featured ? 'md:flex-1' : ''}`}>
                    <h3 className={`font-broadway ${show.featured ? 'text-3xl md:text-4xl' : 'text-2xl'} text-elvis-gold neon-text uppercase mb-3`}>
                      {show.title}
                    </h3>
                    
                    <p className="text-elvis-white/90 mb-6 leading-relaxed">
                      {show.description}
                    </p>

                    {/* Show Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 text-elvis-gold">
                        <Calendar className="w-5 h-5" />
                        <div>
                          <p className="font-bebas text-sm uppercase">Date & Heure</p>
                          <p className="text-elvis-white">{show.date} - {show.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-elvis-gold">
                        <MapPin className="w-5 h-5" />
                        <div>
                          <p className="font-bebas text-sm uppercase">Lieu</p>
                          <p className="text-elvis-white">{show.venue}</p>
                          <p className="text-elvis-white/70 text-sm">{show.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-elvis-gold">
                        <Users className="w-5 h-5" />
                        <div>
                          <p className="font-bebas text-sm uppercase">Capacité</p>
                          <p className="text-elvis-white">{show.capacity}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-elvis-gold">
                        <Star className="w-5 h-5" />
                        <div>
                          <p className="font-bebas text-sm uppercase">Prix</p>
                          <p className="text-elvis-white">{show.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex flex-col gap-3 ${show.featured ? 'md:w-auto' : ''}`}>
                    <ElvisButton size={show.featured ? 'lg' : 'md'} withLightning>
                      Réserver
                    </ElvisButton>
                    <ElvisButton variant="secondary" size={show.featured ? 'md' : 'sm'}>
                      Plus d'infos
                    </ElvisButton>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-elvis-white/80 text-lg mb-6 max-w-2xl mx-auto">
            Vous souhaitez organiser un spectacle privé ou professionnel ? 
            Contactez-nous pour une proposition personnalisée.
          </p>
          <ElvisButton size="lg" withLightning>
            Demander un devis
          </ElvisButton>
        </motion.div>
      </div>
    </section>
  );
};