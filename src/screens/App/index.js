import React from 'react';
import {RouteStack} from "../../routes/stackNavigator";
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from "react-native";

import styles from './styles'

export function App() {
    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <NavigationContainer>
                <RouteStack/>
            </NavigationContainer>
        </SafeAreaView>
    );
}
