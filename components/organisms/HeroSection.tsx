'use client';

import { motion } from 'framer-motion';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                type: "spring" as const
            }
        }
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden pt-20">
            {/* Abstract Background Element */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--accent-primary)]/10 dark:bg-[var(--accent-primary)]/20 blur-[100px] rounded-full -z-10 mix-blend-multiply dark:mix-blend-screen" />

            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    className="max-w-3xl mx-auto flex flex-col items-center text-center"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={item} className="mb-6">
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-xl">
                            <Image
                                src="/images/profile.jpg"
                                alt="Folarin"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 128px, 160px"
                                priority
                            />
                        </div>
                    </motion.div>
                    <motion.div variants={item} className="mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary-light)] text-[var(--accent-primary)] text-sm font-bold tracking-wide">
                            <span className="w-5 h-5 rounded-md bg-[var(--accent-primary)] text-white flex items-center justify-center text-xs">✌️</span>
                            Welcome To Dreamline
                        </div>
                    </motion.div>
                    <motion.div variants={item}>
                        <Typography variant="h1" className="mb-6 leading-[1.1]">
                            Shaping brands with <span className="text-[var(--accent-primary)]">purpose</span> and <span className="text-[var(--accent-primary)]">precision</span>.
                        </Typography>
                    </motion.div>
                    <motion.div variants={item}>
                        <Typography variant="lead" className="mb-10 max-w-xl">
                            We create premium visual identities and digital experiences that elevate your brand and captivate your audience.
                        </Typography>
                    </motion.div>
                    <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/work">
                            <Button size="lg" variant="secondary" className="group rounded-full px-8">
                                View Work
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="ghost" size="lg" className="rounded-full px-8">Get in touch</Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
