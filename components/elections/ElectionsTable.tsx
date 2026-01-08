'use client';

import { ELECTION_DATA } from '@/lib/data/elections';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const ElectionsTable = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-gray-100 shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="bg-navy text-white uppercase text-xs">
          <tr>
            <th className="px-6 py-4 rounded-tl-xl">Year</th>
            <th className="px-6 py-4">Winner</th>
            <th className="px-6 py-4">Party</th>
            <th className="px-6 py-4">Votes</th>
            <th className="px-6 py-4">Runner-up</th>
            <th className="px-6 py-4">Turnout</th>
            <th className="px-6 py-4">Total Votes</th>
            <th className="px-6 py-4 rounded-tr-xl">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {ELECTION_DATA.slice().reverse().map((election) => (
            <tr key={election.year} className="hover:bg-gray-50 transition-colors group">
              <td className="px-6 py-4 font-bold text-navy">{election.year}</td>
              <td className="px-6 py-4 font-medium">{election.winner.name}</td>
              <td className="px-6 py-4">
                <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${
                  election.winner.party === 'APC' ? 'bg-blue-100 text-blue-800' : 
                  election.winner.party === 'PDP' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {election.winner.party}
                </span>
              </td>
              <td className="px-6 py-4">{election.winner.votes.toLocaleString()}</td>
              <td className="px-6 py-4 text-gray-600">
                {election.runnerUp.name} <span className="text-xs text-gray-400">({election.runnerUp.party})</span>
              </td>
              <td className="px-6 py-4">
                <span className={`font-bold ${
                  election.turnoutPercent > 50 ? 'text-green-600' : 'text-orange-500'
                }`}>
                  {election.turnoutPercent}%
                </span>
              </td>
              <td className="px-6 py-4 text-gray-500">{election.votesCast?.toLocaleString() || '-'}</td>
              <td className="px-6 py-4">
                <Link 
                  href={`/initiatives/politics-and-governance/elections/results-tracker/${election.year}`}
                  className="inline-flex items-center gap-1 text-teal font-medium text-xs hover:text-navy transition-colors"
                >
                  View Details
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
