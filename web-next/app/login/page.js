'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') router.replace('/dashboard');
  }, [status, router]);

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Log in to HUMF</h1>
        <p>Welcome back — pick up right where you left off.</p>

        <button
          type="button"
          className="oauth-btn"
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46c-.28 1.5-1.13 2.77-2.4 3.62v3h3.88c2.27-2.09 3.56-5.17 3.56-8.81Z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.92l-3.88-3c-1.08.72-2.45 1.15-4.06 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.09C3.23 21.3 7.31 24 12 24Z"/>
            <path fill="#FBBC05" d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54V6.64H1.26a12 12 0 0 0 0 10.72l4.01-3.09Z"/>
            <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.23 2.7 1.26 6.64l4.01 3.09C6.22 6.88 8.87 4.77 12 4.77Z"/>
          </svg>
          Continue with Google
        </button>

        <button type="button" className="oauth-btn" disabled title="Facebook login is coming next">
          Continue with Facebook
        </button>

        <a className="auth-back" href="/">← Back to HUMF</a>
      </div>
    </main>
  );
}
