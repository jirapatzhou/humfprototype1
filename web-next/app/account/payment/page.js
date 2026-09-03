import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '../../../lib/auth';

export default async function PaymentPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  return (
    <main className="page-wrap">
      <h1>Manage My Payment</h1>
      <p className="sub sub-note">
        Placeholder data — real billing needs a payment processor (Stripe, Opn Payments) with a
        verified business account, which isn't connected yet.
      </p>

      <div className="list-card">
        <div className="card-row">
          <span>•••• •••• •••• 4821 (Visa)</span>
          <span className="card-default">Default</span>
        </div>
        <div className="card-row">
          <span>•••• •••• •••• 9013 (Mastercard)</span>
        </div>
      </div>

      <div className="list-card">
        <div className="invoice-row">
          <span>Elite Package — Monthly</span>
          <span>฿690</span>
        </div>
        <div className="invoice-row">
          <span>Starter Package — Monthly</span>
          <span>฿349</span>
        </div>
      </div>
    </main>
  );
}
