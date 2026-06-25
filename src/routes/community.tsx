import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Gamepad2, Palette, Box, Music, BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import gdcLogoAsset from "@/assets/community/gdc-logo.png.asset.json";
import { assetUrl } from "@/lib/asset-url";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JOIN_URL = "https://chat.whatsapp.com/GoEW8Uipou2Hcnmo14SkjE";
const gdcLogo = assetUrl(gdcLogoAsset.url);

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Game Developers Club | DeepCut Originals" },
      {
        name: "description",
        content:
          "Join 100+ game developers, artists, and creators building games together. A community by DeepCut Originals.",
      },
      { property: "og:title", content: "Game Developers Club — DeepCut Originals" },
      {
        property: "og:description",
        content: "Join 100+ game developers, artists, and creators building games together.",
      },
      { property: "og:image", content: gdcLogo },
    ],
  }),
  component: CommunityPage,
});

const roles = [
  {
    icon: Gamepad2,
    title: "Programmers",
    desc: "Build gameplay systems, mechanics, tools, and experiences.",
  },
  {
    icon: Palette,
    title: "Artists",
    desc: "Create characters, concepts, interfaces, and visual identity.",
  },
  {
    icon: Box,
    title: "3D Modelers",
    desc: "Design assets, environments, animations, and game worlds.",
  },
  {
    icon: Music,
    title: "Music Composers",
    desc: "Create soundtracks, atmosphere, and memorable audio experiences.",
  },
  {
    icon: BookOpen,
    title: "Story Writers",
    desc: "Craft narratives, dialogue, lore, and immersive worlds.",
  },
];

function CommunityPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* ambient backdrop */}
          <div
            className="absolute inset-0 -z-10"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(var(--orange) / 0.18), transparent 70%), radial-gradient(ellipse 60% 40% at 50% 100%, hsl(var(--orange) / 0.08), transparent 70%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden />

          <div className="container mx-auto px-4 lg:px-20 pt-28 pb-24 md:pt-36 md:pb-32">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-14"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to DeepCut Originals
            </Link>

            <div className="max-w-3xl mx-auto text-center">
              {/* Logo */}
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 blur-3xl scale-110 rounded-full"
                    style={{ background: "hsl(var(--orange) / 0.25)" }}
                    aria-hidden
                  />
                  <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-3xl bg-white border border-border flex items-center justify-center p-5 shadow-2xl">
                    <img
                      src={gdcLogo}
                      alt="Game Developers Club logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <h1 className="font-orbitron font-bold tracking-tight text-foreground text-5xl md:text-7xl leading-[1.05]">
                Game Developers Club
              </h1>

              <p className="mt-5 text-base md:text-lg text-muted-foreground">
                A community by{" "}
                <span className="text-foreground font-semibold">DeepCut Originals</span>.
              </p>

              <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Join 100+ game developers, artists, and creators building games together.
              </p>

              <div className="mt-10 flex justify-center">
                <Button
                  size="lg"
                  onClick={() => window.open(JOIN_URL, "_blank")}
                  className="group relative px-9 py-7 text-base md:text-lg font-semibold bg-foreground text-background hover:bg-foreground/90 rounded-full gap-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* WHO'S IT FOR */}
        <section className="relative border-t border-border/60">
          <div className="container mx-auto px-4 lg:px-20 py-24 md:py-32">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-orbitron font-bold text-foreground text-3xl md:text-5xl">
                Who's It For?
              </h2>
              <p className="mt-4 text-muted-foreground text-base md:text-lg">
                Every role that helps bring games to life.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {roles.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group relative rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-orange/50"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors"
                    style={{ background: "hsl(var(--orange) / 0.12)" }}
                  >
                    <Icon className="h-6 w-6 text-orange" />
                  </div>
                  <h3 className="font-orbitron font-semibold text-foreground text-lg mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 flex justify-center">
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(JOIN_URL, "_blank")}
                className="px-8 py-6 rounded-full gap-2 border-foreground/20 hover:bg-foreground hover:text-background transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Join the Community
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
