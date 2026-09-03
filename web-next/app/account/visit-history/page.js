import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '../../../lib/auth';
import { prisma } from '../../../lib/prisma';

export const dynamic = 'force-dynamic';

export default async function VisitHistoryPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  const visits = await prisma.visit.findMany({
    where: { userId: session.user.id },
    include: { branch: true },
    orderBy: { checkedInAt: 'desc' },
  });

  return (
    <main className="page-wrap">
      <h1>Visit &amp; Purchase History</h1>
      <p className="sub">Real check-ins for your account. This starts empty — HUMF doesn't have branch check-in hardware wired up yet, so nothing here is fabricated.</p>

      {visits.length === 0 ? (
        <p className="empty-state">No visits logged yet. Once branch check-in is wired up, they'll show here.</p>
      ) : (
        <div className="list-card">
          {visits.map((v) => (
            <div key={v.id} className="visit-row">
              <div className="visit-branch">{v.branch.name}</div>
              <div className="visit-meta">{new Date(v.checkedInAt).toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
