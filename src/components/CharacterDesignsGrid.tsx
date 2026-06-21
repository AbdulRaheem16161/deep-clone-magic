import { useEffect, useMemo, useState } from "react";

type CharacterDesignItem = {
  id: number;
  image: string;
};

export function CharacterDesignsGrid({
  items,
  onImageClick,
}: {
  items: CharacterDesignItem[];
  onImageClick?: (src: string) => void;
}) {
  const [ratios, setRatios] = useState<Record<number, number>>({});

  useEffect(() => {
    let cancelled = false;

    items.forEach((item) => {
      const img = new Image();
      img.onload = () => {
        if (cancelled) return;
        const w = img.naturalWidth || 1;
        const h = img.naturalHeight || 1;
        setRatios((prev) => ({ ...prev, [item.id]: w / h }));
      };
      img.src = item.image;
    });

    return () => {
      cancelled = true;
    };
  }, [items]);

  const { squares, rectangles } = useMemo(() => {
    const isSquareish = (id: number) => {
      const r = ratios[id];
      if (!r) return true; // default until loaded
      return Math.abs(r - 1) < 0.15;
    };

    return {
      squares: items.filter((i) => isSquareish(i.id)),
      rectangles: items.filter((i) => !isSquareish(i.id)),
    };
  }, [items, ratios]);

  const Card = ({ item }: { item: CharacterDesignItem }) => (
    <button
      type="button"
      className="w-full rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
      onClick={() => onImageClick?.(item.image)}
      aria-label={`Open character design ${item.id}`}
    >
      <img
        src={item.image}
        alt={`Character design ${item.id}`}
        loading="lazy"
        className="w-full h-auto block"
      />
    </button>
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-end">
        {squares.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      {rectangles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          {rectangles.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
