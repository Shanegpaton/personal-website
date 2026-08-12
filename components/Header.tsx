'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Education', href: '/?section=about' },
    { name: 'Experience', href: '/?section=experience' },
    { name: 'Projects', href: '/?section=projects' },
    { name: 'Contact', href: '/?section=contact' },
  ];

  const secondaryNavigation = [
    { name: 'Resume', href: '/resume' },
  ];

  return (
    <header className="bg-dark-900/95 backdrop-blur-sm border-b border-dark-700 sticky top-0 z-50">
      <nav className="container-max-width px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <Code className="w-6 h-6 text-accent-400" />
            <span className="gradient-text">Shane Paton</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(event) => {
                  if (item.name === 'Home') {
                    if (window.location.pathname === '/') {
                      event.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    return;
                  }

                  if (item.href.startsWith('/?section=')) {
                    const section = new URL(item.href, window.location.origin).searchParams.get('section');
                    if (section && window.location.pathname === '/') {
                      event.preventDefault();
                      scrollToSection(section);
                      window.history.replaceState({}, '', '/');
                    }
                  }
                }}
                className="text-dark-300 hover:text-accent-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}

            <div className="pl-4 border-l border-dark-700">
              {secondaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-accent-400 hover:text-accent-300 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-dark-300 hover:text-accent-400 transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-700">
            <div className="flex flex-col space-y-4 pl-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-dark-300 hover:text-accent-400 transition-colors duration-200 font-medium"
                  onClick={(event) => {
                    setIsMenuOpen(false);

                    if (item.name === 'Home') {
                      if (window.location.pathname === '/') {
                        event.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                      return;
                    }

                    if (item.href.startsWith('/?section=')) {
                      const section = new URL(item.href, window.location.origin).searchParams.get('section');
                      if (section && window.location.pathname === '/') {
                        event.preventDefault();
                        scrollToSection(section);
                        window.history.replaceState({}, '', '/');
                      }
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}

              {secondaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-accent-400 hover:text-accent-300 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
