import {Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1, paddingTop: Platform.OS === 'android' ? 25 : 0
    }
});

module.exports = styles
