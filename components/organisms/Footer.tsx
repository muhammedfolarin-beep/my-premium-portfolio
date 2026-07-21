import Link from 'next/link';
import { Typography } from '@/components/atoms/Typography';

export function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-6 mt-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <Typography variant="h5" className="font-bold">Dreamline Visuals</Typography>
                    <Typography variant="muted">High-end aesthetic designs.</Typography>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/work" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Work</Link>
                    <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
                    <Link href="/contact" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-800/50 text-center md:text-left text-sm text-gray-500">
                © {new Date().getFullYear()} Dreamline Visuals. All rights reserved.
            </div>
        </footer>
    );
}
