import Link from "next/link";

export const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 20 20" fill="none">
    <path
      d={diagonal ? "M5 15 15 5M7 5h8v8" : "M3 10h14m-5-5 5 5-5 5"}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Spark = () => (
  <svg aria-hidden="true" className="spark" viewBox="0 0 24 24" fill="none">
    <path d="M12 1c.4 7.3 3.7 10.6 11 11-7.3.4-10.6 3.7-11 11C11.6 15.7 8.3 12.4 1 12 8.3 11.6 11.6 8.3 12 1Z" fill="currentColor" />
  </svg>
);

export const Brand = ({ light = false }: { light?: boolean }) => (
  <Link className={`brand${light ? " brand-light" : ""}`} href="/" aria-label="GenX AI Pro home">
    <span className="brand-mark"><Spark /></span>
    <span>GEN<span className="brand-accent">X</span> AI PRO</span>
  </Link>
);

export function SiteHeader() {
  return (
    <header className="site-header">
      <Brand />
      <nav className="nav-links" aria-label="Primary navigation">
        <Link href="/#services">For business</Link>
        <Link href="/#approach">Method</Link>
        <Link href="/coaching">AI Office Hours</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/about">About</Link>
      </nav>
      <a className="header-cta" href="https://calendly.com/bradptowers/free-15-minute-ai-audit" target="_blank" rel="noreferrer">
        Book a conversation <Arrow diagonal />
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <Brand light />
        <p>Applied AI consultancy for experienced leaders and ambitious teams.</p>
      </div>
      <div className="footer-links">
        <div>
          <span>Navigate</span>
          <Link href="/#services">For business</Link>
          <Link href="/coaching">AI Office Hours</Link>
          <Link href="/tools">Free tools</Link>
          <Link href="/about">About Brad</Link>
        </div>
        <div>
          <span>Connect</span>
          <a href="https://calendly.com/bradptowers/free-15-minute-ai-audit" target="_blank" rel="noreferrer">Book a free AI audit</a>
          <a href="https://www.linkedin.com/in/bradtowers/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 GenX AI Pro</span><span>Practical AI. Useful progress.</span></div>
    </footer>
  );
}
