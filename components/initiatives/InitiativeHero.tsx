'use client';

import Image from 'next/image';
import { FadeIn } from '../animations/FadeIn';
import { urlFor } from '@/sanity/lib/image';

interface InitiativeHeroProps {
  title: string;
  description: string;
  image: any;
  onApplyClick?: () => void;
  canApply?: boolean;
  applicationMessage?: string;
  isLoading?: boolean;
}

export const InitiativeHero = ({ 
  title, 
  description, 
  image, 
  onApplyClick, 
  canApply = true, 
  applicationMessage,
  isLoading = false 
}: InitiativeHeroProps) => {
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
            <div className="space-y-3">
              <button 
                onClick={onApplyClick}
                disabled={!canApply || isLoading}
                className={`font-bold py-4 px-8 rounded transition-colors ${
                  canApply && !isLoading
                    ? 'bg-gold text-navy hover:bg-white cursor-pointer'
                    : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                }`}
              >
                {isLoading ? 'Loading...' : canApply ? 'Apply Now' : 'Applications Closed'}
              </button>
              {applicationMessage && !isLoading && (
                <p className={`text-sm ${canApply ? 'text-gray-300' : 'text-yellow-300'}`}>
                  {applicationMessage}
                </p>
              )}
            </div>
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
