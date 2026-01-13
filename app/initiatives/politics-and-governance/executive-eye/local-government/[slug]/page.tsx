import { FadeIn } from '@/components/animations/FadeIn';
import { client } from '@/sanity/lib/client';
import { LGA_DETAIL_QUERY } from '@/lib/sanity/queries';
import { urlFor } from '@/sanity/lib/image';
import { ArrowLeft, ExternalLink, MapPin, User, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = 60;

interface State {
  name: string;
  slug: { current: string };
  logo?: any;
}

interface LGA {
  _id: string;
  name: string;
  slug: { current: string };
  zone?: string;
  chairman?: {
    name: string;
    photo?: any;
    role?: string;
    bio?: any; // Assuming block content or similar, simplified for now
  };
  logo?: any;
  description?: string;
  state?: State;
}

export default async function LGADetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lga = await client.fetch<LGA>(LGA_DETAIL_QUERY, { slug });

  if (!lga) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-navy py-12 px-6 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <Link
              href="/initiatives/politics-and-governance/executive-eye/local-government"
              className="inline-flex items-center gap-2 text-teal hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to LGAs</span>
            </Link>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
              <div className="h-32 w-32 bg-white rounded-2xl p-4 flex items-center justify-center shrink-0 shadow-lg border-4 border-white/10">
                {lga.logo ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={urlFor(lga.logo).url()}
                      alt={`${lga.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <Building2 className="h-12 w-12 text-gray-300" />
                )}
              </div>
              
              <div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold">
                    {lga.name} LGA
                    </h1>
                    {lga.state && (
                        <span className="bg-teal/20 text-teal border border-teal/30 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                            {lga.state.name} State
                        </span>
                    )}
                </div>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-gray-300 mt-4 text-lg">
                    {lga.zone && (
                         <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-gold" />
                            <span>{lga.zone} Zone</span>
                         </div>
                    )}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16">
        <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                    {/* About Section */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="font-serif text-2xl font-bold text-navy mb-4">About {lga.name}</h2>
                        {lga.description ? (
                            <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
                                {lga.description}
                            </div>
                        ) : (
                            <p className="text-gray-500 italic">No description available for this Local Government Area.</p>
                        )}
                    </div>

                     {/* Placeholder for future sections like Councilors or Projects */}
                     <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
                        <h3 className="text-blue-900 font-bold mb-2">More Information Coming Soon</h3>
                        <p className="text-blue-700/80 text-sm">We are working on adding data about councilors, projects, and budget performance for {lga.name}.</p>
                     </div>
                </div>

                {/* Sidebar / Chairman Profile */}
                <div className="md:col-span-1">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg sticky top-24">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                             <User className="h-5 w-5 text-teal" />
                             <h3 className="font-bold text-navy uppercase tracking-wider text-sm">Executive Chairman</h3>
                        </div>

                        {lga.chairman ? (
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden border-2 border-white shadow-md relative">
                                    {lga.chairman.photo ? (
                                        <Image
                                            src={urlFor(lga.chairman.photo).url()}
                                            alt={lga.chairman.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <User className="h-10 w-10 text-gray-300" />
                                    )}
                                </div>
                                <h4 className="font-serif text-xl font-bold text-navy mb-1">{lga.chairman.name}</h4>
                                <p className="text-sm text-gray-500 mb-6">{lga.chairman.role || `Chairman, ${lga.name} LGA`}</p>
                                
                                <button className="w-full py-3 bg-gray-50 text-navy rounded-lg hover:bg-teal hover:text-white transition-colors font-medium text-sm border border-gray-200">
                                    View Full Profile
                                </button>
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-gray-400 italic">Chairman information not available</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </FadeIn>
      </div>
    </main>
  );
}
