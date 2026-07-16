import React from 'react';
import { Typography } from '../ui/Typography';
import { ProjectEditorial } from './ProjectEditorial';

const PROJECTS = [
    {
        title: 'Flux E-Commerce',
        category: 'E-Commerce',
        imageSrc: '/images/projects/flux.png',
        story: 'A vibrant, high-energy interface designed to make premium gear feel alive on the screen. By balancing bold color blocks with clean, spacious grids, this concept transforms a simple browsing experience into an engaging digital flagship store.',
        deliverables: ['UI/UX Design', 'Interaction Design', 'Web Design']
    },
    {
        title: 'Dreamline Identity',
        category: 'Brand Identity',
        imageSrc: '/images/projects/Dreamlline Brandkit.png',
        story: 'Great branding is about more than just a logo. This project takes a sophisticated warm color palette and builds a unified brand journey, showing how a single design concept flows effortlessly across business stationery, apparel, and physical products.',
        deliverables: ['Logo Design', 'Brand Strategy', 'Visual Ecosystem']
    },
    {
        title: 'IdeasToSites Impact',
        category: 'Product Design',
        imageSrc: '/images/projects/ideastosites.png',
        story: 'Beautiful design should always serve a purpose. This piece tells the story of a design venture that helped over two hundred brands scale while empowering a community of rising digital creators.',
        deliverables: ['Product Design', 'Community Platform', 'Web Development']
    }
];

export function WorksSection() {
    return (
        <section id="work" className="py-32 px-6 md:px-12 w-full max-w-[1440px] mx-auto">
            <div className="mb-24 flex flex-col gap-8">
                <Typography variant="h2" className="max-w-3xl">
                    Selected work <span className="text-[var(--color-text-muted)]">that challenges the ordinary.</span>
                </Typography>
                <Typography variant="body" className="max-w-2xl text-[18px] text-[var(--color-text-secondary)]">
                    I am a visual designer who believes that aesthetics and strategy are two sides of the same coin. Whether I&apos;m crafting a high-conversion e-commerce interface, architecting a brand&apos;s entire visual ecosystem, or designing scalable platforms for digital creators, my goal remains the same: to turn attention into measurable revenue. Welcome to a curated selection of my work where premium design meets real-world impact.
                </Typography>
            </div>
            
            <div className="flex flex-col">
                {PROJECTS.map((project, idx) => (
                    <ProjectEditorial 
                        key={project.title}
                        index={idx + 1}
                        title={project.title}
                        category={project.category}
                        imageSrc={project.imageSrc}
                        story={project.story}
                        deliverables={project.deliverables}
                        align={idx % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </div>
        </section>
    );
}
