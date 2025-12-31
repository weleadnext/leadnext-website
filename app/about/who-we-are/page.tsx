import { FadeIn } from '@/components/animations/FadeIn';
import { Users, Award, Briefcase } from 'lucide-react';
import Image from 'next/image';

const TEAM_MEMBERS = [
  {
    name: "Bello M. Zailani",
    credentials: "D.Eng, PMP",
    role: "Executive Director/Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Abubakar M. Zailani",
    credentials: "Msc, MBA",
    role: "Board Member",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  }
];

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy py-24 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-paper opacity-10"></div>
        <div className="mx-auto max-w-4xl relative z-10 text-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Meet the leadership team driving LeadNext's mission to transform governance in Nigeria
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-20">
        
        {/* Leadership Team Section */}
        <FadeIn className="mb-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Users className="h-8 w-8 text-teal" />
              <h2 className="font-serif text-4xl font-bold text-navy">Leadership Team</h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our leadership brings together decades of experience in engineering, project management, and strategic governance to drive LeadNext's vision forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-80 bg-gradient-to-br from-navy to-teal">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-gold" />
                      <span className="text-white font-semibold text-sm">{member.credentials}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="h-5 w-5 text-teal" />
                    <span className="text-sm font-semibold text-teal uppercase tracking-wider">{member.role}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy mb-4">{member.name}</h3>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {member.role === "Executive Director/Founder" 
                        ? "Leading LeadNext's strategic vision and operations, driving our mission to cultivate transformative leadership across Nigeria."
                        : "Providing strategic oversight and governance expertise to guide LeadNext's mission and impact."}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Contact Section */}
        <FadeIn delay={0.6} className="mt-16 text-center">
          <div className="bg-navy rounded-2xl p-12 text-white">
            <h2 className="font-serif text-3xl font-bold mb-4">Connect With Our Team</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Interested in partnering with us or learning more about our leadership? We'd love to hear from you.
            </p>
            <a href="/contact" className="inline-block bg-gold text-navy font-bold py-3 px-8 rounded hover:bg-white transition-colors">
              Get in Touch
            </a>
          </div>
        </FadeIn>

      </div>
    </main>
  );
}

