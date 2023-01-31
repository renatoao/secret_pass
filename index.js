import { registerRootComponent } from "expo";

// TODO: Não misture TS e JS
// eslint-disable-next-line import/no-unresolved
import App from "./App";

/*
 * RegisterRootComponent calls AppRegistry.registerComponent('main', () => App);
 * It also ensures that whether you load the app in Expo Go or in a native build,
 * the environment is set up appropriately
 */
registerRootComponent(App);
