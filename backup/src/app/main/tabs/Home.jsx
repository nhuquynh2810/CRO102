import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = () => {

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
  const renderItemCombo = ({ item }) => {
    const { name, image, character } = item;
    return (
      <TouchableOpacity>
      <View
        style={{
          height: 134,
          backgroundColor: '#E8E8E8',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 5,
          borderRadius: 8,
        }}>
        <View 
        style={{padding: 20,
         flexDirection: 'column',
         justifyContent: 'flex-start',
         alignItems: 'flex-start',
         width: 250,
         }}>
          <Text
          style={{color: '#000', fontSize: 16,}}
          numberOfLines={1}
          >{name}</Text>
          <Text
           style={{color: '#7D7B7B', fontSize: 14,}}
          numberOfLines={3}
          >{character}{character}{character}{character}{character}</Text>
        </View>
        <Image
          style={{ width: 108, height: 134, borderTopRightRadius: 8, borderBottomRightRadius: 8, }}
          source={{ uri: image }}></Image>
      </View>
      </TouchableOpacity>
    )
  }

  const getContainerStyle = () => {
    return {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F6F6F6'
    }
  }
  const getBgHomeStyle = () => {
    return {
      width: '100%',
      height: 205,
    }
  }

  const getContainHeaderStyle = () => {
    return {
      backgroundColor: 'grey',
      width: '100%',
      marginTop: 113,
    }
  }
  const getTitleStyle = () => {
    return {
      fontSize: 24,
      color: '#221F1F',
      position: 'absolute',
      top: -235,
      left: 25,
    }
  }
  const getSubTitle = () => {
    return {
      fontSize: 16,
      color: '#007537',
      position: 'absolute',
      top: -160,
      left: 25,
    }
  }
  const getIconCartStyle = () => {
    return {
      width: 48,
      height: 46,
      position: 'absolute',
      top: -240,
      right: 25,
    }
  }
  const getItemContainer = () => {
    return {
      width: 170,
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
  const getCategoryStyle = () => {
    return {
      fontSize: 24,
      color: '#221F1F',
      marginBottom: 10,
    }
  }
  const getMoreStyle = () => {
    return {
      fontSize: 18,
      fontVariant: 'underline',
      textAlign: 'right',
      color: '#221F1F'
    }
  }
  const getContainMoreStyle = () => {
    return {
      borderBottomStyle: 'soiled',
      borderBottomWidth: 1,
      borderBottomColor: '#221F1F',
      marginTop: 20,
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
        <Image
          style={getBgHomeStyle()}
          source={require('../../../../assets/images/bgHome.png')}
        />
        <View style={{ width: 223 }}>
          <Text
            style={getTitleStyle()}
          >Planta - Tỏa sáng không gian nhà bạn</Text>
        </View>
        <TouchableOpacity>
          <Text
            style={getSubTitle()}
          >Xem hàng mới về</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={getIconCartStyle()}
            source={require('../../../../assets/images/icon_cart_circle.png')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 24 }}>
          <Text style={getCategoryStyle()}>Cây trồng</Text>
          <FlatList
            data={products}
            renderItem={renderItemPlant}
            keyExtractor={item => item.id}
            horizontal={false}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}>
          </FlatList>
          <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}>
            <View style={getContainMoreStyle()}>
              <Text style={getMoreStyle()}>Xem thêm cây trồng</Text>
            </View>
          </TouchableOpacity>
        </View>


        <View style={{ padding: 24 }}>
          <Text style={getCategoryStyle()}> Chậu Cây trồng</Text>
          <FlatList
            data={products}
            renderItem={renderItemPlant}
            keyExtractor={item => item.id}
            horizontal={false}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}>
          </FlatList>
          <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}>
            <View style={getContainMoreStyle()}>
              <Text style={getMoreStyle()}>Xem thêm phụ kiện</Text>
            </View>
          </TouchableOpacity>
        </View>



        <View style={{ padding: 24 }}>
          <Text style={getCategoryStyle()}>Combo chăm sóc (mới)</Text>
          <FlatList
            data={products}
            renderItem={renderItemCombo}
            keyExtractor={item => item.id}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}>
          </FlatList>
          <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}>
            <View style={getContainMoreStyle()}>
              <Text style={getMoreStyle()}>Xem thêm combo</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const products = [{
  "id": 1,
  "name": "Florencia",
  "price": "$5.10",
  "image": "http://dummyimage.com/202x100.png/5fa2dd/ffffff",
  "character": "Acanthus spinosus L.",
  "quantity": 52
}, {
  "id": 2,
  "name": "Keary",
  "price": "$0.67",
  "image": "http://dummyimage.com/218x100.png/dddddd/000000",
  "character": "Epilobium canum (Greene) P.H. Raven ssp. latifolium (Hook.) P.H. Raven",
  "quantity": 85
}, {
  "id": 3,
  "name": "Roger",
  "price": "$5.25",
  "image": "http://dummyimage.com/225x100.png/ff4444/ffffff",
  "character": "Viola labradorica Schrank",
  "quantity": 61
}, {
  "id": 4,
  "name": "Janelle",
  "price": "$9.18",
  "image": "http://dummyimage.com/130x100.png/ff4444/ffffff",
  "character": "Lobelia gloria-montis Rock",
  "quantity": 22
}, {
  "id": 5,
  "name": "Cale",
  "price": "$1.24",
  "image": "http://dummyimage.com/155x100.png/ff4444/ffffff",
  "character": "Erythrina sandwicensis O. Deg.",
  "quantity": 27
}]