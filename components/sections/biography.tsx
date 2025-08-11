import React from 'react';
import { motion, useScroll, useTransform, easeOut, backOut } from 'framer-motion';
import { Calendar, MapPin, Music, Award, Zap, Star } from 'lucide-react';
import goldGlitter from '@/components/public/gold-glitter.png';
import type { LucideIcon } from 'lucide-react';

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  position: 'left' | 'right';
};

const timelineData: TimelineItem[] = [
  {
    year: "1935",
    title: "Naissance à Tupelo",
    description: "Dans une modeste maison de Tupelo, Mississippi, naît Elvis Aaron Presley. Son jumeau Jesse meurt à la naissance, laissant Elvis grandir comme fils unique dans une famille aimante mais pauvre.",
    icon: Calendar,
    color: "from-elvis-gold to-elvis-red",
    position: "left"
  },
  {
    year: "1954",
    title: "Premiers enregistrements",
    description: "À 19 ans, Elvis entre aux Sun Records pour enregistrer une chanson pour sa mère. Sam Phillips remarque cette voix unique qui mélange country, blues et gospel - le rock'n'roll vient de naître.",
    icon: Music,
    color: "from-elvis-red to-elvis-gold",
    position: "right"
  },
  {
    year: "1956",
    title: "La révolution musicale",
    description: "Avec 'Heartbreak Hotel', Elvis explose. Ses déhanchements provocants à la télévision scandalisent l'Amérique conservatrice mais électrisent la jeunesse. Une nouvelle ère commence.",
    icon: Zap,
    color: "from-elvis-gold to-elvis-pink",
    position: "left"
  },
  {
    year: "1958-1960",
    title: "Service militaire",
    description: "Au sommet de sa gloire, Elvis est appelé sous les drapeaux. Ces deux années en Allemagne forgent l'homme et l'éloignent temporairement des projecteurs.",
    icon: Star,
    color: "from-elvis-blue to-elvis-gold",
    position: "right"
  },
  {
    year: "1968",
    title: "The Comeback Special",
    description: "Après des années de films alimentaires, Elvis retrouve ses racines lors du mythique '68 Comeback Special. Vêtu de cuir noir, il prouve qu'il reste le King incontesté.",
    icon: Award,
    color: "from-elvis-red to-elvis-gold",
    position: "left"
  },
  {
    year: "1969-1977",
    title: "L'ère de Las Vegas",
    description: "L'International Hotel de Vegas devient son royaume. 837 concerts sold-out en 8 ans. Elvis devient une légende vivante, mais la gloire a un prix que son corps finira par payer.",
    icon: MapPin,
    color: "from-elvis-gold to-elvis-red",
    position: "right"
  }
];

type TimelineCardProps = { item: TimelineItem; index: number };

const TimelineCard = ({ item, index }: TimelineCardProps) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: item.position === 'left' ? -100 : 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        delay: index * 0.2,
        ease: easeOut
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: { 
      rotate: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        delay: index * 0.2 + 0.3,
        ease: backOut
      }
    }
  };

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row items-start md:items-center mb-8 md:mb-20 ${item.position === 'left' ? '' : 'md:flex-row-reverse'}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Mobile timeline indicator */}
      <div className="flex md:hidden items-center w-full mb-4">
        <motion.div 
          className="flex items-center gap-3"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <motion.div 
            className="p-2 rounded-lg bg-elvis-gold border border-elvis-gold shadow-neon-gold"
            variants={iconVariants}
          >
            <item.icon className="w-4 h-4 text-white" />
          </motion.div>
          <motion.span 
            className="text-2xl font-bold text-elvis-gold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          >
            {item.year}
          </motion.span>
        </motion.div>
        <div className="flex-1 h-px bg-elvis-gold/30 ml-4"></div>
      </div>
      <div className={`w-full md:w-5/12 ${item.position === 'right' ? 'md:text-right' : ''}`}>
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="relative bg-cover bg-center border-2 border-elvis-gold/30 rounded-xl p-4 md:p-8 shadow-vegas-glow"
            style={{ backgroundImage: `url(${goldGlitter.src})` }}
          >
            {/* Blur overlay for readability */}
            <div className="absolute inset-0 rounded-xl bg-black/50 md:bg-black/45 backdrop-blur-sm pointer-events-none" />
            {/* Decorative corner elements - smaller on mobile */}
            <div className="absolute top-0 left-0 w-4 h-4 md:w-8 md:h-8 border-t-2 border-l-2 border-elvis-gold/40 rounded-tl-xl z-10"></div>
            <div className="absolute top-0 right-0 w-4 h-4 md:w-8 md:h-8 border-t-2 border-r-2 border-elvis-gold/40 rounded-tr-xl z-10"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 md:w-8 md:h-8 border-b-2 border-l-2 border-elvis-gold/40 rounded-bl-xl z-10"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 md:w-8 md:h-8 border-b-2 border-r-2 border-elvis-gold/40 rounded-br-xl z-10"></div>

            <div className="relative z-10">
              {/* Desktop header */}
              <div className={`hidden md:flex items-center gap-4 mb-4 ${item.position === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <motion.div 
                  className={`p-3 rounded-xl bg-elvis-gold border border-elvis-gold shadow-neon-gold`}
                  variants={iconVariants}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.span 
                  className="text-3xl font-bold text-elvis-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                >
                  {item.year}
                </motion.span>
              </div>
              
              <motion.h3 
                className="text-lg md:text-xl font-bold text-elvis-white uppercase mb-2 md:mb-3 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
              >
                {item.title}
              </motion.h3>
              
              <motion.p 
                className="text-sm md:text-base text-elvis-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
              >
                {item.description}
              </motion.p>
            </div>

            {/* Hover effect overlay */}
            <motion.div 
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-elvis-gold/0 via-elvis-gold/5 to-elvis-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />
          </div>
        </motion.div>
      </div>

      {/* Desktop timeline connector dot */}
      <div className="hidden md:flex md:w-2/12 md:justify-center">
        <motion.div 
          className="relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        >
          <div 
            className="w-4 h-4 bg-elvis-gold rounded-full border-4 border-elvis-black relative z-10"
            style={{
              boxShadow: '0 0 15px rgba(212, 175, 55, 0.6)'
            }}
          />
          <motion.div
            className="absolute inset-0 w-4 h-4 bg-elvis-gold rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0.3, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3
            }}
          />
        </motion.div>
      </div>

      <div className="hidden md:block md:w-5/12"></div>
    </motion.div>
  );
};

const AnimatedTimeline = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative" ref={ref}>
      {/* Animated central timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-elvis-white/10 hidden md:block">
        <motion.div 
          className="w-full bg-elvis-gold origin-top"
          style={{ 
            height: lineHeight,
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)'
          }}
        />
      </div>

      {/* Timeline cards */}
      {timelineData.map((item, index) => (
        <TimelineCard key={item.year} item={item} index={index} />
      ))}
    </div>
  );
};

export default function BiographySection() {
  return (
    <section 
      className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-elvis-black/95 to-elvis-black"
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-elvis-gold rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-elvis-pink rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-elvis-red rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-16 w-2 h-2 bg-elvis-blue rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-broadway text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-elvis-gold neon-text uppercase mb-3 md:mb-4"
          >
            La Légende
          </motion.h2>
          
          <motion.p 
            className="text-yellow-400 text-sm sm:text-base md:text-xl uppercase tracking-widest font-semibold px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            L'histoire du King of Rock'n'Roll
          </motion.p>
          
          <motion.div 
            className="w-16 md:w-24 h-1 bg-elvis-gold mx-auto mt-4 md:mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>

        {/* Animated Timeline */}
        <div className="max-w-6xl mx-auto px-2 md:px-0">
          <AnimatedTimeline />
        </div>

        {/* Quote finale */}
        <motion.div
          className="mt-16 md:mt-20 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background avec effet de parallaxe */}
            <div 
              className="absolute inset-0 rounded-2xl bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${goldGlitter.src})` }}
            />
            
            {/* Bordures animées */}
            <div className="absolute inset-0 rounded-2xl border-2 border-elvis-gold/40 
                          before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-elvis-gold/20 
                          before:animate-pulse before:duration-2000" />
            
            {/* Coins décoratifs avec animation */}
            <div className="absolute -top-2 -left-2 w-6 h-6 md:w-8 md:h-8">
              <motion.div 
                className="w-full h-full border-t-2 border-l-2 border-elvis-gold rounded-tl-2xl"
                animate={{ 
                  boxShadow: ['0 0 5px rgba(212, 175, 55, 0.3)', '0 0 20px rgba(212, 175, 55, 0.6)', '0 0 5px rgba(212, 175, 55, 0.3)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8">
              <motion.div 
                className="w-full h-full border-t-2 border-r-2 border-elvis-gold rounded-tr-2xl"
                animate={{ 
                  boxShadow: ['0 0 5px rgba(212, 175, 55, 0.3)', '0 0 20px rgba(212, 175, 55, 0.6)', '0 0 5px rgba(212, 175, 55, 0.3)']
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 md:w-8 md:h-8">
              <motion.div 
                className="w-full h-full border-b-2 border-l-2 border-elvis-gold rounded-bl-2xl"
                animate={{ 
                  boxShadow: ['0 0 5px rgba(212, 175, 55, 0.3)', '0 0 20px rgba(212, 175, 55, 0.6)', '0 0 5px rgba(212, 175, 55, 0.3)']
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 md:w-8 md:h-8">
              <motion.div 
                className="w-full h-full border-b-2 border-r-2 border-elvis-gold rounded-br-2xl"
                animate={{ 
                  boxShadow: ['0 0 5px rgba(212, 175, 55, 0.3)', '0 0 20px rgba(212, 175, 55, 0.6)', '0 0 5px rgba(212, 175, 55, 0.3)']
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
            </div>

            <div 
              className="relative bg-elvis-black/95 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.15)'
              }}
            >
              {/* Effet de brillance en survol */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-elvis-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />

              {/* Guillemets décoratifs */}
              <motion.div 
                className="absolute top-4 left-4 md:top-6 md:left-6 text-4xl md:text-6xl text-elvis-gold/20 font-serif"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                "
              </motion.div>
              <motion.div 
                className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-4xl md:text-6xl text-elvis-gold/20 font-serif rotate-180"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                "
              </motion.div>

              <div className="relative z-10">
                <motion.blockquote 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-elvis-gold italic mb-6 md:mb-8 leading-relaxed font-light px-4 md:px-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  J'ai toujours été un rêveur. Si vous croyez en vos rêves, 
                  ils peuvent devenir réalité.
                </motion.blockquote>
                
                {/* Séparateur élégant */}
                <motion.div 
                  className="flex items-center justify-center mb-4 md:mb-6"
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "auto" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-elvis-gold rounded-full animate-pulse"></div>
                    <div className="h-px w-12 md:w-20 bg-gradient-to-r from-elvis-gold via-elvis-gold/50 to-elvis-gold"></div>
                    <div className="w-3 h-3 bg-elvis-gold rounded-full"></div>
                    <div className="h-px w-12 md:w-20 bg-gradient-to-l from-elvis-gold via-elvis-gold/50 to-elvis-gold"></div>
                    <div className="w-2 h-2 bg-elvis-gold rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="bg-elvis-gold/10 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4 border border-elvis-gold/30">
                    <p className="text-elvis-gold font-semibold uppercase tracking-widest text-sm md:text-base">
                      Elvis Presley
                    </p>
                    <p className="text-elvis-gold/70 text-xs md:text-sm mt-1 tracking-wider">
                      The King of Rock'n'Roll
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}