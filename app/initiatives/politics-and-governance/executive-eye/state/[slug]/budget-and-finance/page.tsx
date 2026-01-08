import { FadeIn } from '@/components/animations/FadeIn';
import { PieChart, Hammer, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function StateBudgetAndFinancePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <FadeIn className="text-center max-w-lg">
        <Link 
          href={`/initiatives/politics-and-governance/executive-eye/state/${slug}`}
          className="inline-flex items-center gap-2 text-teal hover:text-navy mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to State Dashboard</span>
        </Link>
        <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <PieChart className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-navy mb-4">Budget & Finance</h1>
        <p className="text-gray-600 mb-8">
          Interactive visualizations of the state budget, IGR, and expenditure breakdowns are currently being built.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
          <Hammer className="h-4 w-4" />
          <span>Work in Progress</span>
        </div>
      </FadeIn>
    </main>
  );
}
