import { FadeIn } from '@/components/animations/FadeIn';
import { Building2, Users, Briefcase, Target, ArrowDown } from 'lucide-react';

const STRUCTURE_LEVELS = [
  {
    number: "1",
    title: "Board of Trustees",
    description: "Governance, oversight, and strategic guidance",
    color: "bg-navy",
    textColor: "text-white",
    icon: Building2,
    responsibilities: [
      "Corporate governance and compliance",
      "Strategic oversight and guidance",
      "Financial oversight and accountability",
      "Policy development and approval"
    ]
  },
  {
    number: "2",
    title: "Executive Leadership",
    description: "Strategic direction and day-to-day operations",
    color: "bg-teal",
    textColor: "text-white",
    icon: Briefcase,
    responsibilities: [
      "Strategic planning and vision setting",
      "Day-to-day operational management",
      "Program development and oversight",
      "Stakeholder engagement and partnerships"
    ]
  },
  {
    number: "3",
    title: "Program Teams",
    description: "Execution of training, fellowships, and initiatives",
    color: "bg-gold",
    textColor: "text-navy",
    icon: Target,
    responsibilities: [
      "Program design and curriculum development",
      "Training delivery and facilitation",
      "Fellowship management and mentorship",
      "Impact measurement and reporting"
    ]
  }
];

export default function OrganizationalStructurePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy py-24 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-paper opacity-10"></div>
        <div className="mx-auto max-w-4xl relative z-10 text-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Organizational Structure
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Understanding how LeadNext is organized to deliver transformative leadership development
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-20">
        
        {/* Introduction */}
        <FadeIn className="mb-16 text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            LeadNext operates through a clear organizational structure designed to ensure effective governance, 
            strategic execution, and impactful program delivery. Our three-tier structure enables us to maintain 
            accountability while driving innovation in leadership development.
          </p>
        </FadeIn>

        {/* Structure Levels */}
        <div className="space-y-12 mb-20">
          {STRUCTURE_LEVELS.map((level, idx) => {
            const Icon = level.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.2}>
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className={`${level.color} p-8 text-white`}>
                    <div className="flex items-center gap-6">
                      <div className={`h-20 w-20 ${level.textColor === 'text-white' ? 'bg-white/20' : 'bg-navy/20'} rounded-full flex items-center justify-center shrink-0`}>
                        <span className={`font-serif text-3xl font-bold ${level.textColor}`}>{level.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="h-6 w-6" />
                          <h2 className="font-serif text-3xl font-bold">{level.title}</h2>
                        </div>
                        <p className="text-gray-100 text-lg">{level.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="font-serif text-xl font-bold text-navy mb-6">Key Responsibilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {level.responsibilities.map((responsibility, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-3">
                          <div className={`h-2 w-2 rounded-full ${level.color} mt-2 shrink-0`}></div>
                          <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Visual Hierarchy */}
        <FadeIn delay={0.6} className="mb-20">
          <div className="bg-gray-50 rounded-2xl p-12 border border-gray-100">
            <h2 className="font-serif text-3xl font-bold text-navy mb-12 text-center">Organizational Hierarchy</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {STRUCTURE_LEVELS.map((level, idx) => {
                  const Icon = level.icon;
                  return (
                    <div key={idx} className="flex items-center gap-6">
                      <div className={`${level.color} ${level.textColor} h-16 w-16 rounded-full flex items-center justify-center shrink-0 font-serif text-xl font-bold`}>
                        {level.number}
                      </div>
                      <div className="flex-1 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className={`h-5 w-5 ${level.color.replace('bg-', 'text-')}`} />
                          <h3 className="font-serif text-xl font-bold text-navy">{level.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{level.description}</p>
                      </div>
                      {idx < STRUCTURE_LEVELS.length - 1 && (
                        <div className="absolute left-8 mt-16">
                          <ArrowDown className="h-6 w-6 text-gray-300" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Governance Principles */}
        <FadeIn delay={0.8} className="text-center">
          <div className="bg-navy rounded-2xl p-12 text-white">
            <h2 className="font-serif text-3xl font-bold mb-6">Governance Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-10">
              <div>
                <h3 className="font-serif text-xl font-bold mb-3">Transparency</h3>
                <p className="text-gray-200 text-sm">Open communication and clear decision-making processes</p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-3">Accountability</h3>
                <p className="text-gray-200 text-sm">Clear roles, responsibilities, and performance metrics</p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-gray-200 text-sm">Cross-functional teamwork and shared vision</p>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </main>
  );
}

