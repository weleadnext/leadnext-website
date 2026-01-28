'use client';

import { useState, useMemo } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip as RechartsTooltip, 
  Legend 
} from 'recharts';
import { 
  ArrowLeft, 
  Wallet, 
  TrendingUp, 
  PieChart as PieChartIcon, 
  Filter 
} from 'lucide-react';
import Link from 'next/link';
import { FederalBudgetDoc } from './page';

interface FederalBudgetDashboardProps {
  budgetDocs: FederalBudgetDoc[];
}

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', 
  '#82ca9d', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57'
];

export const FederalBudgetDashboard = ({ budgetDocs }: FederalBudgetDashboardProps) => {
  // Extract available years from documents
  const years = useMemo(() => {
    return budgetDocs.map(doc => doc.year).sort().reverse();
  }, [budgetDocs]);

  const [selectedYear, setSelectedYear] = useState<string>(years[0] || '');

  // Get the single document for the selected year
  const selectedBudget = useMemo(() => {
    return budgetDocs.find(doc => doc.year === selectedYear);
  }, [budgetDocs, selectedYear]);

  // Handle case where no budget data exists
  if (!selectedYear && budgetDocs.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50">
        <section className="bg-navy py-12 px-6 text-white">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <Link 
                href="/initiatives/politics-and-governance/executive-eye/federal"
                className="inline-flex items-center gap-2 text-teal hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Federal Government</span>
              </Link>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Budget & Finance
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                No budget data available at this time.
              </p>
            </FadeIn>
          </div>
        </section>
      </main>
    );
  }

  // Extract allocations, handling undefined case
  const allocations = useMemo(() => {
    return selectedBudget?.allocations || [];
  }, [selectedBudget]);

  const functionalData = useMemo(() => {
    return allocations
      .filter(a => a.budgetType === 'Functional')
      .map(a => ({ name: a.sector, value: a.allocation, percentage: a.percentage }));
  }, [allocations]);

  const economicData = useMemo(() => {
    return allocations
      .filter(a => a.budgetType === 'Economic')
      .map(a => ({ name: a.sector, value: a.allocation, percentage: a.percentage }));
  }, [allocations]);

  const displayTotal = selectedBudget?.totalAmount || 0;

  const topAllocation = useMemo(() => {
    if (allocations.length === 0) return null;
    const sorted = [...allocations].sort((a, b) => b.allocation - a.allocation);
    return sorted[0];
  }, [allocations]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-lg">
          <p className="font-bold text-navy text-sm">{data.name}</p>
          <p className="text-teal text-sm">
            ₦{data.value.toFixed(2)} Trillion
          </p>
          {data.percentage && (
             <p className="text-xs text-gray-500 mt-1">
               {data.percentage}% of Total Budget
             </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-navy py-12 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <Link 
              href="/initiatives/politics-and-governance/executive-eye/federal"
              className="inline-flex items-center gap-2 text-teal hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Federal Government</span>
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                  Budget & Finance
                </h1>
                <p className="text-xl text-gray-200 max-w-2xl">
                  {selectedBudget?.title 
                    ? `${selectedBudget.title} (${selectedYear})`
                    : `Breakdown of the Federal Government's ${selectedYear} Budget.`}
                </p>
                {selectedBudget?.status && (
                  <span className="inline-block mt-3 px-3 py-1 bg-gold text-navy text-xs font-bold uppercase rounded-full">
                    Status: {selectedBudget.status}
                  </span>
                )}
              </div>

              {/* Year Selector */}
              <div className="flex items-center gap-3 bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-sm">
                <Filter className="h-5 w-5 text-teal ml-2" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-transparent text-white font-medium focus:outline-none border-none cursor-pointer py-1 pr-8"
                >
                  {years.map(year => (
                    <option key={year} value={year} className="text-navy">
                      {year} Budget
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FadeIn delay={0.1}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-teal/10 rounded-xl flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Total Budget</p>
                  <h3 className="text-2xl font-bold text-navy">₦{displayTotal.toFixed(2)} Trillion</h3>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-navy/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Top Sector Allocation</p>
                  <h3 className="text-lg font-bold text-navy truncate max-w-[200px]">
                    {topAllocation?.sector || 'N/A'}
                  </h3>
                  <p className="text-sm text-teal font-semibold">
                    ₦{topAllocation?.allocation.toFixed(2) || '0.00'} Trillion
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <PieChartIcon className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Budget Year</p>
                  <h3 className="text-2xl font-bold text-navy">{selectedYear}</h3>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Functional Budget Chart */}
          <FadeIn delay={0.4} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-navy mb-6 border-b pb-4">Functional Breakdown</h3>
            <div className="h-[300px] w-full">
              {functionalData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={functionalData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {functionalData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip content={<CustomTooltip />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400">
                  No Functional data available
                </div>
              )}
            </div>
          </FadeIn>

          {/* Economic Budget Chart */}
          <FadeIn delay={0.5} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-navy mb-6 border-b pb-4">Economic Breakdown</h3>
            <div className="h-[300px] w-full">
              {economicData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={economicData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {economicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[(index + 5) % COLORS.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip content={<CustomTooltip />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400">
                  No Economic data available
                </div>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Data Table */}
        <FadeIn delay={0.6} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-navy">Detailed Allocation Breakdown</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold">
                <tr>
                  <th className="px-6 py-4">Sector / Category</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4 text-right">Allocation (Trn)</th>
                  <th className="px-6 py-4 text-right">% of Total</th>
                  <th className="px-6 py-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {allocations.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-navy">{item.sector}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                        item.budgetType === 'Functional' 
                          ? 'bg-teal/10 text-teal' 
                          : 'bg-gold/10 text-navy'
                      }`}>
                        {item.budgetType}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-slate">
                      ₦{item.allocation.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-600">
                      {item.percentage}%
                    </td>
                    <td className="px-6 py-4 text-gray-500 max-w-xs truncate">
                      {item.notes || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </main>
  );
};
