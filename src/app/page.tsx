import AiDevopsAgent from "./components/aiDevopsAgent/AiDevopsAgent";
import BattleTest from "./components/battleTest/BattleTest";
import CodeToCloud from "./components/codeToCloud/CodeToCloud";
import CommandCenter from "./components/CommandCenter";
import FAQPage from "./components/fAQPage/FAQPage";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InfrastructureAgentMain from "./components/infrastructureAgentMain/InfrastructureAgentMain";
import PricingMain from "./components/pricing/PricingMain";
import Testimonials from "./components/testimonial/Testimonial";

export default function Home() {
  return (
    <div className="w-full h-full bg-[black]">
      <div className="mx-auto">
        <div className="bg-[url('/bg/BG.svg')] lg:bg-cover bg-no-repeat bg-center h-screen w-full">
          <Header />
          <HeroSection />
        </div>
        <div className="space-y-[120px] max-md:px-2">
          <InfrastructureAgentMain />
          <AiDevopsAgent />
          <CodeToCloud />
          <PricingMain />
          <Testimonials />
          <BattleTest />
          <FAQPage />
          <Footer />
        </div>
      </div>
    </div>
  );
}
