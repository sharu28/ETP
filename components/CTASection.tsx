import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-tropical-teal/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden relative border border-gray-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tropical-teal/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-tropical-orange/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="p-8 md:p-16 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready for the <br className="hidden md:block"/> ETP Experience?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              We're fired up to make ETP 2026 the best one yet! Join our committee and Rotaractors from around the world for an adventure across our island.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={COMPANY_INFO.googleFormLink}
                target="_blank"
                rel="noreferrer"
                className="bg-tropical-orange hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl transition transform hover:scale-105 shadow-xl flex items-center gap-3"
              >
                Apply for Selection <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href={COMPANY_INFO.googleFormLink}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-800 font-medium flex items-center gap-2 transition"
              >
                Open Form in New Tab <ExternalLink size={16} />
              </a>
            </div>
            
            <p className="mt-10 text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
              We’ll be in touch regularly with updates—so you’re fully ready for the ETP experience! 🇱🇰💙
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;