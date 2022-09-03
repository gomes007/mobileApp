import {FlatList, Text, View, Image} from "react-native";
import styles from './styles'
import FeatherIcon from 'react-native-vector-icons/Feather';
import formatValue from "../../utils/formValue";

export function Home(){

    const data = [
        {
            id: 1,
            name: 'Gilson Soares',
            salary: 1000.00,
            photo: 'https://avatars.githubusercontent.com/u/73363753?v=4'
        },
        {
            id: 2,
            name: 'Carlos',
            salary: 1000.00,
            photo: 'https://avatars.githubusercontent.com/u/73363753?v=4'
        },
        {
            id: 3,
            name: 'Ana',
            salary: 1000.00,
            photo: 'https://avatars.githubusercontent.com/u/73363753?v=4'
        },
        {
            id: 4,
            name: 'Paulo',
            salary: 1000.00,
            photo: 'https://avatars.githubusercontent.com/u/73363753?v=4'
        },
        {
            id: 5,
            name: 'Patricia',
            salary: 1000.00,
            photo: 'https://avatars.githubusercontent.com/u/22238804?v=4'
        }
    ]

    return (
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={data}
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
                                    <Text style={styles.description}>{'R$ ' + formatValue(item.salary)}</Text>
                                </View>
                                <FeatherIcon name="chevron-right" style={styles.icon}/>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
