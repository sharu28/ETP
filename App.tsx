import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Credibility from './components/Credibility';
import Inclusions from './components/Inclusions';
import Pricing from './components/Pricing';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-tropical-teal selection:text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Credibility />
      <Inclusions />
      <Pricing />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;