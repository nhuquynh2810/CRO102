import { View, Text } from 'react-native'
import React from 'react'

const renderCenter = (props) => {
  const {title, styles} = props
  return (
    <View style={styles.renderCenterContain}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default renderCenter