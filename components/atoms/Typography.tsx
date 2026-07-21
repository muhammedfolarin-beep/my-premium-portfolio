import React from 'react';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'lead' | 'large' | 'small' | 'muted';
    as?: React.ElementType;
    children: React.ReactNode;
}

export function Typography({ variant = 'p', as, className = '', children, ...props }: TypographyProps) {
    const Component = as || (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].includes(variant) ? variant as React.ElementType : 'p');

    const variants = {
        h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl',
        h2: 'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 lg:text-4xl',
        h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
        h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
        h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
        h6: 'scroll-m-20 text-base font-semibold tracking-tight',
        p: 'leading-7 [&:not(:first-child)]:mt-6',
        lead: 'text-xl text-gray-700 dark:text-gray-300',
        large: 'text-lg font-semibold',
        small: 'text-sm font-medium leading-none',
        muted: 'text-sm text-gray-500 dark:text-gray-400',
    };

    return (
        <Component className={`${variants[variant]} ${className}`} {...props}>
            {children}
        </Component>
    );
}
