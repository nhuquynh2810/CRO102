import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { increment, decrement, incrementByAmount } from '../../redux/Reducer'
import { useDispatch, useSelector } from 'react-redux'

const Screen = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  console.log('......counter: ', counter)
  return (
    <View>
      <Text style={{fontSize: 30}}>Screen: {counter.count}</Text>

      <Button title='Tăng' onPress={() => dispatch(increment())} />
      <Button title='Giảm' onPress={() => dispatch(decrement())} />
      <Button title='Tăng 5' 
            onPress={() => dispatch(incrementByAmount(5))} />
    </View>
  )
}

export default Screen

const styles = StyleSheet.create({})