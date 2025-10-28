/**
 * Application Constants
 *
 * Central location for all application-wide constants
 *
 * Organization:
 * - API endpoints and URLs
 * - Configuration values
 * - Magic numbers and thresholds
 * - Default values
 * - Enum-like constants
 *
 * Usage example:
 * export const API_BASE_URL = 'https://api.example.com';
 * export const DEFAULT_TIMEOUT = 5000;
 * export const MAX_RETRY_ATTEMPTS = 3;
 */

// App Configuration
export const APP_VERSION = '1.0.0';

// Storage Keys (moved from storage.ts if needed)
export enum StorageKeys {
  SPORT_RECORD = 'SPORT_RECORD',
  USER_SETTINGS = 'USER_SETTINGS',
  THEME_MODE = 'THEME_MODE',
}

// Time Constants
export const MILLISECONDS_PER_SECOND = 1000;
export const SECONDS_PER_MINUTE = 60;
export const MINUTES_PER_HOUR = 60;

// Example: Add your constants here
// export const API_BASE_URL = __DEV__ ? 'http://localhost:3000' : 'https://api.vitatrack.com';
