type PortraitItem = {
  id: number;
  image: string;
};

export function DigitalPortraitsGrid({
  items,
  onImageClick,
}: {
  items: PortraitItem[];
  onImageClick?: (src: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 items-end">
      {items.map((portrait) => (
        <button
          key={portrait.id}
          type="button"
          className="h-[220px] md:h-[240px] lg:h-[260px] flex items-end rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
          onClick={() => onImageClick?.(portrait.image)}
          aria-label={`Open digital portrait ${portrait.id}`}
        >
          <img
            src={portrait.image}
            alt={`Digital portrait ${portrait.id}`}
            loading="lazy"
            className="w-full h-auto max-h-full object-contain"
          />
        </button>
      ))}
    </div>
  );
}
