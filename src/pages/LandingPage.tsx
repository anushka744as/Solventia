import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Layout from '@/components/Layout';
import HeroDashboardPreview from '@/components/HeroDashboardPreview';

const howItWorks = [
  { num: '01', title: 'Tell Us About You', copy: 'Share your location, interests, skills, available time and budget.' },
  { num: '02', title: 'Discover Possibilities', copy: 'Explore business ideas generated around your actual circumstances.' },
  { num: '03', title: 'Reality Check', copy: 'Understand feasibility, competition and potential gaps before committing.' },
  { num: '04', title: 'Build Your Roadmap', copy: 'Turn the selected idea into concrete steps, milestones and resources.' },
];

const solventiaPoints = [
  'Understands your situation first',
  'Considers budget, skills and location',
  'Provides a feasibility perspective',
  'Helps evaluate existing solutions',
  'Converts the idea into actionable steps',
];

export default function LandingPage() {
  return (
    <Layout>
      {/* ────────── HERO ────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
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

      {/* ────────── HOW IT WORKS ────────── */}
      <section id="how-it-works" className="border-t border-paper-200 bg-paper-100/50 py-24 sm:py-32">
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

      {/* ────────── WHY SOLVENTIA ────────── */}
      <section className="py-24 sm:py-32">
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
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-moss-200 bg-moss-50/40 p-8 shadow-[0_2px_24px_-12px_rgba(77,122,71,0.15)]">
                <ul className="grid gap-4 sm:grid-cols-2">
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
        </div>
      </section>

      {/* ────────── CTA ────────── */}
      <section id="contact" className="border-t border-paper-200 bg-paper-100/50 py-24 sm:py-32">
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
