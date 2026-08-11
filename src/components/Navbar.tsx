import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useApp } from '@/context/AppContext';

const navLinks = [
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Explore', to: '/ideas' },
  { label: 'About', to: '/#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthed, profile, signOut } = useApp();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = (to: string) => {
    if (to.startsWith('/#')) {
      const hash = to.slice(1);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(to);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-paper-200 bg-paper-50/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-editorial flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Logo />

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.to)}
              className="text-sm font-medium text-ink-500 transition-colors duration-200 hover:text-ink-900"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {isAuthed ? (
            <>
              <Link to="/dashboard" className="btn-ghost">
                Dashboard
              </Link>
              <button
                onClick={() => {
                  signOut();
                  navigate('/');
                }}
                className="btn-ghost"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="btn-ghost">
                Sign In
              </Link>
              <Link to="/onboarding" className="btn-primary">
                Get Started
              </Link>
            </>
          )}
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-paper-200 bg-paper-50/95 backdrop-blur-xl md:hidden">
          <div className="container-editorial flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.to)}
                className="rounded-lg px-3 py-3 text-left text-sm font-medium text-ink-600 transition-colors hover:bg-paper-100 hover:text-ink-900"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-paper-200 pt-4">
              {isAuthed ? (
                <>
                  <Link to="/dashboard" className="btn-secondary w-full">
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      navigate('/');
                    }}
                    className="btn-ghost w-full"
                  >
                    Sign out, {profile.name}
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signin" className="btn-secondary w-full">
                    Sign In
                  </Link>
                  <Link to="/onboarding" className="btn-primary w-full">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
