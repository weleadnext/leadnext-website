'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from './animations/FadeIn';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Top Section: Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 lg:flex-row">
          <div className="max-w-lg text-center lg:text-left">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">Join Our Newsletter</h3>
            <p className="text-gray-400">Stay updated on our latest programs, policy briefs, and civic initiatives.</p>
          </div>
          
          <div className="flex w-full max-w-md gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full rounded-md bg-white/5 px-4 py-3 text-white placeholder-gray-500 ring-1 ring-white/20 focus:outline-none focus:ring-teal transition-all"
            />
            <button className="flex items-center gap-2 rounded-md bg-teal px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-navy">
              <span>Subscribe</span>
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Brand */}
        <FadeIn delay={0} className="flex flex-col gap-6">
          <div className="relative h-12 w-40">
             <Image 
                src="/leadnext_logo.png" 
                alt="LeadNext Logo"
                height={150}
                width={140}
                className="h-10 w-auto object-contain brightness-0 invert" 
             />
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering the next generation of Nigerian leaders through civic education, innovation, and transparent governance tracking.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-gold hover:text-navy">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Column 2: Quick Links */}
        <FadeIn delay={0.1}>
          <h4 className="font-serif text-lg font-bold text-gold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Our Projects</Link></li>
            <li><Link href="/officials" className="hover:text-white transition-colors">Government Officials</Link></li>
            <li><Link href="/impact" className="hover:text-white transition-colors">Impact Reports</Link></li>
            <li><Link href="/donate" className="hover:text-white transition-colors">Donate</Link></li>
          </ul>
        </FadeIn>

        {/* Column 3: Resources */}
        <FadeIn delay={0.2}>
          <h4 className="font-serif text-lg font-bold text-gold mb-6">Resources</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-white transition-colors">Citizen Library</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Policy Briefs</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Media Kit</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Volunteer</Link></li>
          </ul>
        </FadeIn>

        {/* Column 4: Contact */}
        <FadeIn delay={0.3}>
          <h4 className="font-serif text-lg font-bold text-gold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-teal" />
              <span>123 Civic Way, Central Business District, Abuja, Nigeria</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-teal" />
              <a href="mailto:info@leadnext.ng" className="hover:text-white">info@leadnext.ng</a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-teal" />
              <a href="tel:+2348000000000" className="hover:text-white">+234 800 000 0000</a>
            </li>
          </ul>
        </FadeIn>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 bg-navy-darker">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} LeadNext Initiative. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

