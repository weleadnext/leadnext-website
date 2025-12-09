import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import { InitiativeHero } from '@/components/initiatives/InitiativeHero'
import { InitiativeSidebar } from '@/components/initiatives/InitiativeSidebar'
import { InitiativeContent } from '@/components/initiatives/InitiativeContent'
import { InitiativeStats } from '@/components/initiatives/InitiativeStats'
import { InitiativeFAQ } from '@/components/initiatives/InitiativeFAQ'
import { PROGRAM_BY_SLUG_QUERY } from '@/sanity/lib/queries'

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch(groq`*[_type == "program"]{ "slug": slug.current }`)
  return slugs.map((s: any) => ({ slug: s.slug }))
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = await client.fetch(PROGRAM_BY_SLUG_QUERY, { slug })

  if (!program) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <InitiativeHero 
        title={program.title} 
        description={program.description} 
        image={program.mainImage} 
      />
      
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <InitiativeSidebar />
          </aside>

          <div className="lg:col-span-9">
            <InitiativeContent 
                overview={program.overview} 
                curriculum={program.curriculum} 
                testimonials={program.testimonials}
            />
            {program.stats && <InitiativeStats stats={program.stats} />}
            {program.faqs && <InitiativeFAQ faqs={program.faqs} />}
          </div>
        </div>
      </div>
    </main>
  )
}
