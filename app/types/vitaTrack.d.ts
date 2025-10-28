declare module 'vitaTrack' {
  export type SportCategory = import('@utils/sportsCategory').SportCategory;
  export type SportCategoryKey = import('@utils/sportsCategory').SportCategoryKey;
  export type SportsConfig = import('@utils/sportsCategory').SportsConfig;
  export type SportKey = import('@utils/sportsCategory').SportKey;

  export type StorageKey =  'sportHistory' | 'firstLaunch';
}