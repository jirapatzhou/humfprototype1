# HUMF — Next.js app (real backend)

This is the real, database-backed HUMF app — separate from the static
prototype in `public/`. It has a real Postgres database (via Prisma), real
Google sign-in, and pages that read/write actual rows instead of hardcoded
mock data.

**What's real right now:**
- Google sign-in — creates a real `User` row on first login, via Auth.js's
  Prisma adapter (database sessions, not just a JWT).
- `/branches` — branch list + live capacity from the database, with a real
  Leaflet map and browser-geolocation distance.
- `/membership` — plans/prices/features from the database; the buttons are
  real server actions that create/update a `Membership` row for the signed-in
  user.
- `/account` — real session data, real membership tier, real visit/coupon
  counts.
- `/account/coupons` — real, per-user coupon rows. A welcome coupon is
  issued automatically the moment an account is created (see
  `lib/auth.js`'s `createUser` event).
- `/account/visit-history` — real, per-user visit rows. Starts **empty** for
  every account — there's no branch check-in hardware wired up yet, so
  nothing here is fabricated demo data.

**Still a placeholder:** `/account/payment` shows realistic mock cards and
invoices — real billing needs a payment processor (Stripe, Opn Payments)
tied to a verified business account, which isn't set up. The page says so.

**Not ported yet:** Home/Blog are minimal; the fuller static-site versions
in `public/` haven't been rebuilt as real pages here.

## Run it locally

Needs a Postgres database. Easiest local option — Postgres is often
already installed:

```bash
cd web-next
npm install                      # runs `prisma generate` automatically

# Point Prisma + the app at a Postgres database. Prisma CLI reads .env,
# Next.js reads .env.local — put DATABASE_URL in both, or just in .env
# and let Next.js pick it up too (Next reads .env as a fallback).
cp .env.example .env.local
echo 'DATABASE_URL=postgres://user:password@localhost:5432/humf' > .env

npx prisma migrate dev --name init   # creates the tables
npm run db:seed                      # seeds the 4 branches + 2 plans

# fill in GOOGLE_CLIENT_SECRET and NEXTAUTH_SECRET in .env.local, then:
npm run dev
```

Open http://localhost:3000. Branches and Memberships work immediately
(no login needed). Sign-in needs a real `GOOGLE_CLIENT_SECRET` — see below.

## Deploy on Vercel

1. **Database first.** In your Vercel account: **Storage → Create Database
   → Postgres** (Neon-backed). Note the connection string it gives you —
   Prisma wants a single `DATABASE_URL`, so copy the value Vercel calls
   `POSTGRES_PRISMA_URL` (or `POSTGRES_URL`) into a `DATABASE_URL` env var.
2. **Add New… → Project**, import this GitHub repo again as a *separate*
   project (don't reuse the static site's project). Set **Root Directory**
   to `web-next`.
3. Connect the Postgres database to this project (Vercel prompts for this,
   or do it from the Storage tab).
4. Under **Project Settings → Environment Variables** (Production *and*
   Preview), add:
   - `DATABASE_URL` — from step 1
   - `GOOGLE_CLIENT_ID` — `177078323646-72a4s4cc30gpgno10suhu47i52733f4f.apps.googleusercontent.com`
   - `GOOGLE_CLIENT_SECRET` — from Google Cloud Console (see below). **Never
     paste this in chat or commit it — env vars only.**
   - `NEXTAUTH_SECRET` — any random string, e.g. output of `openssl rand -base64 32`
   - `NEXTAUTH_URL` — the exact Vercel URL Vercel gives this project,
     e.g. `https://humf-app.vercel.app`
5. Deploy. The build script (`prisma generate && prisma migrate deploy &&
   next build`) applies any pending migrations automatically on every
   deploy — no manual migration step needed after the first one.
6. **Seed the production database once**, from your machine, after the
   first successful deploy:
   ```bash
   DATABASE_URL="<the same value as step 4>" npm run db:seed
   ```

## Google Cloud Console setup

On the same OAuth client (`...72a4s4cc30gpgno10suhu47i52733f4f...`):

- **Authorized JavaScript origins** — the bare origin, no path:
  - `http://localhost:3000` (local dev)
  - `https://<your-vercel-url>` (production, once step 2 above gives you the URL)
- **Authorized redirect URIs** — the exact NextAuth callback path:
  - `http://localhost:3000/api/auth/callback/google`
  - `https://<your-vercel-url>/api/auth/callback/google`

These two fields are **not** the same value — origins have no path,
redirect URIs must be the exact callback URL.

The **Client Secret** lives on that same credential's page in Google Cloud
Console (click the credential name to reveal/reset it) — copy it straight
into Vercel's environment variables, not here.

## Next steps

- Port Home/Blog from `public/` into real pages here.
- Add a `FacebookProvider` to `lib/auth.js` once there's a Facebook
  Developer app and client ID/secret.
- Wire up real payments (Stripe or Opn Payments) for `/account/payment`
  once there's a verified business account to process real charges.
- Add a real branch check-in mechanism (NFC/QR scan hitting an API route
  that writes a `Visit` row) so Visit History actually fills in.
