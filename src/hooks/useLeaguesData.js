import { useState, useEffect } from 'react';
import { fetchAllLeagues } from '../utils/api';

export function useLeaguesData() {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    loadLeagues();
  }, []);

  const loadLeagues = async () => {
    try {
      const data = await fetchAllLeagues();
      setLeagues(data);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    leagues
  };
}