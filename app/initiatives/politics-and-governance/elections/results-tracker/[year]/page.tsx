import { FadeIn } from '@/components/animations/FadeIn';
import { ELECTION_STATE_DATA } from '@/lib/data/state-results';
import { ELECTION_DATA } from '@/lib/data/elections';
import { StateResultsTable } from '@/components/elections/StateResultsTable';
import { ArrowLeft, MapPin } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return ELECTION_DATA.map((election) => ({
    year: election.year.toString(),
  }));
}

export default async function ElectionYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const yearInt = parseInt(year);
  const electionInfo = ELECTION_DATA.find(e => e.year === yearInt);
  const stateData = ELECTION_STATE_DATA[yearInt];

  if (!electionInfo) {
    notFound();
  }

  const isMissingData = !stateData || stateData.length === 0;

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-navy py-12 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <Link 
              href="/initiatives/politics-and-governance/elections/results-tracker"
              className="inline-flex items-center gap-2 text-teal hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Tracker</span>
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {year} Presidential Election
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Detailed breakdown of results across the federation.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <FadeIn>
          {/* Quick Stats Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-sm font-medium mb-1">Winner</p>
              <p className="text-xl font-bold text-navy">{electionInfo.winner.name}</p>
              <span className="inline-block px-2 py-0.5 mt-2 bg-green-100 text-green-800 text-xs font-bold rounded">
                {electionInfo.winner.party}
              </span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-sm font-medium mb-1">Total Votes</p>
              <p className="text-xl font-bold text-navy">{electionInfo.votesCast?.toLocaleString() || 'N/A'}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-sm font-medium mb-1">Turnout</p>
              <p className="text-xl font-bold text-navy">{electionInfo.turnoutPercent}%</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-sm font-medium mb-1">Registered Voters</p>
              <p className="text-xl font-bold text-navy">{electionInfo.registeredVoters.toLocaleString()}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-6 w-6 text-teal" />
            <h2 className="font-serif text-2xl font-bold text-navy">State-by-State Breakdown</h2>
          </div>

          {isMissingData ? (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <p className="text-gray-500 text-lg">
                State-level result data is currently not available for the {year} election in our archive.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                We are working to digitize these records. Please check back soon.
              </p>
            </div>
          ) : (
            <StateResultsTable data={stateData} year={yearInt} />
          )}
        </FadeIn>
      </div>
    </main>
  );
}
