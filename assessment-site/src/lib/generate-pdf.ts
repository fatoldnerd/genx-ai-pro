import jsPDF from 'jspdf';
import type { AssessmentResult } from './scoring';

// genxaipro.com palette
const COLORS = {
  bgPrimary: '#f3f6f5',
  bgSecondary: '#eaefed',
  bgTertiary: '#e1e9e6',
  bgCard: '#ffffff',
  textPrimary: '#112a33',
  textSecondary: '#425a60',
  textMuted: '#64767a',
  accent: '#3165e8',
  accentHover: '#76e6cf',
  highlight: '#e6aa4f',
  green: '#4ade80',
  red: '#f87171',
  border: '#eaefed',
};

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function setColor(doc: jsPDF, hex: string) {
  const [r, g, b] = hexToRgb(hex);
  doc.setTextColor(r, g, b);
}

function setFillColor(doc: jsPDF, hex: string) {
  const [r, g, b] = hexToRgb(hex);
  doc.setFillColor(r, g, b);
}

function setDrawColor(doc: jsPDF, hex: string) {
  const [r, g, b] = hexToRgb(hex);
  doc.setDrawColor(r, g, b);
}

function drawRoundedRect(
  doc: jsPDF,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
  style: 'F' | 'S' | 'FD' = 'F'
) {
  doc.roundedRect(x, y, w, h, r, r, style);
}

function drawPageBg(doc: jsPDF) {
  setFillColor(doc, COLORS.bgPrimary);
  doc.rect(0, 0, 210, 297, 'F');
}

function drawHeader(doc: jsPDF) {
  // Top accent line
  setFillColor(doc, COLORS.accent);
  doc.rect(0, 0, 210, 2, 'F');

  // GenX AI Pro wordmark
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  setColor(doc, COLORS.textPrimary);
  doc.text('GEN', 20, 16);
  setColor(doc, COLORS.highlight);
  doc.text('X', 20 + doc.getTextWidth('GEN'), 16);
  setColor(doc, COLORS.textPrimary);
  doc.text(' AI PRO', 20 + doc.getTextWidth('GENX'), 16);

  // Divider
  setFillColor(doc, COLORS.bgTertiary);
  doc.rect(20, 22, 170, 0.3, 'F');
}

function drawFooter(doc: jsPDF, pageNum: number, totalPages: number) {
  // Bottom line
  setFillColor(doc, COLORS.bgTertiary);
  doc.rect(20, 280, 170, 0.3, 'F');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  setColor(doc, COLORS.textMuted);
  doc.text('genxaipro.com', 20, 288);
  doc.text(`${pageNum} / ${totalPages}`, 190, 288, { align: 'right' });
}

function drawSectionLabel(doc: jsPDF, text: string, y: number) {
  // Cobalt section marker
  setFillColor(doc, COLORS.accent);
  doc.rect(20, y, 16, 1.2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  setColor(doc, COLORS.accent);
  doc.text(text.toUpperCase(), 40, y + 1);
}

function getScoreColor(score: number): string {
  if (score >= 60) return COLORS.green;
  if (score >= 40) return COLORS.accent;
  return COLORS.red;
}

const TIER_DESCRIPTIONS_EXTENDED: Record<string, string> = {
  Explorer:
    "You're at the beginning of your AI journey. You understand AI exists and have some exposure, but haven't yet integrated it meaningfully into how you work. The good news: the gap between where you are and where you could be represents enormous untapped potential. With the right guidance, you can make rapid progress.",
  Practitioner:
    "You're using AI regularly and seeing real benefit. You've moved beyond curiosity into practical application, but your approach is still largely ad hoc. You're in the most exciting phase: you know enough to see what's possible, and you're ready to build the systems that will make AI a true force multiplier.",
  Builder:
    "You have a solid, systematic approach to AI. You think in workflows, maintain good practices, and can frame problems effectively for AI collaboration. You're already ahead of most professionals. The next step is elevating your strategic lens to see AI's impact at the organisational and industry level.",
  Architect:
    "You operate at the frontier of AI-augmented work. You think systemically, strategically, and with nuance. You're not just using AI tools — you're redesigning how work gets done around what AI makes possible. Your challenge now is scaling this capability to others and staying ahead of the curve.",
};

const DIMENSION_INSIGHTS: Record<string, { low: string; mid: string; high: string }> = {
  fluency: {
    low: "Your understanding of AI mechanics and capabilities has room to grow. This is foundational: without solid mental models of what AI can and can't do, every other dimension suffers. Focus here first, because accurate expectations are the basis of effective AI use.",
    mid: "You have a working understanding of AI's capabilities and limitations. You can distinguish hype from reality in most conversations. To advance further, go deeper on the technical mechanics (not code, but concepts) so your intuition sharpens.",
    high: "Your AI fluency is strong. You understand the mechanics well enough to predict failure modes, choose appropriate tools for specific tasks, and have nuanced conversations about AI's role. This foundation enables everything else.",
  },
  workflow: {
    low: "Your day-to-day work hasn't yet been significantly changed by AI. You're either not using it consistently or using it in ways that don't compound. The single biggest unlock is building repeatable AI-powered workflows for your most frequent tasks.",
    mid: "You're integrating AI into your workflows and seeing real time savings. The next leap comes from systematising what works: building a prompt library, documenting your workflows, and creating feedback loops that improve your processes over time.",
    high: "AI is deeply integrated into how you work. You have systems, not just tools. Your workflows are documented, refined, and consistently deliver value. You're in a position to teach others and scale these practices across a team.",
  },
  architecture: {
    low: "Your AI tool setup is ad hoc. You likely use one or two tools without clear roles or structured approaches. Building a deliberate stack where each tool has a defined purpose will dramatically increase your output quality.",
    mid: "You have multiple AI tools and some structure around how you use them. The next step is building true pipelines: multi-step processes where each stage has quality gates, and your tools work as an integrated system rather than separate utilities.",
    high: "You have a sophisticated, well-architected AI setup. Your tools serve defined roles, your pipelines have quality gates, and you think in systems. This is a significant competitive advantage and a foundation for scaling to team level.",
  },
  framing: {
    low: "The way you frame problems for AI needs work. Better problem framing is the highest-leverage skill improvement available to you, because the quality of AI output is directly proportional to the quality of the input problem definition.",
    mid: "You frame problems reasonably well for AI. You understand that vague inputs produce vague outputs. To advance, focus on pre-defining success criteria before you prompt, and decomposing complex problems into structured, specific sub-tasks.",
    high: "Your problem framing is excellent. You decompose complex challenges, define success criteria upfront, and evaluate AI output against structured frameworks. This skill alone sets you apart from most professionals using AI today.",
  },
  strategic: {
    low: "You haven't yet developed a strategic view of AI's impact on your industry, career, or organisation. This is critical: without a strategic lens, you'll be reactive rather than proactive as AI reshapes professional landscapes over the next 3-5 years.",
    mid: "You're developing a strategic perspective on AI. You can see some of the implications for your industry and career. To deepen this, build a specific, evidence-based thesis and actively track how AI is changing competitive dynamics in your space.",
    high: "You think strategically about AI at industry and organisational level. You have a thesis about where disruption will hit, which skills appreciate in value, and how competitive advantage shifts. This positions you to lead, not just adapt.",
  },
};

export function generatePDF(result: AssessmentResult): void {
  const doc = new jsPDF('p', 'mm', 'a4');
  const totalPages = 4;

  // ===== PAGE 1: Your Score =====
  drawPageBg(doc);
  drawHeader(doc);

  // Hero section
  drawSectionLabel(doc, 'Your AI Readiness Score', 34);

  // Score circle area
  setFillColor(doc, COLORS.bgCard);
  drawRoundedRect(doc, 20, 44, 170, 80, 4, 'F');
  setDrawColor(doc, COLORS.bgTertiary);
  doc.setLineWidth(0.3);
  drawRoundedRect(doc, 20, 44, 170, 80, 4, 'S');

  // Score number (large, centered)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(56);
  setColor(doc, COLORS.accent);
  doc.text(`${result.totalScore}`, 66, 86, { align: 'center' });

  // /100
  doc.setFontSize(18);
  setColor(doc, COLORS.textMuted);
  doc.text('/ 100', 66, 98, { align: 'center' });

  // Tier badge
  const tierColor =
    result.tier === 'Architect'
      ? COLORS.accentHover
      : result.tier === 'Builder'
      ? COLORS.accent
      : result.tier === 'Practitioner'
      ? COLORS.highlight
      : COLORS.textMuted;

  setFillColor(doc, COLORS.bgTertiary);
  drawRoundedRect(doc, 38, 104, 56, 12, 6, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  const [tr, tg, tb] = hexToRgb(tierColor);
  doc.setTextColor(tr, tg, tb);
  doc.text(result.tier, 66, 112.5, { align: 'center' });

  // Radar-like dimension display on right side of score card
  const dims = result.dimensionScores;

  // Draw mini dimension bars vertically
  dims.forEach((dim, i) => {
    const barY = 52 + i * 14;
    const barWidth = 60;
    const filledWidth = (dim.score / 100) * barWidth;

    // Label
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    setColor(doc, COLORS.textSecondary);
    doc.text(dim.label, 112, barY + 3);

    // Score value
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    const scoreCol = getScoreColor(dim.score);
    setColor(doc, scoreCol);
    doc.text(`${dim.score}`, 185, barY + 3, { align: 'right' });

    // Bar background
    setFillColor(doc, COLORS.bgTertiary);
    drawRoundedRect(doc, 112, barY + 6, barWidth, 3, 1.5, 'F');

    // Bar fill
    if (filledWidth > 0) {
      setFillColor(doc, scoreCol);
      drawRoundedRect(doc, 112, barY + 6, filledWidth, 3, 1.5, 'F');
    }
  });

  // Tier description below score card
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  setColor(doc, COLORS.textSecondary);
  const tierDesc = TIER_DESCRIPTIONS_EXTENDED[result.tier];
  const descLines = doc.splitTextToSize(tierDesc, 170);
  doc.text(descLines, 20, 136);

  // What this assessment measures section
  const measuresY = 136 + descLines.length * 5 + 10;
  drawSectionLabel(doc, 'What This Assessment Measures', measuresY);

  const dimensionNames = [
    { name: 'AI Fluency', desc: 'How well you understand AI mechanics, capabilities, and limitations' },
    { name: 'Workflow Integration', desc: 'How effectively AI is embedded in your daily work' },
    { name: 'Tool Architecture', desc: 'How deliberate and structured your AI tool stack is' },
    { name: 'Problem Framing', desc: 'How well you decompose and define problems for AI collaboration' },
    { name: 'Strategic Thinking', desc: 'How clearly you see AI\'s impact on your industry and career' },
  ];

  dimensionNames.forEach((d, i) => {
    const itemY = measuresY + 10 + i * 14;

    // Bullet
    setFillColor(doc, COLORS.accent);
    doc.circle(24, itemY + 1, 1.5, 'F');

    // Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    setColor(doc, COLORS.textPrimary);
    doc.text(d.name, 30, itemY + 2);

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    setColor(doc, COLORS.textMuted);
    doc.text(d.desc, 30, itemY + 7.5);
  });

  drawFooter(doc, 1, totalPages);

  // ===== PAGE 2: Dimension Analysis =====
  doc.addPage();
  drawPageBg(doc);
  drawHeader(doc);

  drawSectionLabel(doc, 'Dimension Analysis', 34);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  setColor(doc, COLORS.textSecondary);
  doc.text('A detailed breakdown of your performance across each of the five AI readiness dimensions.', 20, 42);

  let yPos = 52;

  result.dimensionScores.forEach((dim) => {
    // Check if we need a new page
    if (yPos > 240) {
      drawFooter(doc, 2, totalPages);
      doc.addPage();
      drawPageBg(doc);
      drawHeader(doc);
      yPos = 34;
    }

    // Dimension card
    setFillColor(doc, COLORS.bgCard);
    drawRoundedRect(doc, 20, yPos, 170, 40, 3, 'F');
    setDrawColor(doc, COLORS.bgTertiary);
    doc.setLineWidth(0.3);
    drawRoundedRect(doc, 20, yPos, 170, 40, 3, 'S');

    // Dimension name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    setColor(doc, COLORS.textPrimary);
    doc.text(dim.label, 28, yPos + 10);

    // Score
    const scoreColor = getScoreColor(dim.score);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    setColor(doc, scoreColor);
    doc.text(`${dim.score}`, 182, yPos + 11, { align: 'right' });

    // Score bar
    const barFullWidth = 154;
    const barFilled = (dim.score / 100) * barFullWidth;
    setFillColor(doc, COLORS.bgTertiary);
    drawRoundedRect(doc, 28, yPos + 15, barFullWidth, 3, 1.5, 'F');
    if (barFilled > 0) {
      setFillColor(doc, scoreColor);
      drawRoundedRect(doc, 28, yPos + 15, barFilled, 3, 1.5, 'F');
    }

    // Focus area tag
    const isWeak = result.weakestDimensions.includes(dim.dimension);
    if (isWeak) {
      setFillColor(doc, '#2a1515');
      drawRoundedRect(doc, 28, yPos + 20, 24, 5, 2, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6);
      setColor(doc, COLORS.red);
      doc.text('FOCUS AREA', 30, yPos + 23.5);
    }

    // Insight text
    const insights = DIMENSION_INSIGHTS[dim.dimension];
    const insightText =
      dim.score < 40 ? insights.low : dim.score < 60 ? insights.mid : insights.high;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    setColor(doc, COLORS.textSecondary);
    const insightLines = doc.splitTextToSize(insightText, 154);
    const insightStartY = isWeak ? yPos + 28 : yPos + 23;
    doc.text(insightLines, 28, insightStartY);

    // Adjust card height based on content
    const actualHeight = Math.max(40, insightStartY - yPos + insightLines.length * 3.5 + 4);

    // Redraw card with correct height
    setFillColor(doc, COLORS.bgCard);
    drawRoundedRect(doc, 20, yPos, 170, actualHeight, 3, 'F');
    setDrawColor(doc, COLORS.bgTertiary);
    drawRoundedRect(doc, 20, yPos, 170, actualHeight, 3, 'S');

    // Re-render content on top of redrawn card
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    setColor(doc, COLORS.textPrimary);
    doc.text(dim.label, 28, yPos + 10);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    setColor(doc, scoreColor);
    doc.text(`${dim.score}`, 182, yPos + 11, { align: 'right' });

    setFillColor(doc, COLORS.bgTertiary);
    drawRoundedRect(doc, 28, yPos + 15, barFullWidth, 3, 1.5, 'F');
    if (barFilled > 0) {
      setFillColor(doc, scoreColor);
      drawRoundedRect(doc, 28, yPos + 15, barFilled, 3, 1.5, 'F');
    }

    if (isWeak) {
      setFillColor(doc, '#2a1515');
      drawRoundedRect(doc, 28, yPos + 20, 24, 5, 2, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6);
      setColor(doc, COLORS.red);
      doc.text('FOCUS AREA', 30, yPos + 23.5);
    }

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    setColor(doc, COLORS.textSecondary);
    doc.text(insightLines, 28, insightStartY);

    yPos += actualHeight + 6;
  });

  drawFooter(doc, 2, totalPages);

  // ===== PAGE 3: Your Action Plan =====
  doc.addPage();
  drawPageBg(doc);
  drawHeader(doc);

  drawSectionLabel(doc, 'Your Personalised Action Plan', 34);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  setColor(doc, COLORS.textSecondary);
  doc.text('Three targeted recommendations based on your weakest dimensions. Start with #1 this week.', 20, 42);

  let actionY = 54;

  result.recommendations.forEach((rec, i) => {
    // Recommendation card
    const titleLines = doc.splitTextToSize(rec.title, 140);
    doc.setFontSize(8);
    const descLines = doc.splitTextToSize(rec.description, 154);
    const actionLines = doc.splitTextToSize(rec.action, 148);
    const cardHeight = 20 + titleLines.length * 5 + descLines.length * 3.5 + actionLines.length * 3.5 + 20;

    setFillColor(doc, COLORS.bgCard);
    drawRoundedRect(doc, 20, actionY, 170, cardHeight, 3, 'F');
    setDrawColor(doc, COLORS.bgTertiary);
    doc.setLineWidth(0.3);
    drawRoundedRect(doc, 20, actionY, 170, cardHeight, 3, 'S');

    // Number badge
    setFillColor(doc, COLORS.accent);
    doc.circle(32, actionY + 10, 5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    setColor(doc, COLORS.bgPrimary);
    doc.text(`${i + 1}`, 32, actionY + 11.5, { align: 'center' });

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    setColor(doc, COLORS.textPrimary);
    doc.text(titleLines, 42, actionY + 12);

    // Description
    const descStartY = actionY + 12 + titleLines.length * 5 + 4;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    setColor(doc, COLORS.textSecondary);
    doc.text(descLines, 28, descStartY);

    // Action box
    const actionBoxY = descStartY + descLines.length * 3.8 + 4;
    setFillColor(doc, '#1a1510');
    drawRoundedRect(doc, 28, actionBoxY, 154, actionLines.length * 3.8 + 10, 2, 'F');

    // "THIS WEEK" label
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    setColor(doc, COLORS.accent);
    doc.text('DO THIS WEEK', 34, actionBoxY + 5.5);

    // Action text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    setColor(doc, COLORS.textSecondary);
    doc.text(actionLines, 34, actionBoxY + 10.5);

    actionY += cardHeight + 6;
  });

  drawFooter(doc, 3, totalPages);

  // ===== PAGE 4: Next Steps =====
  doc.addPage();
  drawPageBg(doc);
  drawHeader(doc);

  drawSectionLabel(doc, 'What Comes Next', 34);

  // PRISM framework teaser
  setFillColor(doc, COLORS.bgCard);
  drawRoundedRect(doc, 20, 44, 170, 90, 4, 'F');
  setDrawColor(doc, COLORS.bgTertiary);
  doc.setLineWidth(0.3);
  drawRoundedRect(doc, 20, 44, 170, 90, 4, 'S');

  // Accent top border on card
  setFillColor(doc, COLORS.accent);
  doc.rect(20, 44, 170, 2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  setColor(doc, COLORS.textPrimary);
  doc.text('The PRISM Framework', 28, 58);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  setColor(doc, COLORS.textSecondary);
  const prismIntro = 'This assessment maps to the first step of a proven methodology for AI transformation. Every coaching engagement follows this structured approach:';
  const prismLines = doc.splitTextToSize(prismIntro, 154);
  doc.text(prismLines, 28, 66);

  const prismSteps = [
    { letter: 'P', name: 'Position', desc: 'Assess where you are (you just did this)' },
    { letter: 'R', name: 'Review', desc: 'Audit what\'s working and find the highest-impact gaps' },
    { letter: 'I', name: 'Implement', desc: 'Build your first win — a real workflow, not a plan' },
    { letter: 'S', name: 'Systematise', desc: 'Turn wins into repeatable, documented systems' },
    { letter: 'M', name: 'Multiply', desc: 'Scale from individual to team to organisation' },
  ];

  prismSteps.forEach((step, i) => {
    const stepY = 80 + i * 10;

    // Letter circle
    setFillColor(doc, COLORS.accent);
    doc.circle(34, stepY + 2, 3.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    setColor(doc, COLORS.bgPrimary);
    doc.text(step.letter, 34, stepY + 3.2, { align: 'center' });

    // Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    setColor(doc, COLORS.textPrimary);
    doc.text(step.name, 42, stepY + 3);

    // Desc
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    setColor(doc, COLORS.textMuted);
    doc.text(step.desc, 72, stepY + 3);
  });

  // CTA section
  const ctaY = 145;
  setFillColor(doc, '#1a1510');
  drawRoundedRect(doc, 20, ctaY, 170, 60, 4, 'F');
  setDrawColor(doc, COLORS.accent);
  doc.setLineWidth(0.5);
  drawRoundedRect(doc, 20, ctaY, 170, 60, 4, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  setColor(doc, COLORS.textPrimary);
  doc.text('Ready to Go Deeper?', 105, ctaY + 16, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  setColor(doc, COLORS.textSecondary);
  const ctaText =
    "This assessment shows you where you stand. A coaching session shows you exactly how to move. 90 minutes, 1:1, tailored to your specific situation and gaps.";
  const ctaLines = doc.splitTextToSize(ctaText, 150);
  doc.text(ctaLines, 105, ctaY + 24, { align: 'center' });

  // CTA button
  setFillColor(doc, COLORS.accent);
  drawRoundedRect(doc, 55, ctaY + 40, 100, 12, 6, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  setColor(doc, COLORS.bgPrimary);
  doc.text('Book AI Office Hours →', 105, ctaY + 48, { align: 'center' });

  // URL below button
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  setColor(doc, COLORS.accent);
  doc.textWithLink('genxaipro.com', 105, ctaY + 57, {
    align: 'center',
    url: 'https://genxaipro.com',
  });

  // What to expect section
  const expectY = 218;
  drawSectionLabel(doc, 'What to Expect', expectY);

  const expectations = [
    '90-minute focused 1:1 session via Zoom',
    'We work on YOUR specific challenges, not generic advice',
    'You leave with at least one working AI workflow',
    'Written action plan delivered within 24 hours',
    'Session recorded for your reference',
    'Satisfaction guaranteed — or your money back',
  ];

  expectations.forEach((exp, i) => {
    const expY = expectY + 10 + i * 8;
    setColor(doc, COLORS.accent);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('✓', 24, expY);
    setColor(doc, COLORS.textSecondary);
    doc.text(exp, 32, expY);
  });

  drawFooter(doc, 4, totalPages);

  // Save
  doc.save('AI-Readiness-Assessment-Results.pdf');
}
