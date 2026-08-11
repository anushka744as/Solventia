import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showTagline = false, size = 'md' }: LogoProps) {
  const sizes = {
    sm: { mark: 'h-7 w-7', text: 'text-lg', tagline: 'text-[10px]' },
    md: { mark: 'h-9 w-9', text: 'text-xl', tagline: 'text-[11px]' },
    lg: { mark: 'h-11 w-11', text: 'text-2xl', tagline: 'text-xs' },
  };
  const s = sizes[size];

  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Solventia home">
      <span className={`${s.mark} grid place-items-center rounded-lg bg-ink-800 transition-transform duration-300 group-hover:scale-105`}>
        <span className="font-serif text-lg font-medium text-paper-50">S</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif font-medium tracking-tightish text-ink-800 ${s.text}`}>Solventia</span>
        {showTagline && (
          <span className={`mt-0.5 uppercase tracking-[0.2em] text-ink-300 ${s.tagline}`}>
            From possibility to plan
          </span>
        )}
      </span>
    </Link>
  );
}
