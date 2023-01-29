import { Text, View, StyleSheet } from "react-native";
import ProfileScreen, {screenOptions as ProfileScreenOptions } from "@screens/profile/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <View style={styles.container} collapsable={false}>
            <Stack.Navigator initialRouteName="Profile">
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={ProfileScreenOptions}
                />
            </Stack.Navigator>
        </View>
    );
}

export default ProfileNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
