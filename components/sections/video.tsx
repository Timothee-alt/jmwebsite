"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, VolumeX, Maximize, Film } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Extraire l'ID de la vidéo YouTube
  const videoUrl = "https://youtu.be/vOs5n87XivM?feature=shared";
  const videoId = "vOs5n87XivM";

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
    setIsFullscreen(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-elvis-black/95 to-elvis-black">
      {/* Background animé */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-3 h-3 bg-elvis-gold rounded-full animate-ping"></div>
        <div className="absolute top-60 right-32 w-2 h-2 bg-elvis-pink rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-elvis-red rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-elvis-blue rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-broadway text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-elvis-gold neon-text uppercase mb-4"
          >
            Vidéos
          </motion.h2>
          
          <motion.p 
            className="text-yellow-400 text-sm sm:text-base md:text-xl uppercase tracking-widest font-semibold px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Performances légendaires et moments exclusifs
          </motion.p>
          
          <motion.div 
            className="w-16 md:w-24 h-1 bg-elvis-gold mx-auto mt-4 md:mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Video Preview */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            {/* Thumbnail container */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={handlePlayVideo}
            >
              {/* YouTube thumbnail */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-elvis-black to-elvis-black/90">
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Elvis Presley - Performance exclusive"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-elvis-black/60 via-transparent to-elvis-black/30"></div>
                
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-elvis-gold/60 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-elvis-gold/60 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-elvis-gold/60 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-elvis-gold/60 rounded-br-2xl"></div>

                {/* Play button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    {/* Pulse circles */}
                    <motion.div
                      className="absolute inset-0 bg-elvis-gold rounded-full opacity-30"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.1, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-elvis-gold rounded-full opacity-20"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.2, 0.05, 0.2]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                    />
                    
                    {/* Main play button */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-elvis-gold rounded-full flex items-center justify-center shadow-vegas-glow border-4 border-elvis-gold/80">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-elvis-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                </motion.div>

                {/* Video info overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.div
                    className="bg-elvis-black/80 backdrop-blur-sm rounded-xl p-4 border border-elvis-gold/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Film className="w-5 h-5 text-elvis-gold" />
                      <h3 className="text-elvis-gold font-bold text-lg md:text-xl uppercase">
                        Performance Exclusive
                      </h3>
                    </div>
                    <p className="text-elvis-white/90 text-sm md:text-base">
                      Découvrez une performance exceptionnelle du King of Rock'n'Roll
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-elvis-gold/50 transition-all duration-300 group-hover:shadow-neon-gold pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Additional video info */}
        <motion.div
          className="mt-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-elvis-black/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-elvis-gold/20">
            <motion.blockquote 
              className="text-lg md:text-xl text-elvis-gold italic mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              "Une fenêtre unique sur l'univers d'Elvis Presley et son héritage musical intemporel."
            </motion.blockquote>
            
            <motion.div 
              className="flex items-center justify-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="h-px w-12 bg-elvis-gold/50"></div>
              <div className="w-2 h-2 bg-elvis-gold rounded-full"></div>
              <div className="h-px w-12 bg-elvis-gold/50"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className={`fixed inset-0 z-50 bg-elvis-black/95 backdrop-blur-md flex items-center justify-center p-4 ${
              isFullscreen ? 'p-0' : ''
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`relative ${
                isFullscreen 
                  ? 'w-full h-full' 
                  : 'w-full max-w-6xl aspect-video bg-elvis-black rounded-2xl overflow-hidden border-2 border-elvis-gold'
              }`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              {/* Video Controls */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <motion.button
                  className="p-2 bg-elvis-black/80 border border-elvis-gold rounded-full text-elvis-gold hover:bg-elvis-gold hover:text-elvis-black transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </motion.button>
                
                <motion.button
                  className="p-2 bg-elvis-black/80 border border-elvis-gold rounded-full text-elvis-gold hover:bg-elvis-gold hover:text-elvis-black transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleFullscreen}
                >
                  <Maximize size={20} />
                </motion.button>

                <motion.button
                  className="p-2 bg-elvis-black/80 border border-elvis-gold rounded-full text-elvis-gold hover:bg-elvis-gold hover:text-elvis-black transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCloseVideo}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* YouTube iframe */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&rel=0&modestbranding=1&iv_load_policy=3`}
                title="Elvis Presley - Performance exclusive"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoSection;
