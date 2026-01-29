'use client';

import { useState, Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowLeft, Send, Loader2, CheckCircle2, User, Mail, Phone, MessageSquare, Briefcase } from 'lucide-react';
import Link from 'next/link';

const WorkWithUsForm = () => {
  const searchParams = useSearchParams();
  
  // Mapping nav params to select values
  const getSelectValue = (param: string) => {
    switch(param?.toLowerCase()) {
      case 'volunteer': return 'Volunteer';
      case 'mentor': return 'Mentor';
      case 'partner': return 'Partner';
      case 'career': return 'Career';
      default: return 'Volunteer';
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Volunteer',
    description: ''
  });

  // Sync interest with URL params
  useEffect(() => {
    const type = searchParams.get('type');
    if (type) {
      setFormData(prev => ({ ...prev, interest: getSelectValue(type) }));
    }
  }, [searchParams]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/work-with-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw errorData;
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', interest: 'Volunteer', description: '' });
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.error || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <FadeIn>
        <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
          <div className="mx-auto w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="h-8 w-8 text-teal" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-navy mb-4">Request Sent!</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Thank you for your interest in working with LeadNext. We have received your details and will get back to you soon.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-navy font-semibold hover:text-teal transition-colors"
          >
            Submit another request
          </button>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={0.2}>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
        <h3 className="font-serif text-2xl font-bold text-navy mb-8">Tell us about yourself</h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-navy flex items-center gap-2">
                <User className="h-4 w-4 text-teal" /> Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-navy flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal" /> Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-navy flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal" /> Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all"
                placeholder="+234..."
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-navy flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-teal" /> I'm interested in...
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all bg-white"
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value})}
              >
                <option value="Volunteer">Volunteering</option>
                <option value="Mentor">Becoming a Mentor</option>
                <option value="Partner">Becoming a Partner</option>
                <option value="Career">Careers & Internships</option>
                <option value="Other">Other Opportunities</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-navy flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-teal" /> Why do you want to work with us?
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all resize-none"
              placeholder="Tell us briefly about your motivation and experience..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          {errorMessage && (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-navy text-white font-bold py-4 rounded-lg hover:bg-teal transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" /> Submitting...
              </>
            ) : (
              <>
                Submit Request <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </FadeIn>
  );
};

export default function WorkWithUsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-navy py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-paper opacity-10"></div>
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Work With Us
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Join us in our mission to cultivate a new generation of Nigerian leaders. Whether you want to volunteer, mentor, or partner with us, we'd love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-slate font-medium hover:text-navy transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
          
          <Suspense fallback={<div className="text-center p-12">Loading form...</div>}>
            <WorkWithUsForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
