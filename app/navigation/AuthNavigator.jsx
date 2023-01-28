import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthScreen from "@screens/auth/AuthScreen";
import PasswordResetScreen from "@screens/auth/PasswordResetScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    const { Screen, Navigator } = Stack;

    return (
        <Navigator
            initialRouteName="Auth"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Auth" component={AuthScreen} />
            <Screen name="PasswordReset" component={PasswordResetScreen} />
        </Navigator>
    );
};

export default AuthNavigator;
