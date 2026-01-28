'use client';

import { useState, useMemo } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { urlFor } from '@/sanity/lib/image';
import { ArrowLeft, ExternalLink, MapPin, User, Building2, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface SenateMember {
  _id: string;
  name: string;
  portfolio: string;
  wikiUrl?: string;
  senatorialZone?: string;
  stateName?: string;
  image?: any;
}

interface SenateCabinetListProps {
  members: SenateMember[];
}

export const SenateCabinetList = ({ members }: SenateCabinetListProps) => {
  const [selectedState, setSelectedState] = useState<string>('All States');

  // Extract unique states for filter
  const states = useMemo(() => {
    const uniqueStates = new Set(members.map(m => m.stateName).filter(Boolean) as string[]);
    return ['All States', ...Array.from(uniqueStates).sort()];
  }, [members]);

  // Filter members
  const filteredMembers = useMemo(() => {
    if (selectedState === 'All States') return members;
    return members.filter(m => m.stateName === selectedState);
  }, [members, selectedState]);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-navy py-12 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <Link 
              href="/initiatives/politics-and-governance/legislative/senate"
              className="inline-flex items-center gap-2 text-teal hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Senate Overview</span>
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                  Senate Leadership
                </h1>
                <p className="text-xl text-gray-200 max-w-2xl">
                  Meet the Senate President, Principal Officers, and distinguished Senators of the Federal Republic.
                </p>
              </div>
              
              {/* Filter Dropdown */}
              <div className="flex items-center gap-3 bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-sm">
                <Filter className="h-5 w-5 text-teal ml-2" />
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="bg-transparent text-white font-medium focus:outline-none border-none cursor-pointer py-1 pr-8"
                  style={{ backgroundImage: 'none' }} // Remove default arrow if needed, or style it
                >
                  {states.map(state => (
                    <option key={state} value={state} className="text-navy">
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <FadeIn>
          {filteredMembers.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <User className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No members found</h3>
              <p className="text-gray-500">
                {selectedState === 'All States' 
                  ? 'The leadership list is currently being updated.' 
                  : `No Senators found for ${selectedState}.`}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.map((member) => (
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
                    
                    {/* Role Badge */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-4 pt-12">
                      <p className="text-teal font-bold text-sm uppercase tracking-wide mb-1">
                        {member.portfolio}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl font-bold text-navy mb-2 line-clamp-2">
                      {member.name}
                    </h3>
                    
                    <div className="mt-auto space-y-2 mb-6">
                      {member.senatorialZone && (
                        <div className="flex items-center gap-2 text-slate font-medium text-sm">
                          <Building2 className="h-4 w-4 shrink-0 text-gold" />
                          <span>{member.senatorialZone}</span>
                        </div>
                      )}
                      
                      {member.stateName && (
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <MapPin className="h-4 w-4 shrink-0" />
                          <span>{member.stateName} State</span>
                        </div>
                      )}
                    </div>

                    {member.wikiUrl ? (
                      <a 
                        href={member.wikiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-50 text-navy font-medium text-sm rounded-lg hover:bg-navy hover:text-white transition-colors border border-gray-200 hover:border-navy"
                      >
                        <span>View Profile</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-50 text-gray-400 font-medium text-sm rounded-lg cursor-not-allowed border border-gray-200"
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
};
