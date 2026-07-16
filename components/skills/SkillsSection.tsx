'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../ui/Typography';

const SKILLS = [
    'Next.js', 'Tailwind CSS', 'Figma', 'Photoshop', 'Illustrator', 'After Effects', 
    'Brand Identity', 'UX Strategy', 'Product Design', 'Motion Design', 
    'Typography', 'Art Direction', 'Wireframing', 'Prototyping'
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-32 px-6 md:px-12 w-full max-w-[1440px] mx-auto bg-[var(--color-surface)] rounded-[var(--radius-card)] my-12 overflow-hidden">
            <div className="text-center mb-16">
                <Typography variant="h2">
                    Toolkit & <span className="text-[var(--color-text-muted)]">Capabilities</span>
                </Typography>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {SKILLS.map((skill, idx) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.5, 
                            delay: idx * 0.05,
                            type: 'spring',
                            stiffness: 100
                        }}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="px-6 py-3 bg-[var(--color-card)] rounded-full border border-[var(--color-border-soft)] shadow-sm text-[16px] text-[var(--color-text-primary)] cursor-default select-none"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
