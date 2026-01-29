'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { Handshake } from 'lucide-react';
import Image from 'next/image';

const PARTNERS = [
  {
    name: "Ethica",
    logo: "/Ethica.jpeg",
    description: "Partner in ethical leadership development."
  },
  {
    name: "Flectere",
    logo: "/Flectere.JPEG",
    description: "Collaborating on civic innovation."
  }
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-navy py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-paper opacity-10"></div>
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-4 text-gold">
              <Handshake className="h-8 w-8" />
              <span className="text-sm font-bold uppercase tracking-widest">LeadNext Network</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We collaborate with visionary organizations to drive policy change, institutional reform, and youth empowerment across Nigeria.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn>
          {/* Partners Grid: 3 cols on desktop, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PARTNERS.map((partner, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-[3/2] mb-6 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <h3 className="font-serif text-xl font-bold text-navy mb-2">
                  {partner.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
