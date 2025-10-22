import { SportCategoryKey } from '@/types/vitaTrack';
import { FITNESS_SPORTS } from '@/utils/sportsCategory';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type SportHistoryItem = {
  [K in SportCategoryKey]: {
    id: string;
    sportCategory: K;
    sport: (typeof FITNESS_SPORTS)[K]['sports'][number];
    startTime?: number;
    endTime?: number;
    duration: number;
    createTime: number;
  };
}[SportCategoryKey];


interface SportsStore {
  sportHistory: SportHistoryItem[];
  addSportRecord: (item: SportHistoryItem) => void;
    updateSportRecord: (
    id: string, 
    updates: Partial<Omit<SportHistoryItem, 'sportCategory' | 'sport' | 'id'>>
  ) => void;
  deleteSportRecord: (id: string) => void;
  clearSportHistory: () => void;
  getSportHistoryByCategory: (category: string) => SportHistoryItem[];
  getTotalDuration: () => number;
}

const initHistory: SportsStore['sportHistory'] = [
  { id: '1', sportCategory: 'ballSports', sport: 'badminton', duration: 500000, createTime: 1760062112000 },
  { id: '2', sportCategory: 'ballSports', sport: 'badminton', duration: 800000, createTime: 1760148512000 },
  { id: '3', sportCategory: 'ballSports', sport: 'badminton', duration: 300000, createTime: 1760234912000 },
  { id: '4', sportCategory: 'ballSports', sport: 'badminton', duration: 700000, createTime: 1760321312000 },
  { id: '5', sportCategory: 'ballSports', sport: 'badminton', duration: 500300, createTime: 1760407712000 },
  { id: '6', sportCategory: 'ballSports', sport: 'badminton', duration: 900000, createTime: 1760494112000 },
  { id: '7', sportCategory: 'ballSports', sport: 'badminton', duration: 100000, createTime: 1760580512000 },
  { id: '8', sportCategory: 'ballSports', sport: 'badminton', duration: 900000, createTime: 1760666912000 },
  { id: '9', sportCategory: 'ballSports', sport: 'badminton', duration: 600000, createTime: 1760753312000 },
  { id: '10', sportCategory: 'ballSports', sport: 'badminton', duration: 800000, createTime: 1760839712000 },
  { id: '11', sportCategory: 'ballSports', sport: 'badminton', duration: 800000, createTime: 1760926112000 },
];

export const useSportHistoryStore = create<SportsStore>()(
  devtools(
    (set, get) => ({
      sportHistory: [],

      // 添加运动记录
      addSportRecord: item =>
        set(state => ({
          sportHistory: [...state.sportHistory, item],
        })),

      // 更新运动记录
      updateSportRecord: (id, updates) =>
        set(state => ({
          sportHistory: state.sportHistory.map(record =>
            record.id === id ? { ...record, ...updates } : record,
          ),
        })),

      // 删除运动记录
      deleteSportRecord: id =>
        set(state => ({
          sportHistory: state.sportHistory.filter(record => record.id !== id),
        })),

      // 清空所有记录
      clearSportHistory: () => set({ sportHistory: [] }),

      // 根据运动类别筛选记录
      getSportHistoryByCategory: category => {
        const { sportHistory } = get();
        return sportHistory.filter(record =>
          record.sportCategory.includes(category),
        );
      },

      // 计算总运动时长
      getTotalDuration: () => {
        const { sportHistory } = get();
        return sportHistory.reduce(
          (total, record) => total + record.duration,
          0,
        );
      },
    }),
    {
      name: 'Sport History Store',
      enabled: __DEV__,
    },
  ),
);
