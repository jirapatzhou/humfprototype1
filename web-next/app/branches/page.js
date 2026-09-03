import { prisma } from '../../lib/prisma';
import BranchList from './branch-list';

export const dynamic = 'force-dynamic';

export default async function BranchesPage() {
  const branches = await prisma.branch.findMany({ orderBy: { name: 'asc' } });

  return (
    <main className="branches-page">
      <h1>Find a HUMF near you</h1>
      <p className="sub">Branches pulled live from the database, with real capacity numbers.</p>
      <BranchList branches={branches} />
    </main>
  );
}
