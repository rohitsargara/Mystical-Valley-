import { motion } from 'motion/react';

export default function Events() {
  return (
    <section id="events" className="py-24 bg-forest-950 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
          alt="Wedding Setup" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4 font-medium"
          >
            Weddings & Celebrations
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6"
          >
            Host Your Dream Event
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 font-light"
          >
            From intimate gatherings to grand destination weddings, our resort offers the perfect canvas for your special moments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass p-8 rounded-sm border border-gold-500/20"
          >
            <div className="aspect-video overflow-hidden rounded-sm mb-6">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
                alt="Wedding Lawn" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h4 className="font-serif text-2xl text-white mb-2">Scenic Wedding Lawn</h4>
            <p className="text-gray-400 font-light text-sm mb-4">
              A sprawling green lawn with a stunning valley backdrop, perfect for grand outdoor weddings and receptions under the stars.
            </p>
            <ul className="text-sm text-gray-300 space-y-2 mb-6">
              <li>• Capacity: Up to 1000 guests</li>
              <li>• Custom decor & lighting options</li>
              <li>• Dedicated catering area</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass p-8 rounded-sm border border-gold-500/20"
          >
            <div className="aspect-video overflow-hidden rounded-sm mb-6">
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" 
                alt="Banquet Hall" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h4 className="font-serif text-2xl text-white mb-2">Luxury Banquet Hall</h4>
            <p className="text-gray-400 font-light text-sm mb-4">
              An elegant, air-conditioned banquet hall designed for pre-wedding functions, corporate events, and intimate celebrations.
            </p>
            <ul className="text-sm text-gray-300 space-y-2 mb-6">
              <li>• Capacity: Up to 300 guests</li>
              <li>• State-of-the-art AV equipment</li>
              <li>• Premium seating arrangements</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gold-500 hover:bg-gold-400 text-dark-950 px-10 py-4 rounded-sm font-medium transition-colors uppercase tracking-widest text-sm"
          >
            Plan Your Event
          </a>
        </motion.div>

      </div>
    </section>
  );
}
