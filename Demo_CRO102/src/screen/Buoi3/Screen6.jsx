import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useReducer } from 'react'

const Screen6 = () => {
    const myReducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                {
                    return state + action.value;
                }
            case 'decrement':
                return state - action.value;
            default:
                return state
        }
    }
    // const [count, setCount] = useState(0);
    const initialState = 0
    const [count, dispatch] = useReducer(myReducer, initialState);

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Screen1: {count}</Text>
            <Text
                onPress={() => dispatch({ type: 'increment', value: 10 })
                }>Increment</Text>
            <Text
                onPress={() => dispatch({ type: 'decrement', value: 5 })
                }>Decrement</Text>
        </View>
    )
}

export default Screen6

const styles = StyleSheet.create({})