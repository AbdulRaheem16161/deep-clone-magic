import { useState } from 'react';
import { ChevronDown, Download, Monitor, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from '@/components/ui/drawer';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

// Cure & Infection screenshots (kept from previous build)
import cureInfectionIcon from '@/assets/cure-infection-icon.png';
import cureInfection1 from '@/assets/cure-infection-screenshot-1.png';
import cureInfection2 from '@/assets/cure-infection-screenshot-2.png';
import cureInfection3 from '@/assets/cure-infection-screenshot-3.png';
import cureInfection4 from '@/assets/cure-infection-screenshot-4.png';
import cureInfection5 from '@/assets/cure-infection-screenshot-5.png';
import cureInfection6 from '@/assets/cure-infection-screenshot-6.png';

import doomIcon from '@/assets/icons/doom.png';
import yomaIcon from '@/assets/icons/yoma.png';
import gumperIcon from '@/assets/icons/gumper.png';
import amongusIcon from '@/assets/icons/amongus.png';
import dinoIcon from '@/assets/icons/dino.png';
import { videos } from '@/lib/videos';

type Game = {
  id: string;
  title: string;
  tagline?: string;
  icon?: string;
  iconFallback: string; // initial letter fallback
  downloadUrl?: string;
  inProgress?: boolean;
  videos: { label: string; youtubeId: string }[];
  screenshots?: string[];
  comingSoon?: boolean;
};

const games: Game[] = [
  {
    id: 'doom',
    title: 'Doom',
    tagline: 'Classic FPS — reimagined',
    icon: doomIcon,
    iconFallback: 'D',
    downloadUrl: '#',
    videos: [
      { label: 'Gameplay', youtubeId: 'pggCjcIgk7k' },
      { label: 'Devlog 1', youtubeId: '_i2OdAMMVDM' },
      { label: 'Devlog 2', youtubeId: 'VAdKUHrQ3MY' },
    ],
  },
  {
    id: 'cure',
    title: 'Cure N Infection',
    tagline: 'Survival shooting',
    icon: cureInfectionIcon,
    iconFallback: 'C',
    downloadUrl: 'https://goncal0.itch.io/cure-and-infection',
    videos: [],
    screenshots: [
      cureInfection1,
      cureInfection2,
      cureInfection3,
      cureInfection4,
      cureInfection5,
      cureInfection6,
    ],
  },
  {
    id: 'yoma',
    title: 'YOMA',
    tagline: 'Gameplay & Devlog coming soon',
    icon: yomaIcon,
    iconFallback: 'Y',
    downloadUrl: '#',
    comingSoon: true,
    videos: [],
  },
  {
    id: 'gumper',
    title: 'Gumper Bumper World',
    tagline: 'Bumper-cart chaos',
    icon: gumperIcon,
    iconFallback: 'G',
    downloadUrl: '#',
    videos: [
      { label: 'Gameplay', youtubeId: 'e059N0rVpPM' },
      { label: 'Devlog', youtubeId: 'e2TcC0cSglE' },
    ],
  },
  {
    id: 'amongus3d',
    title: 'AmongUs 3D',
    tagline: 'Social deduction, 3D',
    icon: amongusIcon,
    iconFallback: 'A',
    downloadUrl: '#',
    videos: [
      { label: 'Gameplay', youtubeId: 'S9udobAwd8A' },
      { label: 'Devlog', youtubeId: 'S0t_FS6bSyw' },
    ],
  },
  {
    id: 'dino',
    title: 'Dino Arena',
    tagline: 'Development in progress',
    icon: dinoIcon,
    iconFallback: 'D',
    inProgress: true,
    videos: [{ label: 'Devlog', youtubeId: 'FfPBt5r1db8' }],
  },
  {
    id: 'carhorde',
    title: 'Car Horde Survival',
    tagline: 'Development in progress',
    iconFallback: 'C',
    inProgress: true,
    videos: [{ label: 'Devlog', youtubeId: 'FY7GR2Z-Pgs' }],
  },
];

const GameIcon = ({ game }: { game: Game }) => (
  <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-primary/50 flex-shrink-0 bg-muted flex items-center justify-center">
    {game.icon ? (
      <img src={game.icon} alt={`${game.title} icon`} className="w-full h-full object-cover" />
    ) : (
      <span className="font-orbitron font-bold text-xl text-primary">
        {game.iconFallback}
      </span>
    )}
  </div>
);

const YouTubeEmbed = ({ id, title }: { id: string; title: string }) => (
  <div className="aspect-video w-full rounded-lg overflow-hidden bg-black border border-border/40">
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    />
  </div>
);

const GameRow = ({ game }: { game: Game }) => {
  const [open, setOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const hasMedia = game.videos.length > 0 || (game.screenshots && game.screenshots.length > 0);

  return (
    <Card className="overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm card-interactive">
      <CardContent className="p-4 md:p-5">
        <div className="flex items-center gap-4">
          <GameIcon game={game} />

          <div className="flex-1 min-w-0">
            <h3 className="font-orbitron font-bold text-lg md:text-xl text-foreground truncate">
              {game.title}
            </h3>
            {game.tagline && (
              <p className="text-sm text-muted-foreground truncate">{game.tagline}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            {game.downloadUrl && !game.inProgress && (
              <Button
                size="sm"
                onClick={() => window.open(game.downloadUrl, '_blank')}
                disabled={game.comingSoon}
                className="gap-2 bg-foreground hover:bg-foreground/90 text-background"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download</span>
                <Monitor className="h-4 w-4" />
              </Button>
            )}
            {game.inProgress && (
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 hidden sm:inline">
                In Progress
              </span>
            )}

            {hasMedia && (
              <Button
                size="icon"
                variant="outline"
                onClick={() => setOpen(true)}
                aria-label={`Preview ${game.title}`}
                className="rounded-full border-primary/40 hover:bg-primary/10"
              >
                <ChevronDown className="h-5 w-5 text-primary" />
              </Button>
            )}
          </div>
        </div>

        {/* Drawer with media */}
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent className="max-h-[85vh]">
            <DrawerHeader className="flex items-center justify-between">
              <DrawerTitle className="font-orbitron text-xl md:text-2xl">
                {game.title}
              </DrawerTitle>
              <DrawerClose asChild>
                <Button size="icon" variant="ghost" aria-label="Close">
                  <X className="h-5 w-5" />
                </Button>
              </DrawerClose>
            </DrawerHeader>

            <div className="overflow-y-auto px-4 md:px-8 pb-8 space-y-8">
              {game.videos.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-orbitron font-semibold text-foreground">Videos</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {game.videos.map((v) => (
                      <div key={v.youtubeId} className="space-y-2">
                        <p className="text-sm text-muted-foreground">{v.label}</p>
                        <YouTubeEmbed id={v.youtubeId} title={`${game.title} — ${v.label}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {game.screenshots && game.screenshots.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-orbitron font-semibold text-foreground">Screenshots</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {game.screenshots.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => setZoomedImage(src)}
                        className="aspect-video rounded-lg overflow-hidden border border-border/40 hover:border-primary transition-all"
                      >
                        <img
                          src={src}
                          alt={`${game.title} screenshot ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DrawerContent>
        </Drawer>

        {/* Zoomed screenshot */}
        <Dialog open={!!zoomedImage} onOpenChange={() => setZoomedImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
            <DialogClose className="absolute right-4 top-4 z-10">
              <X className="h-6 w-6 text-white" />
            </DialogClose>
            {zoomedImage && (
              <img
                src={zoomedImage}
                alt="Zoomed screenshot"
                className="w-full h-full object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

const GamesSection = () => {
  return (
    <section id="games" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:pl-24 lg:pr-12">
        {/* Section Header */}
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground">
            Games
          </h3>
          <p className="text-muted-foreground mt-2">
            Our growing roster of indie titles
          </p>
        </div>

        {/* Header video — autoplay loop, no audio */}
        <div className="mb-12 flex justify-center">
          <video
            src={videos.gamesHeader}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full max-w-5xl rounded-2xl border border-border/40 shadow-xl object-contain"
          />
        </div>

        {/* Game Cards */}
        <div className="space-y-4">
          {games.map((game) => (
            <GameRow key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
