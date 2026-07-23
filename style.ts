import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },

    startButton: {
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
    },

    whiteText: {
        color: "white",
        fontSize: 18,
    },

    title: {
        fontSize: 26,
        marginBottom: 25,
    },

    gameButton: {
        width: 100,
        padding: 15,
        margin: 8,
        borderRadius: 6,
        alignItems: "center",
    },

    higher: {
        backgroundColor: "green",
    },

    lower: {
        backgroundColor: "red",
    },

    resultText: {
        fontSize: 25,
        textAlign: "center",
    },

    trophy: {
        fontSize: 80,
        marginTop: 25,
    },
});