import HeaderVideo from '@/components/HeaderVideo';
import GameCardsList from '@/components/GameCards';
import { videos } from '@/lib/videos';

const GamesSection = () => {
  return (
    <section id="games" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:pl-20 lg:pr-8">
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground">Games</h3>
          <p className="text-muted-foreground mt-2">Our growing roster of indie titles</p>
        </div>

        <HeaderVideo src={videos.gamesHeader} priority className="mb-12" />

        <GameCardsList />
      </div>
    </section>
  );
};

export default GamesSection;
