import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import TargetAudience from "@/components/landing/TargetAudience";
import Testimonials from "@/components/landing/Testimonials";
import Waitlist from "@/components/landing/Waitlist";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <TargetAudience />
      <Testimonials />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
