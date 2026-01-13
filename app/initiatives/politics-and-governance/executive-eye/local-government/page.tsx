'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { client } from '@/sanity/lib/client';
import { LGAS_QUERY, STATES_QUERY } from '@/lib/sanity/queries';
import { urlFor } from '@/sanity/lib/image';
import { Building2, Filter, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Define interfaces for data
interface State {
  _id: string;
  name: string;
  slug: { current: string };
}

interface LGA {
  _id: string;
  name: string;
  slug: { current: string };
  zone?: string;
  chairman?: {
    name: string;
    photo?: any;
  };
  logo?: any;
  state?: { name: string; slug: { current: string } };
}

export default function LocalGovernmentHub() {
  const [lgas, setLgas] = useState<LGA[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [filteredLgas, setFilteredLgas] = useState<LGA[]>([]);
  const [selectedState, setSelectedState] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data on client side to allow interactivity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [lgasData, statesData] = await Promise.all([
          client.fetch<LGA[]>(LGAS_QUERY),
          client.fetch<State[]>(STATES_QUERY)
        ]);
        setLgas(lgasData);
        setStates(statesData);
        setFilteredLgas(lgasData);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter Logic
  useEffect(() => {
    let result = lgas;

    if (selectedState !== 'all') {
      result = result.filter(lga => lga.state?.name === selectedState);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(lga => 
        lga.name.toLowerCase().includes(query) || 
        lga.chairman?.name.toLowerCase().includes(query)
      );
    }

    setFilteredLgas(result);
  }, [selectedState, searchQuery, lgas]);

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
              Local Government
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Explore the grassroots governance. Find information on Local Government Areas, their leadership, and zones.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <FadeIn>
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-12">
            
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search LGA or Chairman..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition-all"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full md:w-64 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none cursor-pointer"
              >
                <option value="all">All States</option>
                {states.map((state) => (
                  <option key={state._id} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Grid */}
          {isLoading ? (
             <div className="text-center py-20">
               <div className="animate-spin h-10 w-10 border-4 border-teal border-t-transparent rounded-full mx-auto mb-4"></div>
               <p className="text-gray-500">Loading directory...</p>
             </div>
          ) : filteredLgas.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No results found</h3>
              <p className="text-gray-500">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredLgas.map((lga) => (
                <Link
                  key={lga._id}
                  href={`/initiatives/politics-and-governance/executive-eye/local-government/${lga.slug.current}`}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="relative h-40 bg-gray-50 flex items-center justify-center p-6 border-b border-gray-50">
                    {lga.logo ? (
                      <div className="relative h-24 w-24">
                         <Image
                          src={urlFor(lga.logo).url()}
                          alt={`${lga.name} Logo`}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Building2 className="h-10 w-10 text-gray-300" />
                      </div>
                    )}
                    {lga.state && (
                      <div className="absolute top-3 right-3">
                         <span className="inline-block px-2 py-1 bg-white/80 backdrop-blur-sm text-navy text-[10px] font-bold uppercase tracking-wide rounded border border-gray-100">
                           {lga.state.name}
                         </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-serif text-lg font-bold text-navy group-hover:text-teal transition-colors mb-2 line-clamp-1">
                      {lga.name}
                    </h3>
                    
                    <div className="space-y-2 mt-auto">
                        {lga.chairman && (
                             <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                <span className="line-clamp-1 font-medium">{lga.chairman.name}</span>
                             </div>
                        )}
                         {lga.zone && (
                             <div className="flex items-center gap-2 text-xs text-gray-400">
                                <span className="uppercase tracking-wider">Zone:</span>
                                <span>{lga.zone}</span>
                             </div>
                        )}
                    </div>
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
