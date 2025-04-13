// src/app/page.tsx
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ResearchResultsSection from "@/components/ResearchResultsSection";
import DocumentsSection from "@/components/DocumentsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="home">
        <Banner />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="results">
        <ResearchResultsSection />
      </div>
      <div id="documents">
        <DocumentsSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}