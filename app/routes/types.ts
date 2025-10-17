import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// 定义根导航器的路由参数
export type RootStackParamList = {
  initial: undefined;
  mainTabs: undefined;
};

// 定义底部标签导航器的路由参数
export type TabParamList = {
  home: undefined;
  profile: undefined;
};

// 根导航器的屏幕 Props 类型
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

// 底部标签导航器的屏幕 Props 类型
export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

// 声明全局类型，让 useNavigation 可以自动推断类型
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
