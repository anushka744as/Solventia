import { Link } from 'react-router-dom';
import { Check, Circle, Clock, ArrowRight, BookOpen } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { useApp } from '@/context/AppContext';

const statusStyles = {
  done: { ring: 'border-moss-400 bg-moss-400', label: 'Done', labelColor: 'text-moss-600' },
  'in-progress': { ring: 'border-ink-400 bg-ink-400', label: 'In progress', labelColor: 'text-ink-700' },
  todo: { ring: 'border-paper-300 bg-transparent', label: 'To do', labelColor: 'text-ink-400' },
} as const;

export default function RoadmapPage() {
  const { roadmap, toggleRoadmapStep, roadmapProgress, ideas, selectedIdeaId } = useApp();
  const idea = ideas.find((i) => i.id === selectedIdeaId) || ideas[0];

  return (
    <AppShell>
      <div className="container-editorial py-10">
        <div className="animate-fade-up">
          <p className="eyebrow">Roadmap</p>
          <h1 className="mt-2 font-serif text-3xl font-light tracking-tighter text-ink-800 sm:text-4xl">
            Your path for {idea.title}
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-500">
            A practical, step-by-step plan. Click any step to update its status.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-8 rounded-2xl border border-paper-300 bg-paper-50 p-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-ink-400">Overall progress</p>
              <p className="mt-1 font-serif text-3xl font-light text-ink-800">{roadmapProgress}%</p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.16em] text-ink-400">Steps</p>
              <p className="mt-1 font-serif text-3xl font-light text-ink-800">
                {roadmap.filter((s) => s.status === 'done').length}/{roadmap.length}
              </p>
            </div>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-paper-200">
            <div className="h-full rounded-full bg-moss-400 transition-all duration-700" style={{ width: `${roadmapProgress}%` }} />
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-10">
          <div className="relative">
            <div className="absolute left-[1.625rem] top-0 bottom-0 w-px bg-paper-200" />
            <div className="space-y-5">
              {roadmap.map((step) => {
                const style = statusStyles[step.status];
                return (
                  <div key={step.id} className="relative flex gap-5">
                    <button
                      onClick={() => toggleRoadmapStep(step.id)}
                      className={`relative z-10 grid h-13 w-13 shrink-0 place-items-center rounded-full border-2 transition-all duration-300 hover:scale-105 ${style.ring}`}
                      style={{ width: '3.25rem', height: '3.25rem' }}
                      aria-label="Toggle step status"
                    >
                      {step.status === 'done' ? (
                        <Check className="h-5 w-5 text-paper-50" strokeWidth={2} />
                      ) : step.status === 'in-progress' ? (
                        <Clock className="h-5 w-5 text-paper-50" strokeWidth={1.5} />
                      ) : (
                        <Circle className="h-5 w-5 text-ink-300" strokeWidth={1.5} />
                      )}
                    </button>

                    <div className={`flex-1 rounded-2xl border p-5 transition-all duration-300 ${
                      step.status === 'done'
                        ? 'border-paper-200 bg-paper-100/30 opacity-75'
                        : 'border-paper-300 bg-paper-50'
                    }`}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.16em] text-ink-400">{step.phase}</p>
                          <h3 className={`mt-1 font-serif text-lg font-medium ${
                            step.status === 'done' ? 'text-ink-500' : 'text-ink-800'
                          }`}>
                            {step.title}
                          </h3>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          <span className={`chip ${style.labelColor}`}>{style.label}</span>
                          <span className="chip text-ink-400"><Clock className="h-3 w-3" /> {step.duration}</span>
                        </div>
                      </div>

                      <p className={`mt-2.5 text-sm leading-relaxed ${
                        step.status === 'done' ? 'text-ink-400' : 'text-ink-500'
                      }`}>
                        {step.description}
                      </p>

                      {step.resources.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {step.resources.map((res) => (
                            <span key={res} className="inline-flex items-center gap-1.5 rounded-lg border border-paper-200 bg-paper-100/50 px-3 py-1.5 text-xs text-ink-500">
                              <BookOpen className="h-3 w-3" /> {res}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        {roadmapProgress === 100 ? (
          <div className="mt-10 rounded-2xl border border-moss-200 bg-moss-50/40 p-7 text-center">
            <h3 className="font-serif text-xl font-medium text-ink-800">All steps complete.</h3>
            <p className="mt-2 text-sm text-ink-500">You've worked through the full roadmap. Time to take it into the real world.</p>
          </div>
        ) : (
          <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-paper-300 bg-paper-50 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-serif text-lg font-medium text-ink-800">Keep the momentum going</h3>
              <p className="mt-1 text-sm text-ink-500">Complete each step to move closer to launch.</p>
            </div>
            <Link to="/dashboard" className="btn-secondary shrink-0">
              Back to dashboard <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </AppShell>
  );
}
