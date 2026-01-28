import { client } from '@/sanity/lib/client';
import { HOUSE_CABINET_MEMBERS_QUERY } from '@/lib/sanity/queries';
import { HouseCabinetList } from './HouseCabinetList';

export const revalidate = 60;

interface HouseMember {
  _id: string;
  name: string;
  portfolio: string;
  wikiUrl?: string;
  constituency?: string;
  stateName?: string;
  image?: any;
}

export default async function HouseCabinetPage() {
  const members = await client.fetch<HouseMember[]>(HOUSE_CABINET_MEMBERS_QUERY);

  return <HouseCabinetList members={members} />;
}
