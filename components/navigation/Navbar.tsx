'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '../ui/Button';

export function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out flex items-center justify-between px-8 rounded-full h-[88px] w-[calc(100%-48px)] max-w-[1280px] ${
                scrolled ? 'bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border-soft)] shadow-[0_20px_60px_rgba(0,0,0,0.06)]' : 'bg-transparent'
            }`}
            initial={{ y: -100, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="flex-1">
                <Link href="/" className="font-heading font-bold text-xl tracking-tighter">
                    FOLARIN
                </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                {['Work', 'Services', 'Process', 'About'].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-[14px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors relative group"
                    >
                        {item}
                        <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-[var(--color-text-primary)] transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </nav>

            <div className="flex-1 flex justify-end">
                <Link href="#contact">
                    <Button variant="primary" size="sm">
                        Let&apos;s Talk
                    </Button>
                </Link>
            </div>
        </motion.header>
    );
}
