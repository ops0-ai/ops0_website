import AiDevopsAgent from "./components/aiDevopsAgent/AiDevopsAgent";
import CodeToCloud from "./components/codeToCloud/CodeToCloud";
import CommandCenter from "./components/CommandCenter";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InfrastructureAgentMain from "./components/infrastructureAgentMain/InfrastructureAgentMain";
import PricingMain from "./components/pricing/PricingMain";
import Testimonials from "./components/testimonial/Testimonial";

export default function Home() {
  return (
    <div className="w-full h-full bg-[black] pt-3">
      <div className="container mx-auto">
        <Header />
        <div className="space-y-[100px]">
          <div></div>
          <HeroSection />
          <InfrastructureAgentMain />
          <AiDevopsAgent />
          <CodeToCloud/>
          <PricingMain/>
          <Testimonials/>
        </div>
      </div>
    </div>
  );
}
