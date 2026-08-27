import { useState } from 'react';
import { Star, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useGameReviews } from '@/lib/game-social';

export const Stars = ({
  value,
  className = 'h-3.5 w-3.5',
}: {
  value: number;
  className?: string;
}) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`${className} ${
          i <= Math.round(value) ? 'fill-orange text-orange' : 'text-muted-foreground/40'
        }`}
      />
    ))}
  </div>
);

const StarPicker = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <button
        key={i}
        type="button"
        aria-label={`${i} star${i > 1 ? 's' : ''}`}
        onClick={() => onChange(i)}
        className="transition-transform hover:scale-110"
      >
        <Star
          className={`h-6 w-6 ${i <= value ? 'fill-orange text-orange' : 'text-muted-foreground/40'}`}
        />
      </button>
    ))}
  </div>
);

const GameReviews = ({ gameId, gameTitle }: { gameId: string; gameTitle: string }) => {
  const { reviews, loading, average, submit } = useGameReviews(gameId);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [saving, setSaving] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      toast.error('Please add your name');
      return;
    }
    setSaving(true);
    try {
      await submit({ username, rating, review_text: text });
      toast.success('Thanks for your review!');
      setUsername('');
      setText('');
      setRating(5);
      setOpen(false);
    } catch {
      toast.error('Could not save your review. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[22px] font-semibold tracking-tight text-foreground">
          Ratings &amp; Reviews
        </h2>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Cancel' : 'Write a Review'}
        </Button>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading reviews…
        </div>
      ) : reviews.length > 0 ? (
        <div className="flex items-end gap-8">
          <div>
            <p className="text-[56px] leading-none font-semibold tracking-tight text-foreground">
              {average.toFixed(1)}
            </p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">out of 5</p>
          </div>
          <div className="flex-1 max-w-md space-y-1.5 pb-2">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = reviews.filter((r) => r.rating === stars).length;
              const pct = reviews.length ? (count / reviews.length) * 100 : 0;
              return (
                <div key={stars} className="flex items-center gap-2">
                  <div className="flex w-16 justify-end gap-[1px] text-muted-foreground">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 fill-current" />
                    ))}
                  </div>
                  <div className="h-[3px] flex-1 rounded-full bg-muted-foreground/25">
                    <div
                      className="h-full rounded-full bg-muted-foreground"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
            <p className="pt-1 text-right text-sm text-muted-foreground">
              {reviews.length} {reviews.length === 1 ? 'Rating' : 'Ratings'}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          No reviews yet — play {gameTitle} and be the first to review it.
        </p>
      )}

      {open && (
        <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border/60 bg-muted/30 p-5">
          <StarPicker value={rating} onChange={setRating} />
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your name"
            maxLength={60}
          />
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={`What did you think of ${gameTitle}?`}
            maxLength={1000}
            rows={4}
          />
          <Button type="submit" disabled={saving} className="rounded-full gap-2">
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}
            Submit review
          </Button>
        </form>
      )}

      {reviews.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {reviews.map((r) => (
            <div key={r.id} className="rounded-2xl bg-muted/40 p-5">
              <div className="flex items-start justify-between gap-4">
                <p className="font-semibold text-foreground">{r.username}</p>
                <p className="whitespace-nowrap text-xs text-muted-foreground">
                  {new Date(r.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="mt-1.5">
                <Stars value={r.rating} />
              </div>
              {r.review_text && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.review_text}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default GameReviews;
