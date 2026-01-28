import { client } from '@/sanity/lib/client';
import { SENATE_CABINET_MEMBERS_QUERY } from '@/lib/sanity/queries';
import { SenateCabinetList } from './SenateCabinetList';

export const revalidate = 60;

interface SenateMember {
  _id: string;
  name: string;
  portfolio: string;
  wikiUrl?: string;
  senatorialZone?: string;
  stateName?: string;
  image?: any;
}

export default async function SenateCabinetPage() {
  const members = await client.fetch<SenateMember[]>(SENATE_CABINET_MEMBERS_QUERY);

  return <SenateCabinetList members={members} />;
}
