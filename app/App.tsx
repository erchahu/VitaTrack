/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { DefaultTheme, PaperProvider, useTheme } from 'react-native-paper';
import Routes from '@routes';
import { ThemeProvider } from 'styled-components/native';
import '@locales';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';
  const paperTheme = useTheme();
  
  return (
    
    <SafeAreaProvider>
      <PaperProvider theme={{ ...DefaultTheme }}>
        <ThemeProvider theme={paperTheme}>
          <Routes />
        </ThemeProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
