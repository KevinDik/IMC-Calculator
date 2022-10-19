import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import ResultImc from "../ResultImc/index";
import { useState } from "react";
import styles from './style'

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return(setImc((weight/(height*height)).toFixed(2)))
    }

    function validadeImc() {
        if(weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual: ")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }

    return(
            <View style={styles.formContext}>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="ex. 1.70"
                    keyboardType="numeric"
                    />

                    <Text style={styles.formLabel}>Peso</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="ex. 75.500"
                    keyboardType="numeric"
                    />
                <TouchableOpacity
                onPress={() => {validadeImc()}}
                style={styles.buttonCalculator}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>    
                </View>
                <ResultImc messsageResultImc={messageImc} resultImc={imc}/>
            </View>
        );
}