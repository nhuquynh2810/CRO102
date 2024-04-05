import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Touch = (props) => {
    const { styles, lableTouch, onPress} = props
    return (
        <View>
            <TouchableOpacity
                style={styles.touch}
                onPress={onPress}
            >
                <Text
                    style={styles.lableTouch}
                >{lableTouch}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Touch

const styles = StyleSheet.create({})