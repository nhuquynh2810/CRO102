import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Category = () => {

    const [selectedCategory, setSelectedCategory] = useState(0)

    const renderItemPlant = ({ item }) => {
        const { id, name, price, image, character } = item;
        return (
            <TouchableOpacity>
                <View style={getItemContainer()}>

                    <View style={getContainImgProducts()}>
                        <Image
                            style={getImgProductStyle()}
                            source={{ uri: image }} />
                    </View>

                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <View>
                            <Text style={getNameStyle()}>{name}</Text>
                        </View>
                        <View>
                            <Text style={getCharacterStyle()}>{character}</Text>
                        </View>

                        <View>
                            <Text
                                numberOfLines={1}
                                style={getPriceStyle()}>{price}</Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
    const renderItemCategories = ({ item }) => {
        const { id, name } = item;
        return (
            <TouchableOpacity
                onPress={() => setSelectedCategory(item._id)}
                style={[getContainCategoriesStyle(), selectedCategory === item._id && { backgroundColor: 'green' }]}
            >
                <Text style={[getTextCategoriesStyle(), selectedCategory === item._id && { color: '#fff' }]}>{name}</Text>

            </TouchableOpacity>
        )
    }

    const getContainerStyle = () => {
        return {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 30,
        }
    }
    const getContainHeaderStyle = () => {
        return {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 15,
            marginTop: 44,
        }
    }
    const getIconBackLeftStyle = () => {
        return {
            width: 24,
            height: 24,
        }
    }
    const getNameOfPlantStyle = () => {
        return {
            fontSize: 16,
            color: '#000',
            ...styles.fontAppMedium,
        }
    }
    const getIconCartStyle = () => {
        return {
            width: 24,
            height: 24,
        }
    }
    const getItemContainer = () => {
        return {
            width: 165,
            height: 217,
            margin: 7.5,
            borderRadius: 8,
            flexDirection: 'column',
            // backgroundColor: 'green'
        }
    }
    const getContainImgProducts = () => {
        return {
            width: '100%',
            height: 134,
            borderRadius: 8,
            backgroundColor: '#fff'
        }
    }
    const getImgProductStyle = () => {
        return {
            width: '100%',
            height: '100%',
            borderRadius: 8,
        }
    }
    const getNameStyle = () => {
        return {
            fontSize: 16,
            color: '#221F1F'
        }
    }
    const getCharacterStyle = () => {
        return {
            fontSize: 14,
            color: '#7D7B7B'
        }
    }
    const getPriceStyle = () => {
        return {
            fontSize: 16,
            color: '#007537'
        }
    }
    const getContainCategoriesStyle = () => {
        return {
            marginHorizontal: 10,
            height: 28,
            padding: 5,
            marginBottom: 20,
            borderRadius: 4,
            // flexDirection: 'row',
            // justifyContent: 'center',
            // alignItems: 'center',
        }
    }
    const getTextCategoriesStyle = () => {
        return {
            color: '#7D7B7B',
            fontSize: 14,
        }
    }

    return (
        <View style={getContainerStyle()}>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor={'transparent'}>
            </StatusBar>
            <View style={getContainHeaderStyle()}
            ><TouchableOpacity>
                    <Image
                        style={getIconBackLeftStyle()}
                        source={require('../../../../assets/images/back_left.png')} />
                </TouchableOpacity>
                <Text
                    style={getNameOfPlantStyle()}
                >Tên loại sản phẩm</Text>
                <TouchableOpacity>
                    <Image
                        style={getIconCartStyle()}
                        source={require('../../../../assets/images/icon_cart.png')} />
                </TouchableOpacity>
            </View>
            <FlatList
                style={{ marginHorizontal: 24, }}
                data={categories}
                renderItem={renderItemCategories}
                keyExtractor={item => item._id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            <FlatList
                data={products}
                renderItem={renderItemPlant}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Category

const styles = StyleSheet.create({})
const categories = [{
    "_id": 1,
    "name": "Larkins"
}, {
    "_id": 2,
    "name": "McGeaney"
}, {
    "_id": 3,
    "name": "Pickvance"
}, {
    "_id": 4,
    "name": "Jukes"
}, {
    "_id": 5,
    "name": "Zoppie"
}, {
    "_id": 6,
    "name": "Dudenie"
}, {
    "_id": 7,
    "name": "Sheringham"
}, {
    "_id": 8,
    "name": "Comolli"
}, {
    "_id": 9,
    "name": "Kloser"
}, {
    "_id": 10,
    "name": "MacNelly"
}]
const products = [{
    "id": 1,
    "name": "Kelila",
    "price": "$5.93",
    "image": "http://dummyimage.com/157x100.png/cc0000/ffffff",
    "character": "Antelope, four-horned"
}, {
    "id": 2,
    "name": "Cassondra",
    "price": "$6.18",
    "image": "http://dummyimage.com/216x100.png/5fa2dd/ffffff",
    "character": "Goose, greylag"
}, {
    "id": 3,
    "name": "Gaultiero",
    "price": "$4.85",
    "image": "http://dummyimage.com/227x100.png/dddddd/000000",
    "character": "Frilled dragon"
}, {
    "id": 4,
    "name": "Hilarius",
    "price": "$6.30",
    "image": "http://dummyimage.com/216x100.png/ff4444/ffffff",
    "character": "Common waterbuck"
}, {
    "id": 5,
    "name": "Harriette",
    "price": "$1.57",
    "image": "http://dummyimage.com/234x100.png/ff4444/ffffff",
    "character": "Racer snake"
}, {
    "id": 6,
    "name": "Kasey",
    "price": "$6.75",
    "image": "http://dummyimage.com/223x100.png/5fa2dd/ffffff",
    "character": "African clawless otter"
}, {
    "id": 7,
    "name": "Alla",
    "price": "$9.65",
    "image": "http://dummyimage.com/153x100.png/dddddd/000000",
    "character": "Brindled gnu"
}, {
    "id": 8,
    "name": "Mada",
    "price": "$5.65",
    "image": "http://dummyimage.com/180x100.png/cc0000/ffffff",
    "character": "Barbet, crested"
}, {
    "id": 9,
    "name": "Roana",
    "price": "$1.08",
    "image": "http://dummyimage.com/172x100.png/ff4444/ffffff",
    "character": "Armadillo, nine-banded"
}, {
    "id": 10,
    "name": "Rosana",
    "price": "$8.16",
    "image": "http://dummyimage.com/201x100.png/cc0000/ffffff",
    "character": "Canadian tiger swallowtail butterfly"
}]