/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Experience from './components/Experience';
import Dining from './components/Dining';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Location from './components/Location';
import WhyChooseUs from './components/WhyChooseUs';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 font-sans selection:bg-gold-500/30 selection:text-gold-400">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Rooms />
        <Amenities />
        <Experience />
        <Dining />
        <Events />
        <Gallery />
        <Location />
        <WhyChooseUs />
        <BookingCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
