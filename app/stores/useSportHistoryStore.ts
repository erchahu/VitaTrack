import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SportHistoryItem {
  id: string;
  sportCategory: string[]; // 简化写法
  startTime?: number;
  endTime?: number;
  duration: number; // based on seconds
  createTime: number;
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

const initHistory: SportsStore['sportHistory'] = [
  { id: '1', sportCategory: ['游泳'], duration: 500000, createTime: 1760062112000 },
  { id: '2', sportCategory: ['跑步'], duration: 800000, createTime: 1760148512000 },
  { id: '3', sportCategory: ['飞翔'], duration: 300000, createTime: 1760234912000 },
  { id: '4', sportCategory: ['遁地'], duration: 700000, createTime: 1760321312000 },
  { id: '5', sportCategory: ['羽毛球'], duration: 500300, createTime: 1760407712000 },
  { id: '6', sportCategory: ['瑜伽'], duration: 900000, createTime: 1760494112000 },
  { id: '7', sportCategory: ['篮球'], duration: 100000, createTime: 1760580512000 },
  { id: '8', sportCategory: ['足球'], duration: 900000, createTime: 1760666912000 },
  { id: '9', sportCategory: ['乒乓球'], duration: 600000, createTime: 1760753312000 },
  { id: '10', sportCategory: ['跳水'], duration: 800000, createTime: 1760839712000 },
  { id: '11', sportCategory: ['唉哟'], duration: 800000, createTime: 1760926112000 },
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
