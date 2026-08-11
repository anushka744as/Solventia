import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Wallet, Clock, CheckCircle2, Lightbulb, Bookmark, Route, BarChart3 } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { useApp } from '@/context/AppContext';

export default function DashboardPage() {
  const { profile, ideas, shortlist, roadmapProgress, selectedIdeaId } = useApp();
  const recommended = ideas.find((i) => i.id === selectedIdeaId) || ideas[0];

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  const stats = [
    { label: 'Ideas Explored', value: String(ideas.length + 2), icon: Lightbulb },
    { label: 'Shortlisted', value: String(shortlist.length), icon: Bookmark },
    { label: 'Roadmap Progress', value: `${roadmapProgress}%`, icon: Route },
  ];

  return (
    <AppShell>
      <div className="container-editorial py-10">
        {/* Greeting */}
        <div className="animate-fade-up">
          <p className="eyebrow">Dashboard</p>
          <h1 className="mt-2 font-serif text-3xl font-light tracking-tighter text-ink-800 sm:text-4xl">
            {greeting}, {profile.name}.
          </h1>
          <p className="mt-2 text-sm text-ink-500">Here's your venture snapshot.</p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-paper-200 bg-paper-200 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={stat.label} className="bg-paper-50 px-6 py-6">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.15em] text-ink-400">{stat.label}</p>
                <stat.icon className={`h-4 w-4 ${i === 0 ? 'text-moss-400' : i === 1 ? 'text-clay-400' : 'text-slate-400'}`} strokeWidth={1.5} />
              </div>
              <p className="mt-2 font-serif text-3xl font-light text-ink-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recommended idea + quick actions */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Recommended idea */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-paper-300 bg-paper-50 p-7 shadow-[0_2px_24px_-12px_rgba(31,29,26,0.1)]">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.16em] text-ink-400">Recommended Idea</p>
                <span className="chip border-moss-200 bg-moss-50/50 text-moss-600">
                  <CheckCircle2 className="h-3 w-3" /> Best fit
                </span>
              </div>
              <h2 className="mt-3 font-serif text-2xl font-medium text-ink-800">{recommended.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{recommended.description}</p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { icon: TrendingUp, label: 'Feasibility', value: `${recommended.feasibility}%` },
                  { icon: Wallet, label: 'Budget', value: recommended.budgetRange },
                  { icon: Clock, label: 'Time', value: recommended.timeCommitment },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-paper-200 bg-paper-100/50 px-4 py-3">
                    <m.icon className="h-4 w-4 text-moss-500" strokeWidth={1.5} />
                    <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-ink-400">{m.label}</p>
                    <p className="mt-0.5 text-sm font-medium text-ink-700">{m.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link to={`/ideas/${recommended.id}`} className="btn-primary group">
                  View Idea Details
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link to="/market-check" className="btn-secondary">
                  <BarChart3 className="h-4 w-4" />
                  Market Check
                </Link>
              </div>
            </div>
          </div>

          {/* Next step + quick links */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-moss-200 bg-moss-50/40 p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-moss-600">Next Step</p>
              <p className="mt-2 font-serif text-lg font-medium text-ink-800">
                Interview 5 potential customers
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Talk to people who match your target customer. Understand their needs before
                building anything.
              </p>
              <Link to="/roadmap" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-moss-600 transition-colors hover:text-moss-700">
                Go to roadmap <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-paper-300 bg-paper-50 p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-ink-400">Quick Actions</p>
              <div className="mt-4 space-y-2">
                <Link to="/ideas" className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink-600 transition-colors hover:bg-paper-100 hover:text-ink-900">
                  <span className="flex items-center gap-2.5"><Lightbulb className="h-4 w-4 text-ink-400" strokeWidth={1.5} /> Discover more ideas</span>
                  <ArrowRight className="h-3.5 w-3.5 text-ink-300" />
                </Link>
                <Link to="/shortlist" className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink-600 transition-colors hover:bg-paper-100 hover:text-ink-900">
                  <span className="flex items-center gap-2.5"><Bookmark className="h-4 w-4 text-ink-400" strokeWidth={1.5} /> View shortlist</span>
                  <ArrowRight className="h-3.5 w-3.5 text-ink-300" />
                </Link>
                <Link to="/profile" className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink-600 transition-colors hover:bg-paper-100 hover:text-ink-900">
                  <span className="flex items-center gap-2.5"><Route className="h-4 w-4 text-ink-400" strokeWidth={1.5} /> Update preferences</span>
                  <ArrowRight className="h-3.5 w-3.5 text-ink-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Top ideas */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-medium text-ink-800">Top Ideas For You</h3>
            <Link to="/ideas" className="btn-ghost">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ideas.slice(0, 3).map((idea) => (
              <Link
                key={idea.id}
                to={`/ideas/${idea.id}`}
                className="card card-hover group block p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="chip">{idea.category}</span>
                  <span className="font-serif text-2xl font-light text-ink-700">{idea.feasibility}%</span>
                </div>
                <h4 className="mt-4 font-serif text-lg font-medium text-ink-800 group-hover:text-moss-700 transition-colors">
                  {idea.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 line-clamp-2">{idea.description}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-ink-400">
                  <span className="flex items-center gap-1"><Wallet className="h-3 w-3" /> {idea.budgetRange}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {idea.timeCommitment}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
