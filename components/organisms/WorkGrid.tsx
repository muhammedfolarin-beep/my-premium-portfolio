'use client';

import { motion, Variants } from 'framer-motion';
import { ProjectCard, ProjectCardProps } from '@/components/molecules/ProjectCard';

interface WorkGridProps {
    projects: ProjectCardProps[];
}

export function WorkGrid({ projects }: WorkGridProps) {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
        >
            {projects.map((project) => (
                <motion.div key={project.slug} variants={item}>
                    <ProjectCard {...project} />
                </motion.div>
            ))}
        </motion.div>
    );
}
