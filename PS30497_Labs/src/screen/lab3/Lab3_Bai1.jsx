import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const Lab3_Bai1 = () => {
    // Tạo offset với giá trị ban đầu là 100
    const offset = useSharedValue(100);

    // Tạo animated style với value của offset
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: offset.value }],//di chuyển dọc
        }
    })

    const onClickButton = () => {
        offset.value = withTiming(
            // Math.ceil(Math.random() * 600) //Mỗi lần random 1 giá trị
            500
            , 
            { duration: 1500 }, () => {
            // Khi hoàn thành hiệu ứng chuyển động, đặt lại offset về 100
            offset.value = 100;
        });
    }
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={onClickButton}>
                <Text style={styles.buttonText}>MOVE</Text>
            </TouchableOpacity>
            <Animated.View style={[styles.box, animatedStyles]} />
        </View >
    )
}

export default Lab3_Bai1

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        alignSelf: 'center',
        marginTop: 20
    },
    box: {
        alignSelf: 'center',
        width: 50,
        height: 50,
        borderRadius: 8,
        backgroundColor: 'pink'
    }
})