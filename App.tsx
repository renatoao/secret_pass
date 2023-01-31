import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";

import { Routes } from "./src/routes";

export default function App(): JSX.Element {
    return (
        <NativeBaseProvider>
            <StatusBar style="light" translucent backgroundColor="transparent" />
            <Routes />
        </NativeBaseProvider>
    );
}
