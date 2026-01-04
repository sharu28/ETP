import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Highlights from './components/Highlights.tsx';
import Itinerary from './components/Itinerary.tsx';
import Credibility from './components/Credibility.tsx';
import Inclusions from './components/Inclusions.tsx';
import Gallery from './components/Gallery.tsx';
import Pricing from './components/Pricing.tsx';
import CTASection from './components/CTASection.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-tropical-teal selection:text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Credibility />
      <Itinerary />
      <Inclusions />
      <Gallery />
      <Pricing />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;