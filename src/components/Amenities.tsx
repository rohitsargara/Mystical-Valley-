import { motion } from 'motion/react';
import { Waves, Sparkles, UtensilsCrossed, PartyPopper, Music, Gamepad2, Dumbbell, Wifi, Car } from 'lucide-react';

const amenities = [
  { icon: Waves, title: "Swimming Pool", desc: "Infinity pool with valley views" },
  { icon: Sparkles, title: "Spa & Wellness", desc: "Steam, massage & jacuzzi" },
  { icon: UtensilsCrossed, title: "Multi-cuisine", desc: "Fine dining restaurant" },
  { icon: PartyPopper, title: "Banquet Hall", desc: "For events & weddings" },
  { icon: Music, title: "DJ / Party Area", desc: "Celebrate under the stars" },
  { icon: Gamepad2, title: "Indoor Games", desc: "Arcade & recreation" },
  { icon: Dumbbell, title: "Fitness Club", desc: "Fully equipped gym" },
  { icon: Wifi, title: "Free WiFi", desc: "High-speed connectivity" },
  { icon: Car, title: "Parking", desc: "Secure valet parking" },
];

export default function Amenities() {
  return (
    <section className="py-24 bg-dark-900 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4 font-medium"
          >
            Resort Facilities
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-white leading-tight"
          >
            Amenities & Experiences
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-sm flex items-start gap-4 hover:bg-forest-900/40 transition-colors group"
            >
              <div className="p-3 bg-dark-950 rounded-sm border border-gold-500/20 group-hover:border-gold-400/50 transition-colors">
                <item.icon className="text-gold-400" size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-white mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
