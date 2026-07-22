'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typography } from '../ui/Typography';

import workspaceImg from '@/public/images/workspace.png';

export function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-32 px-6 md:px-12 w-full max-w-[1440px] mx-auto">
            <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-32">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h2" className="leading-[1.1] mb-8">
                        Design isn&apos;t decoration. <br/>
                        <span className="text-[var(--color-text-muted)]">It&apos;s communication.</span>
                    </Typography>
                </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 md:col-start-2 relative h-[40vh] md:h-[60vh] rounded-[var(--radius-image)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-surface)] to-[var(--color-border-default)] mix-blend-multiply opacity-50 dark:hidden z-10 pointer-events-none" />
                    <Image src={workspaceImg} alt="Editorial Workspace" fill className="object-cover" priority />
                    
                    {/* Floating stat overlapping */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="absolute bottom-4 right-4 md:bottom-10 md:-right-16 bg-[var(--color-card)] p-4 md:p-6 rounded-[var(--radius-card)] shadow-floating border border-[var(--color-border-soft)] z-20"
                    >
                        <div className="text-4xl md:text-[48px] font-heading font-bold leading-none mb-1">3+</div>
                        <div className="text-[10px] md:text-[12px] uppercase tracking-widest text-[var(--color-text-secondary)]">Years Experience</div>
                    </motion.div>
                </div>
                
                <div className="md:col-span-4 md:col-start-8 flex flex-col gap-12 mt-16 md:mt-0 px-4 md:px-0">
                    <div>
                        <div className="text-4xl md:text-[64px] font-heading font-bold leading-none mb-2 text-[var(--color-text-primary)]">20+</div>
                        <div className="text-[12px] md:text-[14px] uppercase tracking-widest text-[var(--color-text-secondary)] border-b border-[var(--color-border-default)] pb-4">Projects Delivered</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-[64px] font-heading font-bold leading-none mb-2 text-[var(--color-text-primary)]">98%</div>
                        <div className="text-[12px] md:text-[14px] uppercase tracking-widest text-[var(--color-text-secondary)] border-b border-[var(--color-border-default)] pb-4">Client Satisfaction</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
