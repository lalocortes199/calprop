import { StyleSheet, View } from "react-native";
import { TextButton } from "./TextButton";
import { useState } from 'react';
 
export function Stepper(props) {
const defaultMinValue = 0;
const defaultmaxValue = 100;
const defaultIncrememt = 1;
const defaultValue = defaultMinValue;

const minValue = parseFloat(props.minValue) ?? defaultMinValue;
const maxValue = parseFloat(props.maxValue) ?? defaultmaxValue;
const increment = parseFloat(props.increment) ?? defaultIncrememt;
let value = parseFloat(props.value) || defaultValue;

function buttonincrement(){
    if (value + increment <= maxValue){
    const newvalue = value + increment;
    props.onChange(newvalue.toString())
    console.log('value antes:' + value)
}
}
function buttondecrement(){
    if (value - increment >= minValue){
    const newvalue = value - increment;
    props.onChange(newvalue.toString())
    console.log('value antes:' + value)
 }
}

    return(
        <View style={styles.mainContainer}>
            <TextButton
            title="-"
            buttonStyle={styles.minusButtonStyle}
            textStyle={styles.buttonTextStyle}
            onPress = {buttondecrement}
            />
            <TextButton
            title="+"
            buttonStyle={styles.plusButtonStyle}
            textStyle={styles.buttonTextStyle} 
            onPress = {buttonincrement}
            />
        </View>
    )
}
 
const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent:'flex-end',
        gap: 2
    },
    plusButtonStyle:{
        borderColor: 'gray',
        backgroundColor: 'gray',
        minWidth: 36,
        minHeight: 36,
        alignItems: 'center'
    },
    minusButtonStyle: {
        borderColor: 'lightgray',
        backgroundColor: 'lightgray',
        minWidth: 36,
        minHeight: 36,
        alignItems: 'center'
    },
    buttonTextStyle:{
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    }
})