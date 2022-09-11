import {Alert, Text, TouchableOpacity, View} from "react-native";
import styles from './styles'
import {Input} from "../../components/input";
import {Button} from "../../components/Button";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export function SignIn() {

    const navigation = useNavigation();

    const [showPassword, setshowPassword] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function toggleShowPassword() {
        setshowPassword(!showPassword)
    }

    function handleSignUp() {
        navigation.navigate('SignUp');
    }


    function handleSignIn() {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => navigation.navigate('Home'))
            .catch((error) => {
                if (error.code === "auth/invalid-email") {
                    Alert.alert('E-mail inválido!');
                } else if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
                    Alert.alert('Usuário ou senha inválida!');
                } else if (error.code === "auth/user-disabled") {
                    Alert.alert('Usuário desabilitado!')
                }
            });
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
                        value={email}
                        onChangeText={(text) => setEmail(text)}
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
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={styles.buttonsContainer}>

                <View style={styles.firstButton}>
                    <Button
                        title="Entrar"
                        onPress={handleSignIn}/>
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
