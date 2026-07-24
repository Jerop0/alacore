import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useApp } from '../App';
import { pagePath } from '../router';
import type { Page, Lang } from '../types';

const NAV_LINKS: Page[] = [
  'home', 'solutions', 'products', 'about', 'careers', 'contact',
];

const LANGS: Lang[] = ['en', 'de', 'tr'];

export default function Nav() {
  const { page, setPage, lang, setLang, isDark, toggleDark, t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = scrolled
    ? 'backdrop-blur-md border-b'
    : 'border-b border-transparent';

  return (
    <>
      <nav
        aria-label={t.navA11y.primaryNavigation}
        className={`fixed top-0 left-0 right-0 z-50 ${navBg} transition-all duration-300`}
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          borderColor: scrolled ? 'var(--border)' : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <button
              onClick={() => setPage('home')}
              className="ui-focus-ring flex items-center gap-2"
            >
              <img
                src={isDark ? '/images/logo-dark.png' : '/images/logo-light.png'}
                alt="ALA CORE"
                style={{ height: 28 }}
              />
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(key => (
                <button
                  key={key}
                  onClick={() => setPage(key)}
                  className="px-3 py-2 text-[14px] font-500 rounded-lg transition-colors duration-150"
                  style={{
                    fontWeight: 500,
                    color: page === key ? 'var(--text)' : 'var(--text-3)',
                    background: page === key ? 'var(--surface-2)' : 'transparent',
                  }}
                  onMouseEnter={e => {
                    if (page !== key) (e.currentTarget as HTMLElement).style.color = 'var(--text)';
                  }}
                  onMouseLeave={e => {
                    if (page !== key) (e.currentTarget as HTMLElement).style.color = 'var(--text-3)';
                  }}
                >
                  {t.nav[key]}
                </button>
              ))}
            </div>

            {/* Right controls */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Language switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(o => !o)}
                  aria-expanded={langOpen}
                  aria-controls="language-menu"
                  className="ui-focus-ring flex items-center gap-1 px-3 py-2 text-[13px] font-600 rounded-lg transition-colors"
                  style={{ color: 'var(--text-3)', fontWeight: 600 }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'}
                >
                  {lang.toUpperCase()}
                  <ChevronDown size={12} />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={reducedMotion ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
                      transition={reducedMotion ? { duration: 0 } : { duration: 0.15 }}
                      id="language-menu"
                      className="absolute top-full right-0 mt-1 rounded-xl border overflow-hidden shadow-xl"
                      style={{ background: 'var(--surface)', borderColor: 'var(--border)', minWidth: 80 }}
                      onMouseLeave={() => setLangOpen(false)}
                    >
                      {LANGS.map(l => (
                        <button
                          key={l}
                          onClick={() => { setLang(l); setLangOpen(false); }}
                          className="ui-focus-ring w-full text-left px-4 py-2 text-[13px] font-600 transition-colors"
                          style={{
                            fontWeight: 600,
                            color: lang === l ? 'var(--blue)' : 'var(--text-2)',
                            background: lang === l ? 'var(--surface-2)' : 'transparent',
                          }}
                        >
                          {l.toUpperCase()}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dark mode toggle */}
              <button
                onClick={toggleDark}
                className="ui-focus-ring p-2 rounded-lg transition-colors"
                style={{ color: 'var(--text-3)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'}
                aria-label={t.navA11y.toggleTheme}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* CTA */}
              <a href={pagePath('contact')}
                className="ui-focus-ring ml-2 px-4 py-2 text-[13px] font-700 rounded-lg transition-all duration-200"
                style={{
                  background: 'var(--blue)',
                  color: '#fff',
                  fontWeight: 700,
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--blue-hover)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--blue)'}
              >
                {t.nav.cta}
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="ui-focus-ring lg:hidden p-2"
              onClick={() => setMobileOpen(o => !o)}
              style={{ color: 'var(--text)' }}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? t.navA11y.menuClose : t.navA11y.menuOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            role="navigation"
            aria-label={t.navA11y.mobileNavigation}
            initial={reducedMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.2 }}
            className="fixed inset-0 z-40 pt-16"
            style={{ background: 'var(--bg)' }}
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {NAV_LINKS.map(key => (
                <button
                  key={key}
                  onClick={() => { setPage(key); setMobileOpen(false); }}
                  className="ui-focus-ring text-left px-4 py-4 text-[18px] font-600 rounded-xl transition-colors"
                  style={{
                    fontWeight: 600,
                    color: page === key ? 'var(--blue)' : 'var(--text)',
                    background: page === key ? 'var(--blue-subtle)' : 'transparent',
                  }}
                >
                  {t.nav[key]}
                </button>
              ))}

              <div className="mt-6 flex items-center gap-3">
                {LANGS.map(l => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="ui-focus-ring px-3 py-1.5 text-[13px] font-700 rounded-lg border"
                    style={{
                      fontWeight: 700,
                      color: lang === l ? '#fff' : 'var(--text-3)',
                      background: lang === l ? 'var(--blue)' : 'transparent',
                      borderColor: lang === l ? 'var(--blue)' : 'var(--border)',
                    }}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
                <button onClick={toggleDark} aria-label={t.navA11y.toggleTheme} className="ui-focus-ring p-2 rounded-lg" style={{ color: 'var(--text-3)' }}>
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>

              <button
                onClick={() => { setPage('contact'); setMobileOpen(false); }}
                className="ui-focus-ring mt-4 px-6 py-4 text-[15px] font-700 rounded-xl text-center"
                style={{ background: 'var(--blue)', color: '#fff', fontWeight: 700 }}
              >
                {t.nav.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
