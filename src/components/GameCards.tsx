import { useNavigate } from '@tanstack/react-router';
import { studioGames, type Game } from '@/lib/games';

const GameIcon = ({ game }: { game: Game }) => (
  <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-[13px] border border-border/60 bg-muted flex items-center justify-center">
    {game.icon ? (
      <img src={game.icon} alt={`${game.title} icon`} className="h-full w-full object-cover" />
    ) : (
      <span className="font-orbitron text-lg font-bold text-primary">{game.iconFallback}</span>
    )}
  </div>
);

export const GameRow = ({ game }: { game: Game }) => {
  const navigate = useNavigate();
  const open = () => navigate({ to: '/game/$gameId', params: { gameId: game.id } });

  return (
    <div
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') open();
      }}
      onClick={open}
      className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-border/50 bg-card/60 px-3 py-3 backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-card/80"
    >
      <GameIcon game={game} />

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[15px] font-semibold leading-tight tracking-tight text-foreground">
          {game.title}
        </h3>
        {game.tagline && (
          <p className="mt-0.5 truncate text-[12px] leading-snug text-muted-foreground">
            {game.tagline}
          </p>
        )}
        <p className="mt-0.5 truncate text-[10px] uppercase tracking-wide text-muted-foreground">
          {game.inProgress ? 'In progress' : game.mobile ? 'PC · Android' : 'PC'}
        </p>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          open();
        }}
        className="h-7 w-[74px] flex-shrink-0 rounded-full bg-foreground text-[12px] font-semibold text-background transition-opacity hover:opacity-90"
      >
        {game.inProgress ? 'View' : 'Get'}
      </button>
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
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
    {(items ?? studioGames)
      .filter((g) => g.id !== excludeId)
      .map((game) => (
        <GameRow key={game.id} game={game} />
      ))}
  </div>
);

export default GameCardsList;

