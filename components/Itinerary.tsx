import React from 'react';
import { ITINERARY_DAYS } from '../constants.tsx';
import { MapPin, Navigation, Mountain, Tent, Train, Coffee, Sun, Waves, Anchor, Send, Utensils } from 'lucide-react';

const iconMap: any = {
  Navigation, Mountain, Tent, Train, Coffee, Sun, Waves, Anchor, Send
};

const Itinerary: React.FC = () => {
  return (
    <section id="itinerary" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-20 -left-20 w-96 h-96 bg-tropical-teal/5 rounded-full blur-3xl"></div>
         <div className="absolute bottom-20 -right-20 w-96 h-96 bg-tropical-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-tropical-orange font-bold tracking-wider text-sm uppercase mb-2 block">
            9 Days of Adventure
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-tropical-teal">Itinerary</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
             A carefully curated journey through culture, wildlife, mountains, and beaches.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-tropical-teal via-tropical-blue to-tropical-orange rounded-full"></div>

          <div className="space-y-12">
            {ITINERARY_DAYS.map((item, index) => {
              const Icon = iconMap[item.icon] || MapPin;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center md:justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-tropical-teal shadow-lg z-20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-tropical-teal rounded-full"></div>
                  </div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${!isEven && 'md:text-right'}`}>
                    <div className={`p-6 rounded-2xl shadow-sm border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden ${item.highlight ? 'ring-2 ring-tropical-orange' : ''}`}>
                      
                      {/* Highlight Badge */}
                      {item.highlight && (
                        <div className="absolute top-0 right-0 bg-tropical-orange text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">
                          Must Do
                        </div>
                      )}

                      <div className={`flex items-center gap-3 mb-3 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`p-2 rounded-lg ${item.highlight ? 'bg-tropical-orange/10 text-tropical-orange' : 'bg-tropical-teal/10 text-tropical-teal'}`}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Day {item.day} • {item.date}</span>
                          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        </div>
                      </div>

                      <ul className={`space-y-2 mb-4 ${!isEven ? 'md:items-end' : ''}`}>
                        {item.activities.map((act, i) => (
                           <li key={i} className={`text-gray-600 text-sm flex items-center gap-2 ${!isEven ? 'md:flex-row-reverse md:text-right' : ''}`}>
                             <div className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></div>
                             {act}
                           </li>
                        ))}
                      </ul>

                      {/* Special Grizzly Box */}
                      {item.highlight && (
                        <div className="mt-4 bg-orange-50 p-4 rounded-xl border border-orange-100 text-left">
                          <div className="flex items-start gap-3">
                             <div className="bg-white p-1.5 rounded-full shadow-sm">
                               <Utensils size={14} className="text-tropical-orange" />
                             </div>
                             <div>
                               <p className="text-sm font-bold text-gray-900 mb-1">Grizzly Lunch Cookout</p>
                               <p className="text-xs text-gray-600 leading-relaxed">
                                 A unique storytelling culinary experience. We'll hit the local markets to source fresh ingredients, then cook and feast together.
                               </p>
                             </div>
                          </div>
                        </div>
                      )}

                      <div className={`flex items-center gap-2 mt-4 pt-4 border-t border-gray-50 text-xs font-medium text-gray-500 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex items-center gap-1">
                          <MapPin size={12} />
                          <span>Stay: {item.stay}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;