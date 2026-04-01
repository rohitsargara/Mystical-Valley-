import { motion } from 'motion/react';

export default function Dining() {
  return (
    <section id="dining" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Fine Dining" 
                  className="w-full aspect-[4/5] object-cover rounded-sm"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
                  alt="Cuisine" 
                  className="w-full aspect-square object-cover rounded-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop" 
                  alt="Restaurant Ambience" 
                  className="w-full aspect-square object-cover rounded-sm"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
                  alt="Outdoor Dining" 
                  className="w-full aspect-[4/5] object-cover rounded-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4 font-medium">Culinary Journey</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-8">
              A Feast for the Senses
            </h2>
            
            <div className="space-y-6 text-gray-300 font-light leading-relaxed">
              <p>
                Experience a world of flavors at our multi-cuisine restaurant. From authentic Indian delicacies to continental favorites, our master chefs craft every dish to perfection.
              </p>
              
              <ul className="space-y-4 mt-8">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2" />
                  <div>
                    <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-1">Lavish Breakfast Spread</h4>
                    <p className="text-sm text-gray-400">Start your day with a wide variety of fresh, healthy, and indulgent options.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2" />
                  <div>
                    <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-1">Elegant Dinner Ambience</h4>
                    <p className="text-sm text-gray-400">Dine under the soft glow of ambient lighting with curated music.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2" />
                  <div>
                    <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-1">Outdoor Dining</h4>
                    <p className="text-sm text-gray-400">Enjoy your meals with a breathtaking view of the valley and starry night skies.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-dark-950 px-8 py-3 rounded-sm font-medium transition-colors uppercase tracking-widest text-sm"
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
