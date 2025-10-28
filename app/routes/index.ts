import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import { InitialScreen } from '@/screens';
import HomeNavigator from './HomeNavigator';

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
      screen: HomeNavigator,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;