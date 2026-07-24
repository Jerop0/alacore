import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size?: ButtonSize;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-9 px-3 py-2 text-sm',
  md: 'min-h-11 px-4 py-2.5 text-sm',
  lg: 'min-h-12 px-5 py-3 text-base',
};


export function Button({
  variant,
  size = 'md',
  className = '',
  style,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`ui-button--${variant} ui-focus-ring inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] border font-bold transition-[background-color,border-color,color,filter] disabled:cursor-not-allowed disabled:opacity-50 ${sizeClasses[size]} ${className}`}
      style={style}
    />
  );
}
