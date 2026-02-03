'use client';

import { FadeIn } from '../animations/FadeIn';
import { PortableText } from '@portabletext/react';
import { CheckCircle2, Clock, Users, Monitor, Globe, ArrowRight } from 'lucide-react';

interface InitiativeContentProps {
  overview: any[];
  whatItOffers?: string[];
  programStructure?: {
    duration?: string;
    cohortSize?: string;
    deliveryMode?: string;
    language?: string;
  };
  eligibilityCriteria?: string[];
  applyText?: any[];
  onApplyClick?: () => void;
  canApply?: boolean;
  applicationMessage?: string;
  isLoading?: boolean;
}

export const InitiativeContent = ({ 
  overview, 
  whatItOffers, 
  programStructure, 
  eligibilityCriteria,
  applyText,
  onApplyClick,
  canApply = true,
  applicationMessage,
  isLoading = false
}: InitiativeContentProps) => {
  return (
    <div className="space-y-16">
      {/* Overview */}
      <FadeIn>
        <h2 className="font-serif text-3xl font-bold text-navy mb-6">Overview</h2>
        <div className="text-gray-600 leading-relaxed text-lg prose prose-lg max-w-none">
          <PortableText value={overview} />
        </div>
      </FadeIn>

      {/* What the Program Offers */}
      {whatItOffers && whatItOffers.length > 0 && (
        <FadeIn delay={0.2}>
          <h2 className="font-serif text-3xl font-bold text-navy mb-8">What the Program Offers</h2>
          <div className="space-y-4">
            {whatItOffers.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg border-l-4 border-teal">
                <CheckCircle2 className="h-6 w-6 text-teal shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      )}

      {/* Program Structure */}
      {programStructure && (
        <FadeIn delay={0.4}>
          <h2 className="font-serif text-3xl font-bold text-navy mb-8">Program Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programStructure.duration && (
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5 text-teal" />
                  <h3 className="font-bold text-navy">Duration</h3>
                </div>
                <p className="text-gray-600">{programStructure.duration}</p>
              </div>
            )}
            {programStructure.cohortSize && (
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-teal" />
                  <h3 className="font-bold text-navy">Cohort Size</h3>
                </div>
                <p className="text-gray-600">{programStructure.cohortSize}</p>
              </div>
            )}
            {programStructure.deliveryMode && (
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Monitor className="h-5 w-5 text-teal" />
                  <h3 className="font-bold text-navy">Delivery Mode</h3>
                </div>
                <p className="text-gray-600">{programStructure.deliveryMode}</p>
              </div>
            )}
            {programStructure.language && (
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-5 w-5 text-teal" />
                  <h3 className="font-bold text-navy">Language</h3>
                </div>
                <p className="text-gray-600">{programStructure.language}</p>
              </div>
            )}
          </div>
        </FadeIn>
      )}

      {/* Eligibility Criteria */}
      {eligibilityCriteria && eligibilityCriteria.length > 0 && (
        <FadeIn delay={0.6}>
          <h2 className="font-serif text-3xl font-bold text-navy mb-8">Eligibility Criteria</h2>
          <div className="space-y-4">
            {eligibilityCriteria.map((criterion, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="h-6 w-6 bg-gold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-navy font-bold text-sm">{idx + 1}</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{criterion}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      )}

      {/* Apply Section */}
      {applyText && applyText.length > 0 && (
        <FadeIn delay={0.8}>
          <div className="bg-navy rounded-2xl p-12 text-white">
            <h2 className="font-serif text-3xl font-bold mb-6">Apply to Join the Next Cohort</h2>
            <div className="text-gray-200 leading-relaxed text-lg mb-8 prose prose-lg max-w-none prose-invert">
              <PortableText value={applyText} />
            </div>
            <div className="space-y-4">
              <button 
                onClick={onApplyClick}
                disabled={!canApply || isLoading}
                className={`inline-flex items-center gap-2 font-bold py-4 px-8 rounded transition-colors ${
                  canApply && !isLoading
                    ? 'bg-gold text-navy hover:bg-white cursor-pointer'
                    : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                }`}
              >
                {isLoading ? 'Loading...' : canApply ? 'Apply Now' : 'Applications Closed'} 
                {canApply && !isLoading && <ArrowRight className="h-5 w-5" />}
              </button>
              {applicationMessage && !isLoading && (
                <p className={`text-sm ${canApply ? 'text-gray-300' : 'text-yellow-300'}`}>
                  {applicationMessage}
                </p>
              )}
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
};
