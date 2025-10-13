/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { ActivityIndicator, Button, MD2Colors, PaperProvider } from 'react-native-paper';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView edges={['top']}>
          <Button icon="camera">Press me</Button>
           <ActivityIndicator animating={true} color={MD2Colors.red800} />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
