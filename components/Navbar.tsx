
import React, { useEffect, useState } from 'react';
import { AppConfig, NavItem } from '../constants.js'; // Added .js extension
import { MenuIcon, XIcon } from './icons.js'; // Added .js extension

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Escape closes the mobile menu, so keyboard users are never trapped in it.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="rounded-sm leading-tight"
          >
            <span className="block text-xl font-bold text-brand transition-colors hover:text-brand-hover md:text-2xl">
              {AppConfig.professionalName}
            </span>
            <span className="block text-sm text-slate-500">{AppConfig.profession}</span>
          </a>

          <div className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-soft hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label={isOpen ? 'Chiudi il menu' : 'Apri il menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-slate-600 transition-colors hover:bg-slate-100 hover:text-brand md:hidden"
          >
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        <div id="mobile-menu" className={`${isOpen ? 'block' : 'hidden'} pb-3 md:hidden`}>
          <div className="flex flex-col border-t border-slate-200 pt-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)} // Close menu on item click for mobile
                className="flex min-h-[44px] items-center rounded-md px-3 text-slate-700 transition-colors hover:bg-brand-soft hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
