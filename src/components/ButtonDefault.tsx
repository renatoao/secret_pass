import { Button, IButtonProps } from "native-base"


type ButtonProps = IButtonProps & {
    texto: string;
}

export const ButtonDefault = ({texto, ...rest}: ButtonProps) => {
    return(
        <Button 
            w='full' 
            bg='amber.500' 
            p={4} 
            rounded='md'
            _pressed={{
                bg: 'amber.600'
            }}
            {...rest}
        >
           {texto}
        </Button>
    )

}