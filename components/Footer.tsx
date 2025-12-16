import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Brand */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">ETP SriLanka</h3>
            <p className="text-gray-400 text-sm">Curated group travel for the Rotaract community.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href={`https://instagram.com/${COMPANY_INFO.instagram}`} className="hover:text-tropical-teal transition">
              <Instagram className="w-6 h-6" />
            </a>
             <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-tropical-teal transition">
              <Mail className="w-6 h-6" />
            </a>
             <a href={COMPANY_INFO.whatsappLink} className="hover:text-tropical-teal transition">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Escape to Paradise. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>Terms & Conditions [Placeholder]</span>
             <span>Privacy Policy [Placeholder]</span>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 mt-8">
          This trip is independently organized and not an official Rotary International event.
        </p>
      </div>
    </footer>
  );
};

export default Footer;