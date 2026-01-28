import { client } from '@/sanity/lib/client';
import { FEDERAL_BUDGET_QUERY } from '@/lib/sanity/queries';
import { FederalBudgetDashboard } from './FederalBudgetDashboard';

export const revalidate = 60;

interface BudgetEntry {
  _id: string;
  year: string;
  budgetType: 'Functional' | 'Economic';
  sector: string;
  allocation: number;
  percentage: number;
  notes?: string;
}

export default async function FederalBudgetPage() {
  const budgetData = await client.fetch<BudgetEntry[]>(FEDERAL_BUDGET_QUERY);

  return <FederalBudgetDashboard budgetData={budgetData} />;
}
