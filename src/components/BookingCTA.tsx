import { motion } from 'motion/react';
import { CalendarDays } from 'lucide-react';

export default function BookingCTA() {
  return (
    <section id="book" className="py-24 bg-gold-500 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
          alt="Resort View" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gold-600/80 mix-blend-multiply" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center p-4 bg-dark-950 rounded-full mb-8 shadow-2xl"
        >
          <CalendarDays className="text-gold-400" size={32} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-950 leading-tight mb-6"
        >
          Book Your Stay Today
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-dark-900/80 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10"
        >
          Limited rooms available during peak season. <br className="hidden md:block" />
          <span className="text-dark-950 font-bold">Weekend slots fill fast!</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-dark-950 hover:bg-dark-900 text-gold-400 px-10 py-4 rounded-sm font-medium transition-colors uppercase tracking-widest text-sm shadow-xl"
          >
            Check Availability
          </a>
          <a
            href="tel:+911234567890"
            className="w-full sm:w-auto border-2 border-dark-950 text-dark-950 hover:bg-dark-950 hover:text-gold-400 px-10 py-4 rounded-sm font-medium transition-colors uppercase tracking-widest text-sm"
          >
            Call Us Now
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
