import { FadeIn } from '@/components/animations/FadeIn';
import { Briefcase, Hammer } from 'lucide-react';

export default function KeyProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <FadeIn className="text-center max-w-lg">
        <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Briefcase className="h-10 w-10 text-blue-600" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-navy mb-4">Key Projects</h1>
        <p className="text-gray-600 mb-8">
          We are currently mapping major federal infrastructure and development projects. Check back soon for project timelines, budgets, and progress reports.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
          <Hammer className="h-4 w-4" />
          <span>Work in Progress</span>
        </div>
      </FadeIn>
    </main>
  );
}
