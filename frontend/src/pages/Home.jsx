import HeroSection from '../components/ui/HeroSection';
import EngineSection from '../components/ui/EngineSection';
import SimulationSection from '../components/ui/SimulationSection';
import MarketSection from '../components/ui/MarketSection';
import RoadmapSection from '../components/ui/RoadmapSection';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <EngineSection />
      <SimulationSection />
      <MarketSection />
      <RoadmapSection />
    </div>
  );
}
