import {
  AboutSection,
  EventsSection,
  CompaniesCarousel,
  ProjectsSection,
  NewsSection,
  CTASection,
} from "@/components/sections";
import { RegisterForm } from "@/components/ui";
import { AnimatedSection } from "@/components/animation";

export default function HomePage() {
  return (
    <div className="home-page">
      <main>
        <AboutSection />
        <AnimatedSection animationType="slideUp" delay={0.2}>
          <EventsSection />
        </AnimatedSection>
        <AnimatedSection animationType="fadeIn" delay={0.3}>
          <CompaniesCarousel />
        </AnimatedSection>
        <ProjectsSection />
        <AnimatedSection animationType="fadeIn" delay={0.3}>
          <NewsSection />
        </AnimatedSection>
        <CTASection />
        <RegisterForm />
      </main>
    </div>
  );
}
