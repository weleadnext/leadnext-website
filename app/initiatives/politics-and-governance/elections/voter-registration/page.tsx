import { FadeIn } from '@/components/animations/FadeIn';
import { FileText, Hammer } from 'lucide-react';

export default function VoterRegistrationPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <FadeIn className="text-center max-w-lg">
        <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <FileText className="h-10 w-10 text-teal" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-navy mb-4">Voter Registration & Data</h1>
        <p className="text-gray-600 mb-8">
          We are currently aggregating the latest voter registration data and demographics from INEC. This dashboard will be available soon with detailed insights into Nigeria's voting population.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
          <Hammer className="h-4 w-4" />
          <span>Work in Progress</span>
        </div>
      </FadeIn>
    </main>
  );
}
