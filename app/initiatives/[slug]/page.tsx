import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import { ProgramPageClient } from '@/components/initiatives/ProgramPageClient'
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
      <ProgramPageClient program={program} />
    </main>
  )
}
