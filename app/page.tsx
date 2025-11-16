import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <WhoItsFor />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
