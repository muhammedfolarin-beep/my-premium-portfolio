import { Typography } from '@/components/atoms/Typography';

export const metadata = {
    title: 'About | Dreamline Visuals',
};

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-32">
            <Typography variant="h1" className="mb-8">About Dreamline</Typography>

            <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                    <Typography variant="lead" className="mb-6">
                        We are a boutique design studio focused on building premium visual experiences for modern brands.
                    </Typography>
                    <Typography variant="p">
                        At Dreamline, we believe that design is not just about making things look beautiful; it's about solving problems with clarity, elegance, and purpose. We partner with founders and visionaries to distill complex ideas into clean, minimal, and impactful identities.
                    </Typography>
                    <Typography variant="p">
                        Our approach combines strategic thinking with exceptional craftsmanship, ensuring every digital touchpoint feels intentional and elevated.
                    </Typography>
                </div>

                <div className="bg-black/5 dark:bg-white/5 rounded-2xl p-8 flex items-center justify-center aspect-square">
                    <Typography variant="muted">Studio Image Placeholder</Typography>
                </div>
            </div>
        </div>
    );
}
