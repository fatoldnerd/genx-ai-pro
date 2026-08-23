# AI Readiness Assessment — Build Brief

## What It Is
An interactive web app that scores a professional's AI readiness across multiple dimensions and generates a personalised action plan. Think "What's your AI maturity level?" but actually useful, not a buzzfeed quiz.

## Why This Is Perfect for Brad
1. **Lead magnet machine** — every person who takes it gives Brad their email + their specific AI gaps
2. **Coaching funnel** — the results page recommends Brad's AI Office Hours for their weak areas
3. **Content engine** — aggregate anonymised results into LinkedIn posts ("I've assessed 200 professionals. Here's what I found.")
4. **Credibility builder** — a polished, branded assessment tool signals authority
5. **Shareable** — people share their scores, driving organic traffic
6. **Data goldmine** — understanding where professionals struggle most shapes course content

## How It Works

### The Assessment (5-7 minutes)
25 questions across 5 dimensions:
1. **AI Fluency** — Do you understand what AI can/can't do? (not "can you code")
2. **Workflow Integration** — Have you actually changed how you work?
3. **Tool Architecture** — Are you using AI as a system or a chatbot?
4. **Problem Framing** — Can you decompose problems for AI collaboration? (the KPMG skill)
5. **Strategic Thinking** — Can you see where AI fits in your domain?

Questions are scenario-based, not self-assessment ("What would you do if..." not "Rate yourself 1-5"). This prevents the Dunning-Kruger problem where beginners rate themselves highly.

### The Results
- Overall score with a tier: Explorer / Practitioner / Builder / Architect
- Radar chart showing strengths/gaps across 5 dimensions
- 3 personalised recommendations based on weakest areas
- Comparison to aggregate (anonymised): "You scored higher than 72% of professionals in Problem Framing"
- CTA: Book an AI Office Hours session to address your specific gaps
- Share card: branded image with score for LinkedIn/X sharing

### Design
- Dark theme (Brad's brand: #050508 background, teal #14b8a6 accents)
- Clean, professional, not gamified or gimmicky
- Branded: genxaipro.com logo, Brad's name, "AI Readiness Assessment"
- Mobile-responsive (people will take this on phones from LinkedIn)
- Progress bar during assessment
- Smooth transitions between questions

### Tech Stack
- Next.js 15, TypeScript, Tailwind CSS v4
- No backend needed for v1 — scoring logic client-side
- Email capture via simple form (store to JSON file or Supabase later)
- Share card: HTML canvas → PNG download
- Deploy to Vercel

### Pages
1. **Landing** — "How AI-Ready Are You?" + start button + what you'll learn
2. **Assessment** — one question at a time, progress bar, scenario-based
3. **Results** — score, radar chart, tier, personalised recommendations, share card
4. **Share** — og:image for social sharing with score preview

### Future (v2)
- Supabase backend for storing results
- Email integration (send detailed report)
- Admin dashboard for Brad to see aggregate data
- Team version: assess your whole team, get a team readiness report
- Industry benchmarking: "Here's how marketing leaders score vs. engineering leaders"
