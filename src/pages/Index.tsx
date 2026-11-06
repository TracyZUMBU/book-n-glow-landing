import CommitmentSection from "@/components/home/CommitmentSection";
import CustomerSideSection from "@/components/home/CustomerSideSection";
import DmSection from "@/components/home/DmSection";
import FaqSection from "@/components/home/FaqSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import FreeSection from "@/components/home/FreeSection";
import HomeHero from "@/components/home/HomeHero";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import SiteFooter from "@/components/home/SiteFooter";
import SiteHeader from "@/components/home/SiteHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <SiteHeader />
      <HomeHero />
      <DmSection />
      <HowItWorksSection />
      <CommitmentSection />
      <FeaturesSection />
      <CustomerSideSection />
      <FreeSection />
      <ReviewsSection />
      <FaqSection />
      <FinalCtaSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
