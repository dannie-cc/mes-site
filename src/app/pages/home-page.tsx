import { HeroSection } from '../components/landing-sections/hero-section';
import { WhySection } from '../components/landing-sections/why-section';
import { ArchitectureSection } from '../components/landing-sections/architecture-section';
import { PhasesSection } from '../components/landing-sections/phases-section';
import { CTASection } from '../components/landing-sections/cta-section';

export function HomePage() {
    return (
        <main className="pt-16">
            <HeroSection />
            <div id="why">
                <WhySection />
            </div>
            <div id="solution">
                <ArchitectureSection />
            </div>
            <div id="reliability">
                <PhasesSection />
            </div>
            <CTASection />
        </main>
    );
}
