import { LEAGUES } from 'constants/elo-constants';

export function getLeague(elo) {
  for (let league in LEAGUES) {
    if (elo >= LEAGUES[league][0] && elo <= LEAGUES[league][1]) {
      return league;
    }
  }
}
