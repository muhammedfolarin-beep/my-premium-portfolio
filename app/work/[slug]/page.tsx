import { Typography } from '@/components/atoms/Typography';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
    return [
        { slug: 'aura-skincare' },
        { slug: 'nexus-tech' },
        { slug: 'lumina-architecture' },
        { slug: 'vela-coffee' },
        { slug: 'oasis-wellness' },
        { slug: 'nova-capital' },
    ];
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return (
        <article className="min-h-screen">
            <div className="h-[70vh] w-full bg-black/10 dark:bg-white/10 relative flex items-end p-6 md:p-12 mb-16">
                <div className="max-w-7xl mx-auto w-full">
                    <Typography variant="h1" className="text-gray-900 dark:text-white capitalize">{title}</Typography>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 mb-24">
                <Link href="/work" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mb-12">
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back to all work
                </Link>

                <div className="grid md:grid-cols-3 gap-12 border-t border-gray-200 dark:border-gray-800 pt-8 mb-16">
                    <div>
                        <Typography variant="small" className="text-gray-500 uppercase tracking-widest mb-2 block">Client</Typography>
                        <Typography variant="large">{title}</Typography>
                    </div>
                    <div>
                        <Typography variant="small" className="text-gray-500 uppercase tracking-widest mb-2 block">Services</Typography>
                        <Typography variant="large">Brand Identity<br />Web Design</Typography>
                    </div>
                    <div>
                        <Typography variant="small" className="text-gray-500 uppercase tracking-widest mb-2 block">Year</Typography>
                        <Typography variant="large">2024</Typography>
                    </div>
                </div>

                <div className="space-y-8 mb-24">
                    <Typography variant="h3">The Challenge</Typography>
                    <Typography variant="lead">
                        {title} needed a premium identity that communicated their commitment to quality without feeling unapproachable. They wanted to balance modern minimalism with warm, organic elements to appeal to a wider demographic.
                    </Typography>
                </div>

                <div className="w-full h-96 bg-black/5 dark:bg-white/5 rounded-xl mb-12 animate-pulse" />

                <div className="space-y-8">
                    <Typography variant="h3">Our Approach</Typography>
                    <Typography variant="p">
                        We started by stripping away all unnecessary elements, focusing entirely on a solid typographic foundation. The final identity relies heavily on spacing, subtle color nuances, and high-quality art direction rather than loud graphics.
                    </Typography>
                    <Typography variant="p">
                        The digital experience was built with motion in mind, providing small moments of delight through micro-interactions while navigating the portfolio.
                    </Typography>
                </div>
            </div>
        </article>
    );
}
