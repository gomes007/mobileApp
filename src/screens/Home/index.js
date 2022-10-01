import {useState, useEffect} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";

import FeatherIcon from 'react-native-vector-icons/Feather';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {useNavigation} from "@react-navigation/native";

import styles from './styles';
import {Search} from "../../components/search";

export function Home() {

    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
        firebase.firestore()
            .collection('clients')
            .onSnapshot(response => {
                const data = response.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setClients(data)
            })
    }, [])

    const filteredClients = search.length > 0 ? clients.filter(client => client.name.toUpperCase().includes(search.toUpperCase())) : [];
    const navigation = useNavigation();

    function handleRegister() {
        navigation.navigate("Register");
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Search
                    onChangeText={(text) => setSearch(text)}
                    value={search}
                    autoCapitalize="none"
                    placeholder="Search..."
                />
            </View>
            <View style={styles.listContainer}>
                {
                    search.length > 0 ? (
                    <FlatList
                        data={filteredClients}
                        keyExtractor={item => item.id}
                        scrollEnabled={true}
                        renderItem={({item}) => (
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
                                    <FeatherIcon name="chevron-right" style={styles.icon}/>
                                </View>
                            </View>
                        )}
                    />
                    )
                        : (
                            <FlatList
                                data={clients}
                                keyExtractor={item => item.id}
                                scrollEnabled={true}
                                renderItem={({item}) => (
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
                                            <FeatherIcon name="chevron-right" style={styles.icon}/>
                                        </View>
                                    </View>
                                )}
                            />
                        )
                }
            </View>
            <TouchableOpacity style={styles.floatingButtonContainer} onPress={handleRegister}>
                <FeatherIcon name="plus" style={styles.floatingButtonStyle}/>
            </TouchableOpacity>
        </View>
    )
}
