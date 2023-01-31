import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { type NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Configs } from "../screens/configs";
import { Dados } from "../screens/Dados";
import { Principal } from "../screens/Principal";

interface StackRoutesProperties extends Record<string, undefined> {
    principal: undefined;
    dados: undefined;
    configs: undefined;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const { Navigator, Screen } = createNativeStackNavigator<StackRoutesProperties>();

export type stackRoutesProperties = NativeStackNavigationProp<StackRoutesProperties>;

export function StackRoutes(): JSX.Element {
    return <Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Screen name="principal" component={Principal} />
        <Screen name="dados" component={Dados} />
        <Screen name="configs" component={Configs} />
    </Navigator>;
}
