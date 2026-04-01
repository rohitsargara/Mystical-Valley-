import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-dark-900/40 to-dark-950/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Resort View"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold-400 uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium"
        >
          Welcome to Mystical Valley
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8"
        >
          Escape to Luxury in the <br className="hidden md:block" /> Heart of Udaipur
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
        >
          A Valley View Resort with Spa, Pool & Unforgettable Experiences.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#book"
            className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-dark-950 px-10 py-4 rounded-sm font-medium transition-colors uppercase tracking-widest text-sm"
          >
            Book Your Stay
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto border border-gold-500/50 hover:border-gold-400 text-gold-400 hover:text-gold-300 px-10 py-4 rounded-sm font-medium transition-colors uppercase tracking-widest text-sm glass"
          >
            Explore Resort
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-gold-400/60 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-gold-400/60" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
