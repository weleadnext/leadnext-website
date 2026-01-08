import { FadeIn } from '@/components/animations/FadeIn';
import { client } from '@/sanity/lib/client';
import { FEDERAL_MDAS_QUERY } from '@/lib/sanity/queries';
import { urlFor } from '@/sanity/lib/image';
import { ArrowLeft, ExternalLink, MapPin, Building2, Library } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 60; // Revalidate every minute

interface FederalMda {
  _id: string;
  sector: string;
  supervisingMinistry: string;
  agencyName: string;
  acronym?: string;
  headName: string;
  headTitle: string;
  stateOfOrigin?: string;
  sourceUrl?: string;
  logo: any;
}

export default async function FederalMdasPage() {
  const mdas = await client.fetch<FederalMda[]>(FEDERAL_MDAS_QUERY);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-navy py-12 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <Link 
              href="/initiatives/politics-and-governance/executive-eye/federal"
              className="inline-flex items-center gap-2 text-teal hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Federal Government</span>
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Federal MDAs
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Ministries, Departments, and Agencies driving federal policies and operations.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <FadeIn>
          {mdas.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <Library className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No MDAs found</h3>
              <p className="text-gray-500">The list of agencies is currently being compiled.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mdas.map((mda) => (
                <div 
                  key={mda._id}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="relative h-40 bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
                    <div className="relative h-full w-full">
                      <Image
                        src={urlFor(mda.logo).url()}
                        alt={`${mda.agencyName} Logo`}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {mda.acronym && (
                      <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-bold text-navy shadow-sm border border-gray-100">
                        {mda.acronym}
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-2 py-1 rounded bg-teal/10 text-teal text-xs font-semibold mb-2">
                        {mda.sector}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-navy line-clamp-2 min-h-[3.5rem]">
                        {mda.agencyName}
                      </h3>
                      <p className="text-gray-500 text-xs mt-1">
                        Ministry: {mda.supervisingMinistry}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                          {mda.headTitle}
                        </p>
                        <p className="text-sm font-semibold text-gray-800">
                          {mda.headName}
                        </p>
                        {mda.stateOfOrigin && (
                          <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-1">
                            <MapPin className="h-3 w-3" />
                            <span>{mda.stateOfOrigin}</span>
                          </div>
                        )}
                      </div>

                      {mda.sourceUrl ? (
                        <a 
                          href={mda.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 text-navy font-medium text-xs rounded hover:bg-navy hover:text-white transition-colors border border-gray-200 hover:border-navy"
                        >
                          <span>Visit Website</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <button 
                          disabled
                          className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 text-gray-400 font-medium text-xs rounded cursor-not-allowed border border-gray-200"
                        >
                          <span>Website Unavailable</span>
                        </button>
                      )}
                    </div>
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
