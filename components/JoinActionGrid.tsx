'use client';

import { FadeIn } from './animations/FadeIn';
import { Heart, Users, Handshake, ArrowRight } from 'lucide-react';

const ACTIONS = [
  {
    title: "Volunteer",
    description: "Join our network of volunteers and help organize civic events in your local community.",
    icon: Users,
    color: "bg-teal",
    cta: "Join the Team"
  },
  {
    title: "Donate",
    description: "Support our mission to train 10,000 youth leaders by 2025. Every contribution counts.",
    icon: Heart,
    color: "bg-gold",
    cta: "Make a Donation"
  },
  {
    title: "Partner",
    description: "Collaborate with us to drive policy change and institutional reform.",
    icon: Handshake,
    color: "bg-navy",
    cta: "Work With Us"
  }
];

export const JoinActionGrid = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-serif text-4xl font-bold text-navy mb-4">Get Involved</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              There are many ways to contribute to the movement. Choose how you want to make an impact today.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACTIONS.map((action, idx) => {
            const Icon = action.icon;
            const isGold = action.color === 'bg-gold';
            
            return (
              <FadeIn key={idx} delay={idx * 0.1} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                 <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${action.color === 'bg-gold' ? 'text-navy' : 'text-current'}`}>
                     <Icon className="w-32 h-32 transform translate-x-8 -translate-y-8" />
                 </div>
                 
                 <div className={`h-14 w-14 ${action.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-7 w-7 ${isGold ? 'text-navy' : 'text-white'}`} />
                 </div>

                 <h3 className="text-2xl font-bold text-navy mb-3">{action.title}</h3>
                 <p className="text-gray-600 mb-8 leading-relaxed">
                    {action.description}
                 </p>

                 <a href="#" className="inline-flex items-center gap-2 font-bold text-navy group-hover:gap-3 transition-all">
                    {action.cta} <ArrowRight className="h-4 w-4 text-teal" />
                 </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

