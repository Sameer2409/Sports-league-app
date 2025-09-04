import { useState } from 'react';
import { fetchSeasonBadge } from '../utils/api';

export function useSeasonBadge() {
  const [badge, setBadge] = useState(null);

  const loadBadge = async (leagueId) => {
    if (!leagueId) return;

    try {
      setBadge(null);
      const data = await fetchSeasonBadge(leagueId);
      setBadge(data);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    badge,
    loadBadge,
  };
}