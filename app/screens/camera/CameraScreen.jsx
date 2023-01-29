// Import dependencies
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera } from "react-native-pytorch-core";
// Import classify image function
import classifyImage from "./ImageClassifier";

// App function to render a camera and a text
const CameraScreen = () => {
    const [topClass, setTopClass] = React.useState(
        "Press capture button to classify what's in the camera view!"
    );

    // Function to handle images whenever the user presses the capture button
    async function handleImage(image) {
        // Call the classify image function with the camera image
        const result = await classifyImage(image);
        // 2. Set result as top class label state
        setTopClass(result);
        // Release the image from memory
        image.release();
    }

    return (
        <View style={StyleSheet.absoluteFill}>
            {/* Render camara and make it parent filling */}
            <Camera
                style={StyleSheet.absoluteFill}
                // Add handle image callback on the camera component
                onCapture={handleImage}
            />
            {/* Label container with custom render style and a text */}
            <View style={styles.labelContainer}>
                {/* 3. Change the text to render the top class label */}
                <Text>{topClass}</Text>
            </View>
        </View>
    );
}

export default CameraScreen;

// Custom render style for label container
const styles = StyleSheet.create({
    labelContainer: {
        padding: 20,
        margin: 20,
        marginTop: 40,
        borderRadius: 10,
        backgroundColor: "white",
    },
});
