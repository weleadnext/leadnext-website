'use client';

import Link from 'next/link';

interface InitiativeSidebarProps {
  onApplyClick?: () => void;
  canApply?: boolean;
  applicationMessage?: string;
  isLoading?: boolean;
}

const PROGRAMS = [
  "Civic & Governance Training",
  "Innovation & Entrepreneurship",
  "Climate Youth Network",
  "Women-in Leadership Fellowship"
];

export const InitiativeSidebar = ({ 
  onApplyClick, 
  canApply = true, 
  applicationMessage,
  isLoading = false 
}: InitiativeSidebarProps = {}) => {
  return (
    <div className="space-y-8 sticky top-24">
      {/* Navigation Card */}
      <div className="bg-navy rounded-lg p-6 text-white shadow-lg">
        <h3 className="font-serif text-xl font-bold mb-6 border-b border-white/20 pb-4">Programs</h3>
        <ul className="space-y-4">
          {PROGRAMS.map((program, idx) => (
            <li key={idx}>
              <Link href="#" className="block hover:text-gold transition-colors text-sm font-medium">
                {program}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Card */}
      <div className="bg-teal rounded-lg p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-serif text-2xl font-bold mb-4">
            {canApply && !isLoading ? 'Apply Today' : 'Applications Status'}
          </h3>
          <p className="text-white/90 mb-6 text-sm">
            {canApply && !isLoading 
              ? 'Take the first step towards becoming a leader in your community.'
              : applicationMessage || 'Loading application status...'
            }
          </p>
          <button 
            onClick={onApplyClick}
            disabled={!canApply || isLoading}
            className={`w-full font-bold py-3 px-6 rounded transition-colors ${
              canApply && !isLoading
                ? 'bg-gold text-navy hover:bg-white cursor-pointer'
                : 'bg-gray-500 text-gray-300 cursor-not-allowed'
            }`}
          >
            {isLoading ? 'Loading...' : canApply ? 'Apply Now' : 'Applications Closed'}
          </button>
        </div>
        {/* Decorative circle */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
      </div>
    </div>
  );
};

