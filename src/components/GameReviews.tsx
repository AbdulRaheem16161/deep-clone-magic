import { useEffect, useState } from 'react';
import { Star, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchReviews, submitReview, type GameReview } from '@/lib/game-data';

function StarRating({
  value,
  onChange,
  size = 'h-4 w-4',
}: {
  value: number;
  onChange?: (v: number) => void;
  size?: string;
}) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const active = i <= (onChange ? hover || value : value);
        return (
          <button
            key={i}
            type="button"
            disabled={!onChange}
            onClick={() => onChange?.(i)}
            onMouseEnter={() => onChange && setHover(i)}
            onMouseLeave={() => onChange && setHover(0)}
            className={onChange ? 'cursor-pointer transition-transform hover:scale-110' : 'cursor-default'}
            aria-label={`${i} star${i > 1 ? 's' : ''}`}
          >
            <Star
              className={`${size} ${
                active ? 'fill-orange text-orange' : 'text-muted-foreground/40'
              } transition-colors`}
            />
          </button>
        );
      })}
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function GameReviews({ gameId, gameTitle }: { gameId: string; gameTitle: string }) {
  const [reviews, setReviews] = useState<GameReview[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchReviews(gameId).then((r) => {
      if (!cancelled) {
        setReviews(r);
        setLoaded(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [gameId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const name = username.trim();
    const body = text.trim();
    if (!name) return setError('Please enter your name.');
    if (rating < 1) return setError('Please select a star rating.');
    if (!body) return setError('Please write a short review.');

    setSubmitting(true);
    const review = await submitReview(gameId, name, rating, body);
    setSubmitting(false);
    if (!review) {
      setError('Could not submit your review. Please try again.');
      return;
    }
    setReviews((prev) => [review, ...prev]);
    setUsername('');
    setRating(0);
    setText('');
  };

  const average =
    reviews.length > 0
      ? Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10
      : 0;

  return (
    <section className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-orbitron text-xl font-bold text-foreground">User Reviews</h2>
        {reviews.length > 0 && (
          <div className="flex items-center gap-3">
            <StarRating value={Math.round(average)} size="h-4 w-4" />
            <span className="text-sm text-muted-foreground">
              {average} out of 5 · {reviews.length} review{reviews.length !== 1 ? 's' : ''}
            </span>
          </div>
        )}
      </div>

      {/* Submit form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border/50 bg-muted/30 p-5 md:p-6 space-y-4"
      >
        <p className="text-sm font-medium text-foreground">Played {gameTitle}? Leave a review</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your name"
            maxLength={60}
            className="h-10 rounded-md border border-border/60 bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <div className="flex items-center gap-3">
            <StarRating value={rating} onChange={setRating} size="h-5 w-5" />
            <span className="text-xs text-muted-foreground">
              {rating > 0 ? `${rating}/5` : 'Tap to rate'}
            </span>
          </div>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share your thoughts about the game…"
          rows={3}
          maxLength={2000}
          className="w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-y"
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="submit" disabled={submitting} className="gap-2">
          {submitting ? 'Posting…' : 'Post review'}
        </Button>
      </form>

      {/* Reviews list */}
      {loaded && reviews.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No reviews yet — be the first to share your experience.
        </p>
      ) : (
        <div className="space-y-4">
          {reviews.map((r) => (
            <article
              key={r.id}
              className="rounded-2xl border border-border/50 bg-background p-5 space-y-2"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{r.username}</p>
                    <p className="text-xs text-muted-foreground">{formatDate(r.createdAt)}</p>
                  </div>
                </div>
                <StarRating value={r.rating} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.reviewText}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
