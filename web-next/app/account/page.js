import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { authOptions } from '../../lib/auth';
import { prisma } from '../../lib/prisma';
import SignOutButton from './sign-out-button';

export const dynamic = 'force-dynamic';

export default async function AccountPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  const userId = session.user.id;

  const [membership, couponCount, visits] = await Promise.all([
    prisma.membership.findFirst({
      where: { userId, status: 'active' },
      include: { plan: true },
      orderBy: { startedAt: 'desc' },
    }),
    prisma.coupon.count({ where: { userId, status: 'active' } }),
    prisma.visit.findMany({ where: { userId }, select: { branchId: true } }),
  ]);

  const branchesUsed = new Set(visits.map((v) => v.branchId)).size;

  return (
    <main className="account-page">
      <div className="account-card">
        {session.user.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={session.user.image} alt="" className="avatar" />
        )}
        <h1>{session.user.name}</h1>
        <p className="email">{session.user.email}</p>

        <span className="tier-badge">
          {membership ? membership.plan.name : 'No active membership'}
        </span>

        <div className="stat-row">
          <div className="stat">
            <div className="stat-num">{visits.length}</div>
            <div className="stat-label">Visits logged</div>
          </div>
          <div className="stat">
            <div className="stat-num">{branchesUsed}</div>
            <div className="stat-label">Branches used</div>
          </div>
        </div>

        {!membership && (
          <Link className="btn-pink" href="/membership">
            Choose a membership
          </Link>
        )}

        <div className="account-links">
          <Link className="list-row" href="/account/coupons">
            <span>My Coupons</span>
            <span className="trail">{couponCount} active</span>
          </Link>
          <Link className="list-row" href="/account/visit-history">
            <span>Visit &amp; Purchase History</span>
            <span className="chevron">→</span>
          </Link>
          <Link className="list-row" href="/account/payment">
            <span>Manage my payment</span>
            <span className="chevron">→</span>
          </Link>
          <Link className="list-row" href="/membership">
            <span>{membership ? 'Change membership' : 'Choose a membership'}</span>
            <span className="chevron">→</span>
          </Link>
        </div>

        <SignOutButton />
      </div>
    </main>
  );
}
