import { FadeIn } from '@/components/animations/FadeIn';
import { CheckCircle2, Eye, Target, Heart, Shield, Scale, Users } from 'lucide-react';
import Image from 'next/image';

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
        <Image
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000"
          alt="Diverse group of people collaborating"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/90"></div>
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

      {/* Mission Statement */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 bg-teal/10 rounded-full flex items-center justify-center text-teal shrink-0">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-4xl font-bold text-navy">Mission Statement</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our mission at LeadNext is to cultivate a continuous citizenry committed to national progress by delivering high-quality leadership training, civic education, and fellowships, developing the depth of character and competence essential for a transformative future. We aim to provide the tools, data, and platforms necessary to transform passive Nigerians into active change makers.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {HIGHLIGHTS.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border-l-4 border-gold shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-teal shrink-0" />
                    <span className="font-medium text-slate">{highlight}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
                alt="Team planning strategy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-serif text-2xl font-bold mb-2">Empowering Change</p>
                <p className="opacity-90">Building the next generation of civic leaders</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                alt="City skyline representing future vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-serif text-2xl font-bold mb-2">A Visionary Nigeria</p>
                <p className="opacity-90">Inclusive, prosperous, and progressive</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 bg-gold/20 rounded-full flex items-center justify-center text-gold shrink-0">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-4xl font-bold text-navy">Vision Statement</h2>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Our vision at LeadNext is to cultivate a new generation of leaders grounded in character, driven by courage, and empowered with the capacity to transform governance, inspire collective progress, and build a more inclusive, prosperous, and visionary Nigeria.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100/50 -skew-x-12 transform translate-x-1/4"></div>
        
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <FadeIn delay={0.4}>
            <div className="flex items-start gap-4 mb-16 justify-center">
              <div className="h-12 w-12 bg-navy/10 rounded-full flex items-center justify-center text-navy shrink-0">
                <Heart className="h-6 w-6" />
              </div>
              <div className="text-center max-w-3xl">
                <h2 className="font-serif text-4xl font-bold text-navy mb-4">Core Values</h2>
                <p className="text-lg text-gray-600">
                  At LeadNext, our values serve as the foundation for the leadership culture we cultivate. Each value reinforces our mission to develop emerging leaders of character and competence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VALUES.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <FadeIn key={idx} delay={0.1 * idx} className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="h-14 w-14 bg-navy text-white rounded-lg flex items-center justify-center font-serif text-2xl font-bold mb-6 group-hover:bg-teal transition-colors">
                      {value.number}
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="h-6 w-6 text-teal" />
                      <h3 className="font-serif text-xl font-bold text-navy">{value.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                  </FadeIn>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
