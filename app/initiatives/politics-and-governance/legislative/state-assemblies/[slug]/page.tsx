import { FadeIn } from '@/components/animations/FadeIn';
import { client } from '@/sanity/lib/client';
import { STATE_DETAIL_QUERY } from '@/lib/sanity/queries';
import { urlFor } from '@/sanity/lib/image';
import { 
  ArrowLeft, 
  Users, 
  FileText, 
  Briefcase, 
  PieChart, 
  ArrowRight,
  Building2,
  Landmark
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = 60;

interface StateDetail {
  _id: string;
  name: string;
  slug: { current: string };
  logo?: any;
  zone?: { name: string };
}

export default async function StateAssemblyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const state = await client.fetch<StateDetail>(STATE_DETAIL_QUERY, { slug });

  if (!state) {
    notFound();
  }

  const items = [
    {
      title: "House Leadership",
      description: "Speaker, Deputy Speaker, and Principal Officers of the House.",
      icon: Users,
      href: `/initiatives/politics-and-governance/legislative/state-assemblies/${slug}/cabinet`,
      color: "bg-teal text-white",
      hoverColor: "hover:border-teal"
    },
    {
      title: "State Bills",
      description: "Legislation passed or under consideration by the House.",
      icon: FileText,
      href: "/work-in-progress", // Placeholder
      color: "bg-navy text-white",
      hoverColor: "hover:border-navy"
    },
    {
      title: "Constituency Projects",
      description: "Development projects nominated by Assembly members.",
      icon: Briefcase,
      href: "/work-in-progress", // Placeholder
      color: "bg-blue-600 text-white",
      hoverColor: "hover:border-blue-600"
    },
    {
      title: "Budget Oversight",
      description: "Review and approval of the State Appropriation Bill.",
      icon: PieChart,
      href: "/work-in-progress", // Placeholder
      color: "bg-green-600 text-white",
      hoverColor: "hover:border-green-600"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-navy py-12 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-paper opacity-10"></div>
        <div className="mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <Link 
              href="/initiatives/politics-and-governance/legislative/state-assemblies"
              className="inline-flex items-center gap-2 text-teal hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to State Selection</span>
            </Link>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
              <div className="h-32 w-32 bg-white rounded-full p-4 flex items-center justify-center shrink-0 shadow-lg">
                {state.logo ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={urlFor(state.logo).url()}
                      alt={`${state.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <Building2 className="h-12 w-12 text-gray-300" />
                )}
              </div>
              
              <div>
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <Landmark className="h-6 w-6 text-gold" />
                  <span className="text-sm font-bold uppercase tracking-widest text-gold">Legislative Arm</span>
                </div>
                <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
                  {state.name} State House of Assembly
                </h1>
                <p className="text-xl text-gray-200 max-w-2xl">
                  Explore the leadership, laws, and activities of the state's legislative body.
                </p>
                {state.zone && (
                  <span className="inline-block mt-4 px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20">
                    {state.zone.name}
                  </span>
                )}
              </div>
            </div>
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
