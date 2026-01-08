import { FadeIn } from '@/components/animations/FadeIn';
import { 
  Users, 
  ShieldAlert, 
  FileText, 
  Briefcase, 
  PieChart,
  ArrowRight,
  Scale,
  Library
} from 'lucide-react';
import Link from 'next/link';

export default function FederalGovernmentHub() {
  const items = [
    {
      title: "The Cabinet",
      description: "Meet the Ministers and executive officials driving the federal agenda.",
      icon: Users,
      href: "/initiatives/politics-and-governance/executive-eye/federal/cabinet",
      color: "bg-teal text-white",
      hoverColor: "hover:border-teal"
    },
    {
      title: "Security Heads",
      description: "Leadership profiles of Nigeria's military, intelligence, and paramilitary agencies.",
      icon: ShieldAlert,
      href: "/initiatives/politics-and-governance/executive-eye/federal/security-heads",
      color: "bg-navy text-white",
      hoverColor: "hover:border-navy"
    },
    {
      title: "Federal MDAs",
      description: "Ministries, Departments, and Agencies driving federal policies and operations.",
      icon: Library,
      href: "/initiatives/politics-and-governance/executive-eye/federal/mdas",
      color: "bg-gray-600 text-white",
      hoverColor: "hover:border-gray-600"
    },
    {
      title: "Executive Bills",
      description: "Track key legislation proposed by the Presidency for National Assembly consideration.",
      icon: FileText,
      href: "/initiatives/politics-and-governance/executive-eye/federal/executive-bills",
      color: "bg-gold text-navy",
      hoverColor: "hover:border-gold"
    },
    {
      title: "Key Projects",
      description: "Monitor the progress of major infrastructure and developmental projects.",
      icon: Briefcase,
      href: "/initiatives/politics-and-governance/executive-eye/federal/key-projects",
      color: "bg-blue-600 text-white",
      hoverColor: "hover:border-blue-600"
    },
    {
      title: "Budget & Finance",
      description: "Analyze the national budget, fiscal policies, and economic performance.",
      icon: PieChart,
      href: "/initiatives/politics-and-governance/executive-eye/federal/budget-and-finance",
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
              <Scale className="h-8 w-8" />
              <span className="text-sm font-bold uppercase tracking-widest">Executive Eye</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Federal Government
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Transparency and accountability in the highest level of governance. Explore the structure, personnel, and performance of the Federal Executive.
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
