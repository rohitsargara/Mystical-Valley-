import { motion } from 'motion/react';
import { Wifi, Wind, Tv, Coffee, BedDouble, Maximize } from 'lucide-react';

const rooms = [
  {
    title: "Deluxe Room",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
    size: "350 sq.ft",
    bed: "King Size Bed",
    view: "Garden View",
    description: "Elegant and comfortable, offering serene garden views and modern amenities for a relaxing stay.",
    amenities: ["Free WiFi", "AC", "Smart TV", "Minibar", "Room Service"]
  },
  {
    title: "Premium Room",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
    size: "450 sq.ft",
    bed: "King Size Bed",
    view: "Valley View",
    description: "Spacious luxury with breathtaking valley views from your private balcony. Perfect for couples.",
    amenities: ["Free WiFi", "AC", "Smart TV", "Minibar", "Room Service", "Balcony"]
  },
  {
    title: "Presidential Suite",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    size: "800 sq.ft",
    bed: "King Size Bed",
    view: "Panoramic Valley View",
    description: "The ultimate luxury experience featuring a separate living area, private jacuzzi, and panoramic views.",
    amenities: ["Free WiFi", "AC", "Smart TV", "Minibar", "Room Service", "Jacuzzi", "Living Area"]
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-forest-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4 font-medium"
          >
            Accommodations
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-white leading-tight"
          >
            Stay in Luxury
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-dark-900 rounded-sm overflow-hidden border border-gold-500/10 hover:border-gold-500/30 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="font-serif text-2xl text-white">{room.title}</h4>
                  <p className="text-gold-400 text-sm uppercase tracking-widest">{room.view}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Maximize size={16} className="text-gold-400" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BedDouble size={16} className="text-gold-400" />
                    <span>{room.bed}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 font-light text-sm mb-6 line-clamp-2">
                  {room.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {room.amenities.slice(0, 4).map((amenity, i) => (
                    <span key={i} className="text-xs text-gray-300 bg-dark-950 px-2 py-1 rounded-sm border border-gold-500/10">
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 4 && (
                    <span className="text-xs text-gold-400 bg-dark-950 px-2 py-1 rounded-sm border border-gold-500/10">
                      +{room.amenities.length - 4} more
                    </span>
                  )}
                </div>
                
                <a
                  href="#book"
                  className="block w-full text-center border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-dark-950 py-3 rounded-sm font-medium transition-colors uppercase tracking-widest text-sm"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
