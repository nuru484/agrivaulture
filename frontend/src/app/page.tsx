// pages/Index.tsx (or app/page.tsx)
import Navbar from "@/components/landing-page/Navbar";
import Hero from "@/components/landing-page/Hero";
import Features from "@/components/landing-page/Features";
import HistoricalInsights from "@/components/landing-page/HistoricalInsights";
import DailyTips from "@/components/landing-page/DailyTips";
import Testimonials from "@/components/landing-page/Testimonials";
import CTA from "@/components/landing-page/CTA";
import Footer from "@/components/landing-page/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HistoricalInsights />
      <DailyTips />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
