import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import CompaniesCarousel from "@/components/CompaniesCarousel";
import ProjectsSection from "@/components/ProjectsSection";
import NewsSection from "@/components/NewsSection";
import CTASection from "@/components/CTASection";
import RegisterForm from "@/components/RegisterForm";

export default function HomePage() {
  return (
    <div className="home-page">
      <main>
        <AboutSection />
        <EventsSection />
        <CompaniesCarousel />
        <ProjectsSection />
        <NewsSection />
        <CTASection />
        <RegisterForm />
      </main>
    </div>
  );
}
