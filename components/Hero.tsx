import React from 'react';
import { MapPin, CheckCircle2, Users, ArrowRight, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('info-pack-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1588258524675-55d6563e4316?q=80&w=2070&auto=format&fit=crop"
          alt="Sri Lanka Train"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Calendar className="w-4 h-4 text-tropical-teal" />
            <span className="text-white text-sm font-medium tracking-wide">
              {COMPANY_INFO.nextTripDates} • Limited Seats
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            9 Days in Sri Lanka <br className="hidden md:block" />
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropical-teal to-tropical-blue">Rotaractors</span>.
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
            Curated, hosted, unforgettable. ETP is a guided group trip built for vibes — beaches, hills, culture, food, and a solid crew.
          </p>

          {/* Trust Strip */}
          <div className="flex flex-wrap gap-4 md:gap-8 mb-10 text-white/90 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-tropical-orange" />
              <span>Group-hosted</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-tropical-orange" />
              <span>All Transport Arranged</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-tropical-orange" />
              <span>Made for Rotaract</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToForm}
              className="bg-tropical-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition transform hover:-translate-y-1 shadow-xl hover:shadow-orange-500/30 flex items-center justify-center gap-2"
            >
              Get the Info Pack <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href={COMPANY_INFO.bookingCallLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition flex items-center justify-center"
            >
              Book a 10-min Call
            </a>
          </div>
          <p className="mt-4 text-white/60 text-sm">
            No spam. Just trip details + pricing + dates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;