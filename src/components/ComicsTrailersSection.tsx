import { videos } from '@/lib/videos';
import HeaderVideo from '@/components/HeaderVideo';

const ComicsTrailersSection = () => {
  return (
    <section id="trailers" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:pl-20 lg:pr-8">
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-sf font-bold tracking-[-0.02em] text-foreground">
            Cinematic Cut-Scenes
          </h3>
          <p className="text-muted-foreground mt-2">Cinematic trailers and cut scenes</p>
        </div>

        <HeaderVideo src={videos.trailersHeader} />
      </div>
    </section>
  );
};

export default ComicsTrailersSection;
