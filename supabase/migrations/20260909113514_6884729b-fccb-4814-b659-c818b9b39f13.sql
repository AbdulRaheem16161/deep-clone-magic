ALTER TABLE public.game_stats ADD COLUMN IF NOT EXISTS view_count integer NOT NULL DEFAULT 0;

CREATE OR REPLACE FUNCTION public.increment_views(p_game_id text)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE new_count integer;
BEGIN
  INSERT INTO public.game_stats (game_id) VALUES (p_game_id)
  ON CONFLICT (game_id) DO NOTHING;

  UPDATE public.game_stats
  SET view_count = view_count + 1
  WHERE game_id = p_game_id
  RETURNING view_count INTO new_count;

  RETURN new_count;
END;
$$;

ALTER TABLE public.game_stats REPLICA IDENTITY FULL;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'game_stats'
  ) THEN
    EXECUTE 'ALTER PUBLICATION supabase_realtime ADD TABLE public.game_stats';
  END IF;
END $$;