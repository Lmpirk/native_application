import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
    Button,
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import ListItem from "@components/ui/ListItem";
import { useCallback } from "react";

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleCamera = () => {
        navigation.navigate("Camera");
    };

    const handleInfo = () => {
        navigation.navigate("Info");
    };

    const handleDiscoveries = () => {
        navigation.navigate("Discoveries");
    };

    return (
        <View style={styles.container}>
            <ListItem
                title={"Capture"}
                subtitle={"Capture a picture"}
                onSelect={handleCamera}
            />
            <ListItem
                title={"My Discoveries"}
                subtitle={"View recent discoveries"}
                onSelect={handleDiscoveries}
            />
            <ListItem
                title={"Species in my area"}
                subtitle={"Learn more about local species"}
                onSelect={handleInfo}
            />
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
        backgroundColor: "#ddd",
    },
});
