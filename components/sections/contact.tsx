"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { ElvisButton } from '@/components/ui/elvis-button';
import boltImage from '@/components/public/bolt.png';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  eventType: string;
  date?: string;
  guests?: number;
  message: string;
}

export const ContactSection: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Merci pour votre message ! Nous vous recontacterons rapidement.');
    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "jessymorgan@wanadoo.fr",
      description: "Réponse sous 24h"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 6 08 68 29 57",
      description: "Lun-Ven 9h-18h"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Lannion, Bretagne, France",
      description: "Déplacements en France et Europe"
    },
    {
      icon: Clock,
      title: "Disponibilité",
      value: "7j/7",
      description: "Spectacles et événements privés"
    }
  ];

  const eventTypes = [
    "Concert public",
    "Événement privé",
    "Mariage",
    "Entreprise",
    "Festival",
    "Anniversaire",
    "Autre"
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-b from-elvis-black/95 to-elvis-black leather-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-broadway text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-elvis-gold uppercase mb-3 md:mb-4">
            Contact
          </h2>
          <p className="text-elvis-gold font-bebas text-sm sm:text-base md:text-xl uppercase tracking-wider px-2">
            Réservez votre spectacle Elvis inoubliable
          </p>
          <div className="w-16 md:w-24 h-1 bg-elvis-gradient mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-elvis-black/70 border-2 border-elvis-gold/40 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl overflow-hidden relative">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-elvis-gold/60 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-elvis-gold/60 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-elvis-gold/60 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-elvis-gold/60 rounded-br-2xl"></div>
              
              <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="relative w-8 h-8 md:w-10 md:h-10"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={boltImage.src} 
                    alt="Elvis Bolt" 
                    className="w-full h-full object-contain filter brightness-110 drop-shadow-neon-gold"
                  />
                </motion.div>
                <h3 className="font-bebas text-xl md:text-2xl text-elvis-gold uppercase">
                  Demande de réservation
                </h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-elvis-gold font-bebas text-sm uppercase mb-2">
                      Nom complet *
                    </label>
                    <input
                      {...register('name', { required: 'Le nom est requis' })}
                      className="w-full px-4 py-2 md:py-3 bg-elvis-black/80 border-2 border-elvis-gold/50 rounded-lg text-elvis-white placeholder-elvis-pink/60 focus:outline-none focus:border-elvis-gold focus:shadow-neon-gold focus:bg-elvis-black transition-all duration-300"
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="text-elvis-gold text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-elvis-gold font-bebas text-sm uppercase mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'L\'email est requis',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Email invalide'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-2 md:py-3 bg-elvis-black/80 border-2 border-elvis-gold/50 rounded-lg text-elvis-white placeholder-elvis-pink/60 focus:outline-none focus:border-elvis-gold focus:shadow-neon-gold focus:bg-elvis-black transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="text-elvis-gold text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone and Event Type row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-elvis-gold font-bebas text-sm uppercase mb-2">
                      Téléphone
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-2 md:py-3 bg-elvis-black/80 border-2 border-elvis-gold/50 rounded-lg text-elvis-white placeholder-elvis-pink/60 focus:outline-none focus:border-elvis-gold focus:shadow-neon-gold focus:bg-elvis-black transition-all duration-300"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-elvis-gold font-bebas text-sm uppercase mb-2">
                      Type d'événement *
                    </label>
                    <select
                      {...register('eventType', { required: 'Veuillez sélectionner un type d\'événement' })}
                      className="w-full px-4 py-2 md:py-3 bg-elvis-black/80 border-2 border-elvis-gold/50 rounded-lg text-elvis-white focus:outline-none focus:border-elvis-gold focus:shadow-neon-gold focus:bg-elvis-black transition-all duration-300"
                    >
                      <option value="">Sélectionnez...</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.eventType && (
                      <p className="text-elvis-gold text-sm mt-1">{errors.eventType.message}</p>
                    )}
                  </div>
                </div>

                {/* Date and Guests row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-elvis-gold font-bebas text-sm uppercase mb-2">
                      Date souhaitée
                    </label>
                    <input
                      {...register('date')}
                      type="date"
                      className="w-full px-4 py-2 md:py-3 bg-elvis-black/80 border-2 border-elvis-gold/50 rounded-lg text-elvis-white focus:outline-none focus:border-elvis-gold focus:shadow-neon-gold focus:bg-elvis-black transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-elvis-gold font-bebas text-sm uppercase mb-2">
                      Nombre d'invités
                    </label>
                    <input
                      {...register('guests', { min: 1 })}
                      type="number"
                      className="w-full px-4 py-2 md:py-3 bg-elvis-black/80 border-2 border-elvis-gold/50 rounded-lg text-elvis-white placeholder-elvis-pink/60 focus:outline-none focus:border-elvis-gold focus:shadow-neon-gold focus:bg-elvis-black transition-all duration-300"
                      placeholder="Ex: 100"
                      min="1"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-elvis-gold font-bebas text-sm uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Veuillez nous parler de votre projet' })}
                    rows={5}
                    className="w-full px-4 py-2 md:py-3 bg-elvis-black/80 border-2 border-elvis-gold/50 rounded-lg text-elvis-white placeholder-elvis-pink/60 focus:outline-none focus:border-elvis-gold focus:shadow-neon-gold focus:bg-elvis-black transition-all duration-300 resize-none"
                    placeholder="Décrivez-nous votre projet, vos attentes, le lieu, etc."
                  ></textarea>
                  {errors.message && (
                    <p className="text-elvis-gold text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ElvisButton type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Envoyer la demande</span>
                  </ElvisButton>
                </motion.div>
              </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-elvis-black/70 border-2 border-elvis-gold/40 rounded-xl p-4 md:p-6 backdrop-blur-md hover:shadow-neon-gold transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 border-elvis-gold/40 rounded-tr-xl"></div>
                <div className="flex items-start gap-3 md:gap-4 relative z-10">
                  <motion.div 
                    className="p-2 md:p-3 bg-elvis-gold/20 border border-elvis-gold rounded-full"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <info.icon className="w-5 h-5 md:w-6 md:h-6 text-elvis-gold" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-bebas text-lg md:text-xl text-elvis-gold uppercase mb-1">
                      {info.title}
                    </h4>
                    <p className="text-elvis-white text-base md:text-lg font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-elvis-white/70 text-xs md:text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              className="bg-elvis-black/70 border-2 border-elvis-gold/40 rounded-xl p-4 md:p-6 backdrop-blur-md relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-elvis-gold/40 rounded-tl-xl"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-elvis-gold/40 rounded-br-xl"></div>
              
              <div className="relative z-10">
                <h4 className="font-bebas text-lg md:text-xl text-elvis-gold uppercase mb-3 md:mb-4">
                  Pourquoi nous choisir ?
                </h4>
                <ul className="space-y-2 md:space-y-3 text-elvis-white/90">
                  <motion.li 
                    className="flex items-center gap-2 md:gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-elvis-gold rounded-full animate-pulse"></div>
                    <span className="text-sm md:text-base">Spectacles authentiques et fidèles à Elvis</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 md:gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-elvis-gold rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span className="text-sm md:text-base">Costumes et décors d'époque</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 md:gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-elvis-gold rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span className="text-sm md:text-base">Artistes professionnels expérimentés</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 md:gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-elvis-gold rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    <span className="text-sm md:text-base">Service personnalisé et sur mesure</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 md:gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-elvis-gold rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                    <span className="text-sm md:text-base">Disponible partout en France et Europe</span>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};