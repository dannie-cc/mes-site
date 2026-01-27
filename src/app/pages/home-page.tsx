import { HeroSection } from '../components/hero-section';
import { WhySection } from '../components/why-section';
import { ArchitectureSection } from '../components/architecture-section';
import { PhasesSection } from '../components/phases-section';
import { CTASection } from '../components/cta-section';

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
