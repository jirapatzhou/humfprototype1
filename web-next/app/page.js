import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="landing">
      <div>
        <span className="badge-nextjs">HUMF · Next.js, real backend</span>
        <p className="hero-eyebrow">Humanity · Ultimate · Mastery · Fitness</p>
        <h1 className="hero-title">
          <span className="accent">Every Day and Every Where</span> Fitness
        </h1>
        <p className="hero-sub">
          Low price and high franchise gym over Thailand — Built to Last Humanity.
          Real login, a real database, real branches.
        </p>
        <div className="landing-nav">
          <Link className="btn-obsidian" href="/login">Log In</Link>
          <Link className="btn-ghost" href="/branches">Branches</Link>
          <Link className="btn-ghost" href="/membership">Memberships</Link>
        </div>
      </div>
    </main>
  );
}
