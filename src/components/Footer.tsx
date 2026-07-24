import { useApp } from '../App';
import type { Page } from '../types';

const PRODUCTS_LIST = ['SmartStock AI', 'ALA ERP', 'ALA CRM', 'ALA POS', 'ALA HR', 'ALA AI'];
const COMPANY_LINKS: Page[] = ['about', 'careers', 'contact'];
const SOCIAL: { label: string; href: string }[] = [];
const DEPT_EMAILS = ['ai@alacore.net', 'software@alacore.net', 'web@alacore.net', 'enterprise@alacore.net', 'automation@alacore.net', 'cloud@alacore.net', 'security@alacore.net', 'data@alacore.net', 'design@alacore.net', 'infrastructure@alacore.net', 'payments@alacore.net', 'iot@alacore.net', 'careers@alacore.net'];

export default function Footer() {
  const { setPage, t, isDark } = useApp();

  const linkStyle = {
    color: 'var(--text-3)',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'color 0.15s',
    textDecoration: 'none',
    display: 'block',
    paddingTop: 2,
    paddingBottom: 2,
  };

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-2)' }}>
      {/* Department emails */}
      <div style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <p className="text-[11px] font-700 uppercase tracking-widest mb-6" style={{ color: 'var(--text-4)', letterSpacing: '0.12em', fontWeight: 700 }}>
            {t.footer.departments}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-x-6 gap-y-3">
            {DEPT_EMAILS.map((email, index) => (
              <div key={email}>
                <p className="text-[12px] font-600 mb-0.5" style={{ color: 'var(--text-3)', fontWeight: 600 }}>{t.footerPage.departments[index]}</p>
                <a href={`mailto:${email}`} className="text-[12px] font-500 transition-colors hover:text-blue-500" style={{ color: 'var(--text-4)', fontWeight: 500, textDecoration: 'none' }}>
                  {email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={isDark ? '/images/logo-dark.png' : '/images/logo-light.png'}
                alt="ALA CORE"
                style={{ height: 32 }}
              />
            </div>
            <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-3)', maxWidth: 200 }}>
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex flex-col gap-1.5">
              {SOCIAL.map(({ label, href }) => (
                <a key={label} href={href} style={linkStyle}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-[11px] font-700 uppercase tracking-widest mb-4" style={{ color: 'var(--text-4)', letterSpacing: '0.12em', fontWeight: 700 }}>
              {t.footer.solutions}
            </p>
            {t.footerPage.solutionLinks.map(s => (
              <button key={s} onClick={() => setPage('solutions')} style={linkStyle}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Products */}
          <div>
            <p className="text-[11px] font-700 uppercase tracking-widest mb-4" style={{ color: 'var(--text-4)', letterSpacing: '0.12em', fontWeight: 700 }}>
              {t.footer.products}
            </p>
            {PRODUCTS_LIST.map(p => (
              <button key={p} onClick={() => setPage('products')} style={linkStyle}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] font-700 uppercase tracking-widest mb-4" style={{ color: 'var(--text-4)', letterSpacing: '0.12em', fontWeight: 700 }}>
              {t.footer.company}
            </p>
            {COMPANY_LINKS.map(page => (
              <button key={page} onClick={() => setPage(page)} style={linkStyle}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'}
              >
                {t.nav[page]}
              </button>
            ))}
            <a href="mailto:info@alacore.net" style={{ ...linkStyle, marginTop: 8 }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'}
            >
              info@alacore.net
            </a>
            <a href="https://alacore.net" style={linkStyle}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'}
            >
              alacore.net
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-[11px] font-700 uppercase tracking-widest mb-4" style={{ color: 'var(--text-4)', letterSpacing: '0.12em', fontWeight: 700 }}>
              {t.footer.newsletter}
            </p>
            <p className="text-[14px] mb-4 leading-relaxed" style={{ color: 'var(--text-3)' }}>
              {t.footer.newsletterSub}
            </p>
            <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-3)' }}>
              {t.footerPage.newsletterStatus}
            </p>
            <a href="mailto:info@alacore.net" className="ui-focus-ring mt-4 inline-flex text-[14px] font-700" style={{ color: 'var(--blue)', textDecoration: 'none' }}>
              info@alacore.net
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px]" style={{ color: 'var(--text-4)' }}>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            {[t.footer.privacyPolicy, t.footer.terms, t.footer.imprint].map(link => (
              <span key={link} className="text-[13px] font-500" style={{ color: 'var(--text-4)', fontWeight: 500 }}>
                {link} · {t.footerPage.legalUnavailable}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
