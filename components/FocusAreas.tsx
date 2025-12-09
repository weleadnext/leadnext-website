'use client';

import { FadeIn } from './animations/FadeIn';
import { Lightbulb, Building2, Leaf, Users, HandHeart } from 'lucide-react';

const FOCUS_AREAS = [
  {
    icon: HandHeart,
    label: "Youth Leadership",
    color: "bg-navy",
  },
  {
    icon: Lightbulb,
    label: "Innovation",
    color: "bg-gold",
  },
  {
    icon: Building2,
    label: "Governance",
    color: "bg-teal",
  },
  {
    icon: Leaf,
    label: "Climate Action",
    color: "bg-gold",
  },
  {
    icon: Users,
    label: "Peacebuilding",
    color: "bg-navy",
  },
];

export const FocusAreas = () => {
  return (
    <section className="bg-white py-16 px-6 border-b border-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center gap-12 md:justify-between">
          {FOCUS_AREAS.map((area, idx) => {
            const Icon = area.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.1} className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className={`flex h-20 w-20 items-center justify-center rounded-full ${area.color} text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-2`}>
                  <Icon className="h-10 w-10" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-slate text-lg">{area.label}</span>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

