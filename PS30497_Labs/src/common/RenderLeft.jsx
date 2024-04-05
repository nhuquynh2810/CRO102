import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const renderLeft = (props) => {
const {iconLeft, styles} = props
  return (
    <View style={styles.renderLeftContain}>
      <Image
      source={iconLeft}
      style={styles.iconLeft}
      ></Image>
    </View>
  )
}

export default renderLeft