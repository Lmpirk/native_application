import { SafeAreaView, StyleSheet} from "react-native";
import Constants from "expo-constants";

const Screen = props => {

    return (
        <SafeAreaView {...props} style={[styles.screen, props.style]}>
            {props.children}
        </SafeAreaView>
    )
}

export default Screen;

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex:1,
    }
})