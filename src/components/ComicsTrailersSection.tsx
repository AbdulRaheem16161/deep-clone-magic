import { videos } from '@/lib/videos';

const ComicsTrailersSection = () => {
  return (
    <section id="trailers" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:pl-24 lg:pr-12">
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground">
            Trailers
          </h3>
          <p className="text-muted-foreground mt-2">
            Cinematic trailers and comic-style content
          </p>
        </div>

        <div className="flex justify-center">
          <video
            src={videos.trailersHeader}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full max-w-5xl rounded-2xl border border-border/40 shadow-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ComicsTrailersSection;
