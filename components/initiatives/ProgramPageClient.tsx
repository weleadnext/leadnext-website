'use client';

import { useState, useEffect } from 'react';
import { ApplicationModal } from '@/components/ApplicationForm/ApplicationModal';
import { InitiativeHero } from '@/components/initiatives/InitiativeHero';
import { InitiativeSidebar } from '@/components/initiatives/InitiativeSidebar';
import { InitiativeContent } from '@/components/initiatives/InitiativeContent';

interface ApplicationStatus {
  canApply: boolean;
  message: string;
  activeCohort: {
    id: string;
    name: string;
  } | null;
}

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
    applicationsOpen?: boolean;
  };
}

export const ProgramPageClient = ({ program }: ProgramPageClientProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState<ApplicationStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch application status
  useEffect(() => {
    const fetchApplicationStatus = async () => {
      try {
        const response = await fetch(`/api/programs/${program._id}/application-status`);
        if (response.ok) {
          const status = await response.json();
          setApplicationStatus(status);
        }
      } catch (error) {
        console.error('Failed to fetch application status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplicationStatus();
  }, [program._id]);

  const handleApplyClick = () => {
    if (applicationStatus?.canApply) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <InitiativeHero 
        title={program.title} 
        description={program.description} 
        image={program.mainImage}
        onApplyClick={handleApplyClick}
        canApply={applicationStatus?.canApply ?? false}
        applicationMessage={applicationStatus?.message}
        isLoading={isLoading}
      />
      
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <InitiativeSidebar 
              onApplyClick={handleApplyClick}
              canApply={applicationStatus?.canApply ?? false}
              applicationMessage={applicationStatus?.message}
              isLoading={isLoading}
            />
          </aside>

          <div className="lg:col-span-9">
            <InitiativeContent 
                overview={program.overview} 
                whatItOffers={program.whatItOffers}
                programStructure={program.programStructure}
                eligibilityCriteria={program.eligibilityCriteria}
                applyText={program.applyText}
                onApplyClick={handleApplyClick}
                canApply={applicationStatus?.canApply ?? false}
                applicationMessage={applicationStatus?.message}
                isLoading={isLoading}
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

