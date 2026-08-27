INSERT INTO public.game_stats (game_id, download_size) VALUES
  ('doom', '103.79 MB'),
  ('cure', '109.58 MB'),
  ('yoma', '—'),
  ('gumper', '39.21 MB'),
  ('amongus3d', '111.91 MB'),
  ('dino', '—'),
  ('carhorde', '146.04 MB'),
  ('savingshapio', '48.37 MB'),
  ('roadrush', '40.4 MB'),
  ('foxjourney', '58.79 MB')
ON CONFLICT (game_id) DO UPDATE SET download_size = EXCLUDED.download_size;