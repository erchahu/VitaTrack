import sports from './sports/en'

export default {
  common: {
    welcome: 'Welcome',
    home: 'Home',
    profile: 'Profile',
    sports: 'Sports',
    next: 'Next',
    back: 'Back',
    confirm: 'Confirm',
    cancel: 'Cancel',
    records: 'records'
  },
  onboarding: {
    title: 'Welcome to VitaTrack',
    description: 'Your personal health tracking companion',
  },
  home: {
    sportTime: 'Exercise duration',
    sportTimeTarget: '/{{ time }} minutes',
    steps: 'Number of steps',
    stepsTarget: '/{{ time }} steps',
    calories: 'Calorie',
    caloriesTarget: '/{{ time }} kcal',
    drink: 'Drinking water',
    drinkCurrent: ' {{ time }} (cups)',
    sleep: 'Sleep',
    sleepStart: 'Healthy sleep starts with me',
    sleepStartText: 'Start tracking sleep',
    sleepSubtitle: '{{hours}}h {{minutes}}m',
    sportHistory: 'Exercise history',
    sportHistoryStartText: 'Start tracking exercise',
    sportHistorySubtitle: '{{count}} workouts',
    menstruation: 'Menstrual period',
    menstruationStartText: 'Start tracking period',
    menstruationSubtitle: 'Day {{day}} of cycle',
    weight: 'Weight',
    weightStartText: 'Start tracking weight',
    weightSubtitle: '{{weight}}kg',
    height: 'Height',
    heightStartText: 'Start tracking height',
    heightSubtitle: '{{height}}cm',
    mood: 'Mood',
    moodStartText: 'Start tracking mood',
    moodSubtitle: '{{mood}}',
    sportsNone: 'No exercise history in the past 7 days~',
    sportsNoneStart: 'Start exercising soon!'
  },
  profile: {
    title: 'Profile',
    settings: 'Settings',
    changeLanguage: 'Change Language',
    selectLanguage: 'Select Language',
  },
  sports
};
