import type { ReactNode } from 'react';

export interface SectionHeadingProps {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  alignment?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, alignment = 'left' }: SectionHeadingProps) {
  const isCentered = alignment === 'center';

  return (
    <header className={`${isCentered ? 'mx-auto text-center' : 'text-left'} max-w-2xl`}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: 'var(--blue)' }}>{eyebrow}</p>
      <h2 className="text-[clamp(1.875rem,4vw,2.75rem)] font-extrabold leading-tight tracking-[-0.03em]" style={{ color: 'var(--text)' }}>
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{description}</p>
    </header>
  );
}
