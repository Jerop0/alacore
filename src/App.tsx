import { useState, useEffect, createContext, useContext } from 'react';
import type { Page, Lang } from './types';
import { useTranslations } from './i18n';
import { navigateTo, readPage } from './router';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

interface AppCtx {
  page: Page;
  setPage: (p: Page) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  isDark: boolean;
  toggleDark: () => void;
  openAI: () => void;
  t: ReturnType<typeof useTranslations>;
}

export const Ctx = createContext<AppCtx>(null!);
export const useApp = () => useContext(Ctx);

export default function App() {
  const [page, setPage] = useState<Page>(() => readPage(window.location.pathname));
  const [lang, setLang] = useState<Lang>('en');
  const [isDark, setIsDark] = useState(true);
  const [aiOpen, setAiOpen] = useState(false);

  const t = useTranslations(lang);

  useEffect(() => {
    const saved = localStorage.getItem('ala-theme');
    if (saved === 'light') setIsDark(false);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);
    localStorage.setItem('ala-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const syncPageFromLocation = () => {
      setPage(readPage(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', syncPageFromLocation);
    return () => window.removeEventListener('popstate', syncPageFromLocation);
  }, []);

  const navigate = (nextPage: Page) => {
    if (readPage(window.location.pathname) === nextPage) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    navigateTo(nextPage);
  };

  const ctx: AppCtx = {
    page, setPage: navigate,
    lang, setLang,
    isDark, toggleDark: () => setIsDark(d => !d),
    openAI: () => setAiOpen(true),
    t,
  };

  const pages: Record<Page, JSX.Element> = {
    home: <Home />,
    solutions: <Solutions />,
    products: <Products />,
    about: <About />,
    careers: <Careers />,
    contact: <Contact />,
  };

  return (
    <Ctx.Provider value={ctx}>
      <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', fontFamily: "'Manrope', system-ui, sans-serif" }}>
        <Nav />
        <main>{pages[page]}</main>
        <Footer />
        <FloatingActions onAIClick={() => setAiOpen(true)} />
        <AIChat open={aiOpen} onClose={() => setAiOpen(false)} />
      </div>
    </Ctx.Provider>
  );
}
