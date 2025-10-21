export const FITNESS_SPORTS = {
  cardioTraining: {
    icon: '❤️',
    sports: [
      'running',
      'briskWalking',
      'cycling',
      'swimming',
      'jumpRope',
      'hiit',
      'elliptical',
      'stairClimbing',
      'jumpingJack',
      'burpee',
      'jogging',
    ],
  },
  strengthTraining: {
    icon: '💪',
    sports: [
      'pushUp',
      'pullUp',
      'squat',
      'plank',
      'dumbbell',
      'barbell',
      'kettlebell',
      'resistanceBand',
      'lunges',
      'deadlift',
    ],
  },
  flexibilityTraining: {
    icon: '🧘',
    sports: ['yoga', 'pilates', 'stretching', 'foamRolling'],
  },
  outdoorActivities: {
    icon: '🌳',
    sports: [
      'hiking',
      'briskWalking',
      'trailRunning',
      'mountainClimbing',
      'outdoorCycling',
    ],
  },
  ballSports: {
    icon: '⚽',
    sports: [
      'basketball',
      'soccer',
      'volleyball',
      'tennis',
      'badminton',
      'tableTennis',
    ],
  },
  martialArts: {
    icon: '🥊',
    sports: ['boxing', 'muayThai', 'kickboxing', 'mma'],
  },
  danceFitness: {
    icon: '💃',
    sports: ['zumba', 'aerobicsDance', 'hiphop'],
  },
  functionalTraining: {
    icon: '🔥',
    sports: [
      'crossfit',
      'battleRopes',
      'medicineBall',
      'coreTraining',
      'balanceTraining',
    ],
  },
  homeWorkout: {
    icon: '🏠',
    sports: [
      'bodyweightTraining',
      'yogaMat',
      'homeCardio',
      'chairWorkout',
      'wallWorkout',
    ],
  },
  recoveryTraining: {
    icon: '🛌',
    sports: ['stretching', 'foamRolling', 'meditation', 'breathing'],
  },
} as const;

export type SportCategoryKey = keyof typeof FITNESS_SPORTS;
// export type SportKey = typeof FITNESS_SPORTS[SportCategoryKey]['sports'][number];
export type SportKey = {
  [K in SportCategoryKey]: (typeof FITNESS_SPORTS)[K]['sports'][number];
}[SportCategoryKey];

export type SportCategory = {
  icon: string;
  sports: readonly SportKey[];
};

export type SportsConfig = {
  [K in SportCategoryKey]: SportCategory;
};