'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

export function ContactSection() {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 w-full max-w-[1440px] mx-auto min-h-[80vh] flex flex-col justify-center">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Typography variant="h1" className="leading-[0.9] text-[64px] md:text-[96px] lg:text-[120px]">
                        Let&apos;s create <br />
                        <span className="text-[var(--color-text-muted)]">something remarkable.</span>
                    </Typography>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Link href="/contact">
                        <Button variant="primary" size="lg" className="text-[18px] px-8 py-5">
                            Schedule a Call
                        </Button>
                    </Link>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-24 flex flex-wrap justify-center gap-8 text-[14px] uppercase tracking-widest text-[var(--color-text-secondary)]"
                >
                    <a href="mailto:muhammed.folarin@gmail.com" className="hover:text-[var(--color-text-primary)] transition-colors">Email</a>
                    <a href="https://www.linkedin.com/in/folarin-muhammed-48a3a1277/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Behance</a>
                    <a href="https://www.instagram.com/phorlarin10/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors">Instagram</a>
                </motion.div>
            </div>
        </section>
    );
}
