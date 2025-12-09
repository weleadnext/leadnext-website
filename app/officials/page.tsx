import { OfficialsList } from "@/components/OfficialsList";
import { client } from "@/sanity/lib/client";
import { OFFICIALS_QUERY } from "@/sanity/lib/queries";
import { FadeIn } from "@/components/animations/FadeIn";

export const revalidate = 60;

export default async function OfficialsPage() {
  const officials = await client.fetch(OFFICIALS_QUERY);

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-slate mb-4">Government Officials</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            A comprehensive directory of public servants serving at federal, state, and local levels.
          </p>
        </FadeIn>

        <OfficialsList initialOfficials={officials} />
      </div>
    </main>
  );
}

