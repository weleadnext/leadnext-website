'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ELECTION_DATA, CHART_COLORS } from '@/lib/data/elections';

export const VotesComparisonChart = () => {
  // Transform data for the bar chart
  const data = ELECTION_DATA.map(election => ({
    year: election.year,
    winnerVotes: election.winner.votes,
    winnerName: election.winner.name,
    winnerParty: election.winner.party,
    runnerUpVotes: election.runnerUp.votes,
    runnerUpName: election.runnerUp.name,
    runnerUpParty: election.runnerUp.party,
  }));

  const formatVotes = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    return value.toLocaleString();
  };

  return (
    <div className="h-[400px] w-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
      <h3 className="text-xl font-bold text-navy mb-6 font-serif">Winner vs. Runner-up Votes</h3>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="year" 
            tick={{ fill: '#666' }} 
            axisLine={{ stroke: '#e5e7eb' }}
          />
          <YAxis 
            tickFormatter={formatVotes}
            tick={{ fill: '#666' }} 
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(0,0,0,0.02)' }}
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                const winner = payload[0];
                const runnerUp = payload[1];
                // Find original data point for names
                const yearData = data.find(d => d.year === label);
                
                return (
                  <div className="bg-white p-3 border border-gray-100 shadow-lg rounded-lg text-sm">
                    <p className="font-bold text-navy mb-2">{label} Election</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: winner.color }} />
                        <div>
                          <p className="font-semibold text-gray-800">Winner: {yearData?.winnerName}</p>
                          <p className="text-gray-500 text-xs">{yearData?.winnerParty} - {winner.value?.toLocaleString()} votes</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: runnerUp.color }} />
                        <div>
                          <p className="font-semibold text-gray-800">Runner-up: {yearData?.runnerUpName}</p>
                          <p className="text-gray-500 text-xs">{yearData?.runnerUpParty} - {runnerUp.value?.toLocaleString()} votes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend />
          <Bar dataKey="winnerVotes" name="Winner Votes" fill="#1B3C59" radius={[4, 4, 0, 0]} />
          <Bar dataKey="runnerUpVotes" name="Runner-up Votes" fill="#d1d5db" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
