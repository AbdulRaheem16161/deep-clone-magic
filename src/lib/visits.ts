import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const STORAGE_KEY = 'dco_visitor_id';

const getVisitorId = () => {
  let id = localStorage.getItem(STORAGE_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(STORAGE_KEY, id);
  }
  return id;
};

/** Counts unique devices that have opened the site. */
export function useVisitCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const { data } = await supabase.rpc('record_visit', { p_visitor_id: getVisitorId() });
        if (active && typeof data === 'number') setCount(data);
      } catch {
        /* silent */
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  return count;
}
