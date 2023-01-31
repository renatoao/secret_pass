import { Button, type IButtonProps } from "native-base";

type ButtonProperties = IButtonProps & {
    texto: string;
};

export function ButtonDefault({ texto, ...rest }: ButtonProperties): JSX.Element {
    return <Button
        w="full"
        bg="amber.500"
        p={4}
        rounded="md"
        _pressed={{
            "bg": "amber.600",
        }}
        {...rest}
    >
        {texto}
    </Button>;
}
