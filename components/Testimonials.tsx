import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';
import LocalImage from './LocalImage.tsx';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-tropical-teal/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Traveler Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from Rotaractors who experienced the magic of ETP.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-20 max-w-6xl mx-auto">
          {TESTIMONIALS.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side (Half width) */}
              <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[450px]">
                <LocalImage
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  fallbackClassName="bg-gray-200"
                />
                {/* Overlay gradient for mobile text readability if needed, though text is separate */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden"></div>
              </div>

              {/* Text Side (Half width) */}
              <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
                 {/* Decorative Quote Icon */}
                <div className="text-tropical-teal/10 absolute top-8 right-8">
                  <Quote size={80} className="fill-current transform rotate-12" />
                </div>

                <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} className="text-tropical-orange fill-tropical-orange" />
                        ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic mb-8">
                        "{item.quote}"
                    </blockquote>

                    <div>
                        <h4 className="font-bold text-2xl text-gray-900">{item.name}</h4>
                        <p className="text-tropical-teal font-semibold mt-1">{item.role}</p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;