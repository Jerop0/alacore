import { ArrowRight, BarChart3, Brain, Building2, Cloud, GitMerge, Globe, Shield, Zap } from 'lucide-react';
import { useApp } from '../App';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';

const ICONS = [Brain, Building2, Zap, GitMerge, Cloud, BarChart3, Shield, Globe];

export default function Solutions() {
  const { setPage, t } = useApp();
  const s = t.solutionsPage;

  return <div>
    <PageHero eyebrow={s.label} title={s.title} description={s.sub} />
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <SectionHeading eyebrow={s.label} title={s.capabilities} description={s.cta} />
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {s.details.map((solution, index) => {
          const Icon = ICONS[index];
          return <article key={solution.title} className="grid gap-6 rounded-[var(--radius-lg)] border p-6 sm:grid-cols-[auto_1fr] lg:p-8" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)]" style={{ background: 'var(--blue-subtle)', color: 'var(--blue)' }}><Icon size={20} /></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>{String(index + 1).padStart(2, '0')}</p><h2 className="mt-2 text-xl font-extrabold" style={{ color: 'var(--text)' }}>{solution.title}</h2><p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{solution.desc}</p><ul className="mt-5 grid gap-2 sm:grid-cols-2">{solution.capabilities.map(capability => <li key={capability} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-2)' }}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--blue)' }} />{capability}</li>)}</ul><div className="mt-5 flex flex-wrap gap-2">{solution.industries.map(industry => <span key={industry} className="rounded-full px-2.5 py-1 text-xs font-bold" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>{industry}</span>)}</div></div>
          </article>;
        })}
      </div>
      <div className="mt-12 flex flex-col justify-between gap-6 rounded-[var(--radius-lg)] border p-8 sm:flex-row sm:items-center" style={{ background: 'var(--bg-2)', borderColor: 'var(--border)' }}><p className="max-w-2xl text-lg font-bold leading-snug" style={{ color: 'var(--text)' }}>{s.cta}</p><Button variant="primary" size="lg" onClick={() => setPage('contact')}>{t.nav.cta}<ArrowRight size={16} /></Button></div>
    </section>
  </div>;
}
