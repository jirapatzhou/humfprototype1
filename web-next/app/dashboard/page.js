import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '../../lib/auth';
import SignOutButton from './sign-out-button';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  return (
    <main className="dashboard">
      <div className="dashboard-card">
        {session.user?.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={session.user.image} alt="" className="avatar" />
        )}
        <h1>Welcome, {session.user?.name}</h1>
        <p>{session.user?.email}</p>
        <SignOutButton />
      </div>
    </main>
  );
}
