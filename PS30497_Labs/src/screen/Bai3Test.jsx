import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';

const getInterpolation = (
    value,
    startOut,
    endOut,
    startIn = 0,
    endIn = 200 // Điều chỉnh giá trị này cho phù hợp với kích thước của ScrollView
) => {
    'worklet';
    return interpolate(value, [startIn, endIn], [startOut, endOut]);
};

const Lab3_Bai3 = () => {

    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y;
    });

    const headerStyle = useAnimatedStyle(() => {
        const height = getInterpolation(scrollY.value, 200, 60); // Giảm kích thước của header khi cuộn

        return {
            height,
        };
    });

    const imageStyle = useAnimatedStyle(() => {
        const height = getInterpolation(scrollY.value, 100, 0); // Giảm kích thước của header khi cuộn
        const width = getInterpolation(scrollY.value, 100, 0); // Giảm kích thước của header khi cuộn

        return {
            height,
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header, headerStyle]}>
                <Text style={{ color: '#fff', fontSize: 20 }}>MD18303_PS30497</Text>
                <View style={styles.avatarContainer}>
                    <Animated.Image
                        source={{ uri: 'https://images.rtl.fr/~c/770v513/rtl/www/1261519-neytiri-zoe-saldana-dans-avatar.jpg' }}
                        style={[styles.avatar, { opacity: imageStyle.opacity }]}
                    />
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>
                    Nguyễn Thùy Như Quỳnh
                </Text>
            </Animated.View>
            <Animated.ScrollView
                style={styles.scroll}
                onScroll={scrollHandler}
                scrollEventThrottle={16} // Đảm bảo sự kiện cuộn được gửi liên tục
            >
                <View style={styles.content}>
                    {/* Nội dung của ScrollView */}
                </View>
            </Animated.ScrollView>
        </View>
    );
};

export default Lab3_Bai3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        flex: 1,
        backgroundColor: 'pink'
    },
    content: {
        height: 1000, // Đảm bảo có đủ nội dung để cuộn
    },
    header: {
        width: '100%',
        backgroundColor: 'green',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    avatarContainer: {
        marginBottom: 10,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});
