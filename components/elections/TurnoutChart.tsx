'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ELECTION_DATA } from '@/lib/data/elections';

export const TurnoutChart = () => {
  return (
    <div className="h-[400px] w-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
      <h3 className="text-xl font-bold text-navy mb-6 font-serif">Voter Turnout Trends (1999-2023)</h3>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
          data={ELECTION_DATA}
          margin={{
            top: 5,
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
            unit="%" 
            tick={{ fill: '#666' }} 
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            formatter={(value: number | undefined) => [`${value ?? 0}%`, 'Turnout']}
            labelStyle={{ color: '#1B3C59', fontWeight: 'bold' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="turnoutPercent"
            name="Turnout Percentage"
            stroke="#14b8a6" // Teal
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={{ r: 4, fill: '#14b8a6', strokeWidth: 2, stroke: '#fff' }}
          />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
