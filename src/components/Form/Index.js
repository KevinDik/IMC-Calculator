import React from "react";
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "../ResultImc/index";
import { useState } from "react";

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
            <View>
                <View>
                    <Text>Altura</Text>
                    <TextInput 
                    onChangeText={setHeight}
                    value={height}
                    placeholder="ex. 1.70"
                    keyboardType="numeric"
                    />

                    <Text>Peso</Text>
                    <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="ex. 75.500"
                    keyboardType="numeric"
                    />

                    <Button 
                    title={textButton}
                    onPress={() => validadeImc()}/>
                </View>
                <ResultImc messsageResultImc={messageImc} resultImc={imc}/>
            </View>
        );
}