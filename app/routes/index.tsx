import React from 'react';
import { Icon, useTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import InitialScreen from '@screens/InitialScreen';
import HomeScreen from '@/screens/HomeScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import './types'; // 导入类型定义以激活全局类型声明

const TabNavigator = createBottomTabNavigator({
  screenOptions: () => {
    const theme = useTheme();
    return {
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
      tabBarStyle: {
        backgroundColor: theme.colors.surface,
      },
    };
  },
  screens: {
    home: {
      screen: HomeScreen,
      options: () => {
        const { t } = useTranslation();
        return {
          title: t('common.home'),
          tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => (
            <Icon
              source={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        };
      },
    },
    profile: {
      screen: ProfileScreen,
      options: () => {
        const { t } = useTranslation();
        return {
          title: t('common.profile'),
          tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => (
            <Icon
              source={focused ? 'account' : 'account-outline'}
              size={size}
              color={color}
            />
          ),
        };
      },
    },
  },
});

// 创建根导航器
const RootStack = createNativeStackNavigator({
  initialRouteName: 'initial',
  screens: {
    initial: {
      screen: InitialScreen,
      options: {
        headerShown: false,
      },
    },
    mainTabs: {
      screen: TabNavigator,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;