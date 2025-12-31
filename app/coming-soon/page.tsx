import { FadeIn } from '@/components/animations/FadeIn';
import { ComingSoonMailingList } from '@/components/ComingSoonMailingList';
import { Rocket, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon | LeadNext',
  description: 'Explore upcoming programs, resources, and initiatives designed to empower the next generation of civic leaders in Nigeria.',
};

const comingSoonFeatures = [
  {
    id: 'short-courses',
    title: 'Short Courses & Training Programs',
    description: `LeadNext will be launching a dynamic series of short courses and training programs designed to equip young Nigerians with the skills, knowledge, and civic insight needed to thrive and make an impact in today's world. From environmental stewardship and entrepreneurship to civics, governance, politics, and social responsibility, these offerings will blend practical learning with real-world relevance. Whether you are looking to build skills, deepen civic awareness, or engage more meaningfully in your community, LeadNext's upcoming programs will prepare you to act responsibly, think critically, and contribute confidently to Nigeria's future.`,
    anchor: 'short-courses',
  },
  {
    id: 'scholarships',
    title: 'School Scholarship Programs',
    description: `LeadNext's school scholarship programs are designed to invest in high-potential students whose education and character will contribute to Nigeria's long-term development. By reducing financial barriers to education, these scholarships enable talented young people to pursue learning while being grounded in civic responsibility, ethical values, and service to the nation. Through strategic donor partnerships, LeadNext seeks to expand access to education, strengthen social mobility, and cultivate a generation of responsible citizens equipped to drive inclusive and sustainable national progress.`,
    anchor: 'scholarships',
  },
  {
    id: 'citizen-library',
    title: 'Citizen Library',
    description: `The LeadNext Online Citizen Library is an upcoming digital knowledge hub designed to inform, inspire, and empower Nigerians through accessible civic learning. The Library will bring together history, public policy, and civic education resources in one dynamic platform supporting a deeper understanding of Nigeria's past, present, and future. From the Nigerian story before colonization through the colonial era, military rule, and the republics, the Library will present key moments in our national journey in clear, engaging formats. The Citizen Library will offer a space for learning, reflection, and engagement helping transform knowledge into responsible citizenship and shared national progress. Users will also have access to downloadable learning materials, leadership publications, policy briefs, and civic education resources designed to strengthen civic awareness and informed participation.`,
    anchor: 'citizen-library',
  },
  {
    id: 'civics-center',
    title: 'Civics Center',
    description: `The LeadNext Online Civics Center will serve as a trusted resource for students, educators, and citizens seeking to better understand Nigeria's civic framework and their role in upholding a democratic, accountable, and united nation. The Center will provide clear, accessible resources that help citizens understand their rights, duties, and responsibilities, as well as the principles that bind individuals to the nation. Resources will be presented in formats that encourage learning, reflection, and practical civic awareness.`,
    anchor: 'civics-center',
  },
];

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gold text-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Rocket className="h-4 w-4" />
                What's Next
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
                Coming Soon
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're building the future of civic leadership in Nigeria. Explore upcoming programs, 
                resources, and initiatives designed to empower the next generation of change-makers.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-16">
            {comingSoonFeatures.map((feature, idx) => (
              <FadeIn key={feature.id} delay={idx * 0.1}>
                <article id={feature.anchor} className="border-l-4 border-teal pl-8 py-6 scroll-mt-24">
                  {/* Status Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate text-white">
                      <Clock className="h-3 w-3" />
                      COMING SOON
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                    {feature.title}
                  </h2>

                  {/* Description */}
                  <div className="text-lg leading-relaxed text-slate mb-8">
                    <p>{feature.description}</p>
                  </div>

                  {/* Mailing List Signup */}
                  <div className="mt-8">
                    <p className="text-sm text-gray-600 mb-3 font-medium">
                      Join our mailing list for updates on official launch
                    </p>
                    <ComingSoonMailingList />
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-white py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Want to Stay Updated?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our mailing list to receive updates on all upcoming programs and initiatives.
            </p>
            <ComingSoonMailingList variant="light" />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

