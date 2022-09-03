import {TextInput, TouchableOpacity, View} from "react-native";
import styles from './styles'
import FeatherIcon from 'react-native-vector-icons/Feather'

export function Input({isPassword, onPress, showPassword, ...rest}){

    return(
        <View style={styles.container}>
            <TextInput
                {...rest}
                style={styles.textInput}
            />
            {
                isPassword &&
                    <TouchableOpacity onPress={onPress}>
                        <FeatherIcon name={showPassword ? 'eye' : 'eye-off'} size={25} color="#5BD075"/>
                    </TouchableOpacity>
            }
        </View>
    )
}

//usar {...rest} quando as propriedades sao reconhecidas pelo componente TextInput caso contrario usa props.
