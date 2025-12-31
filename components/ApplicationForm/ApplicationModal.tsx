'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ApplicationForm } from './ApplicationForm';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  programId: string;
  programTitle: string;
}

export const ApplicationModal = ({ isOpen, onClose, programId, programTitle }: ApplicationModalProps) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-navy text-white p-6 flex items-center justify-between shrink-0">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-1">Apply to {programTitle}</h2>
                  <p className="text-gray-200 text-sm">Fill out the form below to submit your application</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gold transition-colors p-2 hover:bg-white/10 rounded-full shrink-0"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Form - Scrollable */}
              <div className="overflow-y-auto flex-1">
                <div className="p-6">
                  <ApplicationForm programId={programId} programTitle={programTitle} onSuccess={onClose} />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

