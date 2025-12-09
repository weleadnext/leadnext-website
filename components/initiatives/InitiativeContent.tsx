'use client';

import { FadeIn } from '../animations/FadeIn';
import { CheckCircle2, BookOpen, Users, Mic, Lightbulb, Leaf } from 'lucide-react';
import { PortableText } from '@portabletext/react';

const ICON_MAP: Record<string, any> = {
  Users, CheckCircle2, Mic, BookOpen, Lightbulb, Leaf
};

interface CurriculumModule {
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface InitiativeContentProps {
  overview: any[];
  curriculum?: CurriculumModule[];
  testimonials?: Testimonial[];
}

export const InitiativeContent = ({ overview, curriculum, testimonials }: InitiativeContentProps) => {
  return (
    <div className="space-y-16">
      <FadeIn>
        <h2 className="font-serif text-3xl font-bold text-navy mb-6">About the Program</h2>
        <div className="text-gray-600 leading-relaxed text-lg prose prose-lg max-w-none">
          <PortableText value={overview} />
        </div>
      </FadeIn>

      {curriculum && curriculum.length > 0 && (
        <FadeIn delay={0.2}>
            <h2 className="font-serif text-3xl font-bold text-navy mb-8">Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculum.map((item, idx) => {
                const Icon = ICON_MAP[item.icon] || BookOpen;
                return (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="h-10 w-10 bg-teal/10 rounded-full flex items-center justify-center mb-4 text-teal">
                    <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-navy text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
                );
            })}
            </div>
        </FadeIn>
      )}

      {testimonials && testimonials.length > 0 && (
        <FadeIn delay={0.4}>
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">Testimonials</h2>
            {testimonials.map((item, idx) => (
                <blockquote key={idx} className="border-l-4 border-gold pl-6 py-2 bg-gray-50 rounded-r-lg mb-6 last:mb-0">
                <p className="text-xl text-gray-700 italic mb-4">
                    "{item.quote}"
                </p>
                <cite className="font-bold text-navy not-italic">— {item.author}, {item.role}</cite>
                </blockquote>
            ))}
        </FadeIn>
      )}
    </div>
  );
};
