import { supabase } from '@/integrations/supabase/client';

export type GameStats = {
  downloadCount: number;
  downloadSize: string;
};

export type GameReview = {
  id: string;
  username: string;
  rating: number;
  reviewText: string;
  createdAt: string;
};

// The generated Database types lag behind new tables, so query with a
// loosely-typed handle and map rows into the DTOs above.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const db = supabase as any;

export async function fetchGameStats(gameId: string): Promise<GameStats> {
  const { data } = await db
    .from('game_stats')
    .select('download_count, download_size')
    .eq('game_id', gameId)
    .maybeSingle();
  return {
    downloadCount: data?.download_count ?? 0,
    downloadSize: data?.download_size ?? '—',
  };
}

export async function incrementDownload(gameId: string): Promise<number | null> {
  const { data, error } = await db.rpc('increment_downloads', { p_game_id: gameId });
  if (error) return null;
  return typeof data === 'number' ? data : null;
}

export async function fetchReviews(gameId: string): Promise<GameReview[]> {
  const { data } = await db
    .from('game_reviews')
    .select('id, username, rating, review_text, created_at')
    .eq('game_id', gameId)
    .order('created_at', { ascending: false });
  return (data ?? []).map(
    (r: { id: string; username: string; rating: number; review_text: string; created_at: string }) => ({
      id: r.id,
      username: r.username,
      rating: r.rating,
      reviewText: r.review_text,
      createdAt: r.created_at,
    }),
  );
}

export async function submitReview(
  gameId: string,
  username: string,
  rating: number,
  reviewText: string,
): Promise<GameReview | null> {
  const { data, error } = await db
    .from('game_reviews')
    .insert({ game_id: gameId, username, rating, review_text: reviewText })
    .select('id, username, rating, review_text, created_at')
    .single();
  if (error || !data) return null;
  return {
    id: data.id,
    username: data.username,
    rating: data.rating,
    reviewText: data.review_text,
    createdAt: data.created_at,
  };
}
