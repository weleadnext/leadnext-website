'use client';

import { FadeIn } from './animations/FadeIn';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';

interface Program {
  _id: string;
  title: string;
  description: string;
  mainImage: any;
  slug: { current: string };
}

interface FeaturedProgramsProps {
  programs: Program[];
}

export const FeaturedPrograms = ({ programs }: FeaturedProgramsProps) => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="font-serif text-4xl font-bold text-slate mb-12">Featured Initiatives</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, idx) => {
            // Cycle through themes based on index
            const themes = [
                { bg: "bg-navy", textDark: false },
                { bg: "bg-gold", textDark: true },
                { bg: "bg-slate", textDark: false },
            ];
            const theme = themes[idx % themes.length];

            return (
                <FadeIn key={program._id} delay={idx * 0.2} className="flex flex-col group overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64 w-full overflow-hidden">
                    {program.mainImage ? (
                        <Image
                        src={urlFor(program.mainImage).width(600).height(400).url()}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400">No Image</span>
                        </div>
                    )}
                </div>
                <div className={`flex flex-col p-8 flex-1 ${theme.bg} ${theme.textDark ? 'text-navy' : 'text-white'}`}>
                    <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                    {/* Simple truncation for description block - in real app, might want a portable text serializer */}
                    <div className={`text-sm mb-8 leading-relaxed line-clamp-3 ${theme.textDark ? 'text-navy/80' : 'text-gray-200'}`}>
                         {program.description || "Check out this initiative to learn more about our impact and goals."}
                    </div>
                    <a href={`/initiatives/${program.slug?.current}`} className="mt-auto inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
                </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  );
};

