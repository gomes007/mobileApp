import React from 'react';
import {RouteStack} from "../../routes/stackNavigator";
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from "react-native";
import firebase from "firebase/compat/app";
import 'firebase/firestore';

import styles from './styles'

export function App() {

    const firebaseConfig = {
        apiKey: "AIzaSyDjoFRX3icOEYjyasHEUY_HkdaNk70BW3I",
        authDomain: "mobileapp-c1515.firebaseapp.com",
        projectId: "mobileapp-c1515",
        storageBucket: "mobileapp-c1515.appspot.com",
        messagingSenderId: "642150657813",
        appId: "1:642150657813:web:fffcb5f35fd8438004c31c",
        measurementId: "G-SN58CE9DK2"
    };

    if (!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }


    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <NavigationContainer>
                <RouteStack/>
            </NavigationContainer>
        </SafeAreaView>
    );
}
