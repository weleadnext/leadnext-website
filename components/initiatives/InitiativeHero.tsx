'use client';

import Image from 'next/image';
import { FadeIn } from '../animations/FadeIn';
import { urlFor } from '@/sanity/lib/image';

interface InitiativeHeroProps {
  title: string;
  description: string;
  image: any;
}

export const InitiativeHero = ({ title, description, image }: InitiativeHeroProps) => {
  return (
    <section className="bg-navy min-h-[500px] flex items-stretch overflow-hidden">
      <div className="flex-1 flex items-center justify-end p-12 lg:p-20">
        <div className="max-w-xl w-full">
          <FadeIn>
            <h1 className="font-serif text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              {description}
            </p>
            <button className="bg-gold text-navy font-bold py-4 px-8 rounded hover:bg-white transition-colors">
              Apply Now
            </button>
          </FadeIn>
        </div>
      </div>
      <div className="hidden lg:block w-1/2 relative min-h-full">
         {image && (
             <Image 
                src={urlFor(image).width(1200).height(800).url()} 
                alt={title} 
                fill
                className="object-cover"
             />
         )}
      </div>
    </section>
  );
};
