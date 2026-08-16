import { useMemo, useState } from 'react';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { QRCodeSVG } from 'qrcode.react';
import {
  Download,
  Monitor,
  Smartphone,
  Home,
  Share2,
  Copy,
  Check,
  Trophy,
  X,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose, DialogTitle } from '@/components/ui/dialog';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import SoftecBadgeDialog from '@/components/SoftecBadgeDialog';
import { games, getGame, softecBadgeUrl, type Game } from '@/lib/games';

export const Route = createFileRoute('/game/$gameId')({
  loader: ({ params }) => {
    const game = getGame(params.gameId);
    if (!game) throw notFound();
    return { title: game.title, tagline: game.tagline ?? '' };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: 'Game not found — DeepCut Originals' }, { name: 'robots', content: 'noindex' }],
      };
    }
    const title = `${loaderData.title} — Download | DeepCut Originals`;
    const description = `${loaderData.title}: ${loaderData.tagline}. Download, screenshots and gameplay videos.`;
    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    };
  },
  component: GamePage,
  notFoundComponent: GameNotFound,
});

function GameNotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="font-orbitron text-3xl font-bold text-foreground">Game not found</h1>
      <Button asChild>
        <Link to="/">
          <Home className="h-4 w-4 mr-2" />
          Back to home
        </Link>
      </Button>
    </div>
  );
}

const ShareDialog = ({
  game,
  open,
  onOpenChange,
}: {
  game: Game;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => {
  const [copied, setCopied] = useState(false);
  const url =
    typeof window !== 'undefined'
      ? `${window.location.origin}/game/${game.id}`
      : `/game/${game.id}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm bg-background">
        <DialogTitle className="font-orbitron text-lg text-center">Share {game.title}</DialogTitle>
        <div className="flex flex-col items-center gap-5 pt-2">
          <div className="rounded-2xl bg-white p-4 shadow-lg">
            <QRCodeSVG value={url} size={192} level="M" />
          </div>
          <p className="text-xs text-muted-foreground break-all text-center">{url}</p>
          <Button onClick={copy} className="w-full gap-2">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Link copied' : 'Copy link'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

function GamePage() {
  const { gameId } = Route.useParams();
  const game = getGame(gameId)!;
  const [shareOpen, setShareOpen] = useState(false);
  const [badgeOpen, setBadgeOpen] = useState(false);
  const [zoomed, setZoomed] = useState<string | null>(null);

  const otherGames = useMemo(
    () =>
      games
        .filter((g) => g.id !== game.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 5),
    [game.id],
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/85 backdrop-blur-md">
        <div className="container mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => setShareOpen(true)}>
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-4 py-10 space-y-14">
        {/* Hero / listing header */}
        <section className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl overflow-hidden border border-border/60 bg-muted flex items-center justify-center shadow-lg flex-shrink-0">
            {game.icon ? (
              <img src={game.icon} alt={`${game.title} icon`} className="w-full h-full object-cover" />
            ) : (
              <span className="font-orbitron font-bold text-3xl text-primary">{game.iconFallback}</span>
            )}
          </div>

          <div className="flex-1 min-w-0 space-y-2">
            <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground">{game.title}</h1>
            {game.tagline && <p className="text-muted-foreground">{game.tagline}</p>}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-muted-foreground">DeepCut Originals</span>
              {game.inProgress && (
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">
                  In Progress
                </span>
              )}
              {game.badge === 'softec' && (
                <button
                  onClick={() => setBadgeOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full bg-orange/10 text-orange border border-orange/30"
                >
                  <Trophy className="h-3.5 w-3.5" />
                  SOFTEC 2nd Position
                </button>
              )}
            </div>
          </div>

          {game.badge === 'softec' && (
            <img
              src={softecBadgeUrl}
              alt="SOFTEC Game Jam 2nd Position badge"
              onClick={() => setBadgeOpen(true)}
              className="hidden sm:block w-20 h-20 object-contain cursor-pointer hover:scale-105 transition-transform"
            />
          )}
        </section>

        {/* Download buttons */}
        <section className="flex flex-wrap gap-3">
          {game.downloadUrl && (
            <Button asChild size="lg" className="gap-2 bg-foreground hover:bg-foreground/90 text-background">
              <a href={game.downloadUrl} target="_blank" rel="noopener noreferrer">
                <Monitor className="h-5 w-5" />
                Download for PC
                <Download className="h-4 w-4" />
              </a>
            </Button>
          )}
          {game.mobile && (
            <Button size="lg" variant="outline" disabled className="gap-2">
              <Smartphone className="h-5 w-5" />
              Android APK — coming soon
            </Button>
          )}
        </section>

        {/* Screenshots */}
        {game.screenshots && game.screenshots.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-orbitron text-xl font-bold text-foreground">Screenshots</h2>
            <div className="flex gap-4 overflow-x-auto pb-3 snap-x">
              {game.screenshots.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setZoomed(src)}
                  className="snap-start flex-shrink-0 w-[280px] md:w-[420px] aspect-video rounded-xl overflow-hidden border border-border/50 hover:border-primary transition-colors"
                >
                  <img
                    src={src}
                    alt={`${game.title} screenshot ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Videos */}
        {game.videos.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-orbitron text-xl font-bold text-foreground">Videos</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {game.videos.map((v) => (
                <div key={v.youtubeId} className="space-y-2">
                  <p className="text-sm text-muted-foreground">{v.label}</p>
                  <YouTubeEmbed id={v.youtubeId} title={`${game.title} — ${v.label}`} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other games */}
        <section className="space-y-5 border-t border-border/50 pt-10">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-orbitron text-xl font-bold text-foreground">View other games</h2>
            <Button asChild variant="outline" size="sm" className="gap-1">
              <Link to="/" hash="games">
                See all games
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-5">
            {otherGames.map((g) => (
              <Link
                key={g.id}
                to="/game/$gameId"
                params={{ gameId: g.id }}
                className="group flex flex-col items-center gap-2 w-20"
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-border/60 bg-muted flex items-center justify-center group-hover:border-primary group-hover:scale-105 transition-all">
                  {g.icon ? (
                    <img src={g.icon} alt={`${g.title} icon`} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-orbitron font-bold text-primary">{g.iconFallback}</span>
                  )}
                </div>
                <span className="text-[11px] text-muted-foreground text-center leading-tight line-clamp-2">
                  {g.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <ShareDialog game={game} open={shareOpen} onOpenChange={setShareOpen} />
      {game.badge === 'softec' && <SoftecBadgeDialog open={badgeOpen} onOpenChange={setBadgeOpen} />}

      <Dialog open={!!zoomed} onOpenChange={() => setZoomed(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
          <DialogTitle className="sr-only">Screenshot</DialogTitle>
          <DialogClose className="absolute right-4 top-4 z-10">
            <X className="h-6 w-6 text-white" />
          </DialogClose>
          {zoomed && <img src={zoomed} alt="Zoomed screenshot" className="w-full h-full object-contain" />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
