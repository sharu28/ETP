import React from 'react';
import { COMPANY_INFO } from '../constants';

const Credibility: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <span className="text-tropical-orange font-bold tracking-wider text-sm uppercase mb-2 block">
              Community First
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Built by Rotaractors, <br />
              <span className="text-tropical-teal">For Rotaractors.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This isn't a generic tour package. We've curated this experience based on years of organizing youth exchanges and club trips. We know what makes a trip memorable: authentic connections, zero stress, and just enough adventure.
            </p>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
               {/* Placeholder Avatar */}
               <div className="w-14 h-14 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                 <img src="https://picsum.photos/100/100?grayscale" alt="Organizer" className="w-full h-full object-cover" />
               </div>
               <div>
                 <p className="text-gray-900 font-bold text-lg">{COMPANY_INFO.organizerName}</p>
                 <p className="text-tropical-teal font-medium text-sm mb-2">{COMPANY_INFO.committeeName}</p>
                 <p className="text-gray-500 text-sm italic">
                   "We designed ETP to be the trip I wish I had when I first joined Rotaract. Come experience the real Sri Lanka with us."
                 </p>
               </div>
            </div>
          </div>

          {/* Right Content - Photo Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="space-y-4 mt-8">
               <img
                 src="https://images.unsplash.com/photo-1590623274296-6e5414d643d9?q=80&w=800&auto=format&fit=crop"
                 alt="Group at Temple"
                 className="rounded-2xl shadow-lg w-full h-48 object-cover"
               />
               <img
                 src="https://images.unsplash.com/photo-1546708773-e57c8d9e2626?q=80&w=800&auto=format&fit=crop"
                 alt="Tea Plantation"
                 className="rounded-2xl shadow-lg w-full h-64 object-cover"
               />
             </div>
             <div className="space-y-4">
                <img
                 src="https://images.unsplash.com/photo-1588668214407-6ea9e6d8c278?q=80&w=800&auto=format&fit=crop"
                 alt="Sri Lanka Beach"
                 className="rounded-2xl shadow-lg w-full h-64 object-cover"
               />
               <img
                 src="https://images.unsplash.com/photo-1526772662000-3f88f107f5d8?q=80&w=800&auto=format&fit=crop"
                 alt="Friends laughing"
                 className="rounded-2xl shadow-lg w-full h-48 object-cover"
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;