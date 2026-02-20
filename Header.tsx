import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="https://mocha-cdn.com/019afef9-f51a-76cb-8e5b-672702aad6e4/cropped-chatgpt-image-jun-11-2025-at-05_50_50-pm-1.webp" alt="Sentieri di Libertà Logo" className="h-10 w-10 object-contain" />
            <span className="text-2xl font-bold text-red-900">Sentieri di Libertà</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/mountains" className="text-slate-700 hover:text-red-900 font-medium transition-colors">Mountains</Link>
            <Link to="/sea-beach" className="text-slate-700 hover:text-red-900 font-medium transition-colors">
              Sea & Beach
            </Link>
            <Link to="/cities" className="text-slate-700 hover:text-red-900 font-medium transition-colors">
              Cities
            </Link>
            <Link to="/lakes" className="text-slate-700 hover:text-red-900 font-medium transition-colors">
              Lakes
            </Link>
            <Link to="/cv" className="text-slate-700 hover:text-red-900 font-medium transition-colors">
              CV
            </Link>
            <Link to="/trip" className="text-slate-700 hover:text-red-900 font-medium transition-colors">
              A Trip With Me
            </Link>
            <Link to="/my-project" className="text-slate-700 hover:text-red-900 font-medium transition-colors">
              My Project
            </Link>
            <a href="/#contact" className="bg-red-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-800 transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-red-900" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <Link to="/mountains" className="text-slate-700 hover:text-red-900 font-medium transition-colors py-2" onClick={() => setIsOpen(false)}>
              Mountains
            </Link>
            <Link to="/sea-beach" className="text-slate-700 hover:text-red-900 font-medium transition-colors py-2" onClick={() => setIsOpen(false)}>
              Sea & Beach
            </Link>
            <Link to="/cities" className="text-slate-700 hover:text-red-900 font-medium transition-colors py-2" onClick={() => setIsOpen(false)}>
              Cities
            </Link>
            <Link to="/lakes" className="text-slate-700 hover:text-red-900 font-medium transition-colors py-2" onClick={() => setIsOpen(false)}>
              Lakes
            </Link>
            <Link to="/cv" className="text-slate-700 hover:text-red-900 font-medium transition-colors py-2" onClick={() => setIsOpen(false)}>
              CV
            </Link>
            <Link to="/trip" className="text-slate-700 hover:text-red-900 font-medium transition-colors py-2" onClick={() => setIsOpen(false)}>
              A Trip With Me
            </Link>
            <Link to="/my-project" className="text-slate-700 hover:text-red-900 font-medium transition-colors py-2" onClick={() => setIsOpen(false)}>
              My Project
            </Link>
            <a href="/#contact" className="bg-red-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-800 transition-colors text-center" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </nav>}
      </div>
    </header>;
}