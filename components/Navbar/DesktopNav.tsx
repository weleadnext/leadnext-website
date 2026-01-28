'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { NavItem, NAVIGATION_DATA } from '@/lib/nav-data';

const MegaMenu = ({ item }: { item: NavItem }) => {
  if (!item.children) return null;

  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-8 p-8 w-[1000px]">
      {item.children.map((section, idx) => (
        <div key={idx} className="space-y-4">
          <div className="border-b border-gray-100 pb-2">
            <h4 className="font-serif text-lg font-bold text-navy">{section.label}</h4>
            {section.description && (
              <p className="text-xs text-gray-500 mt-1">{section.description}</p>
            )}
          </div>
          <ul className="space-y-2">
            {section.children?.map((child, cIdx) => (
              <li key={cIdx} className="group/item relative">
                {child.children ? (
                  // Deep nesting logic for Mega Menu (Level 3)
                  <div className="space-y-2">
                    {child.href ? (
                      <Link 
                        href={child.href}
                        className="block text-sm font-semibold text-teal hover:text-navy transition-colors"
                      >
                        {child.label}
                      </Link>
                    ) : (
                      <span className="block text-sm font-semibold text-teal">{child.label}</span>
                    )}
                    <ul className="pl-3 border-l border-gray-100 space-y-1">
                      {child.children.map((subChild, scIdx) => (
                        <li key={scIdx}>
                          <Link href={subChild.href || '#'} className="block text-sm text-gray-600 hover:text-navy hover:underline">
                            {subChild.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link href={child.href || '#'} className="block text-sm text-gray-600 hover:text-navy hover:translate-x-1 transition-transform">
                    {child.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const DropdownMenu = ({ item }: { item: NavItem }) => {
  if (!item.children) return null;

  return (
    <div className="w-64 p-2">
      {item.children.map((child, idx) => (
        <div key={idx} className="relative group/sub">
          {child.children ? (
            // Nested Dropdown
            <div className="w-full">
              <button className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-navy">
                {child.label}
                <ChevronRight className="h-4 w-4" />
              </button>
              {/* Recursive or simple list for sub-items */}
              <div className="hidden group-hover/sub:block absolute left-full top-0 ml-2 w-56 rounded-md bg-white p-2 shadow-lg ring-1 ring-black/5 before:absolute before:-left-2 before:top-0 before:h-full before:w-2 before:content-['']">
                {child.children.map((sub, sIdx) => (
                  <div key={sIdx} className="relative group/deep">
                    {sub.children ? (
                      // Level 4 recursion
                      <div className="w-full">
                        <button className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-navy">
                          {sub.label}
                          <ChevronRight className="h-4 w-4" />
                        </button>
                        <div className="hidden group-hover/deep:block absolute left-full top-0 ml-2 w-56 rounded-md bg-white p-2 shadow-lg ring-1 ring-black/5 before:absolute before:-left-2 before:top-0 before:h-full before:w-2 before:content-['']">
                          {sub.children.map((deepSub, dIdx) => (
                            <Link
                              key={dIdx}
                              href={deepSub.href || '#'}
                              className="block rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-navy"
                            >
                              {deepSub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={sub.href || '#'}
                        className="block rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-navy"
                      >
                        {sub.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Link
              href={child.href || '#'}
              className="block rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-navy"
            >
              {child.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export const DesktopNav = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="hidden lg:flex lg:items-center lg:gap-6">
      {NAVIGATION_DATA.map((item, idx) => {
        const isMega = ["LeadNext Academy", "Politics & Governance Hub"].includes(item.label);

        return (
          <div
            key={idx}
            className="relative"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              href={item.label === "LeadNext Academy" ? "/coming-soon" : (item.href || '#')}
              className={`flex items-center gap-1 py-4 font-medium transition-colors ${
                hoveredIndex === idx ? 'text-gold' : 'text-gray-200 hover:text-white'
              }`}
            >
              {item.label}
              {item.children && <ChevronDown className="h-4 w-4" />}
            </Link>

            <AnimatePresence>
              {hoveredIndex === idx && item.children && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute top-full z-50 bg-white shadow-xl ring-1 ring-black/5 ${
                    isMega ? 'left-0' : 'left-0 w-64'
                  }`}
                >
                  {/* Decorator line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-navy" />
                  
                  {isMega ? (
                    <MegaMenu item={item} />
                  ) : (
                    <DropdownMenu item={item} />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

