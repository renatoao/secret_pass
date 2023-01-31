import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
    Box, Text, IconButton, HStack, VStack,
} from "native-base";

function handleGoBack(): void {
    const navigation = useNavigation();

    navigation.goBack();
}

export function Configs(): JSX.Element {
    return (
        <Box
            flex={1}
            bg="darkBlue.900"
        >
            <Box
                w="full"
                h={24}
                bg="darkBlue.800"
            >
                <HStack mt={12} px={4}>
                    <IconButton
                        onPress={handleGoBack}
                        size={8}
                        _icon={{ "as": AntDesign, "name": "arrowleft" }}
                        key="solid"
                        variant="solid"
                        colorScheme="white"
                        as={AntDesign}
                        name="arrowleft"
                    />
                </HStack>
            </Box>

            <Box
                px={4}
                py={4}
                flex={1}
                justifyContent="space-between"
            >
                <VStack>
                    <Text color="white">CONFIGURAÇÔES</Text>

                </VStack>

            </Box>
        </Box>
    );
}
