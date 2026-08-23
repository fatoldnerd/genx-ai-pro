import { questions } from './questions';

export interface DimensionScore {
  dimension: string;
  label: string;
  score: number; // 0-100
  rawScore: number; // 5-20
}

export interface AssessmentResult {
  totalScore: number; // 0-100
  tier: 'Explorer' | 'Practitioner' | 'Builder' | 'Architect';
  tierDescription: string;
  dimensionScores: DimensionScore[];
  weakestDimensions: string[];
  recommendations: Recommendation[];
}

export interface Recommendation {
  title: string;
  description: string;
  action: string;
}

const dimensionConfig: Record<string, { label: string; shortLabel: string }> = {
  fluency: { label: 'AI Fluency', shortLabel: 'Fluency' },
  workflow: { label: 'Workflow Integration', shortLabel: 'Workflow' },
  architecture: { label: 'Tool Architecture', shortLabel: 'Architecture' },
  framing: { label: 'Problem Framing', shortLabel: 'Framing' },
  strategic: { label: 'Strategic Thinking', shortLabel: 'Strategy' },
};

const tierDescriptions: Record<string, string> = {
  Explorer:
    "You're at the beginning of your AI journey. You understand AI exists and have some exposure, but haven't yet integrated it meaningfully into how you work. The gap between where you are and where you could be is significant — and that's an opportunity.",
  Practitioner:
    "You're using AI regularly and seeing some benefit. You've moved beyond curiosity into practical application, but your approach is still largely ad hoc. Building more systematic habits will unlock the next level of impact.",
  Builder:
    "You have a solid, systematic approach to AI. You think in workflows, maintain good practices, and can frame problems well for AI collaboration. The next step is elevating your strategic lens — seeing AI's impact at the organisational level.",
  Architect:
    "You operate at the frontier of AI-augmented work. You think systemically, strategically, and with nuance. You're not just using AI — you're redesigning how work gets done around what AI makes possible.",
};

const recommendationsByDimension: Record<string, Recommendation[]> = {
  fluency: [
    {
      title: 'Build Your AI Mental Models',
      description:
        "Understanding how AI actually works — not at a code level, but at a conceptual level — is the foundation for everything else. You need to know when to trust it, when to verify, and when to walk away.",
      action:
        "Spend 30 minutes with a model you use regularly. Deliberately probe its failure modes: ask it something you know it should get wrong, then something it should get right. Build intuition for the pattern.",
    },
    {
      title: 'Reframe AI Limitations as Design Constraints',
      description:
        "Every AI limitation (hallucination, context window, training cutoff) is a design constraint you can work around — if you understand it. Professionals who understand the mechanics build better workflows.",
      action:
        "Pick the AI limitation you find most frustrating. Research exactly why it happens and find one workflow change that mitigates it.",
    },
    {
      title: 'Develop Task-Fit Judgment',
      description:
        "Not all tasks are equally suited to AI. Developing sharp judgment about which tasks benefit most — and which to keep human — is a core professional skill now.",
      action:
        "List your 10 most common work tasks. Score each one: how structured is the input? How verifiable is the output? How high is the cost of error? Tasks that score well on all three are your AI-first candidates.",
    },
  ],
  workflow: [
    {
      title: 'Build a Prompt Library',
      description:
        "Most professionals treat every AI interaction as a blank slate. Building a library of tested, refined prompts for your recurring tasks is the single highest-leverage workflow investment you can make.",
      action:
        "Identify your 5 most time-consuming recurring tasks. Write a dedicated prompt for each. Test and refine until you get consistent, near-final output. Save them somewhere you'll actually use.",
    },
    {
      title: 'Run a Workflow Audit',
      description:
        "You can't optimise what you haven't mapped. Most professionals are surprised how many of their tasks are AI-augmentable once they actually look.",
      action:
        "Track how you spend your time for one week at task level. Categorise each task: AI-owned, AI-assisted, or human-only. Then build a 30-day integration plan for your top AI-assisted candidates.",
    },
    {
      title: 'Establish a Weekly AI Practice',
      description:
        "Sporadic AI use doesn't compound. Consistent, deliberate practice does. The professionals who advance fastest treat AI integration as a skill to develop, not a tool to occasionally use.",
      action:
        "Block 30 minutes each Friday to review how you used AI that week. What worked? What didn't? What will you try differently next week? Keep a simple log.",
    },
  ],
  architecture: [
    {
      title: 'Design Your AI Stack Deliberately',
      description:
        "Most professionals end up with a random collection of AI tools they've tried. A deliberate stack — where each tool has a specific, documented role — is dramatically more effective.",
      action:
        "List every AI tool you use or have tried. For each, define: what specific task it owns, why it's better than alternatives for that task, and what its limits are. Remove or replace anything you can't answer clearly.",
    },
    {
      title: 'Build Multi-Step AI Pipelines',
      description:
        "The biggest productivity gains come not from single AI interactions but from chained workflows where each step's output feeds the next. This is where AI goes from useful to transformative.",
      action:
        "Pick one complex recurring task. Break it into 3-5 distinct sub-tasks. Write a specific prompt for each. Build the pipeline and run it end-to-end. Document the result.",
    },
    {
      title: 'Implement Quality Gates',
      description:
        "Trust but verify. The professionals who get the most from AI have built explicit checkpoints into their workflows where human judgment validates AI output before it moves forward.",
      action:
        "For your most important AI-assisted tasks, define explicit success criteria for each step. Build a simple checklist you run before accepting output and moving to the next stage.",
    },
  ],
  framing: [
    {
      title: 'Master Problem Decomposition',
      description:
        "The quality of your AI output is directly proportional to the quality of your problem framing. Vague problems produce vague answers. Decomposed, specific problems produce actionable output.",
      action:
        "Next time you face a complex problem, spend 10 minutes before touching AI: define the problem in one sentence, list 3 hypotheses, identify what evidence would support each, and specify what you actually need AI to do.",
    },
    {
      title: 'Define Success Before You Start',
      description:
        "Most people evaluate AI output instinctively — 'that looks about right.' Defining what good output looks like before you run the prompt forces you to think clearly and dramatically improves your evaluation.",
      action:
        "Before your next 10 AI interactions, write down: what does a good response look like? What would make it excellent? What would make it fail? Compare the actual output against this definition.",
    },
    {
      title: 'Build an Evaluation Framework',
      description:
        "When AI gives you options or analysis, having pre-defined evaluation criteria prevents you from being swayed by confident-sounding but weak output.",
      action:
        "For your next decision that involves AI, define 3-5 evaluation criteria before seeing the output. Score each option against the criteria. Notice how different this is from your usual approach.",
    },
  ],
  strategic: [
    {
      title: 'Develop an Industry AI Thesis',
      description:
        "Vague awareness that 'AI will change everything' isn't a strategic position. The professionals who will thrive have a specific, evidence-based view of where AI will hit their industry first and hardest.",
      action:
        "Write a 300-word AI thesis for your industry. Where will the first significant disruptions hit? Which business models are most exposed? Which skills become more valuable? Share it with someone who will push back.",
    },
    {
      title: 'Map Your Skills Portfolio',
      description:
        "Knowing which of your skills AI will augment vs replace — and building a deliberate development plan around that map — is the most important career investment you can make right now.",
      action:
        "List your 10 most valuable professional skills. For each, honestly assess: is AI making this skill more valuable, less valuable, or commoditising it? Then identify the 2-3 skills where your human advantage is strongest and double down.",
    },
    {
      title: 'Think in Competitive Dynamics',
      description:
        "AI strategy isn't just about efficiency — it's about how AI reshapes competitive advantage in your market. Understanding this is what separates strategic thinkers from tactical users.",
      action:
        "Analyse one competitor's AI capability. What's the source of their advantage? Is it data, model access, integration depth, or talent? How durable is it? What would it take to match or leapfrog them?",
    },
  ],
};

export function computeResults(answers: number[]): AssessmentResult {
  const dimensions = ['fluency', 'workflow', 'architecture', 'framing', 'strategic'];

  const dimensionScores: DimensionScore[] = dimensions.map((dim) => {
    const dimQuestions = questions.filter((q) => q.dimension === dim);
    const rawScore = dimQuestions.reduce((sum, q) => {
      const answer = answers[q.id - 1];
      return sum + (answer || 1);
    }, 0);
    // Normalize: (raw - 5) / 15 * 100
    const score = Math.round(((rawScore - 5) / 15) * 100);
    return {
      dimension: dim,
      label: dimensionConfig[dim].label,
      score,
      rawScore,
    };
  });

  const totalScore = Math.round(
    dimensionScores.reduce((sum, d) => sum + d.score, 0) / dimensionScores.length
  );

  let tier: AssessmentResult['tier'];
  if (totalScore >= 80) {
    tier = 'Architect';
  } else if (totalScore >= 60) {
    tier = 'Builder';
  } else if (totalScore >= 40) {
    tier = 'Practitioner';
  } else {
    tier = 'Explorer';
  }

  const sortedByScore = [...dimensionScores].sort((a, b) => a.score - b.score);
  const weakestDimensions = sortedByScore.slice(0, 3).map((d) => d.dimension);

  const recommendations: Recommendation[] = weakestDimensions.map((dim) => {
    const recs = recommendationsByDimension[dim];
    // Pick the recommendation that best matches their score level
    const dimScore = dimensionScores.find((d) => d.dimension === dim)!;
    let recIndex = 0;
    if (dimScore.score >= 40) recIndex = 1;
    if (dimScore.score >= 60) recIndex = 2;
    return recs[recIndex];
  });

  return {
    totalScore,
    tier,
    tierDescription: tierDescriptions[tier],
    dimensionScores,
    weakestDimensions,
    recommendations,
  };
}

export function getDimensionShortLabel(dimension: string): string {
  return dimensionConfig[dimension]?.shortLabel || dimension;
}
