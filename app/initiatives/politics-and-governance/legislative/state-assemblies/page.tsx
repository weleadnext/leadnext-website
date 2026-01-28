import { FadeIn } from '@/components/animations/FadeIn';
import { client } from '@/sanity/lib/client';
import { STATES_QUERY } from '@/lib/sanity/queries';
import { urlFor } from '@/sanity/lib/image';
import { Building2, ChevronRight, Landmark } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 60;

interface State {
  _id: string;
  name: string;
  slug: { current: string };
  logo?: any;
  zone?: { name: string };
}

export default async function StateAssembliesPage() {
  const states = await client.fetch<State[]>(STATES_QUERY);

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
              State Assemblies
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Select a state to explore its House of Assembly leadership, bills, and legislative activities.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {states.map((state) => (
              <Link 
                key={state._id}
                href={`/initiatives/politics-and-governance/legislative/state-assemblies/${state.slug.current}`}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 group flex items-center gap-4"
              >
                <div className="h-12 w-12 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                  {state.logo ? (
                    <Image
                      src={urlFor(state.logo).width(100).url()}
                      alt={state.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  ) : (
                    <Building2 className="h-6 w-6 text-gray-400" />
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-navy group-hover:text-teal transition-colors">
                    {state.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {state.zone?.name || 'Nigeria'}
                  </p>
                </div>

                <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-teal transition-colors" />
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
