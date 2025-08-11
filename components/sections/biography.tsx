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
      className={`flex items-center mb-20 ${item.position === 'left' ? '' : 'flex-row-reverse'}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={`w-5/12 ${item.position === 'right' ? 'text-right' : ''}`}>
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="relative bg-cover bg-center border-2 border-elvis-gold/30 rounded-xl p-8 shadow-vegas-glow"
            style={{ backgroundImage: `url(${goldGlitter.src})` }}
          >
            {/* Blur overlay for readability */}
            <div className="absolute inset-0 rounded-xl bg-black/45 backdrop-blur-sm pointer-events-none" />
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-elvis-gold/40 rounded-tl-xl z-10"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-elvis-gold/40 rounded-tr-xl z-10"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-elvis-gold/40 rounded-bl-xl z-10"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-elvis-gold/40 rounded-br-xl z-10"></div>

            <div className="relative z-10">
              <div className={`flex items-center gap-4 mb-4 ${item.position === 'right' ? 'flex-row-reverse' : ''}`}>
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
                className="text-xl font-bold text-elvis-white uppercase mb-3 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
              >
                {item.title}
              </motion.h3>
              
              <motion.p 
                className="text-elvis-white/90 leading-relaxed"
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

      {/* Timeline connector dot */}
      <div className="w-2/12 flex justify-center">
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

      <div className="w-5/12"></div>
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
      className="relative py-20 overflow-hidden bg-gradient-to-b from-elvis-black/95 to-elvis-black"
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-elvis-gold rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-elvis-pink rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-elvis-red rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-16 w-2 h-2 bg-elvis-blue rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-broadway text-6xl md:text-7xl text-elvis-gold neon-text uppercase mb-4"
          >
            La Légende
          </motion.h2>
          
          <motion.p 
            className="text-yellow-400 text-xl uppercase tracking-widest font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            L'histoire du King of Rock'n'Roll
          </motion.p>
          
          <motion.div 
            className="w-24 h-1 bg-elvis-gold mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>

        {/* Animated Timeline */}
        <div className="max-w-6xl mx-auto">
          <AnimatedTimeline />
        </div>

        {/* Quote finale */}
        <motion.div
          className="mt-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div 
            className="bg-elvis-black/90 border-2 border-elvis-gold/30 rounded-2xl p-8 backdrop-blur-sm shadow-vegas-glow"
          >
            <motion.blockquote 
              className="text-2xl md:text-3xl text-elvis-gold italic mb-4 leading-relaxed"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              "J'ai toujours été un rêveur. Si vous croyez en vos rêves, 
              ils peuvent devenir réalité."
            </motion.blockquote>
            
            <motion.div 
              className="flex items-center justify-center space-x-4 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-elvis-gold"></div>
              <p className="text-elvis-gold font-semibold uppercase tracking-wider">
                Elvis Presley
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-elvis-gold"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}