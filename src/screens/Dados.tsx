import { AntDesign } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import {
    Box, Text, IconButton, HStack, VStack,
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

import { ButtonDefault } from "../components/ButtonDefault";
import { Input } from "../components/Input";
import { database } from "../databse";
import { type Conta as ContaModel } from "../databse/model/Conta";

interface DataProperties {
    usuario: string;
    senha: string;
}

const inicialData = {
    usuario: "",
    senha: "",
};

const dadosSchema = yup.object({
    usuario: yup.string().required("Favor inserir o usuário"),
    senha: yup.string().required("Favor inserir a senha"),
});

function handleGoBack(): void {
    const navigation = useNavigation();
    navigation.goBack();
}

async function handleSalvarDados({ usuario, senha }: DataProperties): Promise<void> {
    console.log({ usuario, senha });
    const contaColection = database.get<ContaModel>("contas");
    await database.write(async () => {
        contaColection.create((conta) => {
            conta.usuario = usuario;
            conta.senha = senha;
        })
            .catch((error) => {
                console.error("ERROR CONSOLE", error);
            });
    });
}

export function Dados(): JSX.Element {
    const {
        control, handleSubmit, formState: { errors },
    } = useForm<DataProperties>({
        resolver: yupResolver(dadosSchema),
        defaultValues: inicialData,
    });

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
                    <Text color="white">DADOS</Text>

                    <Controller
                        control={control}
                        name="usuario"
                        render={({ field: { onChange, value } }): JSX.Element => <Input
                            placeholder="Usuário"
                            value={value}
                            onChangeText={onChange}
                            errorMessage={errors.usuario?.message} />} />

                    <Controller
                        control={control}
                        name="senha"
                        render={({ field: { onChange, value } }): JSX.Element => <Input
                            type="password"
                            placeholder="Senha"
                            value={value}
                            onChangeText={onChange}
                            errorMessage={errors.senha?.message} />} />

                </VStack>
                <VStack>
                    {/* TODO: Considere tratar promises pois elas podem falhar em eventos */}
                    {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                    <ButtonDefault texto="Salvar" onPress={handleSubmit(handleSalvarDados)} />
                </VStack>
            </Box>
        </Box>
    );
}
