'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { DesktopNav } from './Navbar/DesktopNav';
import { MobileNav } from './Navbar/MobileNav';

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-navy sticky top-0 z-50">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 xl:px-12 py-4">
          {/* Logo */}
          <Link href="/" className="z-50 flex items-center gap-2">
            <Image 
              src="/leadnext_logo.png" 
              alt="LeadNext Logo" 
              width={140}
              height={150} 
              className="h-10 w-auto object-contain brightness-0 invert" 
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-white hover:text-gold">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            <Link 
              href="/donate" 
              className="bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-white"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 text-white hover:bg-white/10 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
};
