import TopBar from "@/components/TopBar";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import SubscriptionSelection from "@/components/landing/SubscriptionSelection";
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
      <SubscriptionSelection />
      <Footer />
    </div>
  );
};

export default Index;
