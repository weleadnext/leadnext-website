'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { NavItem, NAVIGATION_DATA } from '@/lib/nav-data';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavItem = ({ item, depth = 0, onClose }: { item: NavItem; depth?: number; onClose: () => void }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="border-b border-gray-100 last:border-0">
      {hasChildren ? (
        <>
          <button
            onClick={() => {
              if (item.label === "Initiatives") {
                // If it's the Initiatives link, you might want to navigate
                // But typically in mobile, you expand the accordion OR navigate.
                // If you want BOTH (navigate on click, arrow expands), that's complex UI.
                // Standard pattern: Text links to page, Arrow expands.
              }
              setIsExpanded(!isExpanded)
            }}
            className="flex w-full items-center justify-between py-4 text-left font-medium text-navy transition-colors hover:text-teal"
            style={{ paddingLeft: depth * 16 }}
          >
            <span className={depth === 0 ? "font-serif text-lg" : "text-base"}>
                {item.label === "Initiatives" ? (
                   <Link href="/initiatives/youth-leadership-academy" onClick={(e) => { e.stopPropagation(); onClose(); }}>
                     {item.label}
                   </Link>
                ) : (
                    item.label
                )}
            </span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </button>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden bg-gray-50/50"
              >
                <div className="flex flex-col">
                  {item.children!.map((child, idx) => (
                    <MobileNavItem key={idx} item={child} depth={depth + 1} onClose={onClose} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Link
          href={item.href || '#'}
          className="block py-4 text-gray-600 hover:text-navy"
          style={{ paddingLeft: depth * 16 }}
          onClick={onClose}
        >
          {item.label}
        </Link>
      )}
    </div>
  );
};

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 shadow-xl lg:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <Link href="/" className="relative h-10 w-32">
                <Image 
                  src="/leadnext_logo.png" 
                  alt="LeadNext Logo" 
                  fill
                  className="object-contain" 
                  sizes="128px"
                />
              </Link>
              <button
                onClick={onClose}
                className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-red-50 hover:text-red-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col">
              {NAVIGATION_DATA.map((item, idx) => (
                <MobileNavItem key={idx} item={item} onClose={onClose} />
              ))}
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

