import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Download, Trophy } from 'lucide-react';
import SoftecBadgeDialog from '@/components/SoftecBadgeDialog';
import { studioGames, softecBadgeUrl, type Game } from '@/lib/games';
import { useDownloadCount, formatCount } from '@/lib/game-social';
import { Stars } from '@/components/GameReviews';

const GameIcon = ({ game }: { game: Game }) => (
  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-[14px] border border-border/60 bg-muted flex items-center justify-center">
    {game.icon ? (
      <img src={game.icon} alt={`${game.title} icon`} className="h-full w-full object-cover" />
    ) : (
      <span className="font-orbitron text-xl font-bold text-primary">{game.iconFallback}</span>
    )}
  </div>
);

export const GameRow = ({ game }: { game: Game }) => {
  const navigate = useNavigate();
  const [badgeOpen, setBadgeOpen] = useState(false);
  const { count, register } = useDownloadCount(game.id);

  return (
    <>
      <div
        role="link"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') navigate({ to: '/game/$gameId', params: { gameId: game.id } });
        }}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a, button')) return;
          navigate({ to: '/game/$gameId', params: { gameId: game.id } });
        }}
        className="group flex min-h-[96px] cursor-pointer items-center gap-4 rounded-2xl border border-border/50 bg-card/60 px-4 py-4 backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-card/80 md:px-5"
      >
        <GameIcon game={game} />

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[17px] font-semibold leading-tight tracking-tight text-foreground">
            {game.title}
          </h3>
          {game.tagline && (
            <p className="mt-0.5 truncate text-[13px] text-muted-foreground">{game.tagline}</p>
          )}
          <div className="mt-1.5 flex items-center gap-2 text-[11px] text-muted-foreground">
            {game.inProgress ? (
              <span className="font-medium uppercase tracking-wide text-primary">In progress</span>
            ) : (
              <span className="uppercase tracking-wide">{game.mobile ? 'PC · Android' : 'PC'}</span>
            )}
            {count !== null && count > 0 && (
              <>
                <span aria-hidden="true">·</span>
                <span>{formatCount(count)} downloads</span>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-shrink-0 flex-col items-center gap-2">
          {game.downloadUrl ? (
            <a
              href={game.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                void register();
              }}
              className="flex h-8 w-[92px] items-center justify-center gap-1.5 rounded-full bg-foreground text-[13px] font-semibold text-background transition-opacity hover:opacity-90"
            >
              <Download className="h-3.5 w-3.5" />
              Get
            </a>
          ) : (
            <span className="flex h-8 w-[92px] items-center justify-center rounded-full bg-muted text-[13px] font-semibold text-muted-foreground">
              Soon
            </span>
          )}
          {game.size && <span className="text-[11px] text-muted-foreground">{game.size}</span>}
        </div>

        {game.badge === 'softec' && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setBadgeOpen(true);
            }}
            className="hidden h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-orange/50 transition-transform hover:scale-110 sm:flex"
            title="SOFTEC Game Jam — 2nd Position"
            aria-label="View SOFTEC award"
          >
            <img src={softecBadgeUrl} alt="SOFTEC 2nd" className="h-full w-full object-cover" />
          </button>
        )}
      </div>

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
  <div className="space-y-3">
    {(items ?? studioGames)
      .filter((g) => g.id !== excludeId)
      .map((game) => (
        <GameRow key={game.id} game={game} />
      ))}
  </div>
);

export default GameCardsList;
