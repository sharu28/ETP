import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-tropical-teal">ETP</span>
          <span className={isScrolled ? 'text-gray-800' : 'text-white'}>SriLanka</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#highlights" className={`text-sm font-medium hover:text-tropical-teal transition ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>Highlights</a>
          <a href="#pricing" className={`text-sm font-medium hover:text-tropical-teal transition ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>Pricing</a>
          <a href="#faq" className={`text-sm font-medium hover:text-tropical-teal transition ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>FAQ</a>
          <a
            href={COMPANY_INFO.googleFormLink}
            target="_blank"
            rel="noreferrer"
            className="bg-tropical-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold transition shadow-lg transform hover:scale-105"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isScrolled ? 'text-gray-800' : 'text-white'}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 animate-fade-in">
          <a href="#highlights" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">Highlights</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">Pricing</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">FAQ</a>
          <a
            href={COMPANY_INFO.googleFormLink}
            target="_blank"
            rel="noreferrer"
            className="bg-tropical-orange text-white px-5 py-3 rounded-xl font-bold text-center w-full"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;