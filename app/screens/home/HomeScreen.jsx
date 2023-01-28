import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Camera } from "react-native-pytorch-core";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Camera style={StyleSheet.absoluteFill} />
        </View>
    );
};

export const screenOptions = () => {
    return {
        headerShown: false,
    };
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});