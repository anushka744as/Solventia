import { ArrowRight, TrendingUp, Wallet, Clock, CheckCircle2 } from 'lucide-react';

export default function HeroDashboardPreview() {
  return (
    <div className="relative">
      {/* Subtle ambient glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-moss-100/40 via-clay-50/30 to-slate-100/25 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-paper-300 bg-paper-50 shadow-[0_8px_40px_-16px_rgba(31,29,26,0.12)]">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-paper-200 px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-clay-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-moss-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="ml-3 text-xs font-medium tracking-wide text-ink-300">SOLVENTIA</span>
        </div>

        {/* Greeting */}
        <div className="relative overflow-hidden px-6 pt-6 pb-4">
          <div className="absolute -right-8 -top-12 h-32 w-32 rounded-full bg-moss-100/60 blur-2xl" />
          <div className="absolute right-8 top-5 h-2 w-2 rounded-full bg-clay-400" />
          <p className="relative font-serif text-lg font-light text-ink-700">Good afternoon, Saksham.</p>
          <p className="relative mt-0.5 text-xs uppercase tracking-[0.18em] text-ink-400">Your Venture Snapshot</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px overflow-hidden border-y border-paper-200 bg-paper-200">
          {[
            { label: 'Ideas Explored', value: '8' },
            { label: 'Shortlisted', value: '3' },
            { label: 'Roadmap Progress', value: '42%' },
          ].map((stat) => (
            <div key={stat.label} className="bg-paper-50 px-5 py-4 transition-colors hover:bg-moss-50/30">
              <p className="text-[11px] uppercase tracking-[0.15em] text-ink-400">{stat.label}</p>
              <p className="mt-1.5 font-serif text-2xl font-light text-ink-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recommended idea card */}
        <div className="p-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-400">Recommended Idea</p>
          <h3 className="mt-2 font-serif text-xl font-medium text-ink-800">
            Local Healthy Meal Subscription
          </h3>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { icon: TrendingUp, label: 'Feasibility', value: '82%' },
              { icon: Wallet, label: 'Budget', value: '₹5K–₹20K' },
              { icon: Clock, label: 'Time', value: '5–10 hrs/week' },
            ].map((m) => (
              <div key={m.label} className="rounded-xl border border-paper-200 bg-gradient-to-br from-paper-100/80 to-moss-50/20 px-3 py-3 transition-colors hover:border-moss-200">
                <m.icon className="h-3.5 w-3.5 text-moss-500" strokeWidth={1.5} />
                <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-ink-400">{m.label}</p>
                <p className="mt-0.5 text-sm font-medium text-ink-700">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Next step */}
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-moss-200 bg-moss-50/50 px-4 py-3.5">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-moss-500" strokeWidth={1.5} />
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-moss-600">Next step</p>
              <p className="mt-0.5 text-sm text-ink-700">Interview 5 potential customers</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-5">
            <div className="flex items-center justify-between text-[11px] text-ink-400">
              <span>Roadmap</span>
              <span>42% complete</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-paper-200">
              <div className="h-full rounded-full bg-moss-400" style={{ width: '42%' }} />
            </div>
          </div>

          <button className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-moss-600 to-moss-500 py-2.5 text-xs font-medium text-paper-50 transition-all hover:from-moss-700 hover:to-moss-600 hover:shadow-lg hover:shadow-moss-700/20">
            View full dashboard <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
