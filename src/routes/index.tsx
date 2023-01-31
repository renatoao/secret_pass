import { NavigationContainer } from "@react-navigation/native";
import { Box } from "native-base";

import { StackRoutes } from "./stack.routes";

export function Routes(): JSX.Element {
    return <NavigationContainer>
        <Box
            flex={1}
            bg="darkBlue.900"
        >
            <StackRoutes />
        </Box>
    </NavigationContainer>;
}
