export interface ContactForm {
  name: string;
  company: string;
  industry: string;
  country: string;
  size: string;
  timeline: string;
  budget: string;
  preferred: string;
  description: string;
  product?: string;
}

export type FormErrors = Partial<Record<keyof ContactForm, 'required'>>;

const REQUIRED_FIELDS: Array<keyof Pick<ContactForm, 'name' | 'company' | 'preferred' | 'description'>> = [
  'name',
  'company',
  'preferred',
  'description',
];

export function validateContactForm(form: ContactForm): FormErrors {
  return REQUIRED_FIELDS.reduce<FormErrors>((errors, field) => {
    if (!form[field].trim()) {
      errors[field] = 'required';
    }

    return errors;
  }, {});
}

function buildMailtoUrl(form: ContactForm): string {
  const details = [
    `Name: ${form.name}`,
    `Company: ${form.company}`,
    form.product ? `Product interest: ${form.product}` : '',
    form.industry ? `Industry: ${form.industry}` : '',
    form.country ? `Country: ${form.country}` : '',
    form.size ? `Company size: ${form.size}` : '',
    form.timeline ? `Timeline: ${form.timeline}` : '',
    form.budget ? `Budget: ${form.budget}` : '',
    `Preferred contact method: ${form.preferred}`,
    '',
    'Project description:',
    form.description,
  ].filter(Boolean).join('\n');

  return `mailto:info@alacore.net?${new URLSearchParams({
    subject: `ALA CORE enquiry from ${form.company}`,
    body: details,
  }).toString()}`;
}

export async function submitContactForm(form: ContactForm): Promise<void> {
  window.location.assign(buildMailtoUrl(form));
}
