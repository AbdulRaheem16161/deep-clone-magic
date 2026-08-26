import { useState } from 'react';
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
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose, DialogTitle } from '@/components/ui/dialog';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import SoftecBadgeDialog from '@/components/SoftecBadgeDialog';
import GameCardsList from '@/components/GameCards';
import { getGame, softecBadgeUrl, communityGames, type Game } from '@/lib/games';

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

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.15-.148.347-.371.52-.57.174-.198.232-.34.347-.567.116-.226.058-.42-.03-.57-.087-.149-.667-1.612-.914-2.207-.24-.579-.485-.5-.667-.51l-.566-.01c-.198 0-.52.074-.792.371-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

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

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    `Check out ${game.title}!\n${url}`,
  )}`;

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
          <Button
            asChild
            variant="outline"
            className="w-full gap-2 border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]"
          >
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              Share on WhatsApp
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Stars = ({ value, className = 'h-3.5 w-3.5' }: { value: number; className?: string }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`${className} ${
          i <= Math.round(value) ? 'fill-orange text-orange' : 'text-muted-foreground/40'
        }`}
      />
    ))}
  </div>
);

const RatingsReviews = ({ game }: { game: Game }) => {
  const reviews = game.reviews ?? [];
  const rating = game.rating;

  return (
    <section className="space-y-6">
      <h2 className="flex items-center gap-1 text-[22px] font-semibold tracking-tight text-foreground">
        Ratings &amp; Reviews
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </h2>

      {rating ? (
        <div className="flex items-end gap-8">
          <div>
            <p className="text-[64px] leading-none font-semibold tracking-tight text-foreground">
              {rating.toFixed(1)}
            </p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">out of 5</p>
          </div>
          <div className="flex-1 max-w-md space-y-1.5 pb-2">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = reviews.filter((r) => Math.round(r.stars) === stars).length;
              const pct = reviews.length ? (count / reviews.length) * 100 : 0;
              return (
                <div key={stars} className="flex items-center gap-2">
                  <div className="flex w-16 justify-end gap-[1px] text-muted-foreground">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 fill-current" />
                    ))}
                  </div>
                  <div className="h-[3px] flex-1 rounded-full bg-muted-foreground/25">
                    <div
                      className="h-full rounded-full bg-muted-foreground"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
            <p className="pt-1 text-right text-sm text-muted-foreground">
              {game.ratingCount ?? reviews.length} Ratings
            </p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          No ratings yet — play {game.title} and be the first to review it.
        </p>
      )}

      {reviews.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {reviews.map((r) => (
            <div key={`${r.author}-${r.title}`} className="rounded-2xl bg-muted/40 p-5">
              <div className="flex items-start justify-between gap-4">
                <p className="font-semibold text-foreground">{r.title}</p>
                <p className="whitespace-nowrap text-xs text-muted-foreground">{r.date}</p>
              </div>
              <div className="mt-1.5 flex items-center justify-between gap-4">
                <Stars value={r.stars} />
                <p className="text-xs text-muted-foreground">{r.author}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

function GamePage() {
  const { gameId } = Route.useParams();
  const game = getGame(gameId)!;
  const [shareOpen, setShareOpen] = useState(false);
  const [badgeOpen, setBadgeOpen] = useState(false);
  const [zoomed, setZoomed] = useState<string | null>(null);
  const [platform, setPlatform] = useState<'pc' | 'android'>('pc');

  const hasAndroidGallery = !!game.androidScreenshots?.length;
  const shots =
    platform === 'android' && hasAndroidGallery ? game.androidScreenshots! : game.screenshots;
  const heroArt = game.screenshots?.[0] ?? game.icon;

  return (
    <div className="min-h-screen bg-background font-sf">
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

      {/* App Store style hero */}
      <section className="relative overflow-hidden border-b border-border/50">
        {heroArt && (
          <>
            <img
              src={heroArt}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          </>
        )}

        <div className="relative container mx-auto max-w-5xl px-4 py-10 md:py-14">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 md:gap-8">
            <div className="w-28 h-28 md:w-[136px] md:h-[136px] rounded-[26px] overflow-hidden border border-white/15 bg-muted flex items-center justify-center shadow-2xl flex-shrink-0">
              {game.icon ? (
                <img
                  src={game.icon}
                  alt={`${game.title} icon`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-orbitron font-bold text-4xl text-primary">
                  {game.iconFallback}
                </span>
              )}
            </div>

            <div className="flex-1 min-w-0 space-y-2">
              <h1 className="text-3xl md:text-[40px] font-bold leading-tight tracking-tight text-foreground">
                {game.title}
              </h1>
              {game.tagline && (
                <p className="text-lg md:text-xl font-medium text-muted-foreground">
                  {game.tagline}
                </p>
              )}
              <p className="text-sm text-muted-foreground">
                Free · {game.mobile ? 'Windows & Android' : 'Windows'}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {game.inProgress && (
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                    In Progress
                  </span>
                )}
                {game.community && (
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border/60">
                    Community title
                  </span>
                )}
                {game.badge === 'softec' && (
                  <button
                    onClick={() => setBadgeOpen(true)}
                    className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-orange/10 text-orange border border-orange/30"
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
          </div>

          {/* Platform switch + download buttons */}
          <div className="mt-8 space-y-4">
            {game.mobile && (
              <div className="inline-flex rounded-full border border-border/60 bg-muted/40 p-1">
                <button
                  onClick={() => setPlatform('pc')}
                  className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    platform === 'pc'
                      ? 'bg-foreground text-background'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Monitor className="h-4 w-4" />
                  Windows
                </button>
                <button
                  onClick={() => setPlatform('android')}
                  className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    platform === 'android'
                      ? 'bg-foreground text-background'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Smartphone className="h-4 w-4" />
                  Android
                </button>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              {(!game.mobile || platform === 'pc') && game.downloadUrl && (
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-foreground hover:bg-foreground/90 text-background"
                >
                  <a href={game.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Monitor className="h-5 w-5" />
                    Download for PC
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {game.mobile &&
                platform === 'android' &&
                (game.apkUrl ? (
                  <Button
                    asChild
                    size="lg"
                    className="gap-2 rounded-full bg-foreground hover:bg-foreground/90 text-background"
                  >
                    <a href={game.apkUrl} target="_blank" rel="noopener noreferrer">
                      <Smartphone className="h-5 w-5" />
                      Download Android APK
                      <Download className="h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <Button size="lg" variant="outline" disabled className="gap-2 rounded-full">
                    <Smartphone className="h-5 w-5" />
                    Android APK — coming soon
                  </Button>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="border-b border-border/50 bg-muted/20">
        <div className="container mx-auto max-w-5xl px-4">
          <dl className="grid grid-cols-2 divide-border/50 py-6 text-center sm:grid-cols-4 sm:divide-x">
            <div className="px-2 py-2">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Developer
              </dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">
                {game.community ? game.createdBy?.[0] ?? 'Community' : 'DeepCut Originals'}
              </dd>
            </div>
            <div className="px-2 py-2">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Size
              </dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">{game.size ?? '—'}</dd>
            </div>
            <div className="px-2 py-2">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Platform
              </dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">
                {game.mobile ? 'PC · Android' : 'PC'}
              </dd>
            </div>
            <div className="px-2 py-2">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Price
              </dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">Free</dd>
            </div>
          </dl>
        </div>
      </section>

      <main className="container mx-auto max-w-5xl px-4 py-12 space-y-14">
        {/* Screenshots */}
        {shots && shots.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold tracking-tight text-foreground">
              Preview{game.mobile ? ` — ${platform === 'android' ? 'Android' : 'Windows'}` : ''}
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-3 snap-x">
              {shots.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setZoomed(src)}
                  className="snap-start flex-shrink-0 w-[300px] md:w-[440px] aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg hover:border-primary/60 transition-colors"
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
            <h2 className="text-[22px] font-semibold tracking-tight text-foreground">Videos</h2>
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

        {/* Credits */}
        {game.createdBy && game.createdBy.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-[22px] font-semibold tracking-tight text-foreground">Created by</h2>
            <ul className="space-y-1">
              {game.createdBy.map((name) => (
                <li key={name} className="text-base text-muted-foreground">
                  {name}
                </li>
              ))}
            </ul>
          </section>
        )}

        <RatingsReviews game={game} />

        {/* Other games */}
        <section className="space-y-5 border-t border-border/50 pt-10">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[22px] font-semibold tracking-tight text-foreground">
              View other games
            </h2>
            <Button asChild variant="outline" size="sm" className="gap-1 rounded-full">
              <Link to="/" hash="games">
                See all games
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <GameCardsList excludeId={game.id} />

          <div className="space-y-4 pt-6">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Games by other creators
            </h3>
            <GameCardsList items={communityGames.filter((g) => g.id !== game.id)} />
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
          {zoomed && (
            <img src={zoomed} alt="Zoomed screenshot" className="w-full h-full object-contain" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
