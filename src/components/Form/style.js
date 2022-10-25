import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 30,
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        paddingTop: 20,
    },
    formLabel: {
        color: 'black',
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        backgroundColor: '#ff0043',
        marginHorizontal: 30,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },

    textButtonCalculator: {
        fontSize: 20,
        color: 'white',
    },

    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    exbitionResultImc: {
        width: "100%",
        height: "50%",
    },
    listImcs: {
        marginTop: 20,
    },
    resultImcItem: {
        fontSize: 24,
        color: 'red',
        height: 50,
        width: '100%',
        paddingRight: 20,
    },
    textResultItemList: {
        fontSize: 16,
    }
});

export default styles