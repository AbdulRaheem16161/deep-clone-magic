import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Download, Monitor, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import HeaderVideo from '@/components/HeaderVideo';
import SoftecBadgeDialog from '@/components/SoftecBadgeDialog';
import { games, softecBadgeUrl, type Game } from '@/lib/games';
import { videos } from '@/lib/videos';

const GameIcon = ({ game }: { game: Game }) => (
  <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-primary/50 flex-shrink-0 bg-muted flex items-center justify-center">
    {game.icon ? (
      <img src={game.icon} alt={`${game.title} icon`} className="w-full h-full object-cover" />
    ) : (
      <span className="font-orbitron font-bold text-xl text-primary">{game.iconFallback}</span>
    )}
  </div>
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
              {game.inProgress && (
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 hidden sm:inline">
                  In Progress
                </span>
              )}

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
                  <img src={softecBadgeUrl} alt="SOFTEC 2nd" className="w-full h-full object-cover" />
                </button>
              )}

              <Button asChild size="sm" variant="outline" className="gap-2">
                <Link to="/game/$gameId" params={{ gameId: game.id }}>
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden md:inline">View page</span>
                </Link>
              </Button>

              {game.downloadUrl && (
                <Button
                  asChild
                  size="sm"
                  className="gap-2 bg-foreground hover:bg-foreground/90 text-background"
                >
                  <a href={game.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Download</span>
                    <Monitor className="h-4 w-4" />
                  </a>
                </Button>
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

      {/* Media dialog */}
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
