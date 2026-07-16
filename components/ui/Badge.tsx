import React from 'react';

export function Badge({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full border border-[var(--color-border-default)] text-[12px] uppercase tracking-widest text-[var(--color-text-secondary)] bg-[var(--color-surface)] ${className}`}>
            {children}
        </div>
    );
}
