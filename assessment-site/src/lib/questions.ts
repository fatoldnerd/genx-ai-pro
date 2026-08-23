export interface Question {
  id: number;
  dimension: 'fluency' | 'workflow' | 'architecture' | 'framing' | 'strategic';
  dimensionLabel: string;
  text: string;
  options: { text: string; score: number }[];
}

export const questions: Question[] = [
  // AI Fluency
  {
    id: 1,
    dimension: 'fluency',
    dimensionLabel: 'AI Fluency',
    text: "Your colleague says 'ChatGPT hallucinated once so I don't trust it for anything.' How do you respond?",
    options: [
      { text: "Agree — if it hallucinates, it's unreliable full stop.", score: 1 },
      { text: "Suggest avoiding it for facts but using it for creative tasks.", score: 2 },
      { text: "Explain that hallucination rates vary by task type and that verification workflows can compensate.", score: 3 },
      { text: "Break down the mechanics of hallucination — when it's likely vs unlikely — and redesign their workflow to account for it.", score: 4 },
    ],
  },
  {
    id: 2,
    dimension: 'fluency',
    dimensionLabel: 'AI Fluency',
    text: "A product manager says AI will 'automate their job.' What's the most accurate framing?",
    options: [
      { text: "Agree — AI is coming for PM roles.", score: 1 },
      { text: "Reassure them — PMs are safe because they deal with people.", score: 2 },
      { text: "AI will automate specific PM tasks (data analysis, documentation) but judgment and stakeholder work remains.", score: 3 },
      { text: "The question itself is wrong — AI changes which PM tasks matter most, not simply automates existing ones.", score: 4 },
    ],
  },
  {
    id: 3,
    dimension: 'fluency',
    dimensionLabel: 'AI Fluency',
    text: "You're evaluating two AI tools for the same task. Tool A has higher benchmark scores. Tool B costs less. How do you decide?",
    options: [
      { text: "Choose Tool A — higher benchmarks mean better performance.", score: 1 },
      { text: "Choose Tool B — save the budget.", score: 2 },
      { text: "Test both on your specific use case before deciding.", score: 3 },
      { text: "Define task-specific evaluation criteria, run structured tests, factor in total cost of ownership, and consider vendor stability.", score: 4 },
    ],
  },
  {
    id: 4,
    dimension: 'fluency',
    dimensionLabel: 'AI Fluency',
    text: "You ask an AI to help draft a strategic proposal. It produces something confident but superficial. What went wrong?",
    options: [
      { text: "The AI isn't good enough for strategic work.", score: 1 },
      { text: "I should have asked it to 'think harder.'", score: 2 },
      { text: "The prompt lacked context about the audience, constraints, and what 'strategic' means in this context.", score: 3 },
      { text: "I treated AI as an oracle instead of a collaborator — I needed to front-load my own thinking, then use AI to stress-test and extend it.", score: 4 },
    ],
  },
  {
    id: 5,
    dimension: 'fluency',
    dimensionLabel: 'AI Fluency',
    text: "Someone claims GPT-4 is better than GPT-3.5 so you should always use the newest model. What's wrong with this?",
    options: [
      { text: "Nothing — newer is always better.", score: 1 },
      { text: "Newer models cost more.", score: 2 },
      { text: "Newer models have different failure modes and cost-performance tradeoffs vary by task.", score: 3 },
      { text: "Model capability and task fit are different things — a smaller, specialised model often outperforms a larger general one on specific tasks.", score: 4 },
    ],
  },

  // Workflow Integration
  {
    id: 6,
    dimension: 'workflow',
    dimensionLabel: 'Workflow Integration',
    text: "Your team gets access to an AI tool. What do you do in week one?",
    options: [
      { text: "Try it once or twice out of curiosity, then return to normal work.", score: 1 },
      { text: "Experiment with it for tasks you already do.", score: 2 },
      { text: "Systematically test it across your most time-consuming work categories to find where it adds real value.", score: 3 },
      { text: "Map your full workflow, identify high-leverage integration points, run a structured experiment, and document what works for the team.", score: 4 },
    ],
  },
  {
    id: 7,
    dimension: 'workflow',
    dimensionLabel: 'Workflow Integration',
    text: "You use AI to draft emails but always rewrite them completely. What does this tell you?",
    options: [
      { text: "AI isn't good at writing in your style.", score: 1 },
      { text: "Your writing style is too unique to replicate.", score: 2 },
      { text: "You haven't given AI enough context about your voice, audience, and goals.", score: 3 },
      { text: "Your prompting workflow needs work — you need to invest in building prompts that produce closer-to-final output.", score: 4 },
    ],
  },
  {
    id: 8,
    dimension: 'workflow',
    dimensionLabel: 'Workflow Integration',
    text: "A 40-page report lands in your inbox and you have until tomorrow morning. What's your AI-augmented move?",
    options: [
      { text: "Skim it and give general impressions.", score: 1 },
      { text: "Read it in full and take notes.", score: 2 },
      { text: "Use AI to extract key themes, surface weak arguments, and generate targeted questions.", score: 3 },
      { text: "Run a structured AI analysis — summary, assumptions, evidence gaps, stakeholder implications — then form your own view before responding.", score: 4 },
    ],
  },
  {
    id: 9,
    dimension: 'workflow',
    dimensionLabel: 'Workflow Integration',
    text: "How do you handle tasks you do repeatedly every week?",
    options: [
      { text: "I do them manually as they come up.", score: 1 },
      { text: "I've built templates to speed them up.", score: 2 },
      { text: "I've built AI prompts for most of them and run them consistently.", score: 3 },
      { text: "I have a documented prompt library, automated triggers where possible, and I review them quarterly for improvement.", score: 4 },
    ],
  },
  {
    id: 10,
    dimension: 'workflow',
    dimensionLabel: 'Workflow Integration',
    text: "You've just finished a complex project. What's your AI-enabled post-project process?",
    options: [
      { text: "Move on to the next thing.", score: 1 },
      { text: "Write a brief retrospective.", score: 2 },
      { text: "Use AI to generate a structured retrospective from my notes and pull out reusable patterns.", score: 3 },
      { text: "Run the project artefacts through AI to extract reusable frameworks, update my prompt library, and create a knowledge brief my team can use.", score: 4 },
    ],
  },

  // Tool Architecture
  {
    id: 11,
    dimension: 'architecture',
    dimensionLabel: 'Tool Architecture',
    text: "How would you describe your current AI tool setup?",
    options: [
      { text: "I use one AI chatbot occasionally when I remember it exists.", score: 1 },
      { text: "I use a few different AI tools depending on the task.", score: 2 },
      { text: "I have a deliberate stack where each tool serves a specific, defined role.", score: 3 },
      { text: "I have a mapped AI stack with documented use cases, custom configurations, and clear handoffs between tools.", score: 4 },
    ],
  },
  {
    id: 12,
    dimension: 'architecture',
    dimensionLabel: 'Tool Architecture',
    text: "You need to process 50 customer feedback responses to find patterns. What do you do?",
    options: [
      { text: "Read them manually and note recurring themes.", score: 1 },
      { text: "Paste them into a chatbot and ask for a summary.", score: 2 },
      { text: "Design a structured prompt that extracts categories, sentiment, and themes in a consistent format.", score: 3 },
      { text: "Build a repeatable pipeline: cleaning → categorisation prompt → cross-validation → synthesis → output template.", score: 4 },
    ],
  },
  {
    id: 13,
    dimension: 'architecture',
    dimensionLabel: 'Tool Architecture',
    text: "A prompt you wrote last month produced excellent output. What did you do with it?",
    options: [
      { text: "I don't remember — I'd write a new one from scratch.", score: 1 },
      { text: "I saved it somewhere I can find it.", score: 2 },
      { text: "I saved it with context on when it works and variations I've tested.", score: 3 },
      { text: "It's in my prompt library with version history, use cases, success criteria, and it's been shared with my team.", score: 4 },
    ],
  },
  {
    id: 14,
    dimension: 'architecture',
    dimensionLabel: 'Tool Architecture',
    text: "You're building a multi-step AI process. How do you ensure quality at each stage?",
    options: [
      { text: "Check the final output and fix anything that looks wrong.", score: 1 },
      { text: "Review each AI output before passing it to the next step.", score: 2 },
      { text: "Define quality criteria for each step and build verification prompts.", score: 3 },
      { text: "Design the pipeline with explicit validation gates, human checkpoints at high-stakes steps, and error recovery flows.", score: 4 },
    ],
  },
  {
    id: 15,
    dimension: 'architecture',
    dimensionLabel: 'Tool Architecture',
    text: "You want AI to help you write better over time, not just fix today's draft. What do you build?",
    options: [
      { text: "Ask AI to improve my drafts as they come up.", score: 1 },
      { text: "Build a system prompt that captures my writing style.", score: 2 },
      { text: "Create a style guide, feed it to AI as context, and use AI as a structured editor across all my writing.", score: 3 },
      { text: "Maintain a living style guide, use AI to flag deviations, run writing through multiple AI lenses (developmental, copy, fact-check), and track improvement over time.", score: 4 },
    ],
  },

  // Problem Framing
  {
    id: 16,
    dimension: 'framing',
    dimensionLabel: 'Problem Framing',
    text: "You need AI to help analyse why customer churn is increasing. What's your first move?",
    options: [
      { text: "Ask AI: 'Why is our customer churn increasing?'", score: 1 },
      { text: "Paste your churn data and ask for analysis.", score: 2 },
      { text: "Define what 'churn' means in your context, list hypotheses, then ask AI to evaluate each against available evidence.", score: 3 },
      { text: "Decompose the problem into components, frame specific AI tasks for each, then synthesise the outputs into a coherent analysis.", score: 4 },
    ],
  },
  {
    id: 17,
    dimension: 'framing',
    dimensionLabel: 'Problem Framing',
    text: "AI gives you 10 ideas for solving a problem. How do you evaluate them?",
    options: [
      { text: "Pick the one that sounds best.", score: 1 },
      { text: "Think through pros and cons of each.", score: 2 },
      { text: "Apply criteria I defined before seeing the ideas.", score: 3 },
      { text: "Use AI to pressure-test each idea against my constraints, ask for counter-arguments, and synthesise across multiple evaluation frameworks.", score: 4 },
    ],
  },
  {
    id: 18,
    dimension: 'framing',
    dimensionLabel: 'Problem Framing',
    text: "Your boss asks you to 'use AI to improve team productivity.' How do you turn this into a real project?",
    options: [
      { text: "Give the team ChatGPT access and see what happens.", score: 1 },
      { text: "Ask the team what feels most time-consuming and apply AI there.", score: 2 },
      { text: "Audit where time goes, identify tasks with clear inputs/outputs, and prototype AI solutions for the highest-value ones.", score: 3 },
      { text: "Map the team's work at task level, categorise AI-augmentable vs judgment-heavy tasks, build a maturity framework, and design a 90-day integration roadmap.", score: 4 },
    ],
  },
  {
    id: 19,
    dimension: 'framing',
    dimensionLabel: 'Problem Framing',
    text: "You ask AI a question and get a confident, wrong answer. What does this reveal about how you asked it?",
    options: [
      { text: "AI makes mistakes — you have to check everything.", score: 1 },
      { text: "I should ask simpler questions.", score: 2 },
      { text: "I needed to specify the constraints, assumptions, and what failure looks like in advance.", score: 3 },
      { text: "The question was under-specified — good prompting requires defining the problem space, success criteria, and known constraints before asking for a solution.", score: 4 },
    ],
  },
  {
    id: 20,
    dimension: 'framing',
    dimensionLabel: 'Problem Framing',
    text: "You're asked to estimate the business value of a proposed AI initiative. How do you approach it?",
    options: [
      { text: "AI value is hard to quantify, I'd give a rough estimate.", score: 1 },
      { text: "Estimate time saved × hourly rate.", score: 2 },
      { text: "Model time savings, quality improvements, and error reduction across affected workflows.", score: 3 },
      { text: "Build a business case with multiple value levers — efficiency, quality, capacity, speed — with confidence intervals, and define what data would validate each assumption.", score: 4 },
    ],
  },

  // Strategic Thinking
  {
    id: 21,
    dimension: 'strategic',
    dimensionLabel: 'Strategic Thinking',
    text: "Where will AI have the most impact in your industry in the next 3 years?",
    options: [
      { text: "Not sure yet — it's moving too fast to predict.", score: 1 },
      { text: "Generally in automation and efficiency gains.", score: 2 },
      { text: "I can name specific workflows, roles, or business models that will change and explain the mechanism.", score: 3 },
      { text: "I have a specific thesis with supporting evidence, competitive implications, and a view on which current advantages will erode or strengthen.", score: 4 },
    ],
  },
  {
    id: 22,
    dimension: 'strategic',
    dimensionLabel: 'Strategic Thinking',
    text: "A competitor launches an 'AI-powered' version of their core product. How do you respond?",
    options: [
      { text: "Monitor it and wait to see how customers react.", score: 1 },
      { text: "Explore adding AI features to stay competitive.", score: 2 },
      { text: "Evaluate whether their AI capability is genuinely defensible and how it shifts customer value.", score: 3 },
      { text: "Analyse the capability's source (data, model, integration depth), assess defensibility, map new switching costs it creates, and develop a counter-positioning strategy.", score: 4 },
    ],
  },
  {
    id: 23,
    dimension: 'strategic',
    dimensionLabel: 'Strategic Thinking',
    text: "Your company is about to hire 5 people. You're asked for input on team structure. What AI angle do you raise?",
    options: [
      { text: "Suggest adding someone who specialises in AI.", score: 1 },
      { text: "Question whether some roles could be replaced by AI tools.", score: 2 },
      { text: "Map which planned roles involve tasks that AI will significantly change in 18 months and design them with AI augmentation built in.", score: 3 },
      { text: "Present a workforce design framework: what AI can own now, which roles should be AI-augmented vs AI-adjacent, and where to invest in human skills AI won't replicate.", score: 4 },
    ],
  },
  {
    id: 24,
    dimension: 'strategic',
    dimensionLabel: 'Strategic Thinking',
    text: "How do you think about the risk of AI making your own skills obsolete?",
    options: [
      { text: "It's not something I'm actively worried about right now.", score: 1 },
      { text: "I'm aware of the risk but haven't figured out what to do about it.", score: 2 },
      { text: "I've mapped which of my skills are AI-augmentable vs AI-replaceable and I'm shifting my focus deliberately.", score: 3 },
      { text: "I maintain a dynamic skills map that I update as AI capabilities advance, with a clear investment thesis for where I'm building defensible expertise.", score: 4 },
    ],
  },
  {
    id: 25,
    dimension: 'strategic',
    dimensionLabel: 'Strategic Thinking',
    text: "If you were briefing your CEO on AI strategy, what's your opening point?",
    options: [
      { text: "We need to adopt AI tools or we'll fall behind competitors.", score: 1 },
      { text: "We should find the highest-ROI use cases and start there.", score: 2 },
      { text: "AI strategy isn't about tools — it's about redesigning decision-making, talent, and processes around what AI makes possible.", score: 3 },
      { text: "Before picking tools or use cases, you need to understand which parts of your competitive advantage are AI-accelerated vs AI-threatened — and build strategy from that analysis.", score: 4 },
    ],
  },
];
