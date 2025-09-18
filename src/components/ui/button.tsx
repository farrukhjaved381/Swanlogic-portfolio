import * as React from 'react';
import { cn } from '@/utils/cn';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
    };
    const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
      default: 'bg-brand-purple text-white hover:opacity-90 focus:ring-brand-purple',
      outline: 'border border-current bg-transparent text-current hover:bg-white/10 focus:ring-current',
      ghost: 'bg-transparent hover:bg-black/5 text-current focus:ring-current',
    };

    return (
      <button ref={ref} className={cn(base, sizes[size], variants[variant], className)} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

