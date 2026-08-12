import { type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Lightbulb, BarChart3, Route, Bookmark, User, ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useApp } from '@/context/AppContext';

const sidebarLinks = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/ideas', label: 'Discover Ideas', icon: Lightbulb },
  { to: '/market-check', label: 'Market Check', icon: BarChart3 },
  { to: '/roadmap', label: 'Roadmap', icon: Route },
  { to: '/shortlist', label: 'Shortlist', icon: Bookmark },
  { to: '/profile', label: 'Profile', icon: User },
];

interface AppShellProps {
  children: ReactNode;
  showFooter?: boolean;
}

export default function AppShell({ children, showFooter = true }: AppShellProps) {
  const location = useLocation();
  const { profile, roadmapProgress } = useApp();

  return (
    <div className="flex min-h-screen flex-col bg-paper-50">
      <Navbar />
      <div className="relative flex flex-1 overflow-hidden pt-16">
        <div className="pointer-events-none absolute right-0 top-16 -z-0 h-80 w-80 rounded-full bg-moss-100/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 -z-0 h-72 w-72 rounded-full bg-clay-100/15 blur-3xl" />
        {/* Sidebar */}
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-paper-200 bg-paper-100/40 lg:block">
          <div className="flex h-full flex-col">
            <div className="border-b border-paper-200 px-5 py-5">
              <p className="text-xs uppercase tracking-[0.16em] text-ink-400">Signed in as</p>
              <p className="mt-1 font-serif text-base font-medium text-ink-800">{profile.name}</p>
            </div>
            <nav className="flex-1 space-y-1 px-3 py-4">
              {sidebarLinks.map((link) => {
                const active = location.pathname === link.to || location.pathname.startsWith(link.to + '/');
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? 'bg-ink-800 text-paper-50'
                        : 'text-ink-500 hover:bg-paper-200/60 hover:text-ink-800'
                    }`}
                  >
                    <link.icon className="h-4 w-4" strokeWidth={1.5} />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-paper-200 px-5 py-5">
              <p className="text-xs uppercase tracking-[0.16em] text-ink-400">Roadmap progress</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-paper-200">
                  <div className="h-full rounded-full bg-moss-400" style={{ width: `${roadmapProgress}%` }} />
                </div>
                <span className="text-xs font-medium text-ink-600">{roadmapProgress}%</span>
              </div>
              <Link to="/" className="mt-4 inline-flex items-center gap-1.5 text-xs text-ink-400 transition-colors hover:text-ink-700">
                <ArrowLeft className="h-3 w-3" />
                Back to home
              </Link>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex flex-1 flex-col min-w-0">
          <main className="relative z-10 flex-1">{children}</main>
          {showFooter && <Footer />}
        </div>
      </div>
    </div>
  );
}
