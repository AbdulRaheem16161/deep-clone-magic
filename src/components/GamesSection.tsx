import { useState } from 'react';
import { ChevronDown, Download, Monitor, X, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogClose, DialogTitle } from '@/components/ui/dialog';
import HeaderVideo from '@/components/HeaderVideo';

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
import carhordeIconAsset from '@/assets/icons/carhorde.png.asset.json';
import yoma1Asset from '@/assets/yoma/yoma-1.png.asset.json';
import yoma2Asset from '@/assets/yoma/yoma-2.png.asset.json';
import yoma3Asset from '@/assets/yoma/yoma-3.png.asset.json';
import yoma4Asset from '@/assets/yoma/yoma-4.png.asset.json';
import yoma5Asset from '@/assets/yoma/yoma-5.png.asset.json';
import yoma6Asset from '@/assets/yoma/yoma-6.png.asset.json';
import yoma7Asset from '@/assets/yoma/yoma-7.png.asset.json';
import yoma8Asset from '@/assets/yoma/yoma-8.png.asset.json';
import yomaCoverAsset from '@/assets/yoma/yoma-cover.jpg.asset.json';
import doom3Asset from '@/assets/doom/doom-3.png.asset.json';
import doom6Asset from '@/assets/doom/doom-6.png.asset.json';
import doom7Asset from '@/assets/doom/doom-7.png.asset.json';
import doom8Asset from '@/assets/doom/doom-8.png.asset.json';
import doom9Asset from '@/assets/doom/doom-9.png.asset.json';
import softecBadgeAsset from '@/assets/community/softec-badge.png.asset.json';
import ituAwardAsset from '@/assets/community/itu-award.jpg.asset.json';
import { videos } from '@/lib/videos';
import { assetUrl } from '@/lib/asset-url';

const carhordeIcon = { url: assetUrl(carhordeIconAsset.url) };
const yoma1 = { url: assetUrl(yoma1Asset.url) };
const yoma2 = { url: assetUrl(yoma2Asset.url) };
const yoma3 = { url: assetUrl(yoma3Asset.url) };
const yoma4 = { url: assetUrl(yoma4Asset.url) };
const yoma5 = { url: assetUrl(yoma5Asset.url) };
const yoma6 = { url: assetUrl(yoma6Asset.url) };
const yoma7 = { url: assetUrl(yoma7Asset.url) };
const yoma8 = { url: assetUrl(yoma8Asset.url) };
const yomaCover = { url: assetUrl(yomaCoverAsset.url) };
const doom3 = { url: assetUrl(doom3Asset.url) };
const doom6 = { url: assetUrl(doom6Asset.url) };
const doom7 = { url: assetUrl(doom7Asset.url) };
const doom8 = { url: assetUrl(doom8Asset.url) };
const doom9 = { url: assetUrl(doom9Asset.url) };
const softecBadge = { url: assetUrl(softecBadgeAsset.url) };
const ituAward = { url: assetUrl(ituAwardAsset.url) };

type Game = {
  id: string;
  title: string;
  tagline?: string;
  icon?: string;
  iconFallback: string;
  downloadUrl?: string;
  inProgress?: boolean;
  videos: { label: string; youtubeId: string }[];
  screenshots?: string[];
  comingSoon?: boolean;
  badge?: 'softec';
};

const DOOM_URL = 'https://www.dropbox.com/scl/fo/8zl5w2jskyfflzb6ydsff/AJUbYOaLnc4FPhhM18iQ_Mg?rlkey=2yswlahqgt6rb4eehsq9615tj&st=91bbjxry&dl=1';
const CURE_URL = 'https://www.dropbox.com/scl/fo/iv9f6r9xvlyzjpqvotfky/AE0q5cgw0pwvRRixwTplsWg?rlkey=n40j37ba1y8yrii8uvvjzu5gy&st=jjp6cjav&dl=1';
const YOMA_URL = 'https://www.dropbox.com/scl/fo/oa5ltyhtee8g73fw0p2xa/ALtnP8xIFsdG2-O1uwyw4gU?rlkey=7lf0dnk0bliwowkh1n831pu74&st=s4abhfz5&dl=1';
const GUMPER_URL = 'https://www.dropbox.com/scl/fo/57h1uqd92v5hjaeyax5ce/AEJfaOQrGH0nm3B2atgwksQ?rlkey=3t7i9kcln7dnd6pekt5z4s2je&st=r5y1llfl&dl=1';
const AMONGUS_URL = 'https://www.dropbox.com/scl/fo/dxqezegqtbcu2o5p7lvg9/AMvimBz9ng2o2dikeziuC5c?rlkey=f79hhftbgd8afk071pzxun8r3&st=efhhm4r9&dl=1';
const CARHORDE_URL = 'https://drive.google.com/drive/folders/1kea4g1AuOgKC8n9S_vYkjMnqXMu10MEL?usp=sharing';

const games: Game[] = [
  {
    id: 'doom',
    title: 'Doom',
    tagline: 'Classic FPS — reimagined',
    icon: doomIcon,
    iconFallback: 'D',
    downloadUrl: DOOM_URL,
    videos: [
      { label: 'Gameplay', youtubeId: 'pggCjcIgk7k' },
      { label: 'Gameplay 2', youtubeId: 'i-jQMD8Vezk' },
      { label: 'Devlog 1', youtubeId: '_i2OdAMMVDM' },
      { label: 'Devlog 2', youtubeId: 'VAdKUHrQ3MY' },
    ],
    screenshots: [doom3.url, doom6.url, doom7.url, doom8.url, doom9.url],
  },
  {
    id: 'cure',
    title: 'Cure N Infection',
    tagline: 'Survival shooting',
    icon: cureInfectionIcon,
    iconFallback: 'C',
    downloadUrl: CURE_URL,
    videos: [
      { label: 'Full Length Gameplay', youtubeId: 'Xmvg2rPg59Q' },
      { label: 'Highlights', youtubeId: 'BRfepakrNBo' },
      { label: 'Trailer', youtubeId: 'ZfL6SylckRg' },
    ],
    screenshots: [cureInfection1, cureInfection2, cureInfection3, cureInfection4, cureInfection5, cureInfection6],
  },
  {
    id: 'yoma',
    title: 'YOMA',
    tagline: 'Horror Escape — Story Based',
    icon: yomaIcon,
    iconFallback: 'Y',
    downloadUrl: YOMA_URL,
    videos: [
      { label: 'Gameplay', youtubeId: 'dkD2cCXrAG0' },
    ],
    screenshots: [yomaCover.url, yoma1.url, yoma2.url, yoma3.url, yoma4.url, yoma5.url, yoma6.url, yoma7.url, yoma8.url],
  },
  {
    id: 'gumper',
    title: 'Gumper Bumper World',
    tagline: 'Bumper-cart chaos',
    icon: gumperIcon,
    iconFallback: 'G',
    downloadUrl: GUMPER_URL,
    badge: 'softec',
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
    downloadUrl: AMONGUS_URL,
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
    icon: carhordeIcon.url,
    iconFallback: 'C',
    downloadUrl: CARHORDE_URL,
    inProgress: true,
    videos: [
      { label: 'Devlog', youtubeId: 'FY7GR2Z-Pgs' },
      { label: 'Gameplay', youtubeId: 'JeqE6yjx8hA' },
    ],
  },
];

const GameIcon = ({ game }: { game: Game }) => (
  <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-primary/50 flex-shrink-0 bg-muted flex items-center justify-center">
    {game.icon ? (
      <img src={game.icon} alt={`${game.title} icon`} className="w-full h-full object-cover" />
    ) : (
      <span className="font-orbitron font-bold text-xl text-primary">{game.iconFallback}</span>
    )}
  </div>
);

const YouTubeEmbed = ({ id, title }: { id: string; title: string }) => (
  <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black border border-border/40">
    <iframe
      src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
    />
  </div>
);

const SoftecBadgeDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background">
      <DialogTitle className="sr-only">SOFTEC Game Jam — 2nd Position</DialogTitle>
      <div className="flex flex-col items-center text-center space-y-6 py-2">
        <img src={softecBadge.url} alt="SOFTEC Game Jam 2nd Position" className="w-44 h-44 md:w-56 md:h-56 object-contain" />

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
          SOFTEC is Pakistan's largest student-led technology event, organized annually by the students of FAST National
          University of Computer and Emerging Sciences. Bringing together thousands of participants from across the country, it
          features competitions, exhibitions, workshops, and industry networking opportunities that celebrate innovation and
          technical excellence.
        </p>

        <p className="text-2xl md:text-3xl font-orbitron font-bold text-orange leading-snug max-w-2xl">
          Our team secured 2nd place in the SOFTEC 2026 Game Jam.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pt-2">
          <div className="rounded-xl overflow-hidden border border-border/40 bg-black">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7451837718075949056"
              height="600"
              width="100%"
              frameBorder="0"
              allowFullScreen
              title="SOFTEC LinkedIn post"
              className="w-full"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-border/40 bg-muted">
            <img src={ituAward.url} alt="ITU Congratulations — AbdulRaheem Runner-Up" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const GameRow = ({ game }: { game: Game }) => {
  const [open, setOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [badgeOpen, setBadgeOpen] = useState(false);
  const hasMedia = game.videos.length > 0 || (game.screenshots && game.screenshots.length > 0);

  return (
    <>
      <Card
        onClick={(e) => {
          // Never interfere with external links (downloads) or other buttons
          if ((e.target as HTMLElement).closest('a, button')) return;
          if (hasMedia) setOpen(true);
        }}
        className={`overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm card-interactive relative ${hasMedia ? 'cursor-pointer' : ''}`}
      >
        <CardContent className="p-4 md:p-5">
          <div className="flex items-center gap-4">
            <GameIcon game={game} />

            <div className="flex-1 min-w-0">
              <h3 className="font-orbitron font-bold text-lg md:text-xl text-foreground truncate">{game.title}</h3>
              {game.tagline && <p className="text-sm text-muted-foreground truncate">{game.tagline}</p>}
            </div>

            <div className="flex items-center gap-2">
              {game.badge === 'softec' && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setBadgeOpen(true);
                  }}
                  className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full overflow-hidden border-2 border-orange/60 hover:scale-110 transition-transform shadow-md"
                  title="SOFTEC Game Jam — 2nd Position"
                  aria-label="View SOFTEC award"
                >
                  <img src={softecBadge.url} alt="SOFTEC 2nd" className="w-full h-full object-cover" />
                </button>
              )}
              {game.downloadUrl && (
                <Button
                  asChild
                  size="sm"
                  className="gap-2 bg-foreground hover:bg-foreground/90 text-background"
                >
                  <a
                    href={game.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Download</span>
                    <Monitor className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {game.inProgress && (
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 hidden sm:inline">
                  In Progress
                </span>
              )}

              {hasMedia && <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" aria-hidden />}
            </div>
          </div>

          {/* Mobile badge below header */}
          {game.badge === 'softec' && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setBadgeOpen(true);
              }}
              className="sm:hidden mt-3 flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-orange/10 text-orange border border-orange/30"
            >
              <Trophy className="h-3.5 w-3.5" />
              SOFTEC 2nd Position
            </button>
          )}
        </CardContent>
      </Card>

      {/* Media dialog (replaced Drawer for reliable close) */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-background">
          <DialogTitle className="font-orbitron text-xl md:text-2xl">{game.title}</DialogTitle>
          <div className="space-y-8 pt-2">
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
                      <img src={src} alt={`${game.title} screenshot ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Zoomed screenshot */}
      <Dialog open={!!zoomedImage} onOpenChange={() => setZoomedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
          <DialogTitle className="sr-only">Screenshot</DialogTitle>
          <DialogClose className="absolute right-4 top-4 z-10">
            <X className="h-6 w-6 text-white" />
          </DialogClose>
          {zoomedImage && <img src={zoomedImage} alt="Zoomed screenshot" className="w-full h-full object-contain" />}
        </DialogContent>
      </Dialog>

      {game.badge === 'softec' && <SoftecBadgeDialog open={badgeOpen} onOpenChange={setBadgeOpen} />}
    </>
  );
};

const GamesSection = () => {
  return (
    <section id="games" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:pl-20 lg:pr-8">
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground">Games</h3>
          <p className="text-muted-foreground mt-2">Our growing roster of indie titles</p>
        </div>

        <HeaderVideo src={videos.gamesHeader} priority className="mb-12" />

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
