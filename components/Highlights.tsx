import React from 'react';
import { Map, Train, TreePalm, Users } from 'lucide-react';
import { HIGHLIGHTS } from '../constants.tsx';

const iconMap = {
  Map: Map,
  Train: Train,
  TreePalm: TreePalm,
  Users: Users,
};

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trip Highlights</h2>
          <div className="h-1 w-20 bg-tropical-teal mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = iconMap[item.iconName];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-tropical-teal/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-tropical-teal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;