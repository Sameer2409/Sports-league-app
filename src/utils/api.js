const API_BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3';

const cache = new Map();

async function fetchWithCache(url, cacheKey) {
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('HTTP error');
    }
    
    const data = await response.json();
    cache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchAllLeagues() {
  const url = `${API_BASE_URL}/all_leagues.php`;
  const cacheKey = 'all_leagues';
  
  const data = await fetchWithCache(url, cacheKey);
  return data.leagues || [];
}

export async function fetchSeasonBadge(leagueId) {
  const url = `${API_BASE_URL}/search_all_seasons.php?badge=1&id=${leagueId}`;
  const cacheKey = `season_badge_${leagueId}`;
  
  const data = await fetchWithCache(url, cacheKey);
  const seasons = data.seasons || [];
  return seasons[0] || null;
}
