import { ArrowRight, Brain, Building2, Clock, Globe, ShoppingCart, Users, Zap } from 'lucide-react';
import { useApp } from '../App';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';

const PRODUCT_NAMES = ['SmartStock AI', 'ALA ERP', 'ALA CRM', 'ALA POS', 'ALA HR', 'ALA AI'];
const PRODUCT_ICONS = [Brain, Building2, Users, ShoppingCart, Globe, Zap];

export default function Products() {
  const { setPage, t } = useApp();
  const p = t.productsPage;
  const platformTitle = p.platformSuite.split(' — ')[0];
  const registerInterest = () => {
    window.history.pushState({}, '', `/contact?${new URLSearchParams({ product: PRODUCT_NAMES[0] })}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return <div>
    <PageHero eyebrow={p.label} title={p.heroTitle} description={p.heroSub} />
    <div className="border-b" style={{ background: 'var(--blue-subtle)', borderColor: 'var(--blue-muted)' }}><div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-4 text-sm font-bold lg:px-8" style={{ color: 'var(--blue)' }}><Clock size={16} />{p.developmentNotice} <a className="ui-focus-ring underline" href="mailto:products@alacore.net">products@alacore.net</a></div></div>
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <article className="grid gap-10 rounded-[var(--radius-lg)] border p-8 lg:grid-cols-2 lg:p-12" style={{ background: 'var(--surface)', borderColor: 'var(--blue)' }}><div><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)]" style={{ background: 'var(--blue)', color: '#fff' }}><Brain size={20} /></span></div><h2 className="mt-7 text-3xl font-extrabold" style={{ color: 'var(--text)' }}>{PRODUCT_NAMES[0]}</h2><p className="mt-2 text-base font-bold" style={{ color: 'var(--blue)' }}>{p.items[0].tagline}</p><p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.items[0].desc}</p><Button variant="primary" size="lg" className="mt-8" onClick={registerInterest}>{p.registerInterest}<ArrowRight size={16} /></Button></div><div><p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>{p.coreFeatures}</p><ul className="mt-5 grid gap-2">{p.items[0].features.map(feature => <li key={feature} className="rounded-[var(--radius-sm)] px-4 py-3 text-sm font-bold" style={{ background: 'var(--surface-2)', color: 'var(--text-2)' }}>{feature}</li>)}</ul></div></article>
      <div className="mt-16"><SectionHeading eyebrow={p.label} title={platformTitle} description={p.coreFeatures} /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{p.items.slice(1).map((product, index) => { const Icon = PRODUCT_ICONS[index + 1]; const previewFeatures = product.features.slice(0, 2); const remainingFeatures = product.features.slice(2); return <article key={PRODUCT_NAMES[index + 1]} className="flex flex-col rounded-[var(--radius-lg)] border p-6" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}><Icon size={20} style={{ color: 'var(--blue)' }} /><h3 className="mt-5 text-lg font-extrabold" style={{ color: 'var(--text)' }}>{PRODUCT_NAMES[index + 1]}</h3><p className="mt-1 text-sm font-bold" style={{ color: 'var(--blue)' }}>{product.tagline}</p><p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{product.desc}</p><ul className="mt-5 grid gap-1.5 text-sm" style={{ color: 'var(--text-2)' }}>{previewFeatures.map(feature => <li key={feature}>{feature}</li>)}</ul><details className="mt-3 text-sm" style={{ color: 'var(--text-2)' }}><summary className="ui-focus-ring w-fit cursor-pointer rounded-[var(--radius-sm)] font-bold" style={{ color: 'var(--blue)' }}>{remainingFeatures.length} {p.moreFeatures}</summary><ul className="mt-3 grid gap-1.5">{remainingFeatures.map(feature => <li key={feature}>{feature}</li>)}</ul></details></article>; })}</div></div>
    </section>
    <section className="border-t" style={{ background: 'var(--bg-2)', borderColor: 'var(--border)' }}><div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8 lg:py-20"><SectionHeading alignment="center" eyebrow={p.label} title={p.ctaTitle} description={p.ctaSub} /><Button variant="primary" size="lg" className="mt-8" onClick={() => setPage('solutions')}>{p.cta}<ArrowRight size={16} /></Button></div></section>
  </div>;
}
