import { View, Text, Button } from "react-native";
import ListItem from "../../components/ui/ListItem";

const ProfileScreen = () => {
    return (
        <View>
            <ListItem title={"My Account"} subtitle={"Your information"}/>
            <ListItem title={"Settings"} subtitle={"Your Settings"}/>
            <Button title={"Logout"} />
        </View>
    );
};

export const screenOptions = () => {
    return {
        headerShown: false,
    };
};

export default ProfileScreen;
