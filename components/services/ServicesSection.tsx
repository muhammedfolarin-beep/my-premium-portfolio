'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '../ui/Typography';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
    {
        title: 'Visual Identity',
        description: 'Building memorable brands. We craft holistic identity systems that resonate across every touchpoint, from logo marks to comprehensive brand guidelines.'
    },
    {
        title: 'Interface Architecture',
        description: 'Designing digital products that feel effortless. Wireframing, UX strategy, and high-fidelity UI design that prioritizes both aesthetics and usability.'
    },
    {
        title: 'Interactive Visuals',
        description: 'Motion with intention. Integrating fluid animations and micro-interactions to create engaging, memorable digital experiences without overwhelming the user.'
    },
    {
        title: 'Communication Design',
        description: 'Ideas translated into visual systems. Editorial design, typography curation, and bespoke graphic solutions for digital and print.'
    }
];

export function ServicesSection() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    return (
        <section id="services" className="py-32 px-6 md:px-12 w-full max-w-[1440px] mx-auto bg-[var(--color-surface)] rounded-[var(--radius-card)] my-12">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
                <div className="w-full lg:w-1/3">
                    <Typography variant="h2" className="sticky top-32">
                        Expertise <br />
                        <span className="text-[var(--color-text-muted)]">& Focus</span>
                    </Typography>
                </div>
                
                <div className="w-full lg:w-2/3 flex flex-col">
                    {SERVICES.map((service, idx) => {
                        const isExpanded = expandedIndex === idx;
                        
                        return (
                            <div 
                                key={service.title} 
                                className="border-b border-[var(--color-border-default)] last:border-b-0 py-8 cursor-pointer group"
                                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                            >
                                <div className="flex items-center justify-between">
                                    <Typography variant="h3" className={`transition-colors duration-300 ${isExpanded ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]'}`}>
                                        {service.title}
                                    </Typography>
                                    <motion.div 
                                        animate={{ rotate: isExpanded ? 90 : 0 }} 
                                        transition={{ duration: 0.3 }}
                                        className="w-12 h-12 rounded-full border border-[var(--color-border-default)] flex items-center justify-center bg-[var(--color-card)] text-[var(--color-text-primary)]"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.div>
                                </div>
                                
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <Typography variant="body" className="text-[var(--color-text-secondary)] max-w-xl pt-6 pb-2 text-[18px]">
                                                {service.description}
                                            </Typography>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
