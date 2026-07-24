import { WHATSAPP_NUMBER } from './config';

export interface WhatsAppFields {
  name?: string;
  business?: string;
  industry?: string;
  need?: string;
  contactMethod?: string;
  message?: string;
  locale?: string;
}

const templates: Record<string, (fields: WhatsAppFields) => string> = {
  en: (fields) => {
    const parts = [
      fields.name ? `Hello, my name is ${fields.name}.` : 'Hello,',
      fields.business && `I am reaching out from ${fields.business}.`,
      fields.industry && `Business type: ${fields.industry}.`,
      fields.need && `What we would like to improve: ${fields.need}.`,
      fields.contactMethod && `Preferred contact: ${fields.contactMethod}.`,
      fields.message && `Details: ${fields.message}`,
    ].filter(Boolean);
    return parts.join(' ');
  },
  de: (fields) => {
    const parts = [
      fields.name ? `Hallo, mein Name ist ${fields.name}.` : 'Hallo,',
      fields.business && `Ich schreibe im Namen von ${fields.business}.`,
      fields.industry && `Branche: ${fields.industry}.`,
      fields.need && `Was wir verbessern möchten: ${fields.need}.`,
      fields.contactMethod && `Bevorzugter Kontakt: ${fields.contactMethod}.`,
      fields.message && `Details: ${fields.message}`,
    ].filter(Boolean);
    return parts.join(' ');
  },
  tr: (fields) => {
    const parts = [
      fields.name ? `Merhaba, benim adım ${fields.name}.` : 'Merhaba,',
      fields.business && `${fields.business} adına yazıyorum.`,
      fields.industry && `Sektör: ${fields.industry}.`,
      fields.need && `Geliştirmek istediğimiz alan: ${fields.need}.`,
      fields.contactMethod && `Tercih edilen iletişim: ${fields.contactMethod}.`,
      fields.message && `Detaylar: ${fields.message}`,
    ].filter(Boolean);
    return parts.join(' ');
  },
};

export function buildWhatsAppUrl(fields: WhatsAppFields, locale: string = 'en'): string {
  const template = templates[locale] || templates.en;
  const message = template(fields);
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function openWhatsApp(fields: WhatsAppFields, locale: string = 'en'): void {
  const url = buildWhatsAppUrl(fields, locale);
  window.open(url, '_blank', 'noopener,noreferrer');
}
