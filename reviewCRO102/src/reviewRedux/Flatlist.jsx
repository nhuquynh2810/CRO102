import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosInstance from '../helpers/AxiosInstance';
import { useDispatch, useSelector } from 'react-redux'

const Flatlist = () => {

    const dispatch = useDispatch();
    const appState = useSelector((state) => state.app);

    //lấy api 
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const response = await AxiosInstance().get("products/getProducts_App");
            // appState.products = response.data;
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // dispatch(
        fetchProducts()
        // )
    }, [])

    // console.log('--------------------------', appState.products);
    console.log('--------------------------', products);

    const renderItem = ({ item }) => {
        const { images, _id, name } = item;
        const imageLink = images && images.length > 0 ? images[0] : null;
        return (
            <View style={styles.item}>

                <View style={styles.containImage}>
                    <Image
                        style={{ width: 80, height: 80}}
                        source={{ uri: imageLink}} />
                </View>

                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Text style={styles.first_name}>{name}</Text>

                </View>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar translucent
                backgroundColor={'transparent'}>

            </StatusBar>
            <View style={styles.header}>
                <Text style={styles.lableHeader}>DATAR PRODUK</Text>
            </View>
            <TextInput
                placeholder='Cari produk'
                style={{
                    backgroundColor: '#F2F3F2', borderRadius: 20,
                    paddingHorizontal: 20,
                }}></TextInput>
            <View style={styles.body}>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
        </View>
    )
}

export default Flatlist

const styles = StyleSheet.create({
    containEmail: {
        width: 80,
    },
    first_name: {
        color: '#000',
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: '600',
    },
    containImage: {
        width: 80,
        height: 80,
        margin: 10,
    },
    item: {
        width: '49%',
        height: 200,
        margin: 2.5,
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 2,
    },
    lableTouch: {
        color: '#fff',
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 60,
    },
    touch: {
        flex: 1,
    },
    lableHeader: {
        color: '#000',
        fontSize: 20,
        fontWeight: '900',
        fontStyle: 'italic',
        textAlign: 'center',
        lineHeight: 60,
    },
    footer: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        backgroundColor: 'blue',
    },
    body: {
        flex: 1,
        marginVertical: 20,
    },
    header: {
        width: '100%',
        height: 60,
        marginTop: 50,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
    }
})