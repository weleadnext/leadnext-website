import { FadeIn } from '@/components/animations/FadeIn';
import { client } from '@/sanity/lib/client';
import { POLITICAL_PARTIES_QUERY } from '@/lib/sanity/queries';
import { urlFor } from '@/sanity/lib/image';
import { Flag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 60;

interface PoliticalParty {
  _id: string;
  name: string;
  acronym: string;
  image: any;
}

export default async function PoliticalPartiesPage() {
  const parties = await client.fetch<PoliticalParty[]>(POLITICAL_PARTIES_QUERY);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-navy py-16 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-paper opacity-10"></div>
        <div className="mx-auto max-w-4xl relative z-10 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-4 text-gold">
              <Flag className="h-8 w-8" />
              <span className="text-sm font-bold uppercase tracking-widest">Political Heart</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Political Parties
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              A comprehensive directory of registered political parties in Nigeria.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn>
          {parties.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <Flag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No parties found</h3>
              <p className="text-gray-500">The political parties directory is currently being updated.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {parties.map((party) => (
                <div
                  key={party._id}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6">
                    {party.image ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={urlFor(party.image).url()}
                          alt={`${party.name} Logo`}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <Flag className="h-16 w-16 text-gray-300" />
                    )}
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col items-center text-center">
                    <span className="inline-block px-3 py-1 bg-navy/5 text-navy text-xs font-bold rounded-full mb-3">
                      {party.acronym}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-navy line-clamp-2">
                      {party.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </FadeIn>
      </div>
    </main>
  );
}
