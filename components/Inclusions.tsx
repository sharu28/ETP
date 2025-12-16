import React from 'react';
import { Check, X } from 'lucide-react';

const Inclusions: React.FC = () => {
  const included = [
    "8 Nights Accommodation (Hotels/Villas)",
    "Private AC Transport (Bus/Van)",
    "Breakfasts Daily + Welcome Dinner",
    "Scenic Train Tickets",
    "Safari Jeep Hire + Entrance Fees",
    "Cultural Site Entrance Fees",
    "Local Rotaractor Hosts 24/7"
  ];

  const notIncluded = [
    "International Flights",
    "Visa Fees (approx $50)",
    "Lunch & Dinner (Explore local food!)",
    "Travel Insurance (Mandatory)",
    "Personal Shopping / Souvenirs",
    "Optional Surfing Lessons"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Covered?</h2>
          <p className="text-gray-600">Total transparency. No hidden costs.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {/* Included Card */}
          <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm border-t-4 border-tropical-teal">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
              <span className="bg-green-100 text-green-600 p-2 rounded-full"><Check size={20} /></span>
              Included
            </h3>
            <ul className="space-y-4">
              {included.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-tropical-teal shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included Card */}
          <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm border-t-4 border-gray-300">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
              <span className="bg-red-100 text-red-500 p-2 rounded-full"><X size={20} /></span>
              Not Included
            </h3>
            <ul className="space-y-4">
              {notIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-500">
                  <X className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inclusions;