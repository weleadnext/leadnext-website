import { FadeIn } from '@/components/animations/FadeIn';
import { TurnoutChart } from '@/components/elections/TurnoutChart';
import { VotesComparisonChart } from '@/components/elections/VotesComparisonChart';
import { Result2023Chart } from '@/components/elections/Result2023Chart';
import { ElectionsTable } from '@/components/elections/ElectionsTable';
import { BarChart3, TrendingUp, Users } from 'lucide-react';

export default function ResultsTrackerPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-navy py-12 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4 text-teal">
              <BarChart3 className="h-6 w-6" />
              <span className="font-bold uppercase tracking-wider text-sm">Elections Tracker</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Presidential Election Results (1999-2023)
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Analyzing the data behind Nigeria's democratic journey over the last two decades.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 space-y-20">
        
        {/* Key Metrics / Overview Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <TurnoutChart />
          </FadeIn>
          <FadeIn delay={0.2}>
            <VotesComparisonChart />
          </FadeIn>
        </div>

        {/* 2023 Spotlight */}
        <section>
          <FadeIn delay={0.3}>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-gold" />
              <h2 className="font-serif text-2xl font-bold text-navy">2023 Election Spotlight</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              <div className="lg:col-span-2">
                <Result2023Chart />
              </div>
              <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-4 font-serif">A Historic Shift</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The 2023 Presidential Election marked a significant departure from the traditional two-party dominance. For the first time since 1999, a third-party candidate, Peter Obi of the Labour Party, garnered over 6 million votes, winning in key states including Lagos and the FCT.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Despite the rise of a third force, voter turnout dropped to a historic low of 26.71%, continuing a downward trend observed since 2003. This dashboard highlights the shifting dynamics of voter engagement and party performance.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Historical Data Table */}
        <section>
          <FadeIn delay={0.4}>
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-teal" />
              <h2 className="font-serif text-2xl font-bold text-navy">Historical Data Archive</h2>
            </div>
            <ElectionsTable />
          </FadeIn>
        </section>

      </div>
    </main>
  );
}
