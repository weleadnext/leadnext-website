import { FadeIn } from '@/components/animations/FadeIn';
import { Calendar, FileText, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ElectionsHubPage() {
  const items = [
    {
      title: "Voter Registration & Data",
      description: "Access comprehensive data on voter demographics and registration statistics.",
      icon: FileText,
      href: "/initiatives/politics-and-governance/elections/voter-registration",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "INEC Calendar",
      description: "Stay updated with the official timeline of electoral activities and deadlines.",
      icon: Calendar,
      href: "/initiatives/politics-and-governance/elections/inec-calendar",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      title: "Results Tracker",
      description: "Explore historical presidential election results and data analysis from 1999 to 2023.",
      icon: BarChart3,
      href: "/initiatives/politics-and-governance/elections/results-tracker",
      color: "bg-teal/10 text-teal"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-navy py-16 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-paper opacity-10"></div>
        <div className="mx-auto max-w-4xl relative z-10 text-center">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Elections Hub
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Centralized data, tools, and resources for understanding Nigeria's electoral landscape.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-20">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={idx} 
                  href={item.href}
                  className="group block bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-navy group-hover:gap-3 transition-all">
                    <span>Explore</span>
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
