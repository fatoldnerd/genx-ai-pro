'use client';

import Link from "next/link";
import { Brand } from "@/components/brand";

export default function HomePage() {
  return (
    <main
      className="assessment-home flex flex-col"
    >
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        style={{
          backgroundColor: "rgba(243, 246, 245, 0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(17, 42, 51, 0.06)",
        }}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
          <Brand />
          <Link
            href="/assessment"
            className="text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: "#3165e8",
              color: "#f3f6f5",
            }}
          >
            Take Assessment
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center max-w-4xl mx-auto w-full relative"
        style={{ paddingTop: "120px", minHeight: "100vh" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(49, 101, 232, 0.06) 0%, transparent 70%)",
            transform: "translate(30%, -50%)",
          }}
        />

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 animate-fade-in-up"
          style={{
            backgroundColor: "rgba(49, 101, 232, 0.08)",
            border: "1px solid rgba(49, 101, 232, 0.2)",
            color: "#3165e8",
            letterSpacing: "0.5px",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full pulse-glow"
            style={{ backgroundColor: "#3165e8" }}
          />
          Free · 7 minutes · No sign-up required
        </div>

        {/* Headline */}
        <h1
          className="font-bold tracking-tight mb-6 leading-[1.05] animate-fade-in-up"
          style={{
            fontSize: "clamp(42px, 7vw, 72px)",
            color: "#112a33",
            letterSpacing: "-3px",
          }}
        >
          How AI-Ready
          <br />
          <span className="gradient-text">Are You?</span>
        </h1>

        {/* Subheading */}
        <p
          className="max-w-xl mb-10 leading-relaxed animate-fade-in-up"
          style={{
            color: "#425a60",
            fontSize: "clamp(18px, 2.5vw, 22px)",
          }}
        >
          A 7-minute assessment that tells you exactly where you stand — and
          what to do next. 25 scenario-based questions across 5 dimensions of AI
          maturity.
        </p>

        {/* CTA */}
        <Link
          href="/assessment"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] pulse-glow"
          style={{
            backgroundColor: "#3165e8",
            color: "#f3f6f5",
          }}
        >
          Start Your Assessment
          <span className="text-lg">→</span>
        </Link>

        <p
          className="mt-4 text-sm"
          style={{ color: "#64767a" }}
        >
          No email required to see your results
        </p>

        {/* Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 w-full max-w-3xl">
          {[
            {
              icon: "01",
              title: "25 Scenario-Based Questions",
              description:
                "Not self-assessment. Real workplace scenarios that reveal how you actually think — not how you wish you did.",
            },
            {
              icon: "02",
              title: "5-Dimension Framework",
              description:
                "Fluency, Workflow, Architecture, Framing, and Strategy — a complete picture of your AI maturity.",
            },
            {
              icon: "03",
              title: "Personalised Action Plan",
              description:
                "3 specific recommendations based on your weakest dimensions — not generic advice, your gaps.",
            },
          ].map((prop, i) => (
            <div
              key={i}
              className="flex flex-col items-start text-left p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(17,42,51,0.06)",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(49, 101, 232, 0.2)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(17,42,51,0.06)";
              }}
            >
              <div
                className="text-2xl mb-4"
              >
                {prop.icon}
              </div>
              <h3
                className="font-bold text-sm mb-2"
                style={{ color: "#112a33" }}
              >
                {prop.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#64767a" }}
              >
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tiers preview */}
        <div className="mt-16 w-full max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="w-6 h-px" style={{ backgroundColor: "#3165e8" }} />
            <p
              className="text-xs uppercase font-semibold"
              style={{ color: "#3165e8", letterSpacing: "2px", fontSize: "13px" }}
            >
              Four tiers of AI maturity
            </p>
            <div className="w-6 h-px" style={{ backgroundColor: "#3165e8" }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { tier: "Explorer", range: "0–39", icon: "E / 01" },
              { tier: "Practitioner", range: "40–59", icon: "P / 02" },
              { tier: "Builder", range: "60–79", icon: "B / 03" },
              { tier: "Architect", range: "80–100", icon: "A / 04" },
            ].map((t, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-5 px-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${i === 3 ? "rgba(49, 101, 232, 0.2)" : "rgba(17,42,51,0.06)"}`,
                }}
              >
                <span className="text-xl mb-2">{t.icon}</span>
                <span
                  className="text-sm font-bold mb-1"
                  style={{ color: i === 3 ? "#3165e8" : "#112a33" }}
                >
                  {t.tier}
                </span>
                <span
                  className="text-xs font-mono-nums"
                  style={{ color: "#64767a" }}
                >
                  Score {t.range}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center py-8 px-6"
        style={{ borderTop: "1px solid rgba(17,42,51,0.06)" }}
      >
        <p className="text-sm" style={{ color: "#64767a" }}>
          Built by Brad Towers ·{" "}
          <a href="https://genxaipro.com" className="footer-home-link">genxaipro.com</a>
        </p>
      </footer>
    </main>
  );
}
