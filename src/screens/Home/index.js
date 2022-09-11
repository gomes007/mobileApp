import { useState, useEffect } from "react";
import { FlatList, Image, Text, View } from "react-native";

import FeatherIcon from 'react-native-vector-icons/Feather';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


import styles from './styles';

export function Home() {

    const [clients, setClients] = useState([]);

    function getAllClients() {
        firebase.firestore()
            .collection('clients')
            .get()
            .then(response => {
                const data = response.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setClients(data)
            })
            .catch((error) => console.log('error'))
    }

    useEffect(() => {
        getAllClients();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={clients}
                    keyExtractor={item => item.id}
                    scrollEnabled={true}
                    renderItem={({ item }) => (
                        <View style={styles.listContent}>
                            <Image
                                style={styles.imageUser}
                                source={{
                                    uri: item.photo,
                                }}
                            />
                            <View style={styles.descriptionContent}>
                                <View>
                                    <Text style={styles.description}>{item.name}</Text>
                                    <Text style={styles.description}>{'R$ ' + item.salary}</Text>
                                </View>
                                <FeatherIcon name="chevron-right" style={styles.icon} />
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
