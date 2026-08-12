import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Layout from '@/components/Layout';
import HeroDashboardPreview from '@/components/HeroDashboardPreview';

const howItWorks = [
  { num: '01', title: 'Tell Us About You', copy: 'Share your location, interests, skills, available time and budget.', accent: 'moss' },
  { num: '02', title: 'Discover Possibilities', copy: 'Explore business ideas generated around your actual circumstances.', accent: 'clay' },
  { num: '03', title: 'Reality Check', copy: 'Understand feasibility, competition and potential gaps before committing.', accent: 'slate' },
  { num: '04', title: 'Build Your Roadmap', copy: 'Turn the selected idea into concrete steps, milestones and resources.', accent: 'moss' },
];

const solventiaPoints = [
  'Understands your situation first',
  'Considers budget, skills and location',
  'Provides a feasibility perspective',
  'Helps evaluate existing solutions',
  'Converts the idea into actionable steps',
];

const accentBar: Record<string, string> = {
  moss: 'bg-moss-400',
  clay: 'bg-clay-400',
  slate: 'bg-slate-400',
};

const accentText: Record<string, string> = {
  moss: 'group-hover:text-moss-600',
  clay: 'group-hover:text-clay-500',
  slate: 'group-hover:text-slate-500',
};

export default function LandingPage() {
  return (
    <Layout>
      {/* ────────── HERO ────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-moss-100/40 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-clay-100/30 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-[25rem] w-[25rem] rounded-full bg-slate-100/25 blur-3xl" />
        </div>

        <div className="container-editorial grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-moss-200 bg-moss-50/60 px-4 py-1.5 animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-moss-400 animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-moss-600">From Possibility to Plan</span>
            </div>
            <h1 className="mt-5 font-serif text-4xl font-light leading-[1.08] tracking-tighter text-ink-800 text-balance animate-fade-up sm:text-5xl lg:text-6xl" style={{ animationDelay: '0.05s' }}>
              Your next idea should fit your{' '}
              <span className="relative whitespace-nowrap">
                <span className="bg-gradient-to-r from-moss-500 via-clay-500 to-slate-500 bg-clip-text text-transparent">reality</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" preserveAspectRatio="none">
                  <path d="M2 4C40 2 80 1 120 2.5C160 4 180 3 198 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-clay-300" />
                </svg>
              </span>
              .
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

      {/* ────────── HOW IT WORKS ────────── */}
      <section id="how-it-works" className="relative overflow-hidden border-t border-paper-200 bg-paper-100/50 py-24 sm:py-32">
        <div className="absolute -right-32 top-12 -z-0 h-96 w-96 rounded-full bg-clay-100/20 blur-3xl" />

        <div className="container-editorial relative">
          <div className="max-w-2xl">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-4 heading-display text-3xl font-light leading-tight text-ink-800 text-balance sm:text-4xl lg:text-5xl">
              From a blank page to a clear next step.
            </h2>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step) => (
              <div key={step.num} className="group relative">
                <div className={`absolute -top-3 left-0 h-1 w-12 rounded-full ${accentBar[step.accent]} transition-all duration-500 group-hover:w-16`} />
                <p className={`mt-2 font-serif text-5xl font-light text-paper-300 transition-colors duration-500 ${accentText[step.accent]}`}>
                  {step.num}
                </p>
                <h3 className="mt-4 font-serif text-xl font-medium text-ink-800">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── ABSTRACT BANNER ────────── */}
      <section className="relative overflow-hidden border-t border-paper-200">
        <div className="relative h-64 sm:h-80">
          <img
            src="https://images.pexels.com/photos/13807429/pexels-photo-13807429.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Abstract flowing shapes in warm earth tones"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper-50 via-paper-50/40 to-transparent" />
          <div className="container-editorial relative flex h-full items-center">
            <div className="max-w-md">
              <p className="font-serif text-2xl font-light leading-snug text-ink-800 text-balance sm:text-3xl">
                Ideas are everywhere. The courage to start is rare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── WHY SOLVENTIA ────────── */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute -left-32 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-moss-100/25 blur-3xl" />

        <div className="container-editorial">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <p className="eyebrow">Why Not Just Ask an AI?</p>
              <h2 className="mt-4 heading-display text-3xl font-light leading-tight text-ink-800 text-balance sm:text-4xl">
                More than just another AI conversation.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-500 text-pretty">
                Generic AI gives broad ideas with no context. Solventia starts with your situation,
                checks feasibility, and helps you take the first real step.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {['bg-moss-400', 'bg-clay-400', 'bg-slate-400'].map((c, i) => (
                    <span key={i} className={`h-10 w-10 rounded-full border-2 border-paper-50 ${c}`} />
                  ))}
                </div>
                <p className="text-sm text-ink-500">Built for young entrepreneurs who think practically.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {solventiaPoints.map((point, i) => (
                  <div
                    key={point}
                    className={`flex items-start gap-3 rounded-2xl border p-5 transition-all duration-300 hover:shadow-[0_4px_24px_-12px_rgba(31,29,26,0.12)] ${
                      i % 2 === 0
                        ? 'border-moss-200 bg-moss-50/40'
                        : 'border-clay-100 bg-clay-50/30'
                    }`}
                  >
                    <div className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${
                      i % 2 === 0 ? 'bg-moss-400' : 'bg-clay-400'
                    }`}>
                      <Check className="h-4 w-4 text-paper-50" strokeWidth={2} />
                    </div>
                    <p className="text-sm leading-relaxed text-ink-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── CTA ────────── */}
      <section id="contact" className="relative overflow-hidden border-t border-paper-200 bg-paper-100/50 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-moss-100/30 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-clay-100/30 blur-3xl" />
        </div>

        <div className="container-editorial">
          <div className="mx-auto max-w-2xl rounded-3xl border border-clay-100 bg-gradient-to-br from-clay-50/60 via-paper-50 to-moss-50/40 px-8 py-14 text-center shadow-[0_4px_40px_-16px_rgba(31,29,26,0.08)] sm:px-14">
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
