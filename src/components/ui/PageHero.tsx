import type { ReactNode } from 'react';

export interface PageHeroProps {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="border-b pt-32 pb-20" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: 'var(--blue)' }}>{eyebrow}</p>
        <h1 className="max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight tracking-[-0.03em]" style={{ color: 'var(--text)' }}>
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {description}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
