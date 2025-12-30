import React from 'react';
import { PRICING_TIERS, COMPANY_INFO } from '../constants';
import { Check, Info, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Participation Fee</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your package is determined by the date you submit the application form. 
            Selection is finalized via an interview process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 flex flex-col transition-all ${
                tier.isHighlight
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl md:scale-105 z-10'
                  : 'bg-white border border-gray-200 text-gray-900 shadow-sm hover:shadow-lg'
              }`}
            >
              {tier.isHighlight && (
                <div className="absolute top-0 right-0 bg-tropical-orange text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">
                  Until 31st Jan 2026
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${tier.isHighlight ? 'text-tropical-teal' : 'text-gray-900'}`}>
                {tier.title}
              </h3>
              <div className="text-5xl font-extrabold mb-6">
                {tier.price}
                <span className={`text-sm font-normal ml-1 ${tier.isHighlight ? 'text-gray-400' : 'text-gray-500'}`}>/person</span>
              </div>

              <ul className="mb-8 space-y-4 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${tier.isHighlight ? 'text-tropical-teal' : 'text-green-500'}`} />
                    <span className={tier.isHighlight ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={COMPANY_INFO.googleFormLink}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
                  tier.isHighlight
                    ? 'bg-tropical-teal text-gray-900 hover:bg-teal-300'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Apply Now <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Selection Process Banner */}
        <div className="mt-16 max-w-4xl mx-auto bg-tropical-teal/5 rounded-[2rem] p-8 md:p-12 border border-tropical-teal/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-white p-4 rounded-2xl shadow-sm shrink-0">
               <Info className="w-10 h-10 text-tropical-teal" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Selection & Confirmation</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600">
                <div className="space-y-3">
                  <p className="flex gap-2">
                    <span className="font-bold text-gray-900 shrink-0">1. Interview:</span>
                    Applicants are screened by our committee.
                  </p>
                  <p className="flex gap-2">
                    <span className="font-bold text-gray-900 shrink-0">2. Deposit:</span>
                    Pay USD 100 non-refundable fee within 7 days of selection.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex gap-2">
                    <span className="font-bold text-gray-900 shrink-0">3. Proof:</span>
                    Submit airfare tickets within 7 days of deposit.
                  </p>
                  <p className="flex gap-2">
                    <span className="font-bold text-gray-900 shrink-0">4. Final:</span>
                    Remaining balance due by 22nd February 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;