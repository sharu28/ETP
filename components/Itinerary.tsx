import React from 'react';
import { ITINERARY_DAYS } from '../constants.tsx';
import { MapPin, Navigation, Mountain, Tent, Train, Coffee, Sun, Waves, Anchor, Send, Utensils, Calendar } from 'lucide-react';

const iconMap: any = {
  Navigation, Mountain, Tent, Train, Coffee, Sun, Waves, Anchor, Send, Utensils
};

const Itinerary: React.FC = () => {
  // Split days into rows for the snake layout
  const row1 = ITINERARY_DAYS.slice(0, 3);
  // Row 2 is reversed in visual order: Day 6 (Left), Day 5 (Center), Day 4 (Right)
  // This aligns Day 4 under Day 3, and Day 6 above Day 7.
  const row2 = [ITINERARY_DAYS[5], ITINERARY_DAYS[4], ITINERARY_DAYS[3]]; 
  const row3 = ITINERARY_DAYS.slice(6, 9);

  const renderRow = (items: any[], rowIndex: number, reverseOnMobile: boolean = false) => (
    <div className={`relative gap-8 ${reverseOnMobile ? 'flex flex-col-reverse md:grid md:grid-cols-3' : 'grid grid-cols-1 md:grid-cols-3'}`}>
      {/* Horizontal Connecting Line (Desktop Only) */}
      <div className="hidden md:block absolute top-1/2 left-[16.66%] right-[16.66%] h-0.5 border-t-[3px] border-dashed border-tropical-teal/40 -translate-y-1/2 z-0"></div>

      {items.map((item, idx) => {
        const Icon = iconMap[item.icon] || MapPin;
        return (
          <div key={idx} className="relative z-10 h-full">
            <div 
              className={`h-full bg-white rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col group
                ${item.highlight 
                  ? 'border-tropical-orange shadow-lg ring-1 ring-tropical-orange/20' 
                  : 'border-gray-100 shadow-sm'
                }`}
            >
              {/* Highlight Badge */}
              {item.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-tropical-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-20">
                    Must Do
                  </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 ${item.highlight ? 'bg-orange-50 text-tropical-orange group-hover:bg-tropical-orange group-hover:text-white' : 'bg-tropical-teal/10 text-tropical-teal group-hover:bg-tropical-teal group-hover:text-white'}`}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <div className="text-right">
                    <span className={`block text-4xl md:text-5xl font-extrabold tracking-tight leading-none transition-colors duration-300 select-none ${item.highlight ? 'text-tropical-orange/20 group-hover:text-tropical-orange' : 'text-gray-200 group-hover:text-tropical-teal'}`}>
                      0{item.day}
                    </span>
                </div>
              </div>

              {/* Title & Date */}
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
                  <Calendar size={12} />
                  <span>{item.date} March</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{item.title}</h3>
              </div>

              {/* Activities */}
              <ul className="space-y-2 mb-4 flex-grow">
                {item.activities.map((act: string, i: number) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2.5 leading-snug">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-colors duration-300 ${item.highlight ? 'bg-tropical-orange' : 'bg-tropical-teal group-hover:bg-tropical-teal/70'}`}></div>
                    {act}
                  </li>
                ))}
              </ul>

              {/* Footer: Stay */}
              <div className="pt-4 border-t border-gray-50 flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <MapPin size={14} className="text-gray-400" />
                Stay: <span className="text-gray-700">{item.stay}</span>
              </div>

              {/* Day 7 Special Content */}
              {item.highlight && (
                <div className="mt-4 bg-orange-50/80 p-3 rounded-xl border border-orange-100 text-sm text-gray-800 leading-relaxed group-hover:bg-orange-100 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Utensils size={14} className="text-tropical-orange" /> 
                    <span className="font-bold text-tropical-orange uppercase text-xs tracking-wide">Grizzly Cookout</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Local market sourcing, communal cooking, and storytelling. An authentic culinary connection.
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="itinerary" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
           <span className="text-tropical-orange font-bold tracking-wider text-xs md:text-sm uppercase mb-3 block">
            9 Days of Adventure
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-tropical-teal">Itinerary</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
             A seamless journey designed for maximum experience and minimal hassle.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20 relative">
          {/* Row 1: Days 1-3 */}
          <div className="relative">
            {renderRow(row1, 1)}
            {/* Vertical Connector: Row 1 -> Row 2 (Right Side) */}
            <div className="hidden md:block absolute right-[16.66%] top-full h-20 border-r-[3px] border-dashed border-tropical-teal/40 z-0"></div>
          </div>

          {/* Row 2: Days 6-4 (Reversed) */}
          <div className="relative">
            {renderRow(row2, 2, true)}
            {/* Vertical Connector: Row 2 -> Row 3 (Left Side) */}
            <div className="hidden md:block absolute left-[16.66%] top-full h-20 border-l-[3px] border-dashed border-tropical-teal/40 z-0"></div>
          </div>

          {/* Row 3: Days 7-9 */}
          <div className="relative">
             {renderRow(row3, 3)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;