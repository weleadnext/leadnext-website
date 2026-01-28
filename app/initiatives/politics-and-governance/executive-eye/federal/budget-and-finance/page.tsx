import { client } from '@/sanity/lib/client';
import { FEDERAL_BUDGET_QUERY } from '@/lib/sanity/queries';
import { FederalBudgetDashboard } from './FederalBudgetDashboard';

export const revalidate = 60;

export interface BudgetAllocation {
  sector: string;
  budgetType: 'Functional' | 'Economic';
  allocation: number;
  percentage: number;
  notes?: string;
}

export interface FederalBudgetDoc {
  _id: string;
  year: string;
  title?: string;
  totalAmount: number;
  status?: string;
  allocations?: BudgetAllocation[];
}

export default async function FederalBudgetPage() {
  const budgetDocs = await client.fetch<FederalBudgetDoc[]>(FEDERAL_BUDGET_QUERY);
  return <FederalBudgetDashboard budgetDocs={budgetDocs} />;
}
