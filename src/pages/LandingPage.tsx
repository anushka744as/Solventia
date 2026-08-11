import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Check, Sparkles, Users, Briefcase, Building2, FlaskConical, RefreshCw } from 'lucide-react';
import Layout from '@/components/Layout';
import HeroDashboardPreview from '@/components/HeroDashboardPreview';

const contextCards = [
  { title: 'Personalized', copy: 'Ideas shaped around the user\'s actual circumstances.' },
  { title: 'Reality Checked', copy: 'Potential competition, budget and feasibility considered before committing.' },
  { title: 'Actionable', copy: 'Every selected idea leads to a structured roadmap.' },
];

const howItWorks = [
  { num: '01', title: 'Tell Us About You', copy: 'Share your location, interests, skills, available time and budget.' },
  { num: '02', title: 'Discover Possibilities', copy: 'Explore business ideas generated around your actual circumstances.' },
  { num: '03', title: 'Reality Check', copy: 'Understand feasibility, competition, market considerations and potential gaps.' },
  { num: '04', title: 'Build Your Roadmap', copy: 'Turn the selected idea into concrete steps, milestones and resources.' },
];

const genericAi = [
  'Gives broad ideas',
  'Limited context',
  'No structured feasibility process',
  'Stops at the idea',
  'No personalized roadmap',
];

const solventiaPoints = [
  'Understands your situation first',
  'Considers budget, skills and location',
  'Provides a feasibility perspective',
  'Helps evaluate existing solutions',
  'Converts the idea into actionable steps',
];

const audienceCards = [
  { icon: Users, title: 'Students', copy: 'Explore entrepreneurship without needing to know where to start.' },
  { icon: Briefcase, title: 'Young Professionals', copy: 'Find practical, low-capital opportunities aligned with your skills and circumstances.' },
  { icon: Building2, title: 'NGOs & Career Guidance Organizations', copy: 'Give beneficiaries a structured way to explore opportunities without adding significant mentoring overhead.' },
];

const validationSteps = [
  { icon: Users, title: 'Stakeholder Input', copy: 'Requirements informed through conversations with students, young professionals and guidance organizations.' },
  { icon: FlaskConical, title: 'Real User Testing', copy: 'Pilot testing with target users to understand relevance, usability and completion.' },
  { icon: RefreshCw, title: 'Iterate & Improve', copy: 'Feedback feeds directly back into the product.' },
];

export default function LandingPage() {
  return (
    <Layout>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Subtle background texture */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-moss-100/30 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-clay-100/25 blur-3xl" />
        </div>

        <div className="container-editorial grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="eyebrow animate-fade-up">From Possibility to Plan</p>
            <h1 className="mt-5 font-serif text-4xl font-light leading-[1.08] tracking-tighter text-ink-800 text-balance animate-fade-up sm:text-5xl lg:text-6xl" style={{ animationDelay: '0.05s' }}>
              Your next idea should fit your reality.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-500 text-pretty animate-fade-up sm:text-lg" style={{ animationDelay: '0.1s' }}>
              Solventia helps you discover realistic business ideas based on your skills, interests,
              location, available time and budget — then turns the idea you choose into a practical
              roadmap.
            </p>
            <div className="mt-9 flex flex-col gap-3 animate-fade-up sm:flex-row sm:items-center" style={{ animationDelay: '0.15s' }}>
              <Link to="/onboarding" className="btn-primary group">
                Start Exploring
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <button
                onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                How It Works
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-6">
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <HeroDashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── PROJECT CONTEXT ───────────────────────── */}
      <section className="border-t border-paper-200 bg-paper-100/50 py-20 sm:py-24">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <h2 className="heading-display text-3xl font-light leading-tight text-ink-800 text-balance sm:text-4xl">
              Built to turn ambition into action.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500 text-pretty sm:text-lg">
              Millions of young people have business ideas but lack a structured way to evaluate
              whether those ideas fit their skills, resources and local market. Solventia was
              created to bridge that gap — from generating possibilities to taking the first
              practical step.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {contextCards.map((card, i) => (
              <div
                key={card.title}
                className="card card-hover p-7"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className={`inline-block h-1.5 w-8 rounded-full ${i === 0 ? 'bg-moss-400' : i === 1 ? 'bg-clay-400' : 'bg-slate-400'}`} />
                <p className="eyebrow mt-4">{card.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── HOW IT WORKS ───────────────────────── */}
      <section id="how-it-works" className="py-24 sm:py-32">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-4 heading-display text-3xl font-light leading-tight text-ink-800 text-balance sm:text-4xl lg:text-5xl">
              From a blank page to a clear next step.
            </h2>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step) => (
              <div key={step.num} className="group">
                <p className="font-serif text-5xl font-light text-paper-300 transition-colors duration-500 group-hover:text-clay-300">
                  {step.num}
                </p>
                <h3 className="mt-4 font-serif text-xl font-medium text-ink-800">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── WHY NOT JUST ASK AN AI ───────────────────────── */}
      <section className="border-y border-paper-200 bg-paper-100/50 py-24 sm:py-32">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="eyebrow">Why Not Just Ask an AI?</p>
            <h2 className="mt-4 heading-display text-3xl font-light leading-tight text-ink-800 text-balance sm:text-4xl lg:text-5xl">
              More than just another AI conversation.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Generic AI */}
            <div className="card p-8">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-ink-400">Generic AI</p>
              <ul className="mt-6 space-y-4">
                {genericAi.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-ink-400">
                    <span className="mt-1.5 h-1 w-4 shrink-0 rounded-full bg-ink-200" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solventia */}
            <div className="rounded-2xl border border-moss-200 bg-moss-50/40 p-8 shadow-[0_2px_24px_-12px_rgba(77,122,71,0.15)]">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss-600">Solventia</p>
              <ul className="mt-6 space-y-4">
                {solventiaPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-ink-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss-500" strokeWidth={2} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── WHO IS SOLVENTIA FOR ───────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="eyebrow">Who Is Solventia For?</p>
            <h2 className="mt-4 heading-display text-3xl font-light leading-tight text-ink-800 text-balance sm:text-4xl">
              Designed for people at the start of their journey.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audienceCards.map((card, i) => (
              <div key={card.title} className="card card-hover flex flex-col p-8">
                <div className={`grid h-12 w-12 place-items-center rounded-xl ${i === 0 ? 'bg-moss-50 text-moss-500' : i === 1 ? 'bg-clay-50 text-clay-500' : 'bg-slate-50 text-slate-500'}`}>
                  <card.icon className="h-6 w-6" strokeWidth={1.25} />
                </div>
                <h3 className="mt-5 font-serif text-xl font-medium text-ink-800">{card.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── PRODUCT PREVIEW ───────────────────────── */}
      <section className="border-t border-paper-200 bg-paper-100/50 py-24 sm:py-32">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="eyebrow">Product Preview</p>
            <h2 className="mt-4 heading-display text-3xl font-light leading-tight text-ink-800 text-balance sm:text-4xl lg:text-5xl">
              Everything from idea to execution, in one place.
            </h2>
          </div>

          {/* Dashboard mockup */}
          <div className="mt-14 overflow-hidden rounded-2xl border border-paper-300 bg-paper-50 shadow-[0_8px_48px_-16px_rgba(31,29,26,0.14)]">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-paper-200 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-ink-800">
                  <span className="font-serif text-sm text-paper-50">S</span>
                </span>
                <span className="font-serif text-base font-medium text-ink-800">Solventia</span>
              </div>
              <div className="hidden gap-6 sm:flex">
                <span className="text-xs font-medium text-ink-400">Dashboard</span>
                <span className="text-xs font-medium text-ink-300">Ideas</span>
                <span className="text-xs font-medium text-ink-300">Roadmap</span>
                <span className="text-xs font-medium text-ink-300">Shortlist</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-moss-300 to-clay-300" />
            </div>

            <div className="grid gap-px bg-paper-200 lg:grid-cols-3">
              {/* Recommended ideas */}
              <div className="bg-paper-50 p-6 lg:col-span-2">
                <p className="text-[11px] uppercase tracking-[0.16em] text-ink-400">Recommended Ideas</p>
                <div className="mt-5 space-y-3">
                  {[
                    { title: 'Local Healthy Meal Subscription', feasibility: '82%', featured: true },
                    { title: 'Student Skill Exchange', feasibility: '78%', featured: false },
                    { title: 'Customized Study Materials', feasibility: '74%', featured: false },
                  ].map((idea) => (
                    <div
                      key={idea.title}
                      className={`flex items-center justify-between rounded-xl border px-5 py-4 transition-colors ${
                        idea.featured
                          ? 'border-moss-200 bg-moss-50/40'
                          : 'border-paper-200 bg-paper-50 hover:border-paper-300'
                      }`}
                    >
                      <div>
                        <p className="text-sm font-medium text-ink-800">{idea.title}</p>
                        <p className="mt-0.5 text-xs text-ink-400">Feasibility {idea.feasibility}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="hidden h-1.5 w-24 overflow-hidden rounded-full bg-paper-200 sm:block">
                          <div
                            className="h-full rounded-full bg-moss-400"
                            style={{ width: idea.feasibility }}
                          />
                        </div>
                        <span className="font-serif text-lg font-light text-ink-700">
                          {idea.feasibility}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market check + roadmap */}
              <div className="flex flex-col gap-px bg-paper-200">
                <div className="bg-paper-50 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-ink-400">Market Check</p>
                  <div className="mt-4 space-y-3">
                    {[
                      { label: 'Competition', value: 'Medium', color: 'text-slate-500' },
                      { label: 'Demand', value: 'High', color: 'text-moss-500' },
                      { label: 'Initial Cost', value: 'Low', color: 'text-moss-500' },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between">
                        <span className="text-xs text-ink-400">{row.label}</span>
                        <span className={`text-sm font-medium ${row.color}`}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-paper-50 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-ink-400">Roadmap</p>
                  <p className="mt-3 font-serif text-3xl font-light text-ink-800">42%</p>
                  <p className="text-xs text-ink-400">complete</p>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-paper-200">
                    <div className="h-full rounded-full bg-moss-400" style={{ width: '42%' }} />
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-ink-400">
                    <Sparkles className="h-3.5 w-3.5 text-clay-400" />
                    Next: Interview 5 customers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── ABOUT THE PROJECT ───────────────────────── */}
      <section id="about" className="py-24 sm:py-32">
        <div className="container-editorial">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow">About the Project</p>
              <h2 className="mt-4 heading-display text-3xl font-light leading-tight text-ink-800 text-balance sm:text-4xl">
                Built as a capstone project with a real-world problem in mind.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-500 text-pretty">
                Solventia is a Minerva Tech Capstone project by Saksham, developed around a simple
                question: how can technology help young people move from having a business idea to
                taking a realistic first step?
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-500 text-pretty">
                The project emphasizes external validation, real-user testing and stakeholder
                feedback rather than treating AI-generated ideas as automatically feasible.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="card divide-y divide-paper-200 p-2">
                {[
                  { label: 'Scholar', value: 'Saksham' },
                  { label: 'Program', value: 'Athena Education — Minerva Tech Capstone' },
                  { label: 'Project', value: 'Solventia' },
                  { label: 'Project Focus', value: 'AI-powered business ideation, feasibility exploration and roadmap generation' },
                ].map((row) => (
                  <div key={row.label} className="px-5 py-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-ink-400">{row.label}</p>
                    <p className="mt-1.5 text-sm font-medium text-ink-700">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── VALIDATION ───────────────────────── */}
      <section className="border-t border-paper-200 bg-paper-100/50 py-24 sm:py-32">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="eyebrow">Validation</p>
            <h2 className="mt-4 heading-display text-3xl font-light leading-tight text-ink-800 text-balance sm:text-4xl">
              Designed to be tested in the real world.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {validationSteps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="card card-hover h-full p-7">
                  <step.icon className="h-6 w-6 text-moss-500" strokeWidth={1.25} />
                  <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-ink-400">
                    Stage {i + 1}
                  </p>
                  <h3 className="mt-1.5 font-serif text-lg font-medium text-ink-800">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{step.copy}</p>
                </div>
                {i < validationSteps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-ink-200 md:block">
                    <ArrowDown className="h-5 w-5 rotate-[-90deg]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-paper-200 bg-paper-50 px-6 py-5">
            <p className="text-sm text-ink-500">
              <span className="font-medium text-ink-700">Pilot goal:</span>{' '}
              20+ users completing onboarding through a full roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────── FINAL CTA ───────────────────────── */}
      <section id="contact" className="py-24 sm:py-32">
        <div className="container-editorial">
          <div className="mx-auto max-w-2xl rounded-3xl border border-clay-100 bg-clay-50/30 px-8 py-14 text-center sm:px-14">
            <h2 className="heading-display text-3xl font-light leading-tight text-ink-800 text-balance sm:text-4xl lg:text-5xl">
              An idea is only useful when you know what to do next.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500 text-pretty">
              Start with what you have. Explore what is possible. Build your next step.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/onboarding" className="btn-primary group">
                Start Exploring
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
