import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Search = () => {

    const renderItemSearch = ({item}) =>{
        const {id, name, price, image, quantity} = item;
        return(
            <TouchableOpacity>
            <View style={getItemSearchStyle()}>
                <Image
                style={getImageStyle()}
                source={{uri: image}}/>
                <View style={getContainTextStyle()}>
                    <Text style={getNamePriceStyle()}>{name}</Text>
                    <Text style={getNamePriceStyle()}>{price}</Text>
                    <Text style={getQuantityStyle()}>Còn {quantity} sp</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
    const getQuantityStyle = () =>{
        return{
        color: '#000', 
        fontSize: 14,
        }
    }
    const getNamePriceStyle = () =>{
        return{
        color: '#000', 
        fontSize: 16,
        }
    }
    const getContainTextStyle = () =>{
        return{
        paddingHorizontal: 10,
        }
    }
    const getImageStyle = () =>{
        return{
            width: 77,
            height: 77,
            borderRadius: 8,
        }
    }
    const getItemSearchStyle = () =>{
        return{
            width: '100%',
            height: 77,
            marginVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
        }
    }

    const getContainerStyle = () => {
        return {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
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
    const getInputStyle = () => {
        return {
            width: '100%',
            paddingHorizontal: 48,
        }
    }
    const getTextInputStyle = () => {
        return {
            color: '#000',
            fontSize: 16,
            paddingRight: 40,
        }
    }
    const getUnderlineStyle = () => {
        return {
            width: '100%',
            height: 1,
            backgroundColor: '#000', 
            position: 'absolute',
            left: 48,
            top: 38,

        }
    }
    const getIconSearchStyle = () => {
        return {
            width: 24,
            height: 24,
            position: 'absolute',
            right: 48,
            top: 10,
        }
    }
    const Ex = () => {
        return {

        }
    }
    return (
        <View style={getContainerStyle()}>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor={'transparent'}>
            </StatusBar>
            <View style={getContainHeaderStyle()}>
                <TouchableOpacity style={{flex: 1}}>
                    <Image
                        style={getIconBackLeftStyle()}
                        source={require('../../../../assets/images/back_left.png')} />
                </TouchableOpacity>
                <Text
                    style={getNameOfPlantStyle()}
                >Tìm kiếm</Text>
                <View style={{flex: 1}}></View>
            </View>
            <View
                style={getInputStyle()}
            >
                <TextInput
                placeholderTextColor={'#ABABAB'}
                    placeholder={'Search name of plant'}
                    style={getTextInputStyle()}
                >
                </TextInput>
                <View style={getUnderlineStyle()}></View>
                <Image
                style={getIconSearchStyle()}
                source={require('../../../../assets/images/icon_search.png')}
                />
            </View>
            <View 
            style={{
                width: '100%',
                paddingHorizontal: 48,
                marginTop: 20,
                }}>
                <FlatList
                data={products}
                renderItem={renderItemSearch}
                keyExtractor={item => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
})

const products = [{
    "id": 1,
    "name": "Amata",
    "price": "$7.01",
    "image": "http://dummyimage.com/147x100.png/ff4444/ffffff",
    "character": "Dalea frutescens A. Gray",
    "quantity": 21
  }]