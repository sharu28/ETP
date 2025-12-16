import React from 'react';
import { PRICING_TIERS } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('info-pack-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Final pricing depends on group size and confirmed booking dates.
            <br className="hidden md:block"/> Secure your spot early for the best rate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 flex flex-col ${
                tier.isHighlight
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl scale-105 z-10'
                  : 'bg-white border border-gray-200 text-gray-900 shadow-sm hover:shadow-lg'
              }`}
            >
              {tier.isHighlight && (
                <div className="absolute top-0 right-0 bg-tropical-orange text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">
                  Best Value
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${tier.isHighlight ? 'text-tropical-teal' : 'text-gray-900'}`}>
                {tier.title}
              </h3>
              <div className="text-4xl font-extrabold mb-6">
                {tier.price}
                <span className={`text-sm font-normal ml-1 ${tier.isHighlight ? 'text-gray-400' : 'text-gray-500'}`}>/person</span>
              </div>

              <ul className="mb-8 space-y-4 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${tier.isHighlight ? 'text-tropical-teal' : 'text-green-500'}`} />
                    <span className={tier.isHighlight ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToForm}
                className={`w-full py-4 rounded-xl font-bold transition ${
                  tier.isHighlight
                    ? 'bg-tropical-teal text-gray-900 hover:bg-teal-300'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                I'm Interested
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;