'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../ui/Typography';

const PROCESS_STEPS = [
    { title: 'Discover', desc: 'Understanding the core problem, target audience, and business objectives.' },
    { title: 'Research', desc: 'Analyzing competitors, market trends, and gathering insights to inform the strategy.' },
    { title: 'Design', desc: 'Crafting the visual identity, UI concepts, and establishing the design language.' },
    { title: 'Prototype', desc: 'Creating interactive models to test flows, interactions, and overall feel.' },
    { title: 'Deliver', desc: 'Finalizing assets, developer handoff, and quality assurance before launch.' },
];

export function ProcessSection() {
    return (
        <section id="process" className="py-32 px-6 md:px-12 w-full max-w-[1440px] mx-auto">
            <div className="mb-24 text-center">
                <Typography variant="h2">
                    The <span className="text-[var(--color-text-muted)]">Process</span>
                </Typography>
            </div>
            
            <div className="max-w-3xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-[24px] top-4 bottom-4 w-[1px] bg-[var(--color-border-default)] hidden md:block" />
                
                <div className="flex flex-col gap-16">
                    {PROCESS_STEPS.map((step, idx) => (
                        <motion.div 
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="flex flex-col md:flex-row gap-8 md:gap-16 relative"
                        >
                            {/* Node */}
                            <div className="hidden md:flex absolute left-[24px] top-2 -translate-x-1/2 w-[11px] h-[11px] rounded-full bg-[var(--color-text-primary)] shadow-[0_0_0_4px_var(--color-background)]" />
                            
                            <div className="md:w-1/3 md:pl-16">
                                <Typography variant="h3" className="text-[var(--color-text-primary)]">{step.title}</Typography>
                            </div>
                            
                            <div className="md:w-2/3">
                                <Typography variant="body" className="text-[var(--color-text-secondary)] text-[18px]">
                                    {step.desc}
                                </Typography>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
