import { View, Text, Pressable, Keyboard, StyleSheet } from "react-native";
import Card from "@components/ui/Card";

const AuthScreen = () => {
    return (
        <Pressable style={styles.screen} onPress={Keyboard.dismiss}>
            <Card></Card>
        </Pressable>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
        backgroundColor: "blue",
    },
});
