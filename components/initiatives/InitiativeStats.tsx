'use client';

import { FadeIn } from '../animations/FadeIn';

interface Stat {
  value: string;
  label: string;
}

interface InitiativeStatsProps {
  stats: Stat[];
}

export const InitiativeStats = ({ stats }: InitiativeStatsProps) => {
  if (!stats || stats.length === 0) return null;

  return (
    <FadeIn className="py-12 border-t border-gray-100 mt-16">
      <h2 className="font-serif text-3xl font-bold text-navy mb-10">Cohort Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <div className="text-5xl font-bold text-navy mb-2">{stat.value}</div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
};
