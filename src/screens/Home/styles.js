import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    }, imageUser: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    listContainer: {
        marginTop: 20,
    },
    listContent: {
        backgroundColor: '#F6F6F6',
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        marginHorizontal: 20,
        borderRadius: 8,
        marginBottom: 20,

    },
    descriptionContent: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 20,
    },
    description: {
        fontSize: 16,
        color: '#666666'
    },
    icon: {
        fontSize: 30,
        color: '#979797'
    }, searchContainer: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    floatingButtonContainer: {
        backgroundColor: '#5db075',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 30,
        bottom: 30
    },
    floatingButtonStyle: {
        fontSize: 40,
        color:"#fff"
    }


});

module.exports = styles;
