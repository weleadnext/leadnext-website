import { FadeIn } from '@/components/animations/FadeIn';
import { ShieldAlert, Hammer } from 'lucide-react';

export default function SecurityHeadsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <FadeIn className="text-center max-w-lg">
        <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <ShieldAlert className="h-10 w-10 text-navy" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-navy mb-4">Security Heads</h1>
        <p className="text-gray-600 mb-8">
          Detailed profiles of the Chief of Defence Staff, Service Chiefs, and heads of paramilitary and intelligence agencies are currently being compiled.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
          <Hammer className="h-4 w-4" />
          <span>Work in Progress</span>
        </div>
      </FadeIn>
    </main>
  );
}
