import { createFileRoute } from "@tanstack/react-router";
import {
  Nav,
  Hero,
  Countdown,
  About,
  Timeline,
  Tracks,
  Prizes,
  FAQ,
  Footer,
} from "@/components/hackathon";
import { useSectionSnap } from "@/hooks/use-scroll";

export const Route = createFileRoute("/_public/")({
  component: Index,
});

function Index() {
  // Enable controlled section snapping between hero and countdown only
  useSectionSnap({
    enabled: true,
    heroId: "hero",
    countdownId: "countdown",
  });

  return (
    <div className="min-h-screen bg-[#0D0D12] overflow-x-hidden">
      <Nav />
      <Hero />
      <Countdown />
      <About />
      <Timeline />
      <Tracks />
      <Prizes />
      <FAQ />
      <Footer />
    </div>
  );
}
