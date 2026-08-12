import { Link } from 'react-router-dom';
import { ArrowRight, Users, Wallet, TrendingUp, CheckCircle2, AlertTriangle, Target } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { useApp } from '@/context/AppContext';

export default function MarketCheckPage() {
  const { ideas, selectedIdeaId } = useApp();
  const idea = ideas.find((i) => i.id === selectedIdeaId) || ideas[0];

  const metrics = [
    { icon: Users, label: 'Competition', value: idea.competition, note: idea.competition === 'Medium' ? 'Fragmented market with room to differentiate.' : 'Assess direct and indirect alternatives.' },
    { icon: TrendingUp, label: 'Demand', value: idea.demand, note: idea.demand === 'High' ? 'Strong interest in your target segment.' : 'Validate demand with real conversations.' },
    { icon: Wallet, label: 'Initial Cost', value: idea.initialCost, note: 'Low capital requirement to start testing.' },
  ];

  const demandLevel = idea.demand === 'High' ? 85 : idea.demand === 'Medium' ? 60 : 35;
  const competitionLevel = idea.competition === 'High' ? 80 : idea.competition === 'Medium' ? 55 : 30;

  return (
    <AppShell>
      <div className="container-editorial py-10">
        <div className="animate-fade-up">
          <p className="eyebrow">Market Check</p>
          <h1 className="mt-2 font-serif text-3xl font-light tracking-tighter text-ink-800 sm:text-4xl">
            Feasibility analysis
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-500">
            A reality check on competition, demand and cost — before you commit time and money.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="card p-6">
              <div className="flex items-center justify-between">
                <m.icon className="h-5 w-5 text-moss-500" strokeWidth={1.25} />
                <span className={`text-sm font-medium ${
                  m.value === 'High' ? 'text-moss-500' : m.value === 'Medium' ? 'text-slate-500' : 'text-ink-500'
                }`}>
                  {m.value}
                </span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-ink-400">{m.label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{m.note}</p>
            </div>
          ))}
        </div>

        {/* Analysis */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card p-7">
            <h3 className="font-serif text-lg font-medium text-ink-800">Demand vs. Competition</h3>
            <div className="mt-5 space-y-5">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-600">Demand</span>
                  <span className="font-medium text-moss-500">{idea.demand}</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-paper-200">
                  <div className="h-full rounded-full bg-moss-400 transition-all duration-700" style={{ width: `${demandLevel}%` }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-600">Competition</span>
                  <span className="font-medium text-slate-500">{idea.competition}</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-paper-200">
                  <div className="h-full rounded-full bg-slate-400 transition-all duration-700" style={{ width: `${competitionLevel}%` }} />
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-moss-200 bg-moss-50/40 px-5 py-4">
              <p className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-moss-500" strokeWidth={1.5} />
                {demandLevel > competitionLevel
                  ? 'Demand outpaces competition — a favorable signal for entry.'
                  : 'Competition is significant. Differentiation and niche targeting are essential.'}
              </p>
            </div>
          </div>

          <div className="card p-7">
            <h3 className="font-serif text-lg font-medium text-ink-800">Market Summary</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">{idea.marketSummary}</p>
            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.15em] text-ink-400">Existing players</p>
              <div className="mt-3 space-y-2.5">
                {idea.competitors.map((comp) => (
                  <div key={comp.name} className="flex items-start justify-between rounded-lg border border-paper-200 bg-paper-100/40 px-4 py-3">
                    <span className="text-sm font-medium text-ink-700">{comp.name}</span>
                    <span className="ml-3 text-right text-xs text-ink-400">{comp.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gaps & Risks */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card p-7">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-moss-500" strokeWidth={1.25} />
              <h3 className="font-serif text-lg font-medium text-ink-800">Gaps you can exploit</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {idea.gaps.map((gap) => (
                <li key={gap} className="flex items-start gap-3 text-sm leading-relaxed text-ink-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss-400" />
                  {gap}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-7">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-slate-400" strokeWidth={1.25} />
              <h3 className="font-serif text-lg font-medium text-ink-800">Things to watch</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {[
                'Validate pricing willingness with at least 5 potential customers',
                'Reliability and consistency are the top retention factors for subscriptions',
                'Local regulations for home-based food businesses vary — check before scaling',
              ].map((risk) => (
                <li key={risk} className="flex items-start gap-3 text-sm leading-relaxed text-ink-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {risk}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-paper-300 bg-paper-50 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-serif text-lg font-medium text-ink-800">Ready to move forward?</h3>
            <p className="mt-1 text-sm text-ink-500">Turn this idea into a step-by-step roadmap.</p>
          </div>
          <Link to="/roadmap" className="btn-primary group shrink-0">
            Build Roadmap
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
