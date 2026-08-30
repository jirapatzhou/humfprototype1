# HUMF — Next.js app (real login)

This is a fresh Next.js (App Router) build, separate from the static site in
`public/`. It exists to carry real Google/Facebook sign-in, which a static
site can't do (OAuth needs a server to hold the client secret).

Right now it has: a landing page, a login page with a working
**Continue with Google** button, and a protected `/dashboard` page that
shows the signed-in user's name, email, and avatar from Google.

## Run it locally

```bash
cd web-next
npm install
cp .env.example .env.local   # then fill in GOOGLE_CLIENT_SECRET and NEXTAUTH_SECRET
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

Same GitHub → Vercel pipeline as before, just pointed at this subfolder:

1. In Vercel, **Add New… → Project**, import this same GitHub repo again
   (as a *separate* project — don't reuse the static site's project).
2. Set **Root Directory** to `web-next`.
3. Under **Project Settings → Environment Variables**, add (Production
   *and* Preview):
   - `GOOGLE_CLIENT_ID` — `177078323646-72a4s4cc30gpgno10suhu47i52733f4f.apps.googleusercontent.com`
   - `GOOGLE_CLIENT_SECRET` — from Google Cloud Console (see below). **Never
     paste this in chat or commit it — env vars only.**
   - `NEXTAUTH_SECRET` — any random string, e.g. output of `openssl rand -base64 32`
   - `NEXTAUTH_URL` — the exact Vercel URL Vercel gives this project,
     e.g. `https://humf-app.vercel.app`
4. Deploy. Vercel builds Next.js natively — no `vercel.json` needed.

## Google Cloud Console setup

On the same OAuth client (`...72a4s4cc30gpgno10suhu47i52733f4f...`):

- **Authorized JavaScript origins** — the bare origin, no path:
  - `http://localhost:3000` (local dev)
  - `https://<your-vercel-url>` (production, once step 3 above gives you the URL)
- **Authorized redirect URIs** — the exact NextAuth callback path:
  - `http://localhost:3000/api/auth/callback/google`
  - `https://<your-vercel-url>/api/auth/callback/google`

These two fields are **not** the same value — origins have no path,
redirect URIs must be the exact callback URL.

The **Client Secret** lives on that same credential's page in Google Cloud
Console (click the credential name to reveal/reset it) — copy it straight
into Vercel's environment variables, not here.

## Next steps

- Port the remaining static pages (Branches, Memberships, Blog, Account)
  from `public/` into `app/` as real routes.
- Add a `FacebookProvider` to `lib/auth.js` once there's a Facebook
  Developer app and client ID/secret.
- Decide where session data lives long-term (Vercel Postgres, etc.) once
  there's more than "who is logged in" to store.
