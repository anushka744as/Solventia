import { Link } from 'react-router-dom';
import Logo from './Logo';

const footerLinks = [
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Explore', to: '/ideas' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-paper-200 bg-paper-100">
      <div className="container-editorial py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo showTagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
              From possibility to plan. Solventia helps young people move from having an idea to
              knowing what to do next.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-500 transition-colors hover:text-ink-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Project</p>
            <p className="text-sm text-ink-500">Athena Education — Minerva Tech Capstone</p>
            <p className="mt-3 text-sm text-ink-500">
              Scholar: <span className="text-ink-700">Saksham</span>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Solventia. A capstone prototype.
          </p>
          <p className="text-xs text-ink-400">
            Frontend prototype. AI recommendations and market insights shown in the current version
            use simulated data.
          </p>
        </div>
      </div>
    </footer>
  );
}
