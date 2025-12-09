'use client';

import { FadeIn } from './animations/FadeIn';

// Placeholder logos - in prod use real SVG/PNGs
const PARTNERS = [
  "Ford Foundation",
  "MacArthur Foundation", 
  "UNDP Nigeria",
  "BudgIT",
  "Yiaga Africa",
  "Leap Africa"
];

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
            Trusted by Leading Organizations
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {PARTNERS.map((partner, idx) => (
            <FadeIn key={idx} delay={idx * 0.05} className="text-2xl font-serif font-bold text-navy/40">
                {/* Replace with <Image> in real app */}
                {partner}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

