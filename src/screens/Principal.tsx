/* eslint-disable no-underscore-dangle */
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
    Fab, FlatList, Icon, Text, VStack, Box, IconButton, HStack,
} from "native-base";
import { useEffect, useState } from "react";

import { Card } from "../components/Card";
import { database } from "../databse";
import { type stackRoutesProperties } from "../routes/stack.routes";

interface ItemInterface {
    id: number;
    usuario: string;
}

type ItemType = Record<"item", ItemInterface>;

function handleScreenDados(navigation: stackRoutesProperties): void {
    navigation.navigate("dados");
}

function handleScreenConfigs(navigation: stackRoutesProperties): void {
    navigation.navigate("configs");
}

export function Principal(): JSX.Element {
    // TODO: Create a type to Array<Record<string, unknown>>
    const [ data, setData ] = useState<Array<Record<string, unknown>>>([]);

    const navigation = useNavigation<stackRoutesProperties>();

    async function getContas(): Promise<void> {
        const contaCollection = database.get("contas");
        const contas = await contaCollection.query().fetch();
        const resultado = contas.map((result) => ({
            "id": result._raw.id,
            "usuario": result._raw.usuario,
            "senha": result._raw.senha,
        }));
        setData(resultado);
    }

    useEffect(() => {
        void getContas();
    }, [ data ]);

    return (
        <>
            <Box
                w="full"
                h={24}
                bg="darkBlue.800"
            >
                <HStack w="full" mt={12} px={4} justifyContent="flex-end">
                    <IconButton
                        onPress={(): void => {
                            handleScreenConfigs(navigation);
                        }}
                        size={8}
                        _icon={{ "as": AntDesign, "name": "setting" }}
                        key="solid"
                        variant="solid"
                        colorScheme="white"
                        as={AntDesign}
                        name="arrowleft"
                    />
                </HStack>
            </Box>
            <FlatList
                data={data}
                keyExtractor={(item: ItemInterface): number => item.id}
                renderItem={
                    ({ item }: ItemType): JSX.Element => <Card key={item.id} usuario={item.usuario} />
                }
                ListEmptyComponent={(
                    <VStack flex={1} alignItems="center" justifyContent="center">
                        <Text color="white">Não existem senhas gravadas</Text>
                    </VStack>
                )}
                flex={1}
                bg="darkBlue.900"
                px={4}
                py={4}
                showsVerticalScrollIndicator={false}
            />

            <Fab
                bg="amber.500"
                size="lg"
                icon={
                    <Icon as={AntDesign} name="plus" size="sm" />
                }
                _pressed={{
                    "bg": "amber.600",
                }}
                renderInPortal={false}
                onPress={(): void => {
                    handleScreenDados(navigation);
                }}
            />
        </>
    );
}
