import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    headerButton: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    HeaderTitle: {
        fontSize: 30,
        fontWeight: "600"
    },
    inputContent: {
        marginTop: 32,
        marginHorizontal: 20
    },
    nomeInput: {
        marginBottom: 16
    },
    buttonsContainer: {
        paddingHorizontal: 20,
        marginTop: 100
    },
    cadastrarButton: {
        marginBottom: 20
    },
    secondButton: {
        marginBottom: 20
    },
    thirdButton: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },
    thirdButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: '#5BD075',
        marginLeft: 10
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    headerContainer: {
        paddingHorizontal: 15,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerRight: {
        width: 50
    }


});

module.exports = styles;
