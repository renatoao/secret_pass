import { Box, Text } from "native-base"

type CardProps = {
    usuario: string;
}

export const Card = ({usuario}:CardProps) => {
    return(
        <Box w='full' bg='darkBlue.800' p={4} rounded='md' mb={4}>
            <Text color='white'>{usuario}</Text>
        </Box>
    )

}