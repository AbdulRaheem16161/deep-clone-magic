import HeaderVideo from '@/components/HeaderVideo';
import GameCardsList from '@/components/GameCards';
import { videos } from '@/lib/videos';
import { communityGames } from '@/lib/games';

const GamesSection = () => {
  return (
    <section id="games" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:pl-20 lg:pr-8">
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-sf font-bold tracking-[-0.02em] text-foreground">
            Games
          </h3>
          <p className="text-muted-foreground mt-2">Our growing roster of indie titles</p>
        </div>

        <HeaderVideo src={videos.gamesHeader} priority className="mb-12" />

        <GameCardsList center />

        <div className="mt-16 pt-10">
          <div className="mb-8 flex flex-col items-center text-center">
            <span className="mb-6 h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h4 className="text-2xl md:text-3xl font-sf font-bold tracking-[-0.02em] text-foreground">
              Games by other creators
            </h4>
            <p className="text-muted-foreground mt-2">Titles built by talented creators</p>
          </div>

          <GameCardsList items={communityGames} center />
        </div>

      </div>
    </section>
  );
};

export default GamesSection;
