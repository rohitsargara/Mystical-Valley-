import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function SocialProof() {
  const reviews = [
    {
      text: "Spacious rooms & breathtaking valley views. The perfect weekend getaway.",
      author: "Priya S.",
      type: "Couples Stay"
    },
    {
      text: "Friendly staff & relaxing stay. The spa experience was truly rejuvenating.",
      author: "Rahul M.",
      type: "Wellness Retreat"
    },
    {
      text: "Perfect for group stays & events. We hosted our anniversary here and it was flawless.",
      author: "The Sharma Family",
      type: "Celebration"
    }
  ];

  return (
    <section className="py-20 bg-forest-950 relative border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-gold-400 fill-gold-400" size={20} />
            ))}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-serif text-white"
          >
            Highly rated by 1000+ guests
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-sm relative"
            >
              <div className="text-gold-500/20 absolute top-4 left-4 text-6xl font-serif leading-none">"</div>
              <p className="text-gray-300 relative z-10 italic mb-6 text-lg">
                {review.text}
              </p>
              <div className="mt-auto">
                <p className="text-gold-400 font-medium uppercase tracking-wider text-sm">{review.author}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{review.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
