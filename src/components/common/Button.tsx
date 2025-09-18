import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Reusable Button component with variants for consistency.
 * - variant: 'primary' | 'outline'
 * - size: 'sm' | 'md' | 'lg'
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ variant = 'primary', size = 'md', className, type = 'button', ...props }: ButtonProps) {
  const base =
    'rounded-2xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-1 focus:ring-offset-black';
  const variants = {
    primary: 'bg-brand-green text-black hover:opacity-90',
    outline: 'border border-brand-purple text-white hover:bg-white/5',
  } as const;
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6',
    lg: 'h-12 px-7 text-lg',
  } as const;

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} type={type} {...props} />
  );
}

export default Button;
