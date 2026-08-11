import { Link } from 'react-router-dom';
import { Bookmark, ArrowRight, Wallet, Clock, TrendingUp, Trash2 } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { useApp } from '@/context/AppContext';

export default function ShortlistPage() {
  const { ideas, shortlist, toggleShortlist, setSelectedIdeaId } = useApp();
  const saved = ideas.filter((i) => shortlist.includes(i.id));

  return (
    <AppShell>
      <div className="container-editorial py-10">
        <div className="animate-fade-up">
          <p className="eyebrow">Shortlist</p>
          <h1 className="mt-2 font-serif text-3xl font-light tracking-tighter text-ink-800 sm:text-4xl">
            Ideas you've saved
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-500">
            Your shortlisted ideas, ready for deeper evaluation. Compare and pick the one worth
            building a roadmap for.
          </p>
        </div>

        {saved.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-paper-300 bg-paper-100/30 py-20 text-center">
            <Bookmark className="mx-auto h-8 w-8 text-ink-300" strokeWidth={1.25} />
            <h3 className="mt-4 font-serif text-xl font-light text-ink-700">No ideas shortlisted yet</h3>
            <p className="mt-2 text-sm text-ink-400">Explore ideas and save the ones that resonate.</p>
            <Link to="/ideas" className="btn-secondary mt-6">
              Discover ideas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {saved.map((idea) => (
              <div key={idea.id} className="card card-hover flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="chip">{idea.category}</span>
                    <span className="flex items-center gap-1 text-xs text-ink-400">
                      <TrendingUp className="h-3 w-3" /> {idea.feasibility}% feasibility
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-medium text-ink-800">{idea.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 line-clamp-2">{idea.description}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-ink-400">
                    <span className="flex items-center gap-1"><Wallet className="h-3 w-3" /> {idea.budgetRange}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {idea.timeCommitment}</span>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
                  <Link
                    to={`/ideas/${idea.id}`}
                    onClick={() => setSelectedIdeaId(idea.id)}
                    className="btn-primary group"
                  >
                    Explore <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <button
                    onClick={() => toggleShortlist(idea.id)}
                    className="btn-ghost text-ink-400 hover:text-ink-700"
                  >
                    <Trash2 className="h-4 w-4" /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
