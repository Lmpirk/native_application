import { Camera } from "react-native-pytorch-core";
import { View, Text, StyleSheet } from "react-native";

const CameraScreen = () => {
    return (
        <View style={styles.container}>
            <Camera style={StyleSheet.absoluteFill} />
        </View>
    );
};

export default CameraScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
