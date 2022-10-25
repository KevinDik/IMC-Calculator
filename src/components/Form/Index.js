import React from "react";
import { View, Text, Vibration, TextInput, TouchableOpacity, Keyboard, Pressable, FlatList } from "react-native"
import ResultImc from "../ResultImc/index";
import { useState } from "react";
import styles from './style'

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [erroMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        let heightFormated = height.replace(",",".")
        let weightFormated = weight.replace(",",".")
        let totalImc = (weightFormated/(heightFormated * heightFormated)).toFixed(2);
        setImcList ((arr) => [...arr, {
            id: new Date().getTime(),
            imc: totalImc,
        }])
        setImc(totalImc)
    }

    function verificationImc() {
        if(imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*")
        }
    }

    function validadeImc() {
        if(weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
        }
        else {
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
        }
    }

    return(
            <View style={styles.formContext}>
                {imc == null ? 
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{erroMessage}</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="ex. 1.70"
                    keyboardType="numeric"
                    />

                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{erroMessage}</Text>
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
                </Pressable> 
                : 
                <View style={styles.exibitionResultImc}>
                    <ResultImc messsageResultImc={messageImc} resultImc={imc}/>
                    <TouchableOpacity
                    onPress={() => {validadeImc()}}
                    style={styles.buttonCalculator}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>  
                </View>
                }
                <FlatList
                style={styles.listImcs}
                data={imcList.reverse()}
                renderItem={({item}) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC =</Text>
                        {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => {
                    item.id
                }}
                showsVerticalScrollIndicator={false}/>
            </View>     
        );
}