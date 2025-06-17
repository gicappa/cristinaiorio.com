
import React, { useState } from 'react';
import { AppConfig, NavItem } from '../constants.js'; // Added .js extension
import { MenuIcon, XIcon } from './icons.js'; // Added .js extension

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <a href="#home" className={`text-xl font-bold text-${AppConfig.colors.primary} md:text-2xl hover:text-${AppConfig.colors.primaryHover}`}>
              {AppConfig.professionalName}
            </a>
            <p className="text-sm text-slate-500">{AppConfig.profession}</p>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`text-slate-500 hover:text-${AppConfig.colors.primary} focus:outline-none focus:text-${AppConfig.colors.primary}`}
              aria-label="toggle menu"
            >
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)} // Close menu on item click for mobile
                className={`my-1 text-slate-700 hover:text-${AppConfig.colors.primary} md:mx-4 md:my-0 py-2 transition-colors duration-300 ease-in-out border-b-2 border-transparent hover:border-${AppConfig.colors.primary}`}
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