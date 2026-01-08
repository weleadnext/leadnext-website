'use client';

import { StateResult } from '@/lib/data/state-results';

interface StateResultsTableProps {
  data: StateResult[];
  year: number;
}

export const StateResultsTable = ({ data, year }: StateResultsTableProps) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-gray-100 shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="bg-navy text-white uppercase text-xs">
          <tr>
            <th className="px-6 py-4 rounded-tl-xl">State</th>
            <th className="px-6 py-4">Winning Party</th>
            <th className="px-6 py-4">Winner %</th>
            <th className="px-6 py-4">Runner-Up Party</th>
            <th className="px-6 py-4">Runner-Up %</th>
            <th className="px-6 py-4">Total Votes</th>
            <th className="px-6 py-4 rounded-tr-xl">Margin %</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((result, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-navy">{result.state}</td>
              <td className="px-6 py-4">
                <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${
                  result.winningParty === 'PDP' ? 'bg-green-100 text-green-800' : 
                  result.winningParty === 'APC' ? 'bg-blue-100 text-blue-800' :
                  result.winningParty === 'AD-APP' ? 'bg-purple-100 text-purple-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {result.winningParty}
                </span>
              </td>
              <td className="px-6 py-4 font-medium">{result.winnerPercent}%</td>
              <td className="px-6 py-4 text-gray-600">
                {result.runnerUpParty}
              </td>
              <td className="px-6 py-4 text-gray-600">{result.runnerUpPercent}%</td>
              <td className="px-6 py-4">{result.totalValidVotes.toLocaleString()}</td>
              <td className="px-6 py-4 font-medium text-teal">{result.winningMarginPercent}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
