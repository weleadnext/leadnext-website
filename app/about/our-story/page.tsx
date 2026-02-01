import { FadeIn } from '@/components/animations/FadeIn';
import { BookOpen, Sparkles, Users, Target } from 'lucide-react';
import Image from 'next/image';

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy py-24 px-6 text-white relative overflow-hidden min-h-[80vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=2000"
          alt="Crowd of people representing a movement"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70"></div>
        
        <div className="mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Our <span className="text-teal">Story</span>
            </h1>
            <div className="space-y-6 text-lg text-gray-100 leading-relaxed">
              <p>
                Rooted in a commitment to a transformative future, LeadNext responds to the pressing need to redefine what leadership truly means in Nigeria, shifting focus away from the pursuit of frivolous titles and influence toward the development of <span className="font-semibold text-white">character, competence, accountability, and service</span> to the nation.
              </p>
              <p>
                LeadNext was founded on a simple but urgent belief: <span className="font-semibold text-teal">Nigeria's future rests on the quality of leaders we intentionally cultivate today.</span> We recognize that the challenges confronting our country demand leaders and citizens who think boldly, act ethically, and steward opportunities with responsibility and vision.
              </p>
              <p className="text-xl font-serif italic text-gold">
                "Great nations are built by a conscientious citizenry."
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="hidden lg:block relative h-[600px] w-full rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
             <Image
              src="/OUR STORY.png"
              alt="Nigerian youth looking forward"
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div> */}
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-24">
        
        {/* Key Principles Grid */}
        <FadeIn className="mb-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-navy mb-4">Our Foundation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built on four pillars that guide every initiative, program, and partnership we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border-t-4 border-teal hover:shadow-lg transition-shadow group">
              <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center text-teal mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Intentional Cultivation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe leadership is not accidental—it's intentionally developed through training, mentorship, and practice.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-t-4 border-gold hover:shadow-lg transition-shadow group">
              <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center text-gold mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Sparkles className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Transformative Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our focus is on building leaders who can transform governance and inspire collective progress across Nigeria.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-t-4 border-navy hover:shadow-lg transition-shadow group">
              <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center text-navy mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Conscientious Citizenry</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Great nations are built by citizens who are aware, engaged, and committed to the common good.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-t-4 border-teal hover:shadow-lg transition-shadow group">
              <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center text-teal mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Ethical Action</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We prepare leaders who think boldly, act ethically, and steward opportunities with responsibility.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn delay={0.2} className="relative rounded-3xl overflow-hidden shadow-2xl bg-navy">
          <div className="absolute inset-0">
             <Image
              src="/OUR STORY (Background for Join the movement).png"
              alt="Students learning together"
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40"></div>
          </div>
          
          <div className="relative z-10 p-12 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Join the Movement</h2>
              <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                Be part of the generation that transforms Nigeria through intentional leadership and civic engagement. Whether you're a student, professional, or partner, there's a place for you here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/initiatives/future-leaders-fellowship" className="bg-gold text-navy font-bold py-3 px-8 rounded hover:bg-white transition-colors text-center">
                  Future Leaders Fellowship
                </a>
                <a href="/get-involved/work-with-us?type=volunteer" className="bg-teal text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-navy transition-colors text-center">
                  Get Involved
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Optional: Visual element or empty space for the background image to show through */}
            </div>
          </div>
        </FadeIn>

      </div>
    </main>
  );
}
