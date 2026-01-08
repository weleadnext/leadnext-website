import { FadeIn } from '@/components/animations/FadeIn';
import { client } from '@/sanity/lib/client';
import { STATE_CABINET_MEMBERS_QUERY, STATE_DETAIL_QUERY } from '@/lib/sanity/queries';
import { urlFor } from '@/sanity/lib/image';
import { ArrowLeft, ExternalLink, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = 60;

interface StateCabinetMember {
  _id: string;
  name: string;
  portfolio: string;
  wikiUrl?: string;
  image?: any;
}

interface StateDetail {
  _id: string;
  name: string;
  slug: { current: string };
}

export default async function StateCabinetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch state details first to ensure validity and get name
  const state = await client.fetch<StateDetail>(STATE_DETAIL_QUERY, { slug });
  
  if (!state) {
    notFound();
  }

  const members = await client.fetch<StateCabinetMember[]>(STATE_CABINET_MEMBERS_QUERY, { slug });

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-navy py-12 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <Link 
              href={`/initiatives/politics-and-governance/executive-eye/state/${slug}`}
              className="inline-flex items-center gap-2 text-teal hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to State Dashboard</span>
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {state.name} Cabinet
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Meet the Commissioners and Special Advisers driving the state's development.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <FadeIn>
          {members.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <User className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No cabinet members found</h3>
              <p className="text-gray-500">The cabinet list for {state.name} is currently being updated.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {members.map((member) => (
                <div 
                  key={member._id}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="relative h-64 bg-gray-100">
                    {member.image ? (
                      <Image
                        src={urlFor(member.image).url()}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                        <User className="h-20 w-20" />
                      </div>
                    )}
                    
                    {/* Portfolio Badge */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-4 pt-12">
                      <p className="text-teal font-bold text-sm uppercase tracking-wide mb-1 leading-tight">
                        {member.portfolio}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl font-bold text-navy mb-4 line-clamp-2">
                      {member.name}
                    </h3>

                    {member.wikiUrl ? (
                      <a 
                        href={member.wikiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-50 text-navy font-medium text-sm rounded-lg hover:bg-navy hover:text-white transition-colors border border-gray-200 hover:border-navy"
                      >
                        <span>View Profile</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="mt-auto w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-50 text-gray-400 font-medium text-sm rounded-lg cursor-not-allowed border border-gray-200"
                      >
                        <span>Profile Unavailable</span>
                      </button>
                    )}
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
