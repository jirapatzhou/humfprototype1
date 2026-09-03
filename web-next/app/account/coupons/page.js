import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '../../../lib/auth';
import { prisma } from '../../../lib/prisma';

export const dynamic = 'force-dynamic';

export default async function CouponsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  const coupons = await prisma.coupon.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="page-wrap">
      <h1>My Coupons</h1>
      <p className="sub">Real rows from your account — a welcome coupon is issued automatically when you sign up.</p>

      {coupons.length === 0 ? (
        <p className="empty-state">No coupons yet.</p>
      ) : (
        <div className="coupon-grid">
          {coupons.map((c) => (
            <div key={c.id} className={`coupon-card ${c.status}`}>
              <div className="coupon-top">
                <span className="coupon-amount">{c.amountLabel}</span>
                <span className={`coupon-status ${c.status}`}>{c.status}</span>
              </div>
              <p className="coupon-title">{c.title}</p>
              <p className="coupon-desc">{c.description}</p>
              <div className="coupon-bottom">
                <span className="coupon-code">{c.code}</span>
                {c.expiresAt && (
                  <span className="coupon-expiry">
                    Expires {new Date(c.expiresAt).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
