import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "Spacious, well-appointed luxury rooms",
  "Breathtaking 360° scenic valley views",
  "Ideal property for grand weddings & events",
  "Perfect balance of relaxation & recreation",
  "Affordable luxury positioning",
  "Exceptional hospitality and service"
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-gold-500/5 blur-[120px] rounded-full -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-gold-500/20">
              <img 
                src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Experience" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4 font-medium">Why Mystical Valley</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-8">
              A Stay Beyond Expectations
            </h2>
            
            <p className="text-gray-300 font-light leading-relaxed mb-8">
              We believe in creating experiences that linger in your memory long after you leave. Our resort is meticulously designed to offer the perfect getaway.
            </p>
            
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-gold-400 shrink-0" size={20} />
                  <span className="text-gray-200 font-light">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
