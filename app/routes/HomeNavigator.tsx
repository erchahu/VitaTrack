import React, { memo, useCallback, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen, SportsScreen } from '@/screens';
import { Icon, useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useSportHistoryStore } from '@/stores';

interface TabIcon {
  focused: boolean;
  color: string;
  size: number;
  icon: string;
  activeIcon: string;
}

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const initSportRecord = useSportHistoryStore(state => state.initSportRecord);

  const initializeTabApp = useCallback(() => {
    initSportRecord();
  }, [initSportRecord]);

  useEffect(() => {
    initializeTabApp();
  }, [initializeTabApp]);

  const getTabIcon = useCallback(
    ({ focused, icon, activeIcon, size, color }: TabIcon) => (
      <Icon source={focused ? icon : activeIcon} size={size} color={color} />
    ),
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t('common.home'),
          tabBarIcon: props =>
            getTabIcon({ icon: 'home', activeIcon: 'home-outline', ...props }),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: t('common.home'),
          tabBarIcon: props =>
            getTabIcon({ icon: 'run', activeIcon: 'run', ...props }),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Sports"
        component={SportsScreen}
        options={{
          title: t('common.home'),
          tabBarIcon: props =>
            getTabIcon({
              icon: 'account',
              activeIcon: 'account-outline',
              ...props,
            }),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default memo(HomeNavigator);
