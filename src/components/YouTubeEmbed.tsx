const YouTubeEmbed = ({ id, title }: { id: string; title: string }) => (
  <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black border border-border/40">
    <iframe
      src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
    />
  </div>
);

export default YouTubeEmbed;
