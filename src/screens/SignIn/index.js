import {Text, TouchableOpacity, View} from "react-native";
import styles from './styles'
import {Input} from "../../components/input";
import {Button} from "../../components/Button";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";


export function SignIn() {

    const navigation = useNavigation();

    const [showPassword, setshowPassword] = useState(true)

    function toggleShowPassword() {
        setshowPassword(!showPassword)
    }

    function handleSignUp() {
        navigation.navigate('SignUp');
    }


    function handleHome() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.HeaderTitle}>Login</Text>
            </View>
            <View style={styles.inputContent}>
                <View style={styles.firstInput}>
                    <Input
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        isPassword={false}
                    />
                </View>
                <Input
                    placeholder="Senha"
                    keyboardType="default"
                    secureTextEntry={showPassword}
                    showPassword={showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    isPassword={true}
                    onPress={toggleShowPassword}
                />
            </View>
            <View style={styles.buttonsContainer}>

                <View style={styles.firstButton}>
                    <Button
                        title="Entrar"
                        onPress={handleHome}/>
                </View>

                <View style={styles.secondButton}>
                    <Button
                        title="Criar Conta"
                        onPress={handleSignUp}/>
                </View>

                <TouchableOpacity style={styles.thirdButton}>
                    <Text style={styles.thirdButtonText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
