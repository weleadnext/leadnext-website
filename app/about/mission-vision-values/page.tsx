import { FadeIn } from '@/components/animations/FadeIn';
import { CheckCircle2, Eye, Target, Heart, Shield, Scale, Users } from 'lucide-react';

const VALUES = [
  {
    number: "1",
    title: "Competence",
    description: "We equip emerging leaders with the knowledge, skills, and strategic clarity required for transformative leadership. Competence ensures that the character and courage we cultivate translate into real impact for communities across Nigeria.",
    icon: Target
  },
  {
    number: "2",
    title: "Accountability",
    description: "We hold ourselves and our leaders to the highest standards of responsibility. This commitment strengthens public trust and supports our mission to shape leaders capable of redefining governance through ethical and transparent action.",
    icon: Shield
  },
  {
    number: "3",
    title: "Transparency",
    description: "Open and honest leadership is essential for transforming governance. Transparency empowers citizens, promotes better decision-making, and aligns with our mission to deliver civic education that strengthens democratic practice.",
    icon: Eye
  },
  {
    number: "4",
    title: "Justice",
    description: "Equity and fairness are central to the inclusive Nigeria we envision. This value guides our efforts to cultivate leaders who uphold the rights of all citizens and advance policies that promote shared prosperity.",
    icon: Scale
  },
  {
    number: "5",
    title: "Stewardship",
    description: "We believe leadership is a service to community and country. By instilling a mindset of responsible stewardship, we prepare leaders who can manage resources wisely and drive sustainable national progress.",
    icon: Users
  }
];

const HIGHLIGHTS = [
  "Data-Driven Advocacy",
  "Community Resilience",
  "Policy Research & Analysis",
  "Civic Tech Solutions"
];

export default function MissionVisionValuesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy py-24 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-paper opacity-10"></div>
        <div className="mx-auto max-w-4xl relative z-10 text-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Mission, Vision & Values
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              The principles that guide our commitment to building a better Nigeria
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-20">
        
        {/* Mission Statement */}
        <FadeIn className="mb-20">
          <div className="flex items-start gap-4 mb-8">
            <div className="h-12 w-12 bg-teal/10 rounded-full flex items-center justify-center text-teal shrink-0">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-navy mb-6">Mission Statement</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our mission at LeadNext is to cultivate a continuous citizenry committed to national progress by delivering high-quality leadership training, civic education, and fellowships, developing the depth of character and competence essential for a transformative future. We aim to provide the tools, data, and platforms necessary to transform passive Nigerians into active change makers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {HIGHLIGHTS.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border-l-4 border-gold">
                    <CheckCircle2 className="h-5 w-5 text-teal shrink-0" />
                    <span className="font-medium text-slate">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Vision Statement */}
        <FadeIn delay={0.2} className="mb-20">
          <div className="flex items-start gap-4 mb-8">
            <div className="h-12 w-12 bg-gold/20 rounded-full flex items-center justify-center text-gold shrink-0">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-navy mb-6">Vision Statement</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision at LeadNext is to cultivate a new generation of leaders grounded in character, driven by courage, and empowered with the capacity to transform governance, inspire collective progress, and build a more inclusive, prosperous, and visionary Nigeria.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Values */}
        <FadeIn delay={0.4}>
          <div className="flex items-start gap-4 mb-12">
            <div className="h-12 w-12 bg-navy/10 rounded-full flex items-center justify-center text-navy shrink-0">
              <Heart className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-navy mb-4">Values</h2>
              <p className="text-lg text-gray-600 mb-12 max-w-3xl">
                At LeadNext, our values serve as the foundation for the leadership culture we cultivate. Each value reinforces our mission to develop emerging leaders of character and competence, and advances our vision of building a more inclusive, prosperous, and visionary Nigeria.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <FadeIn key={idx} delay={0.1 * idx} className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="h-16 w-16 bg-navy text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold shrink-0">
                      {value.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="h-6 w-6 text-teal" />
                        <h3 className="font-serif text-2xl font-bold text-navy">{value.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </FadeIn>

      </div>
    </main>
  );
}

