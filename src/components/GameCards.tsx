import { useNavigate } from '@tanstack/react-router';
import { studioGames, type Game } from '@/lib/games';

const platformLabel = (game: Game) => {
  if (game.inProgress) return 'In progress';
  return game.mobile ? 'Available for PC / Android' : 'Available for PC';
};

export const GameRow = ({ game }: { game: Game }) => {
  const navigate = useNavigate();
  const open = () => navigate({ to: '/game/$gameId', params: { gameId: game.id } });

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={`${game.title} — ${platformLabel(game)}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      }}
      onClick={open}
      className="group relative flex cursor-pointer items-center rounded-full border border-border/50 bg-card/60 p-2 backdrop-blur-sm transition-[background-color,border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/50 hover:bg-card/90 hover:shadow-[0_10px_40px_hsl(42_80%_50%/0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border border-border/60 bg-muted transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-focus-visible:scale-110">
        {game.icon ? (
          <img
            src={game.icon}
            alt={`${game.title} icon`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center font-orbitron text-xl font-bold text-primary">
            {game.iconFallback}
          </span>
        )}
      </div>

      <div className="max-w-0 overflow-hidden opacity-0 transition-[max-width,opacity,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-w-[260px] group-hover:pl-4 group-hover:pr-3 group-hover:opacity-100 group-focus-visible:max-w-[260px] group-focus-visible:pl-4 group-focus-visible:pr-3 group-focus-visible:opacity-100">
        <p className="whitespace-nowrap text-[15px] font-semibold leading-tight tracking-tight text-foreground">
          {game.title}
        </p>
        <p className="mt-1 whitespace-nowrap text-[11px] uppercase tracking-wide text-muted-foreground">
          {platformLabel(game)}
        </p>
      </div>
    </div>
  );
};

export const GameCardsList = ({
  excludeId,
  items,
}: {
  excludeId?: string;
  items?: Game[];
}) => (
  <div className="flex flex-wrap items-center gap-5">
    {(items ?? studioGames)
      .filter((g) => g.id !== excludeId)
      .map((game) => (
        <GameRow key={game.id} game={game} />
      ))}
  </div>
);

export default GameCardsList;
