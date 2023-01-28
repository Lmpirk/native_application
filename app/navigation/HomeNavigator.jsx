import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackActions } from "@react-navigation/native";
import HomeScreen, {screenOptions as HomeScreenOptions } from "../screens/home/HomeScreen";
import InfoScreen, {screenOptions as InfoScreenOptions} from "../screens/home/InfoScreen";

const Stack = createNativeStackNavigator();



const HomeNavigator = () => {
    return (
        <View style={styles.container} collapsable={false}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={HomeScreenOptions}
                />
                <Stack.Screen
                    name="Info"
                    component={InfoScreen}
                    options={InfoScreenOptions}
                />
            </Stack.Navigator>
        </View>
    );
};

export default HomeNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
