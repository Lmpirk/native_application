import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    createMaterialBottomTabNavigator,
    MaterialBottomTabView,
} from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, StyleSheet } from "react-native";
import HomeNavigator from "@navigation/HomeNavigator";
import ProfileNavigator from "@navigation/ProfileNavigator";

const Tab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
    const navigationOptions = {
        initialRouteName: "HomeStack",
        screenOptions: {
            headerShown: true,
            headerTransparent: true,
            tabBarActiveTintColor: "#007AFF",
        },
        shifting: true,
        activeColor: "#007AFF",
        barStyle: {
            backgroundColor: "#fff",
            height: 70,
        },
    };

    const navigationScreens = [
        {
            name: "HomeStack",
            component: HomeNavigator,
            options: {
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        color={color}
                        style={styles.icons}
                        name="ios-home-outline"
                    />
                ),
            },
        },
        {
            name: "ProfileStack",
            component: ProfileNavigator,
            options: {
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        color={color}
                        style={styles.icons}
                        name="settings-outline"
                    />
                ),
            },
        },
    ];

    if (Platform.OS === "android") {
        return (
            <>
                <MaterialTab.Navigator {...navigationOptions}>
                    {navigationScreens.map(navScreen => (
                        <MaterialTab.Screen
                            key={navScreen.name}
                            {...navScreen}
                        />
                    ))}
                </MaterialTab.Navigator>
            </>
        );
    }

    return (
        <>
            <Tab.Navigator {...navigationOptions}>
                {navigationScreens.map(navScreen => {
                    <Tab.Screen key={navScreen.name} {...navScreen} />;
                })}
            </Tab.Navigator>
        </>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({
    icons: {
        fontSize: 24,
    },
});
