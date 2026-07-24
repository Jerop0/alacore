import { useState, type FormEvent, type ReactNode } from 'react';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { useApp } from '../App';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { submitContactForm, validateContactForm, type ContactForm, type FormErrors } from '../lib/forms';
import type { Lang } from '../types';

const DEPARTMENT_EMAILS = ['ai@alacore.net', 'software@alacore.net', 'web@alacore.net', 'enterprise@alacore.net', 'automation@alacore.net', 'cloud@alacore.net', 'security@alacore.net', 'data@alacore.net', 'design@alacore.net', 'marketing@alacore.net', 'infrastructure@alacore.net', 'payments@alacore.net', 'communications@alacore.net', 'iot@alacore.net', 'media@alacore.net', 'training@alacore.net', 'qa@alacore.net', 'localization@alacore.net', 'loyalty@alacore.net', 'legaltech@alacore.net', 'nocode@alacore.net', 'accessibility@alacore.net'];

const FORM_COPY: Record<Lang, { required: string; pending: string; hint: string; success: string; failure: string; retry: string; productInterest: string; submit: string }> = {
  en: { required: 'This field is required.', pending: 'Opening your email draft…', hint: 'This opens your email application. It does not send your message from this website.', success: 'Your email application should open with a pre-addressed draft. Sending it is up to you.', failure: 'We could not open an email draft. Please try again or email info@alacore.net directly.', retry: 'Try again', productInterest: 'Product interest', submit: 'Open email draft' },
  de: { required: 'Dieses Feld ist erforderlich.', pending: 'Ihr E-Mail-Entwurf wird geöffnet…', hint: 'Dadurch wird Ihre E-Mail-Anwendung geöffnet. Diese Website versendet keine Nachricht.', success: 'Ihre E-Mail-Anwendung sollte einen voradressierten Entwurf öffnen. Das Absenden liegt bei Ihnen.', failure: 'Ein E-Mail-Entwurf konnte nicht geöffnet werden. Versuchen Sie es erneut oder schreiben Sie direkt an info@alacore.net.', retry: 'Erneut versuchen', productInterest: 'Produktinteresse', submit: 'E-Mail-Entwurf öffnen' },
  tr: { required: 'Bu alan zorunludur.', pending: 'E-posta taslağınız açılıyor…', hint: 'Bu işlem e-posta uygulamanızı açar. Bu web sitesi mesajınızı göndermez.', success: 'E-posta uygulamanızda adresi hazır bir taslak açılmalıdır. Gönderim sizin kontrolünüzdedir.', failure: 'E-posta taslağı açılamadı. Yeniden deneyin veya doğrudan info@alacore.net adresine yazın.', retry: 'Yeniden dene', productInterest: 'Ürün ilgisi', submit: 'E-posta taslağını aç' },
};

type FormStatus = 'idle' | 'pending' | 'success' | 'error';

const inputStyle: React.CSSProperties = { background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text)' };

function FormField({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return <div className="flex flex-col gap-2"><label htmlFor={id} className="text-sm font-bold" style={{ color: 'var(--text-muted)' }}>{label}</label>{children}{error && <p id={`${id}-error`} className="text-sm" role="alert" style={{ color: 'var(--error-text)' }}>{error}</p>}</div>;
}

export default function Contact() {
  const { t, lang, openAI } = useApp();
  const f = t.contact.form;
  const c = t.contactPage;
  const copy = FORM_COPY[lang];
  const product = new URLSearchParams(window.location.search).get('product') ?? undefined;
  const [form, setForm] = useState<ContactForm>(() => ({ name: '', company: '', industry: '', country: '', size: '', timeline: '', budget: '', preferred: '', description: '', product }));
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const fieldClass = 'ui-focus-ring min-h-11 w-full rounded-[var(--radius-sm)] border px-3 py-2 text-sm outline-none transition-colors';

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: undefined }));
    if (status === 'error') setStatus('idle');
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContactForm(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus('pending');
    try { await submitContactForm(form); setStatus('success'); } catch { setStatus('error'); }
  };

  const fieldProps = (field: keyof ContactForm) => ({
    name: field, value: form[field] ?? '',
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => updateField(field, event.target.value),
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `${field}-error` : undefined,
  });

  return <div>
    <PageHero eyebrow={c.hero.label} title={c.hero.title} description={c.hero.sub} />
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20"><div className="grid grid-cols-1 gap-12 lg:grid-cols-3"><div className="lg:col-span-2">
      {status === 'success' ? <div role="status" aria-live="polite" aria-atomic="true" className="rounded-[var(--radius-lg)] border p-8 text-center lg:p-12" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}><CheckCircle2 size={40} className="mx-auto mb-4" style={{ color: 'var(--blue)' }} /><h2 className="text-2xl font-extrabold" style={{ color: 'var(--text)' }}>{copy.submit}</h2><p className="mx-auto mt-3 max-w-xl text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{copy.success}</p><Button variant="secondary" className="mt-7" onClick={() => setStatus('idle')}>{copy.retry}</Button></div> : <form noValidate onSubmit={submit} className="flex flex-col gap-5">
        {product && <p className="rounded-[var(--radius-sm)] border px-4 py-3 text-sm font-bold" style={{ background: 'var(--blue-subtle)', borderColor: 'var(--blue-muted)', color: 'var(--text)' }}>{copy.productInterest}: {product}</p>}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2"><FormField id="name" label={f.name} error={errors.name ? copy.required : undefined}><input {...fieldProps('name')} id="name" autoComplete="name" required aria-required="true" placeholder={c.form.namePlaceholder} className={fieldClass} style={{ ...inputStyle, borderColor: errors.name ? 'var(--error-border)' : 'var(--border)' }} /></FormField><FormField id="company" label={f.company} error={errors.company ? copy.required : undefined}><input {...fieldProps('company')} id="company" autoComplete="organization" required aria-required="true" placeholder={c.form.companyPlaceholder} className={fieldClass} style={{ ...inputStyle, borderColor: errors.company ? 'var(--error-border)' : 'var(--border)' }} /></FormField></div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2"><FormField id="industry" label={f.industry}><select {...fieldProps('industry')} id="industry" className={fieldClass} style={inputStyle}><option value="">{c.form.selectPlaceholder}</option>{c.form.industries.map(option => <option key={option}>{option}</option>)}</select></FormField><FormField id="country" label={f.country}><input {...fieldProps('country')} id="country" autoComplete="country-name" placeholder={c.form.countryPlaceholder} className={fieldClass} style={inputStyle} /></FormField></div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">{([['size', f.size, c.form.sizes], ['timeline', f.timeline, c.form.timelines], ['budget', f.budget, c.form.budgets]] as const).map(([field, label, options]) => <FormField key={field} id={field} label={label}><select {...fieldProps(field)} id={field} className={fieldClass} style={inputStyle}><option value="">{c.form.selectPlaceholder}</option>{options.map(option => <option key={option}>{option}</option>)}</select></FormField>)}</div>
        <FormField id="preferred" label={f.preferred} error={errors.preferred ? copy.required : undefined}><select {...fieldProps('preferred')} id="preferred" required aria-required="true" className={fieldClass} style={{ ...inputStyle, borderColor: errors.preferred ? 'var(--error-border)' : 'var(--border)' }}><option value="">{c.form.selectPlaceholder}</option>{c.form.contactMethods.map(option => <option key={option}>{option}</option>)}</select></FormField>
        <FormField id="description" label={f.description} error={errors.description ? copy.required : undefined}><textarea {...fieldProps('description')} id="description" autoComplete="off" required aria-required="true" rows={6} placeholder={c.form.descriptionPlaceholder} className={`${fieldClass} min-h-36 resize-y`} style={{ ...inputStyle, borderColor: errors.description ? 'var(--error-border)' : 'var(--border)' }} /></FormField>
        <p id="contact-submit-hint" className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{copy.hint}</p>{status === 'pending' && <p role="status" aria-live="polite" aria-atomic="true" className="text-sm font-bold" style={{ color: 'var(--text-muted)' }}>{copy.pending}</p>}{status === 'error' && <p className="rounded-[var(--radius-sm)] border px-4 py-3 text-sm" role="alert" aria-live="assertive" style={{ borderColor: 'var(--error-border)', color: 'var(--error-text)' }}><AlertCircle size={16} className="mr-2 inline" />{copy.failure}</p>}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"><Button variant="primary" size="lg" type="submit" disabled={status === 'pending'}>{status === 'pending' ? copy.pending : <>{copy.submit} <Send size={15} /></>}</Button><Button variant="ghost" onClick={openAI}>{c.form.aiCta}</Button></div>
      </form>}
    </div><aside className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start"><div className="rounded-[var(--radius-lg)] border p-6" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}><p className="text-sm font-bold" style={{ color: 'var(--text-muted)' }}>{c.generalEnquiries}</p><a href="mailto:info@alacore.net" className="ui-focus-ring mt-3 inline-block text-base font-bold" style={{ color: 'var(--blue)' }}>info@alacore.net</a><p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>{c.responseWithin}</p></div><div className="rounded-[var(--radius-lg)] border p-6" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}><p className="text-sm font-bold" style={{ color: 'var(--text-muted)' }}>{c.website}</p><a href="https://alacore.net" target="_blank" rel="noreferrer" className="ui-focus-ring mt-3 inline-block text-base font-bold" style={{ color: 'var(--blue)' }}>alacore.net</a></div></aside></div></section>
    <section className="border-y" style={{ background: 'var(--bg-2)', borderColor: 'var(--border)' }}><div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20"><SectionHeading eyebrow={c.hero.label} title={t.contact.departments.title} description={c.departments.sub} /><div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{DEPARTMENT_EMAILS.map((email, index) => <a key={email} href={`mailto:${email}`} className="ui-focus-ring rounded-[var(--radius-md)] border p-4 transition-colors hover:border-[var(--blue)]" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}><span className="block text-sm font-bold" style={{ color: 'var(--text)' }}>{c.departments.items[index]}</span><span className="mt-1 block text-xs" style={{ color: 'var(--text-muted)' }}>{email}</span></a>)}</div></div></section>
  </div>;
}
