CREATE TABLE public.site_visitors (
  visitor_id TEXT NOT NULL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.site_visitors TO anon, authenticated;
GRANT ALL ON public.site_visitors TO service_role;
ALTER TABLE public.site_visitors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visit counts are public" ON public.site_visitors FOR SELECT TO anon, authenticated USING (true);

CREATE OR REPLACE FUNCTION public.record_visit(p_visitor_id TEXT)
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE v_total BIGINT;
BEGIN
  INSERT INTO public.site_visitors (visitor_id) VALUES (p_visitor_id)
  ON CONFLICT (visitor_id) DO NOTHING;
  SELECT count(*) INTO v_total FROM public.site_visitors;
  RETURN v_total;
END;
$$;
GRANT EXECUTE ON FUNCTION public.record_visit(TEXT) TO anon, authenticated;