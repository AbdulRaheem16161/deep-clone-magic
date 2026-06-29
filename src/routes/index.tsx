import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GamesSection from "@/components/GamesSection";
import ComicsTrailersSection from "@/components/ComicsTrailersSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import MeetTheTeam from "@/components/MeetTheTeam";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import VerticalNav from "@/components/VerticalNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DeepCut Originals | Games, Art & 3D" },
      {
        name: "description",
        content:
          "DeepCut Originals creates mobile games, animated trailers, character art, environments and 3D models.",
      },
      { property: "og:title", content: "DeepCut Originals" },
      {
        property: "og:description",
        content:
          "Mobile games, animated trailers, character art, environments and 3D models.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <VerticalNav />
      <main>
        <Hero />
        <GamesSection />
        <ComicsTrailersSection />
        <PortfolioSection />
        <ServicesSection />
        <MeetTheTeam />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
