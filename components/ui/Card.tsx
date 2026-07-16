'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function Card({ children, hoverEffect = false, className = '', ...props }: CardProps) {
    return (
        <motion.div
            className={`bg-[var(--color-card)] rounded-[var(--radius-card)] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] ${className}`}
            whileHover={hoverEffect ? {
                y: -8,
                boxShadow: '0 40px 100px rgba(0,0,0,.10)'
            } : undefined}
            transition={{ duration: 0.5, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
