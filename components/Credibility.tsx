import React from 'react';
import { COMPANY_INFO, IMAGES } from '../constants.tsx';
import LocalImage from './LocalImage.tsx';

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
              Sri Lanka's premier <br />
              <span className="text-tropical-teal">Rotaract Round Trip</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Escape to Paradise, is proudly organized by the Rotaract Club of Colombo - the first Rotaract Club in Sri Lanka. Started in 2009, this iconic journey has welcomed Rotaractors and Rotarians from across the world, with the aim of sharing Sri Lanka’s unique culture, natural beauty, and warm hospitality, while fostering lasting friendships and global Rotaract connections.
            </p>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
               {/* Organizer Avatar */}
               <div className="w-14 h-14 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                 <LocalImage 
                   src={IMAGES.organizer} 
                   alt="Organizer" 
                   className="w-full h-full object-cover" 
                 />
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

          {/* Right Content - Real Photo Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="space-y-4 mt-8">
               <LocalImage
                 src={IMAGES.credibility.flags}
                 alt="Rotaract International Flags"
                 className="rounded-2xl shadow-lg w-full h-48 object-cover bg-gray-100"
               />
               <LocalImage
                 src={IMAGES.credibility.groupIndependence}
                 alt="Group at Independence Square"
                 className="rounded-2xl shadow-lg w-full h-64 object-cover bg-gray-100"
               />
             </div>
             <div className="space-y-4">
                <LocalImage
                 src={IMAGES.credibility.groupSigiriya}
                 alt="Group at Sigiriya Base"
                 className="rounded-2xl shadow-lg w-full h-64 object-cover bg-gray-100"
               />
               <LocalImage
                 src={IMAGES.credibility.groupElla}
                 alt="Group at 98 Ella"
                 className="rounded-2xl shadow-lg w-full h-48 object-cover bg-gray-100"
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;