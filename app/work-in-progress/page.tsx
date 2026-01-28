'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { Construction, ArrowLeft, Clock, Mail } from 'lucide-react';
import Link from 'next/link';

export default function WorkInProgressPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-gold/20 p-6">
                <Construction className="h-16 w-16 text-gold" />
              </div>
            </div>
            <h1 className="font-serif text-5xl font-bold text-white mb-6">
              Work in Progress
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We're currently building this feature to serve you better. Check back soon!
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <Clock className="h-8 w-8 text-teal mb-4" />
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                  Coming Soon
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This section is currently under development. Our team is working hard to bring you comprehensive data and insights.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <Mail className="h-8 w-8 text-gold mb-4" />
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                  Stay Updated
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Want to be notified when this feature launches? Join our mailing list.
                </p>
                <Link 
                  href="/coming-soon"
                  className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all"
                >
                  Subscribe Now →
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Homepage
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
