import { Input as InputComp, type IInputProps, FormControl } from "native-base";

type InputProperties = IInputProps & {
    placeholder: string;
    errorMessage?: string | null;
};

export function Input({
    placeholder, errorMessage = null, isInvalid, ...rest
}: InputProperties): JSX.Element {
    const invalid = !!errorMessage || isInvalid;

    return (
        <FormControl isInvalid={invalid} my={2}>
            <InputComp
                w="full"
                placeholder={placeholder}
                color="white"
                borderColor="darkBlue.800"
                borderWidth={3}
                isInvalid={invalid}
                _invalid={{
                    borderWidth: 1,
                    borderColor: "red.500",
                }}
                _focus={{
                    borderColor: "darkBlue.800",
                    borderWidth: 3,
                }}
                {...rest} />
            <FormControl.ErrorMessage _text={{ color: "red.500" }}>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}
