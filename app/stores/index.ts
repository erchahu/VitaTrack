import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SportHistoryItem {
  id: string;
  sportCategory: string[]; // 简化写法
  startTime?: number;
  endTime?: number;
  duration: number; // based on seconds
}

interface SportsStore {
  sportHistory: SportHistoryItem[];
  addSportRecord: (item: SportHistoryItem) => void;
  updateSportRecord: (id: string, updates: Partial<SportHistoryItem>) => void;
  deleteSportRecord: (id: string) => void;
  clearSportHistory: () => void;
  getSportHistoryByCategory: (category: string) => SportHistoryItem[];
  getTotalDuration: () => number;
}

export const useSportHistoryStore = create<SportsStore>()(
  devtools(
    (set, get) => ({
      sportHistory: [
        {
          id: '1',
          sportCategory: ['跑步'],
          duration: 3000,
        },
      ],

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
