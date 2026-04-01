import { motion } from 'motion/react';

const experiences = [
  {
    title: "Relax by the Pool",
    image: "https://images.unsplash.com/photo-1576013551627-11dc5f22bce6?q=80&w=2069&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2"
  },
  {
    title: "Rejuvenate at the Spa",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1",
    rowSpan: "row-span-1"
  },
  {
    title: "Celebrate Special Moments",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    colSpan: "col-span-1",
    rowSpan: "row-span-1"
  },
  {
    title: "Enjoy Scenic Valley Views",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-3",
    rowSpan: "row-span-1"
  }
];

export default function Experience() {
  return (
    <section id="experiences" className="py-24 bg-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4 font-medium"
          >
            Curated For You
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6"
          >
            Every corner is designed to give you a memorable escape.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-sm ${exp.colSpan} ${exp.rowSpan}`}
            >
              <img 
                src={exp.image} 
                alt={exp.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="font-serif text-2xl text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{exp.title}</h4>
                <div className="w-12 h-[1px] bg-gold-400 mt-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
