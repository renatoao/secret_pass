import { MaterialIcons, Fontisto } from "@expo/vector-icons";
import {
    Box, Text, IconButton, Icon, HStack, VStack,
} from "native-base";

interface CardProperties {
    usuario: string;
}

export function Card({ usuario }: CardProperties): JSX.Element {
    return <Box
        borderLeftWidth={3}
        borderLeftColor="amber.400"
        w="full"
        bg="darkBlue.800"
        p={4}
        rounded="md"
        mb={4}
    >
        <HStack alignItems="center">

            <Box padding={2} bg="red.700" rounded="full" mr={2} alignItems="center">
                <Icon as={Fontisto} name="netflix" color="black" />
            </Box>

            <VStack flex={1}>
                <Text color="white">Conta: {usuario}</Text>
                <Text color="white">Tipo: {usuario}</Text>
            </VStack>

            <IconButton
                icon={<Icon as={MaterialIcons} name="arrow-forward-ios" />}
                _icon={{
                    color: "white",
                    size: "sm",
                }} />
        </HStack>

    </Box>;
}
