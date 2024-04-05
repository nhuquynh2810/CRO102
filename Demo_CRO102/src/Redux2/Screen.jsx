import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { tang, addItem, editItem, removeItem } from '../Redux2/redux/Reducer'
import { useDispatch, useSelector } from 'react-redux'

const Screen = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.app);

  const add = () => {
    dispatch(addItem(
      {
        id: Math.floor(Math.random() * 5),
        name: 'iphone',
        price: 1000,
        quantity: 1
      }
    ))
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Screen: {appState.count}</Text>
      <Button title='Tăng' onPress={() => dispatch(tang(1))} />
      <Button title='Thêm' onPress={add} />
      {
        appState.cart.map((item) => {
          return (
            <View key={item.id}>
              <Text style={{ fontSize: 20 }}>{console.log(item.id)}Name: {item.name} - Quantity: {item.quantity} - Price: {item.price}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Button title='Tăng' onPress={() => dispatch(editItem({ id: item.id, quantity: 1 }))} />
                <Button title='Xóa' onPress={() => dispatch(removeItem(item.id))} />
                <Button title='Gỉam' onPress={() => dispatch(editItem({ id: item.id, quantity: -1 }))} />
              </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default Screen

const styles = StyleSheet.create({})
