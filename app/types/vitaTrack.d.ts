export { SportCategory, SportCategoryKey, SportsConfig, SportKey } from '@utils/sportsCategory'

declare module 'vitaTrack' {
  export type SportCategory = SportCategory;
  export type SportCategoryKey = SportCategoryKey;
  export type SportsConfig = SportsConfig;
  export type SportKey = SportKey;

  
}