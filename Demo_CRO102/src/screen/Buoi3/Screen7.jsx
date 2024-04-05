import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState, useReducer } from 'react'

const Screen1 = () => {
    const [mon, setMon] = useState('')
    const myReducer = (state, action) => {
        switch (action.type) {
            case 'add':
                {
                    console.log('.....add: ', action.mon);
                    const newState = [...state, action.mon]
                    return newState
                }
            case 'delete': 
            {
                console.log('.....delete: ', action.mon);
                const newState = 
                            state.filter(item => item !== action.mon)
                return newState
            }
            default:
                return state
        }
    }
    const initialState = ['Toan', 'Ly', 'Hoa']
    const [count, dispatch] = useReducer(myReducer, initialState);
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Screen1: {count}</Text>
            <TextInput style={{ fontSize: 30, borderWidth: 1, borderColor: 'black'}}
                value={mon}
                onChangeText={setMon}/>
            <Text style={{ fontSize: 30 }}
                onPress={() => dispatch({ type: 'add', mon: mon })
                }>Thêm</Text>
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({})