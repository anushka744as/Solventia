import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wallet, Clock, TrendingUp, Bookmark, BookmarkCheck, Filter } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { useApp } from '@/context/AppContext';

const CATEGORIES = ['All', 'Food & Beverage', 'Services', 'Education', 'Technology', 'Retail', 'Content & Media'];
const SORTS = [
  { key: 'feasibility', label: 'Feasibility' },
  { key: 'budget', label: 'Budget (low to high)' },
];

export default function IdeasPage() {
  const { ideas, shortlist, toggleShortlist } = useApp();
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('feasibility');

  const filtered = ideas
    .filter((i) => category === 'All' || i.category === category)
    .sort((a, b) => (sortBy === 'feasibility' ? b.feasibility - a.feasibility : 0));

  return (
    <AppShell>
      <div className="container-editorial relative py-10">
        <div className="pointer-events-none absolute -right-20 top-0 -z-0 h-72 w-72 rounded-full bg-clay-100/25 blur-3xl" />
        <div className="animate-fade-up">
          <p className="eyebrow text-clay-600">Discover</p>
          <h1 className="mt-2 font-serif text-3xl font-light tracking-tighter text-ink-800 sm:text-4xl">
            Business ideas shaped around you
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-500">
            Each idea is generated from your context — location, skills, budget and time. Shortlist
            the ones worth exploring further.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                  category === cat
                    ? 'border-ink-800 bg-ink-800 text-paper-50'
                    : 'border-paper-300 bg-paper-50 text-ink-500 hover:border-ink-300 hover:bg-paper-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-ink-400" strokeWidth={1.5} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-paper-300 bg-paper-50 px-3 py-2 text-xs font-medium text-ink-600 focus:border-moss-400 focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.key} value={s.key}>Sort: {s.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Ideas grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((idea, i) => {
            const saved = shortlist.includes(idea.id);
            return (
              <div
                key={idea.id}
                className="card card-hover group flex flex-col p-6 animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start justify-between">
                  <span className="chip" style={{
                    background: idea.category === 'Food & Beverage' ? 'linear-gradient(to right, #eef6ed, #d6ebd3)'
                      : idea.category === 'Services' ? 'linear-gradient(to right, #fbf3ee, #f5e1d4)'
                      : idea.category === 'Education' ? 'linear-gradient(to right, #f0f4f6, #dbe5ea)'
                      : idea.category === 'Technology' ? 'linear-gradient(to right, #eef6ed, #f0f4f6)'
                      : idea.category === 'Retail' ? 'linear-gradient(to right, #fbf3ee, #eef6ed)'
                      : 'linear-gradient(to right, #f0f4f6, #fbf3ee)',
                  }}>{idea.category}</span>
                  <button
                    onClick={() => toggleShortlist(idea.id)}
                    className={`rounded-lg p-1.5 transition-colors ${
                      saved ? 'text-moss-500 hover:bg-moss-50' : 'text-ink-300 hover:bg-paper-100 hover:text-ink-500'
                    }`}
                    aria-label={saved ? 'Remove from shortlist' : 'Add to shortlist'}
                  >
                    {saved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                  </button>
                </div>

                <Link to={`/ideas/${idea.id}`} className="mt-4 block flex-1">
                  <h3 className="font-serif text-lg font-medium text-ink-800 group-hover:text-moss-700 transition-colors">
                    {idea.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 line-clamp-3">
                    {idea.description}
                  </p>
                </Link>

                {/* Feasibility bar */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs text-ink-400">
                    <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3" /> Feasibility</span>
                    <span className="font-medium text-ink-700">{idea.feasibility}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-paper-200">
                    <div className="h-full rounded-full bg-gradient-to-r from-moss-400 to-clay-400" style={{ width: `${idea.feasibility}%` }} />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs text-ink-400">
                  <span className="flex items-center gap-1"><Wallet className="h-3 w-3" /> {idea.budgetRange}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {idea.timeCommitment}</span>
                </div>

                <Link
                  to={`/ideas/${idea.id}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
                >
                  Explore idea <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
