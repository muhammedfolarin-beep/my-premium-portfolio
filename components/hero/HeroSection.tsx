'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import Image from 'next/image';

export function HeroSection() {
    // Parallax mouse setup
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothOptions = { damping: 20, stiffness: 50, mass: 0.5 };
    const smoothX = useSpring(mouseX, smoothOptions);
    const smoothY = useSpring(mouseY, smoothOptions);

    // Parallax multipliers (Layer 1 moves opposite to Layer 2 for depth)
    const layer1X = useTransform(smoothX, [0, 1], [0, 40]);
    const layer1Y = useTransform(smoothY, [0, 1], [0, 40]);
    
    const layer2X = useTransform(smoothX, [0, 1], [0, -30]);
    const layer2Y = useTransform(smoothY, [0, 1], [0, -30]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            // Normalize mouse position between -0.5 and 0.5
            const xPos = clientX / window.innerWidth - 0.5;
            const yPos = clientY / window.innerHeight - 0.5;
            mouseX.set(xPos);
            mouseY.set(yPos);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const textVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    const fadeVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { duration: 1, ease: "easeOut" } 
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 pt-32 pb-24">
            {/* Soft radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--color-accent-primary-rgb),0.03)_0%,transparent_50%)]" />
            
            <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">
                {/* Left Side */}
                <motion.div 
                    className="flex flex-col items-start gap-8 max-w-2xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={fadeVariants}>
                        <Badge>Available for work</Badge>
                    </motion.div>
                    
                    <div className="flex flex-col gap-2">
                        <div className="overflow-hidden">
                            <motion.div variants={textVariants}>
                                <Typography variant="hero">Designing</Typography>
                            </motion.div>
                        </div>
                        <div className="overflow-hidden">
                            <motion.div variants={textVariants}>
                                <Typography variant="hero" className="text-[var(--color-text-secondary)]">Experiences</Typography>
                            </motion.div>
                        </div>
                        <div className="overflow-hidden">
                            <motion.div variants={textVariants}>
                                <Typography variant="hero">With Purpose.</Typography>
                            </motion.div>
                        </div>
                    </div>
                    
                    <motion.div variants={fadeVariants}>
                        <Typography variant="body" className="text-[var(--color-text-secondary)] max-w-md text-[18px]">
                            I craft digital products that blend editorial aesthetics with seamless functionality. Quiet luxury for modern brands.
                        </Typography>
                    </motion.div>
                    
                    <motion.div variants={fadeVariants} className="flex gap-4 pt-4">
                        <Button variant="primary" size="lg" withArrow>View Works</Button>
                        <Button variant="outline" size="lg">About Me</Button>
                    </motion.div>
                </motion.div>

                {/* Right Side */}
                <div className="relative h-[60vh] lg:h-[80vh] w-full flex items-center justify-center">
                    {/* Floating elements */}
                    <motion.div 
                        className="absolute top-10 right-10 z-20 bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border-soft)] p-4 rounded-2xl shadow-floating"
                        style={{ x: layer2X, y: layer2Y }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <div className="text-[24px] font-heading font-bold">3</div>
                        <div className="text-[12px] text-[var(--color-text-secondary)] uppercase tracking-widest">Years Exp</div>
                    </motion.div>
                    
                    <motion.div 
                        className="absolute bottom-20 left-10 z-20 bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border-soft)] p-4 rounded-2xl shadow-floating"
                        style={{ x: layer2X, y: layer2Y }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    >
                        <div className="text-[24px] font-heading font-bold">20+</div>
                        <div className="text-[12px] text-[var(--color-text-secondary)] uppercase tracking-widest">Projects</div>
                    </motion.div>

                    {/* Portrait Image */}
                    <motion.div 
                        className="relative w-full max-w-md aspect-[3/4] rounded-[var(--radius-image)] overflow-hidden bg-[var(--color-border-soft)]"
                        style={{ x: layer1X, y: layer1Y }}
                        initial={{ scale: 1.1, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                    >
                        <Image src="/images/profile-1.png" alt="Folarin Portrait" fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-surface)] to-transparent mix-blend-multiply dark:hidden pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
