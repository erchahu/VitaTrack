/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import MyComponent from './routes';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <PaperProvider theme={{ ...DefaultTheme }}>
        <MyComponent />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
