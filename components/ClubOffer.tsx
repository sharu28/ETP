import React from 'react';
import { Users, Star } from 'lucide-react';

const ClubOffer: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-tropical-blue to-tropical-teal rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
          {/* Decorative Circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Users className="text-white w-6 h-6" />
                <span className="text-white font-bold uppercase tracking-wider text-sm">Club Partner Program</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bring your Club — Unlock Perks
              </h2>
              <p className="text-white/90 text-lg max-w-xl">
                Traveling is better together. Get exclusive group discounts for groups of 3, 5, or 8+ travelers. Plus, earn fundraising contributions for your club.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 min-w-[300px]">
              <div className="flex items-center gap-3 mb-3">
                <Star className="text-yellow-300 w-5 h-5 fill-yellow-300" />
                <span className="text-white font-bold">Group Benefits</span>
              </div>
              <ul className="text-white/90 space-y-2 text-sm text-left">
                <li>• Discounts starting at $50/person</li>
                <li>• Priority room allocation</li>
                <li>• Dedicated pre-trip planning call</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubOffer;