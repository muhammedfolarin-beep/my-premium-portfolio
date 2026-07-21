'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    // Ensure that exact match or starts with for nested routes (like /work/1), but not / matching everything
    const isActive = href === '/' ? pathname === '/' : pathname?.startsWith(href);

    return (
        <Link href={href} className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100 text-gray-600 dark:text-gray-400">
            {children}
            {isActive && (
                <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent-primary)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}
        </Link>
    );
}
