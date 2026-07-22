'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

interface ProjectProps {
    index: number;
    title: string;
    category: string;
    story: string;
    deliverables: string[];
    imageSrc: any;
    align: 'left' | 'right';
}

export function ProjectEditorial({ index, title, category, story, deliverables, imageSrc, align }: ProjectProps) {
    const formattedIndex = index < 10 ? `0${index}` : index;
    const isImageLeft = align === 'left';

    const textContent = (
        <div className="flex flex-col justify-center gap-8 lg:px-12 w-full lg:w-1/2">
            <div className="flex flex-col gap-2">
                <span className="font-heading text-[var(--color-text-muted)] text-[16px] tracking-widest">{formattedIndex} — {category}</span>
                <Typography variant="h2">{title}</Typography>
            </div>
            
            <Typography variant="body" className="text-[var(--color-text-secondary)] text-[18px]">
                {story}
            </Typography>
            
            <div className="flex flex-col gap-4 py-4 border-y border-[var(--color-border-default)]">
                <span className="text-[12px] uppercase tracking-widest text-[var(--color-text-muted)]">Deliverables</span>
                <div className="flex flex-wrap gap-2">
                    {deliverables.map(d => (
                        <span key={d} className="px-3 py-1 rounded-full border border-[var(--color-border-soft)] text-[14px] bg-[var(--color-surface)] text-[var(--color-text-secondary)]">
                            {d}
                        </span>
                    ))}
                </div>
            </div>
            
            <div>
                <Button variant="outline" withArrow>View Project</Button>
            </div>
        </div>
    );

    const imageContent = (
        <div className="w-full lg:w-1/2 h-[40vh] md:h-[50vh] lg:h-[70vh] relative rounded-[var(--radius-image)] overflow-hidden group bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border-soft)] shadow-floating">
            <Image src={imageSrc} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-border-default)] to-[var(--color-surface)] transition-transform duration-700 group-hover:scale-105 mix-blend-multiply dark:hidden pointer-events-none" />
            
            {/* Hover brighten overlay */}
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-10 z-10 pointer-events-none" />
        </div>
    );

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-0 items-stretch py-24`}
        >
            {isImageLeft ? (
                <>
                    {imageContent}
                    {textContent}
                </>
            ) : (
                <>
                    {textContent}
                    {imageContent}
                </>
            )}
        </motion.div>
    );
}
