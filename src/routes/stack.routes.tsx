import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Configs } from '../screens/configs';

import { Dados } from '../screens/Dados';
import { Principal } from '../screens/Principal';


type StackRoutesProps = {
    principal: undefined;
    dados: undefined;
    configs: undefined;
}

export type stackRoutesProps = NativeStackNavigationProp<StackRoutesProps>; 

const {Navigator, Screen} = createNativeStackNavigator<StackRoutesProps>();

export const StackRoutes = () => {
    return(
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name='principal' component={Principal} />
            <Screen name='dados' component={Dados} />
            <Screen name='configs' component={Configs} />
        </Navigator>
    )
}