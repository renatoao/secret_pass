import { Center, Fab, FlatList, Icon, Text, VStack, Box, IconButton, HStack } from "native-base"
import { Card } from "../components/Card"
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { stackRoutesProps } from "../routes/stack.routes";

export const Principal = () => {

    const [data, setData] = useState<string[]>([]);

    const navigation = useNavigation<stackRoutesProps>()

    const handleScreenDados = () => {
        navigation.navigate('dados');
    }

    const handleScreenConfigs = () => {
        navigation.navigate('configs');
    }

    return(
        <>
            <Box
                w='full'
                h={24}
                bg='darkBlue.800' 
            >
                <HStack w='full' mt={12} px={4} justifyContent='flex-end'>
                    <IconButton onPress={handleScreenConfigs} size={8} _icon={{ as: AntDesign, name: 'setting' }} key='solid' variant='solid' colorScheme='white' as={AntDesign} name='arrowleft' />
                </HStack>
            </Box>
            <FlatList 
                data={data}
                keyExtractor={(item) => item}
                renderItem={(item) => (
                    <Card />
                )}
                ListEmptyComponent={(                   
                    <VStack flex={1} alignItems='center' justifyContent='center'>
                        <Text color='white'>Não existem senhas gravadas</Text>
                    </VStack>                    
                )}
                flex={1} 
                bg='darkBlue.900' 
                px={4}
                py={4}
                showsVerticalScrollIndicator={false}
            />
            
            <Fab 
                bg='amber.500'
                size='lg'
                icon={
                    <Icon as={AntDesign} name='plus' size='sm' />
                }
                _pressed={{
                    bg: 'amber.600'
                }}
                renderInPortal={false}
                onPress={handleScreenDados}
            />
        </>
    )
}