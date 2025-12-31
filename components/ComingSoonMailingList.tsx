'use client';

import { useState, FormEvent } from 'react';
import { Mail, CheckCircle2, Loader2 } from 'lucide-react';

interface ComingSoonMailingListProps {
  variant?: 'default' | 'light';
}

export const ComingSoonMailingList = ({ 
  variant = 'default' 
}: ComingSoonMailingListProps) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/mailing-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus('success');
      setMessage('Thanks for subscribing! We\'ll keep you updated.');
      setEmail('');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  const isLight = variant === 'light';

  return (
    <div className="w-full">
      {status === 'success' ? (
        <div className={`flex items-center gap-2 p-4 rounded-lg ${isLight ? 'bg-gold/20 text-white' : 'bg-teal/10 text-teal'}`}>
          <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm font-medium">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${isLight ? 'text-gray-400' : 'text-gray-400'}`} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                isLight 
                  ? 'bg-white/10 text-white placeholder-gray-300 focus:ring-gold border border-white/20' 
                  : 'bg-white text-slate placeholder-gray-500 focus:ring-teal border border-gray-200'
              }`}
              disabled={status === 'loading'}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
              isLight
                ? 'bg-gold text-navy hover:bg-white hover:text-navy disabled:bg-gold/50'
                : 'bg-navy text-white hover:bg-teal disabled:bg-navy/50'
            }`}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              'Notify Me'
            )}
          </button>
        </form>
      )}
      
      {status === 'error' && message && (
        <p className="text-sm text-red-500 mt-2">{message}</p>
      )}
    </div>
  );
};

