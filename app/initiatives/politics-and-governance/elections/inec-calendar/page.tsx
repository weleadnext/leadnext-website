import { FadeIn } from '@/components/animations/FadeIn';
import { Calendar, Hammer } from 'lucide-react';

export default function InecCalendarPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <FadeIn className="text-center max-w-lg">
        <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Calendar className="h-10 w-10 text-gold" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-navy mb-4">INEC Election Calendar</h1>
        <p className="text-gray-600 mb-8">
          The comprehensive calendar for upcoming elections and key INEC dates is being updated. Check back soon for the official schedule of electoral activities.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">
          <Hammer className="h-4 w-4" />
          <span>Work in Progress</span>
        </div>
      </FadeIn>
    </main>
  );
}
