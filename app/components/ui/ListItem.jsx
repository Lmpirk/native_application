import { FontAwesome } from "@expo/vector-icons";
import { Pressable, View, Text, StyleSheet } from "react-native";

const ListItem = props => {
    const title = props.title;
    const subtitle = props.subtitle;

    return (
        <Pressable
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => [
                styles.container,
                pressed && styles.pressed,
            ]}
            onPress={props.onSelect}
        >
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <FontAwesome style={styles.chevronIcon} name="angle-right" />
        </Pressable>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#fff"
    },
    pressed: {
        backgroundColor: "#bbb",
    },
    title: {
        fontSize: 20,
        marginBottom: 0,
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 0,
        color: "rgba(60,60,67, 0.6)",
    },
    chevronIcon: {
        paddingRight: 15,
        marginLeft: "auto",
        color: "rgba(60,60,67, 0.6)",
        fontSize: 30,
    },
});