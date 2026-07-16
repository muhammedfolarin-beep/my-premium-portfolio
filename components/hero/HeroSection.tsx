'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import Image from 'next/image';

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const portraitRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            
            // Initial state
            gsap.set('.hero-text-line', { y: 50, opacity: 0 });
            gsap.set('.hero-fade', { y: 20, opacity: 0 });
            gsap.set(portraitRef.current, { scale: 1.1, opacity: 0, y: 30 });
            
            // Animation sequence
            tl.to('.hero-text-line', {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power4.out',
                delay: 0.2
            })
            .to(portraitRef.current, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out'
            }, "-=1")
            .to('.hero-fade', {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out'
            }, "-=1");

            // Mouse parallax effect for right side
            const handleMouseMove = (e: MouseEvent) => {
                if (!rightRef.current) return;
                const { clientX, clientY } = e;
                const xPos = (clientX / window.innerWidth - 0.5) * 20;
                const yPos = (clientY / window.innerHeight - 0.5) * 20;
                
                gsap.to('.parallax-layer-1', { x: xPos * 2, y: yPos * 2, duration: 1, ease: 'power2.out' });
                gsap.to('.parallax-layer-2', { x: xPos * -1.5, y: yPos * -1.5, duration: 1, ease: 'power2.out' });
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 pt-32 pb-24">
            {/* Soft radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(68,64,60,0.03)_0%,transparent_50%)]" />
            
            <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">
                {/* Left Side */}
                <div ref={leftRef} className="flex flex-col items-start gap-8 max-w-2xl">
                    <Badge className="hero-fade">Available for work</Badge>
                    
                    <div className="flex flex-col gap-2">
                        <div className="overflow-hidden">
                            <Typography variant="hero" className="hero-text-line">Designing</Typography>
                        </div>
                        <div className="overflow-hidden">
                            <Typography variant="hero" className="hero-text-line text-[var(--color-text-secondary)]">Experiences</Typography>
                        </div>
                        <div className="overflow-hidden">
                            <Typography variant="hero" className="hero-text-line">With Purpose.</Typography>
                        </div>
                    </div>
                    
                    <Typography variant="body" className="hero-fade text-[var(--color-text-secondary)] max-w-md text-[18px]">
                        I craft digital products that blend editorial aesthetics with seamless functionality. Quiet luxury for modern brands.
                    </Typography>
                    
                    <div className="hero-fade flex gap-4 pt-4">
                        <Button variant="primary" size="lg" withArrow>View Works</Button>
                        <Button variant="outline" size="lg">About Me</Button>
                    </div>
                </div>

                {/* Right Side */}
                <div ref={rightRef} className="relative h-[60vh] lg:h-[80vh] w-full flex items-center justify-center">
                    {/* Floating elements */}
                    <div className="absolute top-10 right-10 parallax-layer-2 z-20 bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border-soft)] p-4 rounded-2xl shadow-floating">
                        <div className="text-[24px] font-heading font-bold">3</div>
                        <div className="text-[12px] text-[var(--color-text-secondary)] uppercase tracking-widest">Years Exp</div>
                    </div>
                    
                    <div className="absolute bottom-20 left-10 parallax-layer-2 z-20 bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border-soft)] p-4 rounded-2xl shadow-floating">
                        <div className="text-[24px] font-heading font-bold">20+</div>
                        <div className="text-[12px] text-[var(--color-text-secondary)] uppercase tracking-widest">Projects</div>
                    </div>

                    {/* Portrait Image */}
                    <div ref={portraitRef} className="relative w-full max-w-md aspect-[3/4] rounded-[var(--radius-image)] overflow-hidden bg-[var(--color-border-soft)] parallax-layer-1">
                        <Image src="/images/profile.png" alt="Folarin Portrait" fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-surface)] to-transparent mix-blend-multiply opacity-20 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
