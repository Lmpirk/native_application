import { Pressable, StyleSheet, View } from "react-native";

const Card = props => {
    return (
        <Pressable
            {...props}
            style={[styles.cardContainer, props.style]}
            onPress={props.onPress}
        >
            {props.chilren}
        </Pressable>
    );
};

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,

        ...Platform.select({
            ios: {
                shadowColor: "rgb(0,0,0)",
                shadowOpacity: 0.4,
                shadowRadius: 7,
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
            },
            android: {
                elevation: 20,
            },
        }),
    },
});
