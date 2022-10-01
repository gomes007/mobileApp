import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        height: 115,
        left: -1,
        right: 0,
        top: 0,
        backgroundColor: '#5DB075'
    },
    headerButton: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    headerTitle: {
        textAlign: "center",
        alignItems: "center",
        fontSize: 30,
        color: 'white',
        bottom: 0,
        fontWeight: "bold"
    },
    inputContent: {
        marginTop: 60,
        marginHorizontal: 20,
    },
    nomeInput: {
        marginBottom: 16,
        width: 330,
        height: 50,
        borderRadius: 8,
        left: -5,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#E8E8E8",
    },
    cpfNascInput: {
        left: 5,
        flexDirection: "row",
        alignSelf:"center",
        marginTop: 5,
        alignContent:"space-between"
    },
    cpfInput: {
        marginBottom: 16,
        width: 160,
        height: 50,
        borderRadius: 8,
        left: -5,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#E8E8E8"
    },
    nascInput: {
        marginBottom: 16,
        marginLeft: 8,
        width: 160,
        height: 50,
        borderRadius: 8,
        left: -5,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#E8E8E8"
    },

    imgSalaryInput: {
        left: 5,
        flexDirection: "row",
        alignSelf:"center",
        marginTop: 5,
        alignContent:"space-between"
    },
    imgInput: {
        marginBottom: 16,
        width: 160,
        height: 50,
        borderRadius: 8,
        left: -5,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#E8E8E8"
    },
    salaryInput: {
        marginBottom: 16,
        marginLeft: 8,
        width: 160,
        height: 50,
        borderRadius: 8,
        left: -5,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#E8E8E8"
    },
    line: {
        marginTop: 10,
        borderColor: '#E8E8E8',
        borderWidth: 0.9,
        borderStyle: "solid",
    }

});

module.exports = styles
