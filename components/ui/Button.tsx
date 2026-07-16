'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    withArrow?: boolean;
    children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', withArrow = false, className = '', children, ...props }: ButtonProps) {
    const baseStyles = 'group inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-background)] focus:ring-[var(--color-text-primary)]';

    const variants = {
        primary: 'bg-[var(--color-text-primary)] text-[var(--color-background)] hover:bg-[var(--color-accent-hover)]',
        secondary: 'bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-border-default)]',
        outline: 'border border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)]',
        ghost: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
    };

    const sizes = {
        sm: 'px-4 py-2 text-[14px]',
        md: 'px-6 py-3 text-[16px]',
        lg: 'px-8 py-4 text-[16px]',
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
            {withArrow && (
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
        </motion.button>
    );
}
