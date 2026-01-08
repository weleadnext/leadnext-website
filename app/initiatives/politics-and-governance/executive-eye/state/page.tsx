import { FadeIn } from '@/components/animations/FadeIn';
import { client } from '@/sanity/lib/client';
import { STATES_QUERY } from '@/lib/sanity/queries';
import { urlFor } from '@/sanity/lib/image';
import { Building2, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 60; // Revalidate every minute

interface State {
  _id: string;
  name: string;
  slug: { current: string };
  logo?: any;
  zone?: { name: string };
}

export default async function StateGovernmentHub() {
  const states = await client.fetch<State[]>(STATES_QUERY);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-navy py-16 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-paper opacity-10"></div>
        <div className="mx-auto max-w-4xl relative z-10 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-4 text-gold">
              <Building2 className="h-8 w-8" />
              <span className="text-sm font-bold uppercase tracking-widest">Executive Eye</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              State Government
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Explore governance at the state level. Select a state to view its cabinet, projects, bills, and budget performance.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn>
          {states.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <MapPin className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No states found</h3>
              <p className="text-gray-500">The states directory is currently being updated.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {states.map((state) => (
                <Link 
                  key={state._id} 
                  href={`/initiatives/politics-and-governance/executive-eye/state/${state.slug.current}`}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6 flex flex-col items-center text-center h-full">
                    <div className="relative h-24 w-24 mb-6">
                      {state.logo ? (
                        <Image
                          src={urlFor(state.logo).url()}
                          alt={`${state.name} Logo`}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <div className="h-full w-full bg-gray-100 rounded-full flex items-center justify-center text-gray-300">
                          <Building2 className="h-10 w-10" />
                        </div>
                      )}
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-navy group-hover:text-teal transition-colors mb-2">
                      {state.name}
                    </h3>
                    
                    {state.zone && (
                      <span className="inline-block px-2 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-full">
                        {state.zone.name}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </FadeIn>
      </div>
    </main>
  );
}
