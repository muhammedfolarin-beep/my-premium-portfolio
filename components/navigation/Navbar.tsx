'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../molecules/ThemeToggle';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const navLinks = ['Work', 'Services', 'Process', 'About'];

    return (
        <>
            <motion.header
                className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out flex items-center justify-between px-4 md:px-8 rounded-full h-[72px] md:h-[88px] w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-[1280px] ${
                    scrolled ? 'bg-[var(--color-surface)]/90 backdrop-blur-md border border-[var(--color-border-soft)] shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]' : 'bg-transparent'
                }`}
                initial={{ y: -100, opacity: 0, x: '-50%' }}
                animate={{ y: 0, opacity: 1, x: '-50%' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="flex-1">
                    <Link href="/" className="font-heading font-bold text-lg md:text-xl tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>
                        FOLARIN
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
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

                <div className="flex-1 flex items-center justify-end gap-2 md:gap-4">
                    <ThemeToggle />
                    <Link href="/contact" className="hidden md:block">
                        <Button variant="primary" size="sm">
                            Let&apos;s Talk
                        </Button>
                    </Link>
                    <button 
                        className="md:hidden p-2 text-[var(--color-text-primary)]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[var(--color-background)] pt-32 px-6 flex flex-col md:hidden"
                    >
                        <nav className="flex flex-col gap-8 text-center mt-12">
                            {navLinks.map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="font-heading text-[40px] text-[var(--color-text-primary)]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <Link href="/contact" className="mt-8" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button variant="primary" size="lg" className="w-full justify-center">
                                    Let&apos;s Talk
                                </Button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
