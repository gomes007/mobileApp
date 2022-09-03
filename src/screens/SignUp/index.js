import {useNavigation} from "@react-navigation/native";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";

import {Input} from "../../components/input";
import {Button} from "../../components/Button";
import {useState} from "react";

import FeatherIcon from 'react-native-vector-icons/Feather';
import Checkbox from 'expo-checkbox';

import styles from "../SignUp/styles";


export function SignUp() {

    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(true);
    const [isChecked, setChecked] = useState(false);

    function goBack() {
        navigation.navigate('SignIn');
    }

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }



    return (
        <ScrollView>
            <View style={styles.Container}>

                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={goBack} style={styles.headerButton}>
                        <FeatherIcon name='arrow-left' size={35} color="#5DB075"/>
                    </TouchableOpacity>
                    <Text style={styles.HeaderTitle}>Cadastrar</Text>
                    <View style={styles.headerRight}/>
                </View>

                <View style={styles.inputContent}>
                    <View style={styles.nomeInput}>
                        <Input
                            placeholder="Nome"
                            autoCapitalize="none"
                            autoCorrect={false}
                            isPassword={false}
                        />
                    </View>
                    <View style={styles.nomeInput}>
                        <Input
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            isPassword={false}
                        />
                    </View>
                    <View style={styles.nomeInput}>
                        <Input
                            placeholder="Telefone"
                            keyboardType="numeric"
                            autoCapitalize="none"
                            autoCorrect={false}
                            isPassword={false}
                        />
                    </View>
                    <Input
                        placeholder="Senha"
                        keyboardType="default"
                        autoCapitalize="none"
                        autoCorrect={false}
                        isPassword={true}
                        secureTextEntry={showPassword}
                        showPassword={showPassword}
                        onPress={toggleShowPassword}
                    />
                </View>

                <View style={styles.buttonsContainer}>
                    <View style={styles.cadastrarButton}>
                        <Button
                            title="Cadastrar"/>
                    </View>

                    <TouchableOpacity style={styles.thirdButton}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? 'green' : 'gray'}/>
                        <Text style={styles.thirdButtonText}>Eu li e concordo com os termos de uso</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>

    )
}
