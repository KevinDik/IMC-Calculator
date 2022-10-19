import React from "react";
import { View, Text} from "react-native"
import styles from './style'

export default function ResultImc(props) {
    return(
            <View style={styles.ResultImc}>
                <Text style={styles.information}>{props.messsageResultImc}</Text>
                <Text style={styles.numberImc}>{props.resultImc}</Text> 
            </View>
        );
}