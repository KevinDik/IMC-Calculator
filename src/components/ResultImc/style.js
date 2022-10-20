import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resulImc: {
        flex: 1,
        marginTop: 20,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },

    numberImc: {
        fontSize: 48,
        color: '#ff0043',
        fontWeight: "bold",
    },

    information: {
        fontSize: 18,
        color: '#ff0043',
        fontWeight: "bold",
    },

    boxShareButton: {
        width: '100%',
        alignItems: "center",
        marginBottom: 10,
    },
    share: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginTop: 10,
        marginHorizontal: 10,
    },
    shareText: {
        color: '#fff',
        fontWeight: "bold",
        paddingHorizontal: 30,
    }
});

export default styles