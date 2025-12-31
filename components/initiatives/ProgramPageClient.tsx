'use client';

import { useState } from 'react';
import { ApplicationModal } from '@/components/ApplicationForm/ApplicationModal';
import { InitiativeHero } from '@/components/initiatives/InitiativeHero';
import { InitiativeSidebar } from '@/components/initiatives/InitiativeSidebar';
import { InitiativeContent } from '@/components/initiatives/InitiativeContent';

interface ProgramPageClientProps {
  program: {
    _id: string;
    title: string;
    description: string;
    mainImage: any;
    overview: any[];
    whatItOffers?: string[];
    programStructure?: any;
    eligibilityCriteria?: string[];
    applyText?: any[];
  };
}

export const ProgramPageClient = ({ program }: ProgramPageClientProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <InitiativeHero 
        title={program.title} 
        description={program.description} 
        image={program.mainImage}
        onApplyClick={() => setIsModalOpen(true)}
      />
      
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <InitiativeSidebar onApplyClick={() => setIsModalOpen(true)} />
          </aside>

          <div className="lg:col-span-9">
            <InitiativeContent 
                overview={program.overview} 
                whatItOffers={program.whatItOffers}
                programStructure={program.programStructure}
                eligibilityCriteria={program.eligibilityCriteria}
                applyText={program.applyText}
                onApplyClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programId={program._id}
        programTitle={program.title}
      />
    </>
  );
};

