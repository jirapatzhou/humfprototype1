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

1. **Database first.** If you connected a Neon project directly (rather
   than through Vercel's Storage tab), Neon gives you two connection
   strings from its dashboard: a **pooled** one (hostname has `-pooler` in
   it) and a **direct/unpooled** one (same hostname, no `-pooler`). Prisma
   needs both — see `.env.example` for the exact shape:
   - `DATABASE_URL` = the pooled string, with `&pgbouncer=true` appended
     (used for normal app queries)
   - `DIRECT_URL` = the unpooled string, as-is (used only for migrations —
     PgBouncer's transaction pooling mode can't run `prisma migrate`)

   If you instead used Vercel's own **Storage → Create Database → Postgres**
   (also Neon-backed), Vercel auto-injects several `POSTGRES_*` variables —
   map `POSTGRES_PRISMA_URL` to `DATABASE_URL` and `POSTGRES_URL_NON_POOLING`
   to `DIRECT_URL`.
2. **Add New… → Project**, import this GitHub repo again as a *separate*
   project (don't reuse the static site's project). Set **Root Directory**
   to `web-next`.
3. Under **Project Settings → Environment Variables** (Production *and*
   Preview), add:
   - `DATABASE_URL` and `DIRECT_URL` — from step 1
   - `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — from Google Cloud Console
     (see below). **Never paste these in chat or commit them — env vars only.**
   - `NEXTAUTH_SECRET` — any random string, e.g. output of `openssl rand -base64 32`
   - `NEXTAUTH_URL` — the exact Vercel URL Vercel gives this project. The
     default `*.vercel.app` URL is completely fine to launch on — you do
     **not** need to buy a custom domain first. HTTPS is included, nothing
     about auth or the database cares whether the domain was purchased.
     If you add a custom domain later, just update this value and the two
     Google Console fields below to match — nothing else changes.
4. Deploy. The build script (`prisma generate && prisma migrate deploy &&
   next build`) applies any pending migrations automatically on every
   deploy — no manual migration step needed after the first one.
5. **Seed the production database once**, from your own machine (this
   can't be run from a sandboxed CI/agent environment that only allows
   HTTPS egress to an allowlist — direct Postgres connections get blocked):
   ```bash
   DATABASE_URL="<same as step 3>" DIRECT_URL="<same as step 3>" npm run db:seed
   ```

## Google Cloud Console setup

On your OAuth client:

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

## Deploy trigger note

This paragraph exists to create the first commit-triggered deployment of
this branch — Vercel can't be pointed at a branch as its Production Branch
until at least one deployment of that branch exists.
