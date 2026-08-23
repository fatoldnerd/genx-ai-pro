'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { computeResults, type AssessmentResult } from '@/lib/scoring';
import { generatePDF } from '@/lib/generate-pdf';
import { Brand } from '@/components/brand';

const TIER_COLORS: Record<string, string> = {
  Explorer: '#64767a',
  Practitioner: '#e6aa4f',
  Builder: '#3165e8',
  Architect: '#76e6cf',
};

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('ai_assessment_answers');
    if (!stored) {
      router.push('/assessment');
      return;
    }

    const answers: number[] = JSON.parse(stored);
    const computed = computeResults(answers);
    // The result is derived from browser-only persisted answers after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResult(computed);

    // Animate score
    setTimeout(() => {
      setIsLoaded(true);
      let current = 0;
      const target = computed.totalScore;
      const increment = target / 50;
      const timer = setInterval(() => {
        current = Math.min(current + increment, target);
        setAnimatedScore(Math.round(current));
        if (current >= target) clearInterval(timer);
      }, 20);
    }, 200);
  }, [router]);

  const downloadResults = () => {
    if (!result) return;
    generatePDF(result);
  };

  if (!result) {
    return (
      <main className="assessment-results flex items-center justify-center">
        <div
          className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: 'rgba(49, 101, 232, 0.3)', borderTopColor: '#3165e8' }}
        />
      </main>
    );
  }

  // Shorter labels for radar
  const radarDataShort = result.dimensionScores.map((d) => {
    const labelMap: Record<string, string> = {
      fluency: 'Fluency',
      workflow: 'Workflow',
      architecture: 'Architecture',
      framing: 'Framing',
      strategic: 'Strategy',
    };
    return {
      subject: labelMap[d.dimension] || d.label,
      score: d.score,
      fullMark: 100,
    };
  });

  const tierColor = TIER_COLORS[result.tier];

  return (
    <main
      className="assessment-results"
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 max-w-5xl mx-auto w-full"
        style={{
          backgroundColor: 'rgba(243, 246, 245, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <Brand />
        <a
          href="/assessment"
          className="text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-200 hover:bg-[rgba(49,101,232,0.08)]"
          style={{
            borderColor: 'rgba(17,42,51,0.1)',
            color: '#425a60',
          }}
        >
          Retake Assessment
        </a>
      </nav>

      <div className="px-6 pb-20 pt-24 max-w-5xl mx-auto w-full">
        {/* Score hero */}
        <div
          className="text-center mb-12"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(49, 101, 232, 0.06) 0%, transparent 60%)',
          }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="w-6 h-px" style={{ backgroundColor: '#3165e8' }} />
            <p
              className="text-xs uppercase font-medium"
              style={{ color: '#3165e8', letterSpacing: '2px', fontSize: '13px' }}
            >
              Your AI Readiness Score
            </p>
            <div className="w-6 h-px" style={{ backgroundColor: '#3165e8' }} />
          </div>

          {/* Score circle */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <svg className="w-48 h-48 -rotate-90" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r="68"
                fill="none"
                stroke="rgba(17,42,51,0.05)"
                strokeWidth="8"
              />
              <circle
                cx="80"
                cy="80"
                r="68"
                fill="none"
                stroke="#3165e8"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 68}`}
                strokeDashoffset={`${2 * Math.PI * 68 * (1 - animatedScore / 100)}`}
                style={{ transition: 'stroke-dashoffset 0.05s ease' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className="text-5xl font-bold tabular-nums font-mono-nums"
                style={{ color: '#112a33' }}
              >
                {animatedScore}
              </span>
              <span
                className="text-sm mt-1 font-mono-nums"
                style={{ color: '#64767a' }}
              >
                / 100
              </span>
            </div>
          </div>

          {/* Tier badge */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-lg"
              style={{
                backgroundColor: tierColor + '18',
                border: `1px solid ${tierColor}44`,
                color: tierColor,
              }}
            >
              {result.tier}
            </div>
          </div>

          <p
            className="text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#425a60' }}
          >
            {result.tierDescription}
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Radar chart */}
          <div
            className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(17,42,51,0.06)',
            }}
          >
            <h2
              className="text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: '#425a60' }}
            >
              Dimension Overview
            </h2>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={radarDataShort} margin={{ top: 20, right: 28, bottom: 20, left: 28 }}>
                <PolarGrid
                  stroke="rgba(17,42,51,0.06)"
                  radialLines={false}
                />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{
                    fill: '#425a60',
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="#3165e8"
                  fill="#3165e8"
                  fillOpacity={0.15}
                  strokeWidth={2}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(49, 101, 232, 0.3)',
                    borderRadius: '8px',
                    color: '#112a33',
                    fontSize: '13px',
                  }}
                  formatter={(value: number) => [`${value}/100`, 'Score']}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Dimension bars */}
          <div
            className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(17,42,51,0.06)',
            }}
          >
            <h2
              className="text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: '#425a60' }}
            >
              Score Breakdown
            </h2>
            <div className="flex flex-col gap-5">
              {result.dimensionScores.map((dim) => {
                const isWeak = result.weakestDimensions.includes(dim.dimension);
                return (
                  <div key={dim.dimension}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-sm font-medium"
                          style={{ color: isWeak ? '#112a33' : '#425a60' }}
                        >
                          {dim.label}
                        </span>
                        {isWeak && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: 'rgba(248, 113, 113, 0.1)',
                              border: '1px solid rgba(248, 113, 113, 0.2)',
                              color: '#f87171',
                            }}
                          >
                            Focus area
                          </span>
                        )}
                      </div>
                      <span
                        className="text-sm font-semibold tabular-nums font-mono-nums"
                        style={{
                          color: dim.score >= 60 ? '#4ade80' : dim.score >= 40 ? '#3165e8' : '#f87171',
                        }}
                      >
                        {dim.score}
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: 'rgba(17,42,51,0.06)' }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${dim.score}%`,
                          backgroundColor:
                            dim.score >= 60 ? '#4ade80' : dim.score >= 40 ? '#3165e8' : '#f87171',
                          transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div
          className="p-6 rounded-2xl mb-8"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid rgba(17,42,51,0.06)',
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: 'rgba(49, 101, 232, 0.1)' }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="#3165e8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold" style={{ color: '#112a33' }}>
                Your Personalised Action Plan
              </h2>
              <p className="text-xs mt-0.5" style={{ color: '#64767a' }}>
                Based on your 3 weakest dimensions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {result.recommendations.map((rec, i) => (
              <div
                key={i}
                className="p-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: '#e1e9e6',
                  border: '1px solid rgba(17,42,51,0.06)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 font-mono-nums"
                    style={{
                      backgroundColor: 'rgba(49, 101, 232, 0.15)',
                      color: '#3165e8',
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-sm" style={{ color: '#112a33' }}>
                    {rec.title}
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: '#425a60' }}
                >
                  {rec.description}
                </p>
                <div
                  className="p-3 rounded-lg"
                  style={{
                    backgroundColor: 'rgba(49, 101, 232, 0.06)',
                    border: '1px solid rgba(49, 101, 232, 0.12)',
                  }}
                >
                  <p
                    className="text-xs font-medium mb-1"
                    style={{ color: '#3165e8' }}
                  >
                    Action
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: '#425a60' }}
                  >
                    {rec.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share + CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Download card */}
          <button
            onClick={downloadResults}
            className="flex items-center gap-3 p-5 rounded-2xl text-left transition-all duration-200 hover:-translate-y-0.5 cursor-pointer w-full"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(17,42,51,0.06)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(49, 101, 232, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(17,42,51,0.06)';
            }}
          >
            <div
              className="p-3 rounded-xl flex-shrink-0"
              style={{ backgroundColor: '#e1e9e6' }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="#425a60"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: '#112a33' }}>
                Download Full Report (PDF)
              </p>
              <p className="text-xs mt-0.5" style={{ color: '#64767a' }}>
                4-page report with scores, analysis, and action plan
              </p>
            </div>
          </button>

          {/* CTA */}
          <a
            href="https://genxaipro.com/coaching"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: 'rgba(49, 101, 232, 0.08)',
              border: '1px solid rgba(49, 101, 232, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(49, 101, 232, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(49, 101, 232, 0.08)';
            }}
          >
            <div
              className="p-3 rounded-xl flex-shrink-0"
              style={{ backgroundColor: 'rgba(49, 101, 232, 0.15)' }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="#3165e8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: '#3165e8' }}>
                Explore AI Office Hours
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(49, 101, 232, 0.7)' }}>
                Work on your gaps with Brad · genxaipro.com
              </p>
            </div>
          </a>
        </div>

        {/* Footer */}
        <p
          className="text-center text-xs mt-12"
          style={{ color: '#64767a' }}
        >
          Built by Brad Towers · genxaipro.com
        </p>
      </div>
    </main>
  );
}
