import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HousingSolutions from '@/components/HousingSolutions';
import NationwideCoverage from '@/components/NationwideCoverage';
import HowItWorks from '@/components/HowItWorks';
import HomePlans from '@/components/HomePlans';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import StatsBar from '@/components/StatsBar';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <HousingSolutions />
      <NationwideCoverage />
      <HowItWorks />
      <HomePlans />
      <Portfolio />
      <Testimonials />
      <StatsBar />
      <FinalCTA />
      <Footer />
    </div>
  );
}
