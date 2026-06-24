import { Users, Rocket, MessagesSquare, Trophy, Map, Sparkles, Code, Palette, Box, Music, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import gdcLogo from '@/assets/community/gdc-logo.png.asset.json';
import gdgLogo from '@/assets/community/gdg-logo.webp.asset.json';

const JOIN_URL = 'https://chat.whatsapp.com/GoEW8Uipou2Hcnmo14SkjE';

const memberTypes = [
  { icon: Code, label: 'Unity Programmers' },
  { icon: Box, label: '3D Modelers' },
  { icon: Palette, label: '2D Artists' },
  { icon: Music, label: 'Music Composers' },
  { icon: BookOpen, label: 'Story Writers' },
];

const provides = [
  { icon: Map, title: 'Beginner Roadmaps', desc: 'Step-by-step guides to start your game dev journey.' },
  { icon: MessagesSquare, title: 'Live Mentorship', desc: 'Consultations and 1-on-1 sessions with seniors.' },
  { icon: Users, title: 'Team Formation', desc: 'Find collaborators for your next project.' },
  { icon: Rocket, title: 'Game Jams', desc: 'Build and ship small games together.' },
  { icon: Trophy, title: 'Showcases & Prizes', desc: 'Ceremonies celebrating community wins.' },
  { icon: Sparkles, title: 'Networking', desc: 'Friends, peers and industry connections.' },
];

const LearnGameDev = () => {
  return (
    <section id="learn" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:pl-20 lg:pr-8">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium uppercase tracking-wider mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Community
          </div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-foreground">Learn Game</span>{' '}
            <span className="text-orange">Development</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            <span className="font-semibold text-foreground">Game Developers Club</span>
          </p>
          <p className="text-muted-foreground">
            A project by <span className="text-foreground font-medium">DeepCut Originals</span> ×{' '}
            <span className="text-foreground font-medium">Google Developers Club (GDG)</span>
          </p>

          {/* Logos */}
          <div className="mt-8 flex items-center justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white border border-border/40 flex items-center justify-center p-3 shadow-md">
                <img src={gdcLogo.url} alt="Game Developers Club" className="w-full h-full object-contain" />
              </div>
              <span className="text-xs text-muted-foreground">Game Developers Club</span>
            </div>
            <div className="text-2xl text-muted-foreground font-light">×</div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-[#0d0d0d] border border-border/40 flex items-center justify-center p-3 shadow-md">
                <img src={gdgLogo.url} alt="Google Developers Group" className="w-full h-full object-contain" />
              </div>
              <span className="text-xs text-muted-foreground">GDG</span>
            </div>
          </div>
        </div>

        {/* 100+ milestone */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-3xl border border-orange/40 bg-gradient-to-br from-orange/15 via-card to-card p-10 md:p-14 text-center shadow-xl">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-orange/20 blur-3xl" aria-hidden />
            <div className="relative">
              <div className="text-7xl md:text-9xl font-orbitron font-black text-orange leading-none">
                100<span className="text-foreground">+</span>
              </div>
              <p className="mt-4 text-xl md:text-2xl font-semibold text-foreground">Members and growing</p>
              <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                A thriving WhatsApp community of programmers, artists, modelers, composers and writers.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-4 text-foreground">Our Mission</h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            We founded this community primarily with students from{' '}
            <span className="text-foreground font-medium">Information Technology University (ITU)</span> to help
            beginners enter the game development industry — with real mentorship, real projects and a real shipping culture.
          </p>
        </div>

        {/* Member types */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-center text-xl md:text-2xl font-orbitron font-semibold text-foreground mb-6">
            Who's Inside
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {memberTypes.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 hover:border-primary/50 transition-colors shadow-sm"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{m.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* What we provide */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-center text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-10">
            What You Get
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {provides.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.title} className="card-interactive border-border/50 bg-card/70 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-orange/15 border border-orange/30 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-orange" />
                    </div>
                    <h4 className="font-orbitron font-semibold text-foreground">{p.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-3">
              Ready to start building?
            </h3>
            <p className="text-muted-foreground mb-8">
              Join 100+ beginners and pros on WhatsApp. It's free and always will be.
            </p>
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#1ebe57] text-white text-lg px-10 py-7 gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              onClick={() => window.open(JOIN_URL, '_blank')}
            >
              <MessagesSquare className="h-6 w-6" />
              Join the Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnGameDev;
