import {Text, TouchableOpacity, View} from "react-native";
import { RadioButton } from 'react-native-paper';

import styles from "./styles"
import {useNavigation} from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import {Input} from "../../components/input";
import React, {useState} from "react";

export function Register() {

    const [checked, setChecked] = useState('first');
    const navigation = useNavigation();

    function goBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack} style={styles.headerButton}>
                <FeatherIcon name='arrow-left' size={35} color="white"/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>
                Cadastro
            </Text>

            <View style={styles.inputContent}>
                <View style={styles.nomeInput}>
                    <Input
                        placeholder="Nome"
                        autoCapitalize="none"
                        autoCorrect={false}
                        isPassword={false}
                    />
                </View>
                <View style={styles.cpfNascInput}>
                    <View style={styles.cpfInput}>
                        <Input
                            placeholder="CPF"
                            autoCapitalize="none"
                            autoCorrect={false}
                            isPassword={false}
                        />
                    </View>
                    <View style={styles.nascInput}>
                        <Input
                            placeholder="Nascimento"
                            autoCapitalize="none"
                            autoCorrect={false}
                            isPassword={false}
                        />
                    </View>
                </View>

                <View style={styles.imgSalaryInput}>
                    <View style={styles.imgInput}>
                        <Input
                            placeholder="Img"
                            autoCapitalize="none"
                            autoCorrect={false}
                            isPassword={false}
                        />
                    </View>
                    <View style={styles.salaryInput}>
                        <Input
                            placeholder="Salary"
                            autoCapitalize="none"
                            autoCorrect={false}
                            isPassword={false}
                        />
                    </View>
                </View>

                <View style={styles.line}/>

                <View>
                    <RadioButton

                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                    />
                    <RadioButton
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                    />
                </View>

            </View>

        </View>
    )
}
