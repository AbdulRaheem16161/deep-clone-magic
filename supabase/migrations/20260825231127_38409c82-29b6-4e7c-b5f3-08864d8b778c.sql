CREATE TABLE public.game_stats (
  game_id text PRIMARY KEY,
  download_count integer NOT NULL DEFAULT 0,
  download_size text NOT NULL DEFAULT '—'
);
GRANT SELECT ON public.game_stats TO anon;
GRANT SELECT ON public.game_stats TO authenticated;
GRANT ALL ON public.game_stats TO service_role;
ALTER TABLE public.game_stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view game stats" ON public.game_stats FOR SELECT USING (true);

CREATE TABLE public.game_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id text NOT NULL REFERENCES public.game_stats(game_id) ON DELETE CASCADE,
  username text NOT NULL,
  rating integer NOT NULL,
  review_text text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.game_reviews TO anon;
GRANT SELECT, INSERT ON public.game_reviews TO authenticated;
GRANT ALL ON public.game_reviews TO service_role;
ALTER TABLE public.game_reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view reviews" ON public.game_reviews FOR SELECT USING (true);
CREATE POLICY "Anyone can submit a review" ON public.game_reviews FOR INSERT WITH CHECK (
  rating BETWEEN 1 AND 5
  AND char_length(username) BETWEEN 1 AND 60
  AND char_length(review_text) BETWEEN 1 AND 2000
);

CREATE OR REPLACE FUNCTION public.increment_downloads(p_game_id text)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_count integer;
BEGIN
  UPDATE public.game_stats
  SET download_count = download_count + 1
  WHERE game_id = p_game_id
  RETURNING download_count INTO new_count;
  RETURN new_count;
END;
$$;
GRANT EXECUTE ON FUNCTION public.increment_downloads(text) TO anon;
GRANT EXECUTE ON FUNCTION public.increment_downloads(text) TO authenticated;

INSERT INTO public.game_stats (game_id, download_count, download_size) VALUES
  ('doom', 0, '1.2 GB'),
  ('cure', 0, '850 MB'),
  ('yoma', 0, '620 MB'),
  ('gumper', 0, '410 MB'),
  ('amongus3d', 0, '380 MB'),
  ('dino', 0, '—'),
  ('carhorde', 0, '540 MB');