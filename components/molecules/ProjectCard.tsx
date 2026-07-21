'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@/components/atoms/Typography';

export interface ProjectCardProps {
    title: string;
    category: string;
    imageSrc: string;
    slug: string;
}

export function ProjectCard({ title, category, imageSrc, slug }: ProjectCardProps) {
    return (
        <Link href={`/work/${slug}`}>
            <motion.div
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-black/5 dark:bg-white/5 aspect-[4/3]"
                whileHover="hover"
            >
                <motion.div
                    className="w-full h-full relative"
                    variants={{
                        hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-black/10 dark:bg-white/10" />
                    )}
                </motion.div>

                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6"
                >
                    <Typography variant="h4" className="text-white mb-1">{title}</Typography>
                    <Typography variant="small" className="text-gray-300 uppercase tracking-wider">{category}</Typography>
                </motion.div>
            </motion.div>
        </Link>
    );
}
