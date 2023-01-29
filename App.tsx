import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Routes } from './src/routes';

export default function App() {
  return (
    <NativeBaseProvider>
        <StatusBar style="light" translucent backgroundColor='transparent' />
        <Routes />
    </NativeBaseProvider>
  );
}