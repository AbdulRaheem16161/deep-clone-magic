import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GamesSection from "@/components/GamesSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import VerticalNav from "@/components/VerticalNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DeepCut Originals — Games" },
      {
        name: "description",
        content: "DeepCut Originals creates indie mobile and PC games.",
      },
      { property: "og:title", content: "DeepCut Originals" },
      { property: "og:description", content: "Indie games by DeepCut Originals." },
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
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
