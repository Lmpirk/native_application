import * as SplashScreen from "expo-splash-screen";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator  from "./AuthNavigator";
import TabNavigator  from "./TabNavigator";
import { OverflowMenuProvider } from "react-navigation-header-buttons";

const AppNavigator = () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.user?.user);
    console.log(isLoggedIn)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {

        })().then(() => setIsLoading(false));
    }, [dispatch]);

    const handleRenderRootView = useCallback(async () => {
        if (!isLoading) {
            await SplashScreen.hideAsync();
        }
    }, [isLoading]);

    if (isLoading) {
        return (
            <View style={styles.loadingScreen}>
                <ActivityIndicator size="large" color="white" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <OverflowMenuProvider>
                <View style={styles.mainScreen} onLayout={handleRenderRootView}>
                    {isLoggedIn ? <TabNavigator /> : <AuthNavigator />}
                </View>
            </OverflowMenuProvider>
        </NavigationContainer>
    );
};

export default AppNavigator;

const styles = StyleSheet.create({
    loadingScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    mainScreen: {
        flex: 1,
    },
});
