import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { valueA, valueB, addition, subtraction, multiplication, division, refresh } from './redux/Reducer'

const lab5 = () => {
    const [inputValueA, setInputValueA] = useState("");
    const [inputValueB, setInputValueB] = useState("");
    //Hiển thị dấu + - * /
    const [operator, setOperator] = useState('');
    const dispatch = useDispatch();
    const result = useSelector((state) => state.calculate.result);

    const handlerAddition = () => {
        dispatch(valueA(parseInt(inputValueA))); dispatch(valueB(parseInt(inputValueB)));
        setOperator('+')
        return dispatch(addition());
    }
    const handlerSubtraction = () => {
        dispatch(valueA(parseInt(inputValueA))); dispatch(valueB(parseInt(inputValueB)));
        setOperator('-')
        return dispatch(subtraction());
    }
    const handlerMutiplication = () => {
        dispatch(valueA(parseInt(inputValueA))); dispatch(valueB(parseInt(inputValueB)));
        setOperator('x')
        return dispatch(multiplication());
    }
    const handlerDivision = () => {
        dispatch(valueA(parseInt(inputValueA))); dispatch(valueB(parseInt(inputValueB)));
        setOperator('/')
        return dispatch(division());
    }
    const handlerRefresh = () => {
        setInputValueA("")
        setInputValueB("")
        dispatch(refresh())
        setOperator('')
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='a' onChangeText={setInputValueA} value={inputValueA} />
                <Text style={styles.operator}>{operator}</Text>
                <TextInput style={styles.input} placeholder='b' onChangeText={setInputValueB} value={inputValueB} />
            </View>
         
            <Text style={styles.result}>{result}</Text>

            <View style={styles.containTouch}>
                <TouchableOpacity style={styles.button} onPress={handlerAddition} >
                    <Text style={styles.buttonTitle}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handlerSubtraction} >
                    <Text style={styles.buttonTitle}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handlerMutiplication} >
                    <Text style={styles.buttonTitle}>x</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handlerDivision} >
                    <Text style={styles.buttonTitle}>/</Text>
                </TouchableOpacity>

                
            </View>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'orange' }]} onPress={handlerRefresh} >
                    <Text style={styles.buttonTitle}>C</Text>
                </TouchableOpacity>
        </View>
    )
}

export default lab5

const styles = StyleSheet.create({
    operator: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black'
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#000',
    },

    button: {
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        borderColor: '#000',
        borderWidth: 3,
    },
    containTouch:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    result: {
        width: '100%',
        fontSize: 40,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'right',
        marginBottom: 10,
        marginTop: 100,
    },
    resutlTitle: {
        fontSize: 30,
        textAlign: 'right',
        color: '#000',
        fontWeight: 'bold',
        margin: 10,
        marginTop: 150,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        padding: 16,
        paddingTop: 150,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        paddingLeft: 10,
        fontSize: 20,
        borderBottomWidth: 2,
        width: '35%'
    }
})