"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { ElvisButton } from '@/components/ui/elvis-button';
import { TCBLightning } from '@/components/icons/tcb-lightning';

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
      value: "contact@elvis-impresario.fr",
      description: "Réponse sous 24h"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 1 42 XX XX XX",
      description: "Lun-Ven 9h-18h"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Paris, France",
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
    <section id="contact" className="py-20 bg-gradient-to-b from-elvis-black/95 to-elvis-black leather-texture">
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
            Contact
          </h2>
          <p className="text-elvis-gold font-bebas text-xl uppercase tracking-wider">
            Réservez votre spectacle Elvis inoubliable
          </p>
          <div className="w-24 h-1 bg-elvis-gradient mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-elvis-black/60 border-2 border-elvis-gold rounded-2xl p-8 backdrop-blur-sm vegas-stud">
              <div className="flex items-center gap-3 mb-6">
                <TCBLightning size={30} />
                <h3 className="font-bebas text-2xl text-elvis-gold uppercase">
                  Demande de réservation
                </h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-elvis-gold font-bebas text-sm uppercase mb-2">
                      Nom complet *
                    </label>
                    <input
                      {...register('name', { required: 'Le nom est requis' })}
                      className="w-full px-4 py-3 bg-elvis-black border-2 border-elvis-gold rounded-lg text-elvis-white placeholder-elvis-pink/60 focus:outline-none focus:border-elvis-blue focus:shadow-neon-blue transition-all duration-300"
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="text-elvis-red text-sm mt-1">{errors.name.message}</p>
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
                      className="w-full px-4 py-3 bg-elvis-black border-2 border-elvis-gold rounded-lg text-elvis-white placeholder-elvis-pink/60 focus:outline-none focus:border-elvis-blue focus:shadow-neon-blue transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="text-elvis-red text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone and Event Type row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-elvis-gold font-bebas text-sm uppercase mb-2">
                      Téléphone
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 bg-elvis-black border-2 border-elvis-gold rounded-lg text-elvis-white placeholder-elvis-pink/60 focus:outline-none focus:border-elvis-blue focus:shadow-neon-blue transition-all duration-300"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-elvis-gold font-bebas text-sm uppercase mb-2">
                      Type d'événement *
                    </label>
                    <select
                      {...register('eventType', { required: 'Veuillez sélectionner un type d\'événement' })}
                      className="w-full px-4 py-3 bg-elvis-black border-2 border-elvis-gold rounded-lg text-elvis-white focus:outline-none focus:border-elvis-blue focus:shadow-neon-blue transition-all duration-300"
                    >
                      <option value="">Sélectionnez...</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.eventType && (
                      <p className="text-elvis-red text-sm mt-1">{errors.eventType.message}</p>
                    )}
                  </div>
                </div>

                {/* Date and Guests row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-elvis-gold font-bebas text-sm uppercase mb-2">
                      Date souhaitée
                    </label>
                    <input
                      {...register('date')}
                      type="date"
                      className="w-full px-4 py-3 bg-elvis-black border-2 border-elvis-gold rounded-lg text-elvis-white focus:outline-none focus:border-elvis-blue focus:shadow-neon-blue transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-elvis-gold font-bebas text-sm uppercase mb-2">
                      Nombre d'invités
                    </label>
                    <input
                      {...register('guests', { min: 1 })}
                      type="number"
                      className="w-full px-4 py-3 bg-elvis-black border-2 border-elvis-gold rounded-lg text-elvis-white placeholder-elvis-pink/60 focus:outline-none focus:border-elvis-blue focus:shadow-neon-blue transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-elvis-black border-2 border-elvis-gold rounded-lg text-elvis-white placeholder-elvis-pink/60 focus:outline-none focus:border-elvis-blue focus:shadow-neon-blue transition-all duration-300 resize-none"
                    placeholder="Décrivez-nous votre projet, vos attentes, le lieu, etc."
                  ></textarea>
                  {errors.message && (
                    <p className="text-elvis-red text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <ElvisButton type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Envoyer la demande
                </ElvisButton>
              </form>
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
                className="bg-elvis-black/60 border-2 border-elvis-gold rounded-xl p-6 backdrop-blur-sm hover:shadow-neon-gold transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-elvis-gold/20 border border-elvis-gold rounded-full">
                    <info.icon className="w-6 h-6 text-elvis-gold" />
                  </div>
                  <div>
                    <h4 className="font-bebas text-xl text-elvis-gold uppercase mb-1">
                      {info.title}
                    </h4>
                    <p className="text-elvis-white text-lg font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-elvis-white/70 text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              className="bg-elvis-black/60 border-2 border-elvis-gold rounded-xl p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bebas text-xl text-elvis-gold uppercase mb-4">
                Pourquoi nous choisir ?
              </h4>
              <ul className="space-y-2 text-elvis-white/90">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-elvis-gold rounded-full"></div>
                  Spectacles authentiques et fidèles à Elvis
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-elvis-gold rounded-full"></div>
                  Costumes et décors d'époque
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-elvis-gold rounded-full"></div>
                  Artistes professionnels expérimentés
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-elvis-gold rounded-full"></div>
                  Service personnalisé et sur mesure
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-elvis-gold rounded-full"></div>
                  Disponible partout en France et Europe
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};