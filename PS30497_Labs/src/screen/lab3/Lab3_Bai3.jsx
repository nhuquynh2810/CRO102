import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedScrollHandler,
    Extrapolation,
    interpolate,
} from 'react-native-reanimated';

const getInterpolation = (
    value,
    startOut,
    endOut,
    startIn = 0,
    endIn = 200 // endIn set to 200 for the header height
) => {
    'worklet';
    return interpolate(value, [startIn, endIn], [startOut, endOut], {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
    });
};

const Lab3_Bai3 = () => {

    const translationY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler(event => {
        translationY.value = event.contentOffset.y;
    });

    const headerStyle = useAnimatedStyle(() => {
        const height = getInterpolation(translationY.value, 300, 60);
        const padding = getInterpolation(translationY.value, 24, 16);

        return {
            height,
            padding,
        }
    });

    const imageStyle = useAnimatedStyle(() => {
        const opacity = interpolate(translationY.value, [60, 200], [1, 0]);
        const width = interpolate(translationY.value, [60, 200], [100, 0]);
        const height = interpolate(translationY.value, [60, 200], [100, 0]);

        return {
            opacity,
            width,
            height,
        };
    });

    const renderItem = ({item}) =>{
        const {name} = item;
        return(
            <View style={styles.itemContainer}>
                <Text>{name}</Text>
            </View>
        )
    }
    const renderItem2 = ({item}) =>{
        const {name} = item;
        return(
            <View style={styles.itemContainer2}>
                <Text>{name}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>

            <Animated.View style={[styles.header, headerStyle]}>
                <Text style={styles.text}>
                    MD18303
                </Text>
                <Animated.Image
                    source={{ uri: 'https://images.rtl.fr/~c/770v513/rtl/www/1261519-neytiri-zoe-saldana-dans-avatar.jpg' }}
                    style={[styles.avatar, imageStyle]}
                />
               <Text style={styles.text}>Nguyễn Thùy Như Quỳnh</Text>
            </Animated.View>
            <Animated.ScrollView
                style={styles.scroll}
                onScroll={scrollHandler}
            // scrollEventThrottle={16}
            >
              
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false}
                    style={styles.content}
                />
            </Animated.ScrollView>
        </View>
    );
};

export default Lab3_Bai3;

const styles = StyleSheet.create({
    itemContainer:{
        width: 350,
        height: 60,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: 'grey',
        borderRadius: 10,
    },
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        backgroundColor: 'green',
        height: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    content: {
        height: 1000,
    },
    avatar: {
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    scroll: {
        flex: 1,
    },
});

var data = [{
    "id": 1,
    "name": "Delinda"
}, {
    "id": 2,
    "name": "Lorant"
}, {
    "id": 3,
    "name": "Drona"
}, {
    "id": 4,
    "name": "Jay"
}, {
    "id": 5,
    "name": "Ruddy"
}, {
    "id": 6,
    "name": "Carri"
}, {
    "id": 7,
    "name": "Iver"
}, {
    "id": 8,
    "name": "Judith"
}, {
    "id": 9,
    "name": "Imogen"
}, {
    "id": 10,
    "name": "Marena"
}]