import { Typography } from '@/components/atoms/Typography';
import { WorkGrid } from '@/components/organisms/WorkGrid';

export const metadata = {
    title: 'Work | Dreamline Visuals',
};

const ALL_PROJECTS = [
    {
        title: 'Aura Skincare',
        category: 'Brand Identity',
        imageSrc: '',
        slug: 'aura-skincare'
    },
    {
        title: 'Nexus Tech',
        category: 'Web Design',
        imageSrc: '',
        slug: 'nexus-tech'
    },
    {
        title: 'Lumina Architecture',
        category: 'Editorial Design',
        imageSrc: '',
        slug: 'lumina-architecture'
    },
    {
        title: 'Vela Coffee',
        category: 'Packaging',
        imageSrc: '',
        slug: 'vela-coffee'
    },
    {
        title: 'Oasis Wellness',
        category: 'App Design',
        imageSrc: '',
        slug: 'oasis-wellness'
    },
    {
        title: 'Nova Capital',
        category: 'Web App',
        imageSrc: '',
        slug: 'nova-capital'
    }
];

export default function WorkPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-32">
            <div className="mb-16">
                <Typography variant="h1">Our Work</Typography>
                <Typography variant="lead" className="mt-4 max-w-2xl">
                    A comprehensive library of our recent case studies across branding, digital product design, and creative direction.
                </Typography>
            </div>

            <WorkGrid projects={ALL_PROJECTS} />
        </div>
    );
}
