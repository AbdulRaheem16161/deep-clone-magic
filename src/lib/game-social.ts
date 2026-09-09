import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type GameReview = {
  id: string;
  game_id: string;
  username: string;
  rating: number;
  review_text: string | null;
  created_at: string;
};

/** Bumps the shared download counter for a game (fire and forget). */
export const trackDownload = (gameId: string) => {
  void supabase.rpc('increment_downloads', { p_game_id: gameId });
};

export function useDownloadCount(gameId: string) {
  const [count, setCount] = useState<number | null>(null);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from('game_stats')
      .select('download_count')
      .eq('game_id', gameId)
      .maybeSingle();
    setCount(data?.download_count ?? 0);
  }, [gameId]);

  useEffect(() => {
    void load();
  }, [load]);

  const register = useCallback(async () => {
    setCount((c) => (c === null ? c : c + 1));
    await supabase.rpc('increment_downloads', { p_game_id: gameId });
    void load();
  }, [gameId, load]);

  return { count, register };
  return { count, register };
}

/**
 * Live page-view counter for a game. Counts every visit and stays in sync
 * across all open browsers through realtime updates.
 */
export function useViewCount(gameId: string) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let active = true;

    (async () => {
      const { data } = await supabase.rpc('increment_views', { p_game_id: gameId });
      if (active && typeof data === 'number') setViews(data);
    })();

    const channel = supabase
      .channel(`game_stats_views_${gameId}`)
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'game_stats', filter: `game_id=eq.${gameId}` },
        (payload) => {
          const next = (payload.new as { view_count?: number }).view_count;
          if (typeof next === 'number') setViews(next);
        },
      )
      .subscribe();

    return () => {
      active = false;
      void supabase.removeChannel(channel);
    };
  }, [gameId]);

  return views;
}


export function useGameReviews(gameId: string) {
  const [reviews, setReviews] = useState<GameReview[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from('game_reviews')
      .select('*')
      .eq('game_id', gameId)
      .order('created_at', { ascending: false });
    setReviews((data as GameReview[]) ?? []);
    setLoading(false);
  }, [gameId]);

  useEffect(() => {
    void load();
  }, [load]);

  const submit = useCallback(
    async (input: { username: string; rating: number; review_text: string }) => {
      const { error } = await supabase.from('game_reviews').insert({
        game_id: gameId,
        username: input.username.trim(),
        rating: input.rating,
        review_text: input.review_text.trim(),
      });
      if (error) throw error;
      await load();
    },
    [gameId, load],
  );

  const average = reviews.length
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  return { reviews, loading, average, submit, reload: load };
}

export const formatCount = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K` : `${n}`;
