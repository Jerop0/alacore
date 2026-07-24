import { useId, type InputHTMLAttributes } from 'react';

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}

export function Field({
  id,
  name,
  label,
  hint,
  error,
  className = '',
  style,
  'aria-describedby': ariaDescribedBy,
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  ...props
}: FieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const describedBy = [ariaDescribedBy, hintId, errorId].filter(Boolean).join(' ') || undefined;
  const errorMessage = [ariaErrorMessage, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="text-sm font-bold" style={{ color: 'var(--text-muted)' }}>
        {label}
      </label>
      <input
        {...props}
        id={fieldId}
        name={name}
        aria-describedby={describedBy}
        aria-errormessage={errorMessage}
        aria-invalid={error ? true : ariaInvalid}
        className={`ui-focus-ring min-h-11 rounded-[var(--radius-sm)] border px-3 py-2 text-sm outline-none transition-colors ${className}`}
        style={{ background: 'var(--surface)', borderColor: error ? 'var(--error-border)' : 'var(--border)', color: 'var(--text)', ...style }}
      />
      {hint && <p id={hintId} className="text-sm" style={{ color: 'var(--text-muted)' }}>{hint}</p>}
      {error && <p id={errorId} className="text-sm" role="alert" style={{ color: 'var(--error-text)' }}>{error}</p>}
    </div>
  );
}
