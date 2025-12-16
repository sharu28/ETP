import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const LeadForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // In a real app, you would handle form submission to a backend here.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="info-pack-form" className="py-20 bg-tropical-teal/5">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get the ETP Info Pack</h2>
            <p className="text-gray-600">
              Itinerary snapshot, inclusions, pricing details, and dates. <br/> No commitment required.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropical-teal focus:ring-2 focus:ring-tropical-teal/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropical-teal focus:ring-2 focus:ring-tropical-teal/20 outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City / Country</label>
                  <input
                    type="text"
                    required
                    placeholder="New York, USA"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropical-teal focus:ring-2 focus:ring-tropical-teal/20 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Club Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="Rotaract Club of..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropical-teal focus:ring-2 focus:ring-tropical-teal/20 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp (Optional)</label>
                <input
                  type="tel"
                  placeholder="+1 234 567 8900"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropical-teal focus:ring-2 focus:ring-tropical-teal/20 outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-tropical-orange hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-xl transition shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 mt-4"
              >
                Send me the Info Pack <Send size={20} />
              </button>
            </form>
          ) : (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
              <p className="text-gray-600 mb-8">
                We've sent the details to your email. Want to chat with us directly?
              </p>
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition shadow-lg"
              >
                Join WhatsApp Interest List
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadForm;