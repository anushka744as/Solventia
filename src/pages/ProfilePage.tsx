import { Link } from 'react-router-dom';
import { MapPin, GraduationCap, Heart, Zap, Clock, Wallet, Target, ArrowRight, Pencil } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { useApp } from '@/context/AppContext';

export default function ProfilePage() {
  const { profile, onboarding } = useApp();

  const sections = [
    { icon: MapPin, label: 'Location', value: onboarding.location || profile.location },
    { icon: GraduationCap, label: 'Education', value: onboarding.education || profile.education },
    { icon: Heart, label: 'Interests', value: (onboarding.interests.length ? onboarding.interests : profile.interests).join(', ') },
    { icon: Zap, label: 'Skills', value: (onboarding.skills.length ? onboarding.skills : profile.skills).join(', ') },
    { icon: Clock, label: 'Available Time', value: onboarding.availableTime || profile.availableTime },
    { icon: Wallet, label: 'Budget', value: onboarding.budget || profile.budget },
    { icon: Target, label: 'Goals', value: onboarding.goals || profile.goals },
  ];

  return (
    <AppShell>
      <div className="container-editorial relative py-10">
        <div className="pointer-events-none absolute -right-20 top-0 -z-0 h-72 w-72 rounded-full bg-slate-100/25 blur-3xl" />
        <div className="flex items-start justify-between animate-fade-up">
          <div>
            <p className="eyebrow text-slate-500">Profile</p>
            <h1 className="mt-2 font-serif text-3xl font-light tracking-tighter text-ink-800 sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-sm text-ink-500">Your context shapes every idea Solventia generates.</p>
          </div>
          <Link to="/onboarding" className="btn-secondary shrink-0">
            <Pencil className="h-4 w-4" /> Update
          </Link>
        </div>

        {/* Profile card */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="card divide-y divide-paper-200">
              {sections.map((s) => (
                <div key={s.label} className="flex items-start gap-4 px-6 py-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-moss-200 bg-gradient-to-br from-moss-50 to-slate-50">
                    <s.icon className="h-4 w-4 text-moss-500" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-ink-400">{s.label}</p>
                    <p className="mt-1 text-sm font-medium text-ink-700">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-paper-300 bg-gradient-to-br from-paper-50 to-slate-50/40 p-6">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-slate-100/70 blur-2xl" />
              <p className="text-xs uppercase tracking-[0.16em] text-ink-400">Account</p>
              <p className="mt-2 font-serif text-lg font-medium text-ink-800">{profile.name}</p>
              <p className="mt-1 text-sm text-ink-400">Frontend prototype — simulated account</p>
            </div>
            <div className="rounded-2xl border border-moss-200 bg-moss-50/40 p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-moss-600">Tip</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Updating your context re-generates ideas tailored to your current situation. Keep
                it current as your circumstances change.
              </p>
              <Link to="/onboarding" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-moss-600 transition-colors hover:text-moss-700">
                Re-run onboarding <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
