'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ELECTION_DATA, CHART_COLORS } from '@/lib/data/elections';

export const Result2023Chart = () => {
  const election2023 = ELECTION_DATA.find(e => e.year === 2023);

  if (!election2023) return null;

  const data = [
    { name: 'Bola Ahmed Tinubu (APC)', value: election2023.winner.votes, color: CHART_COLORS.APC },
    { name: 'Atiku Abubakar (PDP)', value: election2023.runnerUp.votes, color: CHART_COLORS.PDP },
    { name: 'Peter Obi (LP)', value: election2023.thirdPlace?.votes || 0, color: CHART_COLORS.LP },
    { name: 'Others', value: (election2023.votesCast || 0) - (election2023.winner.votes + election2023.runnerUp.votes + (election2023.thirdPlace?.votes || 0)), color: CHART_COLORS.Other }
  ];

  return (
    <div className="h-[400px] w-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
      <h3 className="text-xl font-bold text-navy mb-6 font-serif">2023 Presidential Election Distribution</h3>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number) => value.toLocaleString()}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
