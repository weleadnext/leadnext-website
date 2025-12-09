'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { FadeIn } from './animations/FadeIn';

interface Official {
  _id: string;
  name: string;
  role: string;
  photo: any;
  level: string;
  stateName: string;
}

interface OfficialsListProps {
  initialOfficials: Official[];
}

export const OfficialsList = ({ initialOfficials }: OfficialsListProps) => {
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOfficials = initialOfficials.filter((official) => {
    const matchesLevel = filterLevel === 'all' || official.level === filterLevel;
    const matchesSearch = official.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          official.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (official.stateName && official.stateName.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesLevel && matchesSearch;
  });

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-2">
          {['all', 'federal', 'state', 'local'].map((level) => (
            <button
              key={level}
              onClick={() => setFilterLevel(level)}
              className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
                filterLevel === level
                  ? 'bg-navy text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
        
        <input
          type="text"
          placeholder="Search officials, roles, or states..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-80 px-4 py-2 border border-gray-200 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredOfficials.map((official, index) => (
          <FadeIn key={official._id} delay={index * 0.05} className="bg-white border border-gray-100 p-4 hover:border-teal transition-colors group">
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
              {official.photo ? (
                <Image
                  src={urlFor(official.photo).width(400).height(400).url()}
                  alt={official.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-gray-400">
                  No Photo
                </div>
              )}
            </div>
            
            <h3 className="font-serif text-lg font-bold text-slate">{official.name}</h3>
            <p className="text-sm text-teal font-medium uppercase tracking-wide mt-1">{official.role}</p>
            {official.stateName && (
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                {official.stateName}
              </p>
            )}
          </FadeIn>
        ))}
      </div>

      {filteredOfficials.length === 0 && (
        <div className="py-20 text-center text-gray-500">
          No officials found matching your criteria.
        </div>
      )}
    </div>
  );
};

