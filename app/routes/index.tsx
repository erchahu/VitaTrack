import React from 'react';
import { Icon, useTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InitialScreen from '@screens/InitialScreen';
import HomeScreen from '@/screens/HomeScreen';
import ProfileScreen from '@/screens/ProfileScreen';

const TabNavigator = () => {
  const theme = useTheme();
  
  const Tab = createBottomTabNavigator({
    screens: {
      home: {
        screen: HomeScreen,
        options: {
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon 
              source={focused ? 'home' : 'home-outline'} 
              size={size} 
              color={color} 
            />
          ),
        },
      },
      profile: {
        screen: ProfileScreen,
        options: {
          title: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon 
              source={focused ? 'account' : 'account-outline'} 
              size={size} 
              color={color} 
            />
          ),
        },
      },
    },
    options: {
      tabBarActiveTintColor: theme.colors.primary, // 使用主题主色
      tabBarInactiveTintColor: theme.colors.onSurfaceVariant, // 使用主题表面变体色
      tabBarStyle: {
        backgroundColor: theme.colors.surface, // 使用主题表面色
      },
    },
  });

  return <Tab />;
};

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