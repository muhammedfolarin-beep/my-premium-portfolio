'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../molecules/ThemeToggle';

export function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out flex items-center justify-between px-4 md:px-8 rounded-full h-[72px] md:h-[88px] w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-[1280px] ${
                scrolled ? 'bg-[var(--color-surface)]/90 backdrop-blur-md border border-[var(--color-border-soft)] shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]' : 'bg-transparent'
            }`}
            initial={{ y: -100, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="flex-1">
                <Link href="/" className="font-heading font-bold text-lg md:text-xl tracking-tighter">
                    FOLARIN
                </Link>
            </div>

            <div className="flex-1 flex items-center justify-end gap-4">
                <ThemeToggle />
                <Link href="/contact">
                    <Button variant="primary" size="sm">
                        Let&apos;s Talk
                    </Button>
                </Link>
            </div>
        </motion.header>
    );
}

