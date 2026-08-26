import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Download, Monitor, Smartphone, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SoftecBadgeDialog from '@/components/SoftecBadgeDialog';
import { studioGames, softecBadgeUrl, type Game } from '@/lib/games';

const GameIcon = ({ game }: { game: Game }) => (
  <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-primary/50 flex-shrink-0 bg-muted flex items-center justify-center">
    {game.icon ? (
      <img src={game.icon} alt={`${game.title} icon`} className="w-full h-full object-cover" />
    ) : (
      <span className="font-orbitron font-bold text-xl text-primary">{game.iconFallback}</span>
    )}
  </div>
);

export const GameRow = ({ game }: { game: Game }) => {
  const navigate = useNavigate();
  const [badgeOpen, setBadgeOpen] = useState(false);

  return (
    <>
      <Card
        onClick={(e) => {
          // Never interfere with external links (downloads) or other buttons
          if ((e.target as HTMLElement).closest('a, button')) return;
          navigate({ to: '/game/$gameId', params: { gameId: game.id } });
        }}
        className="overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm card-interactive relative cursor-pointer"
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
                    {game.mobile && <Smartphone className="h-4 w-4" />}
                  </a>
                </Button>
              )}
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

      {game.badge === 'softec' && <SoftecBadgeDialog open={badgeOpen} onOpenChange={setBadgeOpen} />}
    </>
  );
};

export const GameCardsList = ({
  excludeId,
  items,
}: {
  excludeId?: string;
  items?: Game[];
}) => (
  <div className="space-y-4">
    {(items ?? studioGames)
      .filter((g) => g.id !== excludeId)
      .map((game) => (
        <GameRow key={game.id} game={game} />
      ))}
  </div>
);

export default GameCardsList;
