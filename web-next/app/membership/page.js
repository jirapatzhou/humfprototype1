import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../lib/auth';
import { prisma } from '../../lib/prisma';
import { selectPlan } from './actions';

export const dynamic = 'force-dynamic';

export default async function MembershipPage() {
  const session = await getServerSession(authOptions);
  const plans = await prisma.plan.findMany({ orderBy: { priceThb: 'asc' } });

  let currentPlanKey = null;
  if (session) {
    const membership = await prisma.membership.findFirst({
      where: { userId: session.user.id, status: 'active' },
      include: { plan: true },
    });
    currentPlanKey = membership?.plan.key ?? null;
  }

  return (
    <main className="membership-page">
      <h1>Memberships</h1>
      <p className="sub">Real plans, pulled live from the database.</p>

      <div className="plan-grid">
        {plans.map((plan) => {
          const features = Array.isArray(plan.features) ? plan.features : [];
          const isCurrent = plan.key === currentPlanKey;
          return (
            <div key={plan.id} className={`plan-card ${plan.key === 'elite' ? 'elite' : ''}`}>
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">
                ฿{plan.priceThb}
                <span> / month</span>
              </div>
              <ul className="plan-features">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <form action={selectPlan}>
                <input type="hidden" name="planKey" value={plan.key} />
                <button type="submit" className="plan-cta" disabled={isCurrent}>
                  {isCurrent ? 'Current plan' : session ? 'Select this plan' : 'Log in to select'}
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </main>
  );
}
