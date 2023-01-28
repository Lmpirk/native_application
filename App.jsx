import { Provider } from "react-redux";
import { memo, useEffect, useState } from "react";

import store from "./app/store"

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Screen from "@components/ui/Screen";
import AppNavigator from "@navigation/AppNavigator";

const App = () => {
    return (
        <Provider store={store}>
            <Screen>
                <StatusBar style="dark" animated />
                <AppNavigator />
            </Screen>
        </Provider>
    );
};

export default memo(App);
