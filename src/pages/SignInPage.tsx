import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Mail, Lock } from 'lucide-react';
import Layout from '@/components/Layout';
import { useApp } from '@/context/AppContext';

export default function SignInPage() {
  const navigate = useNavigate();
  const { signIn } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = email.split('@')[0] || 'Saksham';
    signIn(name.charAt(0).toUpperCase() + name.slice(1));
    navigate('/dashboard');
  };

  return (
    <Layout showFooter={false}>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
        <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-moss-100/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-clay-100/25 blur-3xl" />
        <div className="relative z-10 w-full max-w-sm rounded-3xl border border-paper-200 bg-paper-50/70 p-8 shadow-[0_8px_40px_-20px_rgba(31,29,26,0.18)] backdrop-blur-sm">
          <div className="animate-fade-up text-center">
            <p className="eyebrow text-moss-600">Welcome back</p>
            <h1 className="mt-3 font-serif text-3xl font-light tracking-tighter text-ink-800">
              Sign in to Solventia
            </h1>
            <p className="mt-2 text-sm text-ink-500">
              This is a frontend prototype — any email and password will work.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4 animate-fade-up" style={{ animationDelay: '0.05s' }}>
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-ink-400">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" strokeWidth={1.5} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input-field pl-11"
                  required
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-ink-400">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" strokeWidth={1.5} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-field pl-11"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn-primary w-full group">
              Sign In
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-ink-500 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            New to Solventia?{' '}
            <Link to="/onboarding" className="font-medium text-ink-800 underline-offset-4 hover:underline">
              Get started
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
