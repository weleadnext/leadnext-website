'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { 
  Users, 
  FileText, 
  Briefcase, 
  PieChart,
  ArrowRight,
  Landmark,
} from 'lucide-react';
import Link from 'next/link';

export default function SenateHub() {
  const items = [
    {
      title: "The Cabinet",
      description: "Leadership of the Senate, including the Senate President and Principal Officers.",
      icon: Users,
      href: "/initiatives/politics-and-governance/legislative/senate/cabinet",
      color: "bg-teal text-white",
      hoverColor: "hover:border-teal"
    },
    {
      title: "Bills",
      description: "Track bills introduced, debated, and passed by the Senate.",
      icon: FileText,
      href: "/work-in-progress",
      color: "bg-navy text-white",
      hoverColor: "hover:border-navy"
    },
    {
      title: "Key Projects",
      description: "Constituency projects and major legislative interventions.",
      icon: Briefcase,
      href: "/work-in-progress",
      color: "bg-blue-600 text-white",
      hoverColor: "hover:border-blue-600"
    },
    {
      title: "Budget & Finance",
      description: "Oversight of the national budget and financial appropriations.",
      icon: PieChart,
      href: "/work-in-progress",
      color: "bg-green-600 text-white",
      hoverColor: "hover:border-green-600"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-navy py-16 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-paper opacity-10"></div>
        <div className="mx-auto max-w-4xl relative z-10 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-4 text-gold">
              <Landmark className="h-8 w-8" />
              <span className="text-sm font-bold uppercase tracking-widest">Legislative Arm</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              The Senate
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Explore the upper chamber of Nigeria's National Assembly, its leadership, legislative activities, and oversight functions.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={idx} 
                  href={item.href}
                  className={`group block bg-white border-2 border-transparent rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.hoverColor}`}
                >
                  <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 shadow-sm ${item.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-opacity-80 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-navy group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
