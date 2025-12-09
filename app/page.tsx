import { Hero } from "@/components/Hero";
import { FocusAreas } from "@/components/FocusAreas";
import { MissionSection } from "@/components/MissionSection";
import { FeaturedPrograms } from "@/components/FeaturedPrograms";
import { ImpactSection } from "@/components/ImpactSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { JoinActionGrid } from "@/components/JoinActionGrid";
import { client } from "@/sanity/lib/client";
import { PROGRAMS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Home() {
  let featuredPrograms = [];
  try {
    const programs = await client.fetch(PROGRAMS_QUERY);
    featuredPrograms = programs.slice(0, 3);
  } catch (error) {
    console.error("Failed to fetch programs:", error);
  }

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <FocusAreas />
      <MissionSection />
      <FeaturedPrograms programs={featuredPrograms} />
      <ImpactSection />
      <TestimonialsSection />
      <PartnersSection />
      <JoinActionGrid />
    </main>
  );
}
