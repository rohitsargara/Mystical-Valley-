import { motion } from 'motion/react';
import { MapPin, Plane, Train, Landmark } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-24 bg-forest-950 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4 font-medium">Location</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-8">
              Perfectly Situated in Udaipur
            </h2>
            
            <p className="text-gray-300 font-light leading-relaxed mb-10">
              Located away from the city's hustle yet close enough to major attractions, our resort offers the ideal base to explore the City of Lakes while enjoying a tranquil retreat.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-950 rounded-sm border border-gold-500/20">
                  <Plane className="text-gold-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-1">Airport</h4>
                  <p className="text-sm text-gray-400">Maharana Pratap Airport - 45 mins drive</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-950 rounded-sm border border-gold-500/20">
                  <Train className="text-gold-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-1">Railway Station</h4>
                  <p className="text-sm text-gray-400">Udaipur City Railway Station - 30 mins drive</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-950 rounded-sm border border-gold-500/20">
                  <Landmark className="text-gold-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-1">City Center & Lakes</h4>
                  <p className="text-sm text-gray-400">City Palace, Lake Pichola - 25 mins drive</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] lg:h-[500px] w-full rounded-sm overflow-hidden border border-gold-500/20 relative"
          >
            {/* Map Placeholder - In a real app, use Google Maps iframe or API */}
            <div className="absolute inset-0 bg-dark-900 flex flex-col items-center justify-center text-center p-6">
              <MapPin className="text-gold-400 mb-4" size={48} />
              <h4 className="font-serif text-2xl text-white mb-2">Mystical Valley View Resort</h4>
              <p className="text-gray-400 text-sm mb-6">Udaipur, Rajasthan, India</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-dark-950 px-6 py-2 rounded-sm font-medium transition-colors uppercase tracking-widest text-xs"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
