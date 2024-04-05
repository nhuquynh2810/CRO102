import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
// memo: lưu lại kết quả render trước đó, 
// nếu giống nhau thì không render lại
const Screen4 = memo(function MyScreen(props) {
    console.log('.....Render Screen');
    return (
        <View>
            <Text>Screen</Text>
        </View>
    )
})

export default Screen4

const styles = StyleSheet.create({})