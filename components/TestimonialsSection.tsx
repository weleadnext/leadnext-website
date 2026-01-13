'use client';

import { FadeIn } from './animations/FadeIn';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Governance is about service to the people, not personal gain.",
    author: "Malam Aminu Kano",
    role: "Statesman & Teacher",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Nigerian_Public_Domain_208.jpg/500px-Nigerian_Public_Domain_208.jpg"
  },
  {
    quote: "Show the light, and the people will find the way.",
    author: "Dr. Nnamdi Azikiwe",
    role: "First President of Nigeria",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Nnamdi_Azikiwe_PC_%28cropped%29.jpg"
  },
  {
    quote: "A people’s education is the foundation of their progress.",
    author: "Chief Obafemi Awolowo",
    role: "Statesman & Nationalist",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Obafemi_Awolowo.jpg/500px-Obafemi_Awolowo.jpg"
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
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Voices of Inspiration</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Echoes of the past shaping the future we are building
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

