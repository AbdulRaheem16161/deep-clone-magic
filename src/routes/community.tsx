import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Users, Rocket, MessagesSquare, Trophy, Map, Sparkles, Code, Palette, Box, Music, BookOpen, Target, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import gdcLogo from '@/assets/community/gdc-logo.png.asset.json';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JOIN_URL = 'https://chat.whatsapp.com/GoEW8Uipou2Hcnmo14SkjE';

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Game Developers Club | DeepCut Originals" },
      { name: "description", content: "Join 100+ game developers, artists, modelers, composers and writers building games together." },
      { property: "og:title", content: "Game Developers Club — Community" },
      { property: "og:description", content: "A community for aspiring game developers. Mentorship, jams, networking and real shipping culture." },
    ],
  }),
  component: CommunityPage,
});

const memberTypes = [
  { icon: Code, label: 'Unity Programmers' },
  { icon: Box, label: '3D Modelers' },
  { icon: Palette, label: '2D Artists' },
  { icon: Music, label: 'Music Composers' },
  { icon: BookOpen, label: 'Story Writers' },
];

const provides = [
  { icon: Map, title: 'Beginner Roadmaps', desc: 'Step-by-step guides to start your game dev journey the right way.' },
  { icon: MessagesSquare, title: 'Live Mentorship', desc: 'Direct consultations and 1-on-1 sessions with senior developers.' },
  { icon: Users, title: 'Team Formation', desc: 'Find skilled collaborators to bring your next project to life.' },
  { icon: Rocket, title: 'Game Jams', desc: 'Build, ship and showcase small games alongside the community.' },
  { icon: Trophy, title: 'Showcases & Awards', desc: 'Ceremonies and prizes celebrating community achievements.' },
  { icon: Sparkles, title: 'Industry Networking', desc: 'Connect with peers, mentors and real industry professionals.' },
];

const values = [
  { icon: Target, title: 'Ship, Don\'t Just Learn', desc: 'We focus on finishing real projects, not endless tutorials.' },
  { icon: Heart, title: 'No Gatekeeping', desc: 'Open, welcoming, and free — forever. Beginners belong here.' },
  { icon: Zap, title: 'Built by Devs', desc: 'Run by active developers who actually ship games.' },
];

function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange/10 via-background to-background" aria-hidden />
          <div className="container mx-auto px-4 lg:px-20 relative">
            <div className="max-w-3xl mx-auto text-center">
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
                <ArrowLeft className="h-4 w-4" /> Back to DeepCut Originals
              </Link>

              {/* Centered community logo */}
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange/20 blur-3xl rounded-full" aria-hidden />
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-white border border-border/40 flex items-center justify-center p-5 shadow-2xl">
                    <img src={gdcLogo.url} alt="Game Developers Club" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                Community
              </div>

              <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 tracking-tight">
                <span className="text-foreground">Game Developers</span>{' '}
                <span className="text-orange">Club</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A community for ambitious developers, artists and storytellers — founded by{' '}
                <span className="text-foreground font-medium">DeepCut Originals</span> to help beginners
                enter the game industry with real mentorship and a shipping culture.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#1ebe57] text-white text-base px-8 py-6 gap-2 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open(JOIN_URL, '_blank')}
                >
                  <MessagesSquare className="h-5 w-5" />
                  Join on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 border-b border-border/40">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-orange/40 bg-gradient-to-br from-orange/10 to-transparent p-8 text-center">
                <div className="text-6xl font-orbitron font-black text-orange leading-none">100<span className="text-foreground">+</span></div>
                <p className="mt-3 text-sm font-medium text-foreground uppercase tracking-wider">Active Members</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="text-6xl font-orbitron font-black text-foreground leading-none">5</div>
                <p className="mt-3 text-sm font-medium text-muted-foreground uppercase tracking-wider">Disciplines</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="text-6xl font-orbitron font-black text-foreground leading-none">ITU</div>
                <p className="mt-3 text-sm font-medium text-muted-foreground uppercase tracking-wider">Founded At</p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-24 border-b border-border/40">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 items-start">
              <div className="md:col-span-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-orange mb-3">Our Mission</p>
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground leading-tight">
                  Turning beginners into shippers.
                </h2>
              </div>
              <div className="md:col-span-2 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  We founded this community primarily with students from{' '}
                  <span className="text-foreground font-medium">Information Technology University (ITU)</span>{' '}
                  to fix a real problem: most aspiring devs never finish a single game.
                </p>
                <p>
                  Through mentorship, structured roadmaps and collaborative jams, we help members move
                  from "I want to make games" to actually releasing playable projects — together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24 border-b border-border/40">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-widest text-orange mb-3">What We Stand For</p>
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground">Principles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.title} className="rounded-2xl border border-border bg-card/50 p-8 hover:border-orange/40 transition-colors">
                      <Icon className="h-7 w-7 text-orange mb-5" />
                      <h3 className="font-orbitron font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* WHO'S INSIDE */}
        <section className="py-24 border-b border-border/40">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-orange mb-3">Who's Inside</p>
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground mb-10">
                A full game-dev stack, in one room.
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {memberTypes.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={m.label}
                      className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-orange/50 transition-colors"
                    >
                      <Icon className="h-4 w-4 text-orange" />
                      <span className="text-sm font-medium text-foreground">{m.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-24 border-b border-border/40">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-widest text-orange mb-3">Membership</p>
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground">What You Get</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {provides.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Card key={p.title} className="border-border/60 bg-card/50 hover:bg-card hover:border-orange/40 transition-all">
                      <CardContent className="p-7 space-y-4">
                        <div className="w-11 h-11 rounded-xl bg-orange/10 border border-orange/30 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-orange" />
                        </div>
                        <h3 className="font-orbitron font-semibold text-foreground">{p.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-orange/5 p-12 md:p-16 text-center">
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-orange/15 blur-3xl" aria-hidden />
                <div className="relative">
                  <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-foreground mb-4">
                    Ready to start building?
                  </h2>
                  <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                    Join 100+ developers on WhatsApp. Free, friendly, always open.
                  </p>
                  <Button
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#1ebe57] text-white text-lg px-10 py-7 gap-3 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
                    onClick={() => window.open(JOIN_URL, '_blank')}
                  >
                    <MessagesSquare className="h-6 w-6" />
                    Join the Community
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
