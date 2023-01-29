import { StyleSheet, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen, {
    screenOptions as HomeScreenOptions,
} from "@screens/home/HomeScreen";
import InfoScreen, {
    screenOptions as InfoScreenOptions,
} from "@screens/home/InfoScreen";
import CameraScreen, {
    screenOptions as CameraScreenOptions,
} from "@screens/camera/CameraScreen";
import DiscoveriesScreen, {
    screenOptions as DiscoveriesScreenOptions,
} from "@screens/home/DiscoveriesScreen";

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
                <Stack.Screen
                    name="Camera"
                    component={CameraScreen}
                    options={CameraScreenOptions}
                />
                <Stack.Screen
                    name="Discoveries"
                    component={DiscoveriesScreen}
                    options={DiscoveriesScreen}
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
