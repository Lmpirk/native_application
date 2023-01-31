import { useDispatch } from "react-redux";
import { View, Text, Button } from "react-native";

import ListItem from "@components/ui/ListItem";

import { logout } from "../../store/user/actions";

const ProfileScreen = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <View>
            <ListItem title={"My Account"} subtitle={"Your information"} />
            <ListItem title={"Settings"} subtitle={"Your Settings"} />
            <Button title={"Logout"} onPress={handleLogout} />
        </View>
    );
};

export const screenOptions = () => {
    return {
        headerShown: false,
    };
};

export default ProfileScreen;
