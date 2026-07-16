import React from 'react';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'caption';
    as?: React.ElementType;
    children: React.ReactNode;
}

export function Typography({ variant = 'body', as, className = '', children, ...props }: TypographyProps) {
    const Component = as || (['hero', 'h1', 'h2', 'h3', 'h4'].includes(variant) ? (variant === 'hero' ? 'h1' : variant) as React.ElementType : 'p');

    const variants = {
        hero: 'font-heading text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] tracking-[-0.03em] leading-[0.95]',
        h1: 'font-heading text-[40px] md:text-[56px] lg:text-[72px] tracking-[-0.03em] leading-[0.95]',
        h2: 'font-heading text-[32px] md:text-[40px] lg:text-[56px] tracking-[-0.03em] leading-[0.95]',
        h3: 'font-heading text-[24px] md:text-[32px] tracking-[-0.03em] leading-[0.95]',
        h4: 'font-heading text-[20px] md:text-[24px] tracking-[-0.03em] leading-[0.95]',
        body: 'text-[16px]',
        small: 'text-[14px]',
        caption: 'text-[12px]',
    };

    return (
        <Component className={`${variants[variant]} ${className}`} {...props}>
            {children}
        </Component>
    );
}
