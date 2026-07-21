'use client';

import Link from 'next/link';
import { NavItem } from '@/components/molecules/NavItem';
import { ThemeToggle } from '@/components/molecules/ThemeToggle';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300"
        >
            <div className="absolute inset-0 bg-white/70 dark:bg-black/80 backdrop-blur-md -z-10 border-b border-gray-200/50 dark:border-gray-800/50" />
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="z-10">
                    <Typography variant="h4" className="tracking-tighter font-bold">Dreamline.</Typography>
                </Link>
                <nav className="hidden md:flex flex-1 justify-center items-center gap-8 z-10">
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/work">Work</NavItem>
                    <NavItem href="/about">About</NavItem>
                </nav>
                <div className="flex items-center gap-4 z-10">
                    <ThemeToggle />
                    <Link href="/contact" className="hidden md:block">
                        <Button variant="primary" className="rounded-full px-6 py-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white">Contact Us</Button>
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
