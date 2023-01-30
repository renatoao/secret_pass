import { Box, Text, IconButton, Icon, HStack, VStack, Center } from "native-base"
import { MaterialIcons, Fontisto } from '@expo/vector-icons';


type CardProps = {
    usuario: string;
}

export const Card = ({usuario}:CardProps) => {
    return(
        <Box 
            borderLeftWidth={3} 
            borderLeftColor='amber.400' 
            w='full' 
            bg='darkBlue.800' 
            p={4} 
            rounded='md' 
            mb={4}
        >
            <HStack alignItems='center'>
                                
                <Box padding={2} bg='red.700' rounded='full' mr={2} alignItems='center'>
                    <Icon as={Fontisto} name='netflix' color='black' />
                </Box>
                                
                <VStack flex={1}>                
                    <Text color='white'>Conta: {usuario}</Text>
                    <Text color='white'>Tipo: {usuario}</Text>
                </VStack>
                
                <IconButton 
                    icon={
                        <Icon as={MaterialIcons} name='arrow-forward-ios' />
                    } 
                    _icon={{
                        color: 'white',
                        size: 'sm'
                    }}
                />
            </HStack>

        </Box>
    )

}