import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-950 pt-20 pb-10 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl text-gold-400 tracking-wider mb-6">
              Mystical Valley
            </h2>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              A luxury resort and spa in Udaipur offering serene valley views, premium accommodations, and unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Rooms & Suites', 'Dining', 'Spa & Wellness', 'Weddings & Events', 'Gallery'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-400 shrink-0 mt-0.5" size={18} />
                <span className="text-gray-400 text-sm font-light">
                  Mystical Valley View Resort & Spa,<br />
                  Near Airport Highway,<br />
                  Udaipur, Rajasthan, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-400 shrink-0" size={18} />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-light">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-400 shrink-0" size={18} />
                <a href="mailto:info@mysticalvalley.com" className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-light">
                  info@mysticalvalley.com
                </a>
              </li>
            </ul>
          </div>

          {/* Plan Your Stay */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Plan Your Stay</h4>
            <div className="bg-dark-900 p-6 rounded-sm border border-gold-500/10">
              <div className="flex justify-between items-center border-b border-gold-500/10 pb-3 mb-3">
                <span className="text-gray-400 text-sm">Check-in</span>
                <span className="text-gold-400 font-medium">2:00 PM</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 text-sm">Check-out</span>
                <span className="text-gold-400 font-medium">11:00 AM</span>
              </div>
              <a
                href="#book"
                className="block w-full text-center bg-gold-500 hover:bg-gold-400 text-dark-950 py-3 rounded-sm font-medium transition-colors uppercase tracking-widest text-xs"
              >
                Book Now
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gold-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-light">
            &copy; {new Date().getFullYear()} Mystical Valley View Resort & Spa. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gold-400 text-xs font-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gold-400 text-xs font-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
