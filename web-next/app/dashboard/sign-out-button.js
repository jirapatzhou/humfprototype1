'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <button type="button" className="btn-obsidian" onClick={() => signOut({ callbackUrl: '/' })}>
      Log out
    </button>
  );
}
