import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>12345678</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

// const Routes = () => {
//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     { key: 'sports', title: 'Sports', focusedIcon: 'handball' },
//     { key: 'profile', title: 'Profile', focusedIcon: 'account' },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     sports: MusicRoute,
//     profile: AlbumsRoute,
//   });

//   return (
//     <BottomNavigation
//       navigationState={{ index, routes }}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
//     />
//   );
// };

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import Initial from '@screens/Initial';

const routes = createNativeStackNavigator({
  initialRouteName: 'Initial',
  screens: {
    Initial: {
      screen: Initial,
      options: {
        headerShown: false
      }
    },
    Home: MusicRoute,
    Profile: AlbumsRoute,
  },
});

const Routes = createStaticNavigation(routes);

export default Routes;