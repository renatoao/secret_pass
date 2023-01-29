import {Input as InputComp, IInputProps, FormControl} from 'native-base';


type InputProps = IInputProps &{
    placeholder: string;
    errorMessage?: string | null;
}

export const Input = ({placeholder, errorMessage = null, isInvalid, ...rest}: InputProps) => {

    const invalid = !!errorMessage || isInvalid;

    return(
        <FormControl isInvalid={invalid} my={2}>
            <InputComp 
                w='full' 
                placeholder={placeholder} 
                color='white'
                borderColor='darkBlue.800'
                borderWidth={3}
                isInvalid={invalid}
                _invalid={{
                    borderWidth: 1,
                    borderColor: 'red.500'
                }}
                _focus={{
                    borderColor: 'darkBlue.800',
                    borderWidth: 3
                }}
                {...rest} 
            />
            <FormControl.ErrorMessage _text={{color: 'red.500'}}>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}