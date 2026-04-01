import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-forest-900/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4 font-medium">Our Story</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-8">
              A peaceful escape away from city chaos
            </h2>
            
            <div className="space-y-6 text-gray-300 font-light leading-relaxed">
              <p>
                Nestled in the serene landscapes of Udaipur, Mystical Valley View Resort & Spa offers the perfect blend of nature, comfort, and unparalleled hospitality. 
              </p>
              <p>
                Wake up to breathtaking valley and garden views, indulge in relaxed luxury, and create memories that last a lifetime. Whether you are seeking a quiet romantic getaway, a joyful family vacation, or the perfect venue for your grand celebrations, our resort is designed to exceed your expectations.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l border-gold-500/30 pl-4">
                <p className="text-gold-400 font-serif text-2xl mb-1">15+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Acres of Nature</p>
              </div>
              <div className="border-l border-gold-500/30 pl-4">
                <p className="text-gold-400 font-serif text-2xl mb-1">360°</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Valley Views</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
                alt="Resort View" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-gold-500/20 m-4 rounded-sm pointer-events-none" />
            </div>
            
            {/* Floating Image */}
            <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square overflow-hidden rounded-sm shadow-2xl border-4 border-dark-900 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
                alt="Spa Detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
