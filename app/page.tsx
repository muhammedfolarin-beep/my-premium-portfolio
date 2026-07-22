import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { WorksSection } from '@/components/works/WorksSection';
import { ServicesSection } from '@/components/services/ServicesSection';
import { ProcessSection } from '@/components/process/ProcessSection';
import { AboutSection } from '@/components/about/AboutSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { Footer } from '@/components/footer/Footer';
      <Navbar />
export default function HomePage() {
  return (
    <div className="flex flex-col items-center">

      <HeroSection />
      <WorksSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
