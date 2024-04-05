import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = (props) => {

    const {timeUpdate, backgroundColor} = props;

  return (
    <View
    style={{
        height: 100,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    }}
    >
      <Text style={styles.text}>
        Thời gian bạn cập nhật thông tin: {timeUpdate}
      </Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});