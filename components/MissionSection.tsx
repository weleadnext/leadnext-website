'use client';

import Image from 'next/image';
import { FadeIn } from './animations/FadeIn';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const MissionSection = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/HOME PAGE (Bridging the Gap..).png"
                alt="Youth collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold rounded-full z-[-1]" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal/20 rounded-full z-[-1]" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-teal font-bold uppercase tracking-wider text-sm mb-3">Our Mission</h2>
            <h3 className="font-serif text-4xl font-bold text-navy mb-6 leading-tight">
              Bridging the Gap Between <br />
              <span className="text-gold">Policy & People.</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that for Nigeria to thrive, its youth must be at the forefront of governance. LeadNext provides the tools, data, and platforms necessary to transform passive observers into active changemakers.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Data-Driven Advocacy",
                "Grassroots Community Mobilization",
                "Policy Research & Analysis",
                "Civic Tech Solutions"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal" />
                  <span className="text-slate font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="/about/our-story" className="inline-flex items-center gap-2 text-navy font-bold hover:gap-3 transition-all group">
              Read Our Full Story <ArrowRight className="h-4 w-4 text-gold group-hover:text-navy" />
            </a>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

