'use client';

import { FadeIn } from './animations/FadeIn';
import { XIcon } from './icons/XIcon';

export const Hero = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center overflow-hidden bg-navy">
      {/* Background Image Placeholder - In production, use next/image with a real photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("/HOME PAGE.png?auto=format&fit=crop&q=80")' }} 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/10 z-0"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
        <div className="max-w-2xl">
          <FadeIn>
            <h1 className="font-sans text-5xl font-bold leading-tight text-white lg:text-6xl tracking-tight">
              Building the Next <br />
              Generation of Leaders
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2} className="mt-6 max-w-xl">
            <p className="text-lg leading-relaxed text-gray-200">
              Empowering youth to shape Nigeria's future through Civic education, Innovation, and leadership.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="/initiatives/future-leaders-fellowship" className="inline-flex items-center justify-center bg-teal px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-navy">
            Apply for Future Leaders Fellowship
            </a>
            <a href="https://x.com/leadnextng" target='_blank' className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-3.5 font-semibold text-navy transition-transform hover:scale-105 hover:bg-white">
            Follow Us on 
              <XIcon className="h-5 w-5" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
