'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import { ArrowLeft, Banknote, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase mb-3">
              Donate
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Support the Next Generation of Nigerian Leaders
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              Your giving helps LeadNext train and equip young Nigerians with the
              skills, character, and civic awareness needed to transform governance
              and strengthen our democracy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 grid gap-12 md:grid-cols-[2fr,1.5fr]">
          {/* Bank details card */}
          <FadeIn>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-6">
                Bank Transfer Details
              </h2>

              <p className="text-gray-600 mb-6">
                You can make a direct bank transfer using the account details below.
                Kindly include your name or organization in the narration where possible.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold tracking-wide text-slate uppercase">
                    Account Name
                  </span>
                  <span className="text-lg font-semibold text-navy">
                    LeadNext Initiative
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold tracking-wide text-slate uppercase">
                    Account Number
                  </span>
                  <span className="text-2xl md:text-3xl font-mono font-bold text-navy">
                    0513253837
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold tracking-wide text-slate uppercase">
                    Bank
                  </span>
                  <span className="text-lg font-semibold text-navy">
                    Alternative Bank
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-navy text-white px-6 py-5 flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-gold mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">
                    Secure & Transparent Giving
                  </p>
                  <p className="text-sm text-gray-200">
                    All donations are used strictly to support leadership training,
                    fellowships, civic education, and platform development. 
                    Automated card and online payments will be added soon.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Impact / narrative column */}
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold mb-4">
                  <HeartHandshake className="h-4 w-4" />
                  Partner in Impact
                </div>
                <p className="text-sm text-slate mb-2 uppercase font-semibold tracking-[0.18em]">
                  Why Your Support Matters
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Every contribution moves us closer to our mission of training
                  <span className="font-semibold text-navy"> 10,000 youth leaders by 2025</span>.
                  Your giving helps fund fellowships, short courses, civic tools, and
                  the data platforms that keep citizens informed.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Support youth-focused leadership and governance training</li>
                  <li>• Strengthen civic education and citizen literacy</li>
                  <li>• Help build non-partisan tools that track public leadership and projects</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-6 text-sm text-gray-600">
                <p className="font-semibold text-navy mb-2">Need a receipt or have questions?</p>
                <p className="mb-3">
                  If you would like an acknowledgement letter, partnership documentation,
                  or have questions about giving, please reach out to us.
                </p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:weleadnext@gmail.com"
                    className="text-teal font-semibold hover:underline"
                  >
                    weleadnext@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate hover:text-navy"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

