'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typography } from '../ui/Typography';

const TESTIMONIALS = [
    {
        quote: "Folarin didn't just redesign our website; he reimagined our entire digital presence. The attention to typography and motion is unmatched.",
        name: "Sarah Jenkins",
        role: "Creative Director",
        company: "Aura Skincare"
    },
    {
        quote: "Working with Folarin feels like collaborating with an editorial director. Every decision is intentional and serves the larger story.",
        name: "Marcus Wei",
        role: "Founder",
        company: "Nexus Tech"
    },
    {
        quote: "The visual system he created for our firm perfectly captures the structural elegance we strive for in our physical architecture.",
        name: "Elena Rostova",
        role: "Lead Architect",
        company: "Lumina Architecture"
    }
];

export function TestimonialsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Horizontal scroll effect based on vertical scroll
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

    return (
        <section id="testimonials" ref={containerRef} className="py-16 md:py-32 overflow-hidden w-full bg-[var(--color-text-primary)] text-[var(--color-background)] rounded-[var(--radius-card)] my-12 max-w-[1440px] mx-auto">
            <div className="px-6 md:px-12 mb-24">
                <Typography variant="h2" className="text-[var(--color-background)]">
                    Client <span className="text-[var(--color-text-muted)]">Perspectives</span>
                </Typography>
            </div>
            
            <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-max">
                {TESTIMONIALS.map((t, idx) => (
                    <div key={idx} className="w-[85vw] md:w-[60vw] lg:w-[40vw] max-w-[600px] flex flex-col gap-12 bg-[var(--color-accent-hover)] p-8 md:p-12 rounded-[var(--radius-card)] border border-[var(--color-text-secondary)]/30">
                        <Typography variant="h3" className="text-[var(--color-background)] leading-tight text-[24px] md:text-[32px]">
                            &quot;{t.quote}&quot;
                        </Typography>
                        
                        <div className="flex items-center gap-6 pt-8 border-t border-[var(--color-text-secondary)]/30">
                            <div className="w-16 h-16 rounded-full bg-[var(--color-text-secondary)] shrink-0" />
                            <div className="flex flex-col">
                                <span className="font-heading font-bold text-[18px]">{t.name}</span>
                                <span className="text-[14px] text-[var(--color-text-muted)] tracking-widest uppercase">{t.role}, {t.company}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
