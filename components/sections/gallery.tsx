"use client";

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Elvis en concert",
    description: "Performance électrisante sur scène",
    category: "concert"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Le Cuir Noir",
    description: "Tenue iconique du Comeback Special",
    category: "costume"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Vegas Lights",
    description: "L'atmosphère magique de Las Vegas",
    category: "vegas"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Studio Session",
    description: "En studio d'enregistrement",
    category: "studio"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/442540/pexels-photo-442540.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Guitare Acoustique",
    description: "Moment intimiste musical",
    category: "intimiste"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1756927/pexels-photo-1756927.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Scène Vintage",
    description: "Ambiance rétro des années 50",
    category: "vintage"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Microphone Vintage",
    description: "Équipement d'époque authentique",
    category: "vintage"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Performance Live",
    description: "Énergie pure sur scène",
    category: "concert"
  }
];

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const swiperRef = useRef<any>(null);

  return (
    <section id="galerie" className="py-20 bg-gradient-to-b from-elvis-black to-elvis-black/95">
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
            Galerie
          </h2>
          <p className="text-elvis-gold font-bebas text-xl uppercase tracking-wider">
            Images exclusives et moments inoubliables
          </p>
          <div className="w-24 h-1 bg-elvis-gradient mx-auto mt-4"></div>
        </motion.div>

        {/* Main Swiper Gallery */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            navigation={{
              nextEl: '.gallery-next',
              prevEl: '.gallery-prev',
            }}
            className="gallery-swiper pb-16"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.id} className="!w-80 !h-96">
                <motion.div
                  className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-elvis-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-bebas text-xl text-elvis-gold uppercase mb-1">
                        {image.title}
                      </h3>
                      <p className="text-elvis-white/90 text-sm">
                        {image.description}
                      </p>
                    </div>
                  </div>

                  {/* Border glow */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-elvis-gold rounded-2xl transition-all duration-300 group-hover:shadow-neon-gold"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <motion.button
            className="gallery-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-elvis-black/80 border-2 border-elvis-gold rounded-full text-elvis-gold hover:bg-elvis-gold hover:text-elvis-black transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            className="gallery-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-elvis-black/80 border-2 border-elvis-gold rounded-full text-elvis-gold hover:bg-elvis-gold hover:text-elvis-black transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </motion.div>

        {/* Thumbnail Grid */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {galleryImages.slice(0, 6).map((image, index) => (
            <motion.div
              key={`thumb-${image.id}`}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-elvis-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <Camera className="text-elvis-gold w-8 h-8" />
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-elvis-gold transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-elvis-black/95 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-elvis-black border-2 border-elvis-gold rounded-2xl overflow-hidden"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 z-10 p-2 bg-elvis-black/80 border-2 border-elvis-gold rounded-full text-elvis-gold hover:bg-elvis-gold hover:text-elvis-black transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(null)}
              >
                <X size={20} />
              </motion.button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Image Info */}
              <div className="p-6 bg-elvis-black">
                <h3 className="font-bebas text-2xl text-elvis-gold uppercase mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-elvis-white/90">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .gallery-swiper .swiper-pagination-bullet {
          background: #D4AF37;
          opacity: 0.5;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          background: #D4AF37;
          opacity: 1;
          box-shadow: 0 0 10px #D4AF37;
        }
      `}</style>
    </section>
  );
};