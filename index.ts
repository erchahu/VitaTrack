/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';

if (__DEV__) {
  require("./app/devtools/reactotronConfig");
}

AppRegistry.registerComponent(appName, () => App);
