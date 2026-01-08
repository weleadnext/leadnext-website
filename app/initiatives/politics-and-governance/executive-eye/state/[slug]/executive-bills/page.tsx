import { FadeIn } from '@/components/animations/FadeIn';
import { FileText, Hammer, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function StateExecutiveBillsPage({ params }: { params: Promise<{ slug: string }> }) {
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
          <FileText className="h-10 w-10 text-gold" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-navy mb-4">Executive Bills</h1>
        <p className="text-gray-600 mb-8">
          A tracker for key legislation proposed by the State Executive is under development.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">
          <Hammer className="h-4 w-4" />
          <span>Work in Progress</span>
        </div>
      </FadeIn>
    </main>
  );
}
