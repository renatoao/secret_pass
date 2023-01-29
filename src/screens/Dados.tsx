import { Box, Text, IconButton, HStack, VStack } from "native-base"
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigation } from "@react-navigation/native";

import { database } from "../databse";
import { Conta as ContaModel } from "../databse/model/Conta";


import {AntDesign} from '@expo/vector-icons';

import { Input } from "../components/Input";
import { ButtonDefault } from "../components/ButtonDefault";


type DataProps = {
    usuario: string;
    senha: string;
}

const inicialData = {
    usuario: '',
    senha: ''
}

const dadosSchema = yup.object({
    usuario: yup.string().required('Favor inserir o usuário'),
    senha: yup.string().required('Favor inserir a senha')
});

export const Dados = () => {

    const { control, handleSubmit, reset, formState: {errors} } = useForm<DataProps>({
        resolver: yupResolver(dadosSchema),
        defaultValues: inicialData
    });

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handleSalvarDados = async({usuario, senha}:DataProps) => {
        console.log({usuario, senha});
        const contaColection = database.get<ContaModel>('contas');
        await database.write( async() => {
            contaColection.create((conta) => {
                conta.usuario = usuario;
                conta.senha = senha;
            });
        });
    }

    return(
        <Box
            flex={1} 
            bg='darkBlue.900' 
        >
            <Box
                w='full'
                h={24}
                bg='darkBlue.800' 
            >
                <HStack mt={12} px={4}>
                    <IconButton onPress={handleGoBack} size={8} _icon={{ as: AntDesign, name: 'arrowleft' }} key='solid' variant='solid' colorScheme='white' as={AntDesign} name='arrowleft' />
                </HStack>
            </Box>
        
            <Box
                px={4}
                py={4}
                flex={1}
                justifyContent='space-between'
            >
                <VStack>                
                    <Text color='white'>DADOS</Text>

                    <Controller                        
                        control={control}
                        name="usuario"
                        render={({field: {onChange, value}}) => (
                            <Input 
                                placeholder="Usuário" 
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.usuario?.message}
                            />
                        )}
                    />
                    
                    <Controller 
                        control={control}
                        name="senha"                        
                        render={({field: {onChange, value}}) => (
                            <Input 
                                type="password" 
                                placeholder="Senha"
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.senha?.message}
                            />                    
                        )}
                    />
                    
                </VStack>
                <VStack>
                    <ButtonDefault texto="Salvar" onPress={handleSubmit(handleSalvarDados)} />
                </VStack>
            </Box>
        </Box>
    )
}