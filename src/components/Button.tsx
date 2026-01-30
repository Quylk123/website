import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'tiny' | 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children?: React.ReactNode;
    isLoading?: boolean;
    href?: string;
    target?: string;
    rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'medium',
            leftIcon,
            rightIcon,
            children,
            className = '',
            disabled = false,
            isLoading = false,
            href,
            ...props
        },
        ref
    ) => {

        const baseStyles = [
            'relative justify-center cursor-pointer inline-flex items-center gap-2 text-center',
            'font-medium ease-out duration-200 transition-all',
            'rounded-full',
            'outline-none focus-visible:ring-4 focus-visible:ring-[var(--base-primary)]/20',
            'disabled:opacity-60 disabled:pointer-events-none disabled:cursor-not-allowed'
        ].join(' ');

        const sizeStyles = {
            tiny: 'text-xs px-3 py-1 h-[28px]',
            small: 'text-sm px-4 py-2 h-[36px]',
            medium: 'text-sm px-5 py-2.5 h-[44px]',
            large: 'text-base px-6 py-3 h-[52px]',
        };

        const variantStyles = {
            primary: [
                'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] shadow-sm',
                'hover:bg-[var(--btn-primary-hover-bg)] hover:shadow-md hover:-translate-y-0.5',
                'active:translate-y-0 active:shadow-sm',
            ].join(' '),

            secondary: [
                'bg-[var(--base-background)] text-[var(--greyscale-900)] border border-[var(--greyscale-100)] shadow-sm',
                'hover:bg-[var(--greyscale-50)] hover:border-[var(--greyscale-300)]',
                'active:bg-[var(--greyscale-100)]',
                'dark:bg-[var(--greyscale-100)] dark:border-[var(--greyscale-100)]',
            ].join(' '),

            outline: [
                'bg-transparent text-[var(--greyscale-900)] border border-[var(--greyscale-100)]',
                'hover:border-[var(--base-primary)] hover:text-[var(--base-primary)] hover:bg-[var(--base-primary)]/5',
            ].join(' '),

            ghost: [
                'bg-transparent text-[var(--greyscale-900)] border border-transparent',
                'hover:bg-[var(--greyscale-50)]',
            ].join(' '),

            danger: [
                'bg-transparent text-[var(--base-error)] border border-[var(--base-error)]/30',
                'hover:bg-[var(--base-error)]/10 hover:border-[var(--base-error)]',
            ].join(' '),
        };

        const combinedClassName = `
      ${baseStyles}
      ${sizeStyles[size]}
      ${variantStyles[variant]}
      ${className}
    `.trim().replace(/\s+/g, ' ');

        // Render as Link/Anchor if href is provided
        if (href) {
            if (disabled || isLoading) {
                // If disabled, render as span or button (to prevent click)
                return (
                    <button
                        // @ts-ignore
                        ref={ref as React.Ref<HTMLButtonElement>}
                        className={combinedClassName}
                        disabled={true}
                        {...props}
                    >
                        {isLoading && (
                            <svg className="animate-spin h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
                        {children && <span>{children}</span>}
                        {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
                    </button>
                );
            }

            const isExternal = href.startsWith('http');
            if (isExternal) {
                return (
                    <a
                        // @ts-ignore
                        ref={ref as React.Ref<HTMLAnchorElement>}
                        href={href}
                        className={combinedClassName}
                        // @ts-ignore
                        {...(props as any)}
                    >
                        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
                        {children && <span>{children}</span>}
                        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
                    </a>
                );
            }

            return (
                <Link
                    href={href}
                    // @ts-ignore
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    className={combinedClassName}
                    // @ts-ignore
                    {...(props as any)}
                >
                    {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
                    {children && <span>{children}</span>}
                    {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
                </Link>
            );
        }

        return (
            <button
                // @ts-ignore
                ref={ref as React.Ref<HTMLButtonElement>}
                className={combinedClassName}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && (
                    <svg className="animate-spin h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                )}

                {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
                {children && <span>{children}</span>}
                {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
