import { videos } from '@/lib/videos';

const ComicsTrailersSection = () => {
  return (
    <section id="trailers" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:pl-20 lg:pr-8">
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground">
            Trailers
          </h3>
          <p className="text-muted-foreground mt-2">
            Cinematic trailers and cut scenes
          </p>
        </div>

        <video
          src={videos.trailersHeader}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full rounded-2xl border border-border/40 shadow-xl"
        />
      </div>
    </section>
  );
};

export default ComicsTrailersSection;
