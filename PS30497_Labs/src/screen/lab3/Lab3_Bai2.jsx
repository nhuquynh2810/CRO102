import React, { useRef } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Animated, {
    useAnimatedStyle,
    withTiming, useSharedValue
} from 'react-native-reanimated';

const ListItem = (props) => {
    const { item, viewableItems } = props;


    const rStyle = useAnimatedStyle(() => {
        const isVisible = Boolean(
            viewableItems.value
                .filter(viewableItems => viewableItems.isViewable)
                .find(viewableItems => viewableItems.item.id === item.id),
        );

        return {
            opacity: withTiming(isVisible ? 1 : 0),
            transform: [
                {
                    scale: withTiming(isVisible ? 1 : 0.5),
                },
            ],
        };
    }, []);

    return (
        <Animated.View style={[styles.itemContainer, rStyle]}>
            {/* <Text style={styles.itemText}>{item.text}</Text> */}
        </Animated.View>
    );
};

const Bai22 = () => {
    const viewableItems = useSharedValue([]);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                onViewableItemsChanged={({ viewableItems: vItems }) => {
                    viewableItems.value = vItems;
                    console.log('items: ', vItems);
                }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ListItem item={item} viewableItems={viewableItems} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Bai22;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    itemContainer: {
        width: 350,
        height: 60,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: 'green',
        borderRadius: 10,
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
  }, {
    "id": 11,
    "name": "Alla"
  }, {
    "id": 12,
    "name": "Orland"
  }, {
    "id": 13,
    "name": "Annice"
  }, {
    "id": 14,
    "name": "Celestine"
  }, {
    "id": 15,
    "name": "Alard"
  }, {
    "id": 16,
    "name": "Daren"
  }, {
    "id": 17,
    "name": "Kally"
  }, {
    "id": 18,
    "name": "Nalani"
  }, {
    "id": 19,
    "name": "Maurise"
  }, {
    "id": 20,
    "name": "Meriel"
  }, {
    "id": 21,
    "name": "Dyna"
  }, {
    "id": 22,
    "name": "Desi"
  }, {
    "id": 23,
    "name": "Pam"
  }, {
    "id": 24,
    "name": "Cathyleen"
  }, {
    "id": 25,
    "name": "Jolyn"
  }, {
    "id": 26,
    "name": "Anastasie"
  }, {
    "id": 27,
    "name": "Babara"
  }, {
    "id": 28,
    "name": "Nikolia"
  }, {
    "id": 29,
    "name": "Marcy"
  }, {
    "id": 30,
    "name": "Nanon"
  }]