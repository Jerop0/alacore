import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

export interface DisclosureProps {
  id: string;
  title: ReactNode;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export function Disclosure({ id, title, open, onToggle, children }: DisclosureProps) {
  const buttonId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  return (
    <section className="overflow-hidden rounded-[var(--radius-md)] border" style={{ borderColor: 'var(--border)' }}>
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="ui-focus-ring flex min-h-12 w-full items-center justify-between gap-4 px-4 py-3 text-left font-bold"
          style={{ background: 'var(--surface)', color: 'var(--text)' }}
        >
          <span>{title}</span>
          <ChevronDown aria-hidden="true" size={18} className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </h3>
      {open && (
        <div id={panelId} role="region" aria-labelledby={buttonId} className="px-4 pb-4" style={{ background: 'var(--surface)' }}>
          {children}
        </div>
      )}
    </section>
  );
}
