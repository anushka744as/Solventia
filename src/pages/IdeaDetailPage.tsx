import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, TrendingUp, Wallet, Clock, Bookmark, BookmarkCheck, BarChart3 } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { useApp } from '@/context/AppContext';

export default function IdeaDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { ideas, shortlist, toggleShortlist, setSelectedIdeaId } = useApp();
  const idea = ideas.find((i) => i.id === id);

  if (!idea) {
    return (
      <AppShell>
        <div className="container-editorial py-20 text-center">
          <h1 className="font-serif text-2xl font-light text-ink-800">Idea not found</h1>
          <Link to="/ideas" className="btn-secondary mt-6">Back to ideas</Link>
        </div>
      </AppShell>
    );
  }

  const saved = shortlist.includes(idea.id);

  const handleSelectAndBuild = () => {
    setSelectedIdeaId(idea.id);
    if (!saved) toggleShortlist(idea.id);
    navigate('/roadmap');
  };

  const metrics = [
    { icon: TrendingUp, label: 'Feasibility', value: `${idea.feasibility}%` },
    { icon: Wallet, label: 'Budget', value: idea.budgetRange },
    { icon: Clock, label: 'Time', value: idea.timeCommitment },
  ];

  return (
    <AppShell>
      <div className="container-editorial relative py-10">
        <div className="pointer-events-none absolute -left-20 top-0 -z-0 h-72 w-72 rounded-full bg-moss-100/20 blur-3xl" />
        <Link to="/ideas" className="btn-ghost mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to ideas
        </Link>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="animate-fade-up">
              <span className="chip">{idea.category}</span>
              <h1 className="mt-4 font-serif text-3xl font-light tracking-tighter text-ink-800 text-balance sm:text-4xl">
                {idea.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink-500 text-pretty">
                {idea.description}
              </p>
            </div>

            {/* Why it fits */}
            <div className="mt-10">
              <h2 className="font-serif text-xl font-medium text-ink-800">Why this fits you</h2>
              <ul className="mt-4 space-y-3">
                {idea.whyItFits.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 text-sm leading-relaxed text-ink-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss-400" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            {/* Market summary */}
            <div className="mt-8 rounded-2xl border border-paper-200 bg-paper-100/40 p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-ink-400">Market Summary</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{idea.marketSummary}</p>
            </div>

            {/* Gaps */}
            <div className="mt-8">
              <h2 className="font-serif text-xl font-medium text-ink-800">Gaps you can exploit</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {idea.gaps.map((gap) => (
                  <div key={gap} className="rounded-xl border border-paper-200 bg-paper-50 px-5 py-4">
                    <p className="text-sm leading-relaxed text-ink-600">{gap}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="relative overflow-hidden rounded-2xl border border-paper-300 bg-gradient-to-br from-paper-50 to-slate-50/30 p-6 shadow-[0_2px_24px_-12px_rgba(31,29,26,0.1)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-moss-100/30 blur-2xl" />
                <p className="text-xs uppercase tracking-[0.16em] text-ink-400">At a glance</p>
                <div className="mt-4 space-y-4">
                  {metrics.map((m) => (
                    <div key={m.label} className="flex items-center justify-between">
                      <span className="flex items-center gap-2.5 text-sm text-ink-500">
                        <m.icon className="h-4 w-4 text-moss-500" strokeWidth={1.5} />
                        {m.label}
                      </span>
                      <span className="text-sm font-medium text-ink-800">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="relative mt-5 space-y-2.5 border-t border-paper-200 pt-4">
                  {[
                    { label: 'Competition', value: idea.competition, color: 'text-slate-500' },
                    { label: 'Demand', value: idea.demand, color: 'text-moss-500' },
                    { label: 'Initial cost', value: idea.initialCost, color: 'text-moss-500' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between">
                      <span className="text-sm text-ink-500">{row.label}</span>
                      <span className={`text-sm font-medium ${row.color}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                <button onClick={handleSelectAndBuild} className="btn-primary w-full group">
                  Build Roadmap
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
                <Link to="/market-check" className="btn-secondary w-full">
                  <BarChart3 className="h-4 w-4" />
                  Market Check
                </Link>
                <button
                  onClick={() => toggleShortlist(idea.id)}
                  className={`w-full rounded-full border px-6 py-3 text-sm font-medium transition-colors ${
                    saved
                      ? 'border-moss-300 bg-moss-50 text-moss-600'
                      : 'border-paper-300 bg-paper-50 text-ink-600 hover:border-ink-300 hover:bg-paper-100'
                  }`}
                >
                  {saved ? (
                    <span className="inline-flex items-center gap-1.5"><BookmarkCheck className="h-4 w-4" /> Shortlisted</span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5"><Bookmark className="h-4 w-4" /> Add to shortlist</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Competitors */}
        <div className="mt-14">
          <h2 className="font-serif text-xl font-medium text-ink-800">Existing players</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {idea.competitors.map((comp) => (
              <div key={comp.name} className="card p-5">
                <p className="text-sm font-medium text-ink-800">{comp.name}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-400">{comp.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
