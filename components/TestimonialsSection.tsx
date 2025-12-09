'use client';

import { FadeIn } from './animations/FadeIn';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "NLI gave me the confidence to run for local office. The training on policy formulation was invaluable.",
    author: "Amina Yusuf",
    role: "Councilor Elect, Kaduna",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
  },
  {
    quote: "Through the Fellowship, I connected with mentors who helped scale my community recycling project across 3 states.",
    author: "Tunde Bakare",
    role: "Social Entrepreneur",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80"
  },
  {
    quote: "The data from the Civic Centre helped our advocacy group push for better healthcare funding in our LGA.",
    author: "Sarah Oladipo",
    role: "Health Advocate",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Voices of Change</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from the young leaders and partners we've worked with to build a better Nigeria.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 relative group hover:bg-white/10 transition-colors">
              <Quote className="h-8 w-8 text-gold mb-6 opacity-50" />
              <p className="text-gray-200 mb-8 italic leading-relaxed">"{item.quote}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-teal">
                  <Image src={item.image} alt={item.author} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.author}</h4>
                  <p className="text-teal text-sm">{item.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

