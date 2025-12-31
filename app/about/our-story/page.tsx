import { FadeIn } from '@/components/animations/FadeIn';
import { BookOpen, Sparkles, Users, Target } from 'lucide-react';

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy py-24 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-paper opacity-10"></div>
        <div className="mx-auto max-w-4xl relative z-10 text-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              A journey of intentional leadership cultivation and national transformation
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-20">
        
        {/* Main Story Content */}
        <FadeIn>
          <div className="prose prose-lg max-w-none">
            <div className="flex items-start gap-6 mb-12">
              <div className="h-16 w-16 bg-teal/10 rounded-full flex items-center justify-center text-teal shrink-0">
                <BookOpen className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Rooted in a commitment to a transformative future, LeadNext responds to the pressing need to redefine what leadership truly means in Nigeria, shifting focus away from the pursuit of frivolous titles and influence toward the development of <span className="font-semibold text-navy">character, competence, accountability, and service</span> to the nation.
                </p>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  LeadNext was founded on a simple but urgent belief: <span className="font-semibold text-teal">Nigeria's future rests on the quality of leaders we intentionally cultivate today.</span> We recognize that the challenges confronting our country demand leaders and citizens who think boldly, act ethically, and steward opportunities with responsibility and vision.
                </p>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  We are grounded in the conviction that <span className="font-semibold text-gold">great nations are built by a conscientious citizenry</span>, and such citizenry is cultivated with intention.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Key Principles Grid */}
        <FadeIn delay={0.2} className="mt-20">
          <h2 className="font-serif text-3xl font-bold text-navy mb-12 text-center">Our Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-teal">
              <div className="h-12 w-12 bg-teal/10 rounded-full flex items-center justify-center text-teal mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Intentional Cultivation</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe leadership is not accidental—it's intentionally developed through training, mentorship, and practice.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-gold">
              <div className="h-12 w-12 bg-gold/20 rounded-full flex items-center justify-center text-gold mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Transformative Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our focus is on building leaders who can transform governance and inspire collective progress across Nigeria.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-navy">
              <div className="h-12 w-12 bg-navy/10 rounded-full flex items-center justify-center text-navy mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Conscientious Citizenry</h3>
              <p className="text-gray-600 leading-relaxed">
                Great nations are built by citizens who are aware, engaged, and committed to the common good.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-teal">
              <div className="h-12 w-12 bg-teal/10 rounded-full flex items-center justify-center text-teal mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Ethical Action</h3>
              <p className="text-gray-600 leading-relaxed">
                We prepare leaders who think boldly, act ethically, and steward opportunities with responsibility.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn delay={0.4} className="mt-20 text-center">
          <div className="bg-navy rounded-2xl p-12 text-white">
            <h2 className="font-serif text-3xl font-bold mb-4">Join the Movement</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Be part of the generation that transforms Nigeria through intentional leadership and civic engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/initiatives" className="bg-gold text-navy font-bold py-3 px-8 rounded hover:bg-white transition-colors">
                Explore Programs
              </a>
              <a href="/about/get-involved" className="bg-teal text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-navy transition-colors">
                Get Involved
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </main>
  );
}

