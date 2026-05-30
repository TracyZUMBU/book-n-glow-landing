import TopBar from "@/components/TopBar";
import AppDownloadCTA from "@/components/landing/AppDownloadCTA";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import TargetAudience from "@/components/landing/TargetAudience";
import Testimonials from "@/components/landing/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero />
      <Features />
      <HowItWorks />
      <TargetAudience />
      <Testimonials />
      <AppDownloadCTA />
      <Footer />
    </div>
  );
};

export default Index;
