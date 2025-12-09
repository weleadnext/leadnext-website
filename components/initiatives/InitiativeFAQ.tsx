'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

interface FAQ {
  question: string;
  answer: string;
}

interface InitiativeFAQProps {
  faqs: FAQ[];
}

export const InitiativeFAQ = ({ faqs }: InitiativeFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <FadeIn className="py-12 border-t border-gray-100">
      <h2 className="font-serif text-3xl font-bold text-navy mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-100 last:border-0">
            <button
              className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-bold text-navy text-lg">{faq.question}</span>
              {openIndex === idx ? (
                <ChevronUp className="h-5 w-5 text-teal" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === idx ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
};
