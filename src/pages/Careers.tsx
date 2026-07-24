import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useApp } from '../App';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';

export default function Careers() {
  const { t } = useApp();
  const c = t.careers;
  const p = t.careersPage;
  return <div>
    <PageHero eyebrow={p.hero.label} title={p.hero.title} description={p.hero.sub} />
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20"><SectionHeading eyebrow={p.hero.label} title={c.culture.title} description="" /><div className="mt-10 grid gap-5 sm:grid-cols-2">{c.culture.items.map((item, index) => <article key={item.title} className="rounded-[var(--radius-lg)] border p-7" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}><p className="text-sm font-extrabold" style={{ color: 'var(--blue)' }}>{String(index + 1).padStart(2, '0')}</p><h2 className="mt-5 text-xl font-extrabold" style={{ color: 'var(--text)' }}>{item.title}</h2><p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p></article>)}</div></section>
    <section className="border-y" style={{ background: 'var(--bg-2)', borderColor: 'var(--border)' }}><div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20"><SectionHeading eyebrow={p.hero.label} title={c.benefits.title} description="" /><ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{c.benefits.items.map(item => <li key={item} className="flex items-center gap-3 rounded-[var(--radius-md)] border p-4 text-sm font-bold" style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text-2)' }}><CheckCircle2 size={17} style={{ color: 'var(--blue)' }} />{item}</li>)}</ul></div></section>
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20"><SectionHeading eyebrow={p.hero.label} title={c.process.title} description="" /><ol className="mt-10 max-w-3xl">{c.process.steps.map((step, index) => <li key={step} className="flex gap-4 border-b py-5 last:border-b-0" style={{ borderColor: 'var(--border)' }}><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-extrabold" style={{ background: index === 0 ? 'var(--blue)' : 'var(--surface-2)', color: index === 0 ? '#fff' : 'var(--text-muted)' }}>{index + 1}</span><span className="pt-1 text-sm font-bold" style={{ color: 'var(--text)' }}>{step}</span></li>)}</ol></section>
    <section className="border-t" style={{ background: 'var(--bg-2)', borderColor: 'var(--border)' }}><div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20"><SectionHeading alignment="center" eyebrow={p.hero.label} title={p.openPositions} description={p.noJobsSub} /><div className="mx-auto mt-10 max-w-2xl rounded-[var(--radius-lg)] border p-8 text-center lg:p-12" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}><p className="text-xl font-extrabold" style={{ color: 'var(--text)' }}>{c.noJobs}</p><a href={`mailto:${c.ctaEmail}`} className="ui-focus-ring mt-7 inline-flex items-center gap-2 rounded-[var(--radius-md)] px-5 py-3 text-sm font-bold" style={{ background: 'var(--blue)', color: '#fff' }}>{p.cta}<ArrowRight size={16} /></a></div></div></section>
  </div>;
}
