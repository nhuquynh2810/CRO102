import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderRighttt = (props) => {

  const {iconRight, styles} = props

  return (
    <View>
      <Image
      source={iconRight}
      style={styles.iconRight}
      />
    </View>
  )
}

export default RenderRighttt