import React, { useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSpring
} from 'react-native-reanimated';
const Screen = () => {
    const transformX = useSharedValue(0);
    const transformY = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: transformX.value },
        { translateY: transformY.value }],
    }));

    useEffect(() => {
        setTimeout(() => {
            // đi xuống
            transformY.value = withTiming(200, { duration: 2000 })
        }, 0);
        setTimeout(() => {
            // đi ngang
            transformX.value = withTiming(200, { duration: 2000 })
        }, 2000);
        setTimeout(() => {
            // đi lên
            transformY.value = withTiming(0, { duration: 2000 })
        }, 4000);
        setTimeout(() => {
            // đi ngang
            transformX.value = withTiming(0, { duration: 2000 })
        }, 6000);
    }, [])

    return (
        <View style={{}}>
            <Animated.View style={[styles.box, animatedStyles]} />
        </View>
    )
}

export default Screen

const styles = StyleSheet.create({
    box: {
        height: 120,
        width: 120,
        backgroundColor: '#b58df1',
        borderRadius: 20,
    },
});