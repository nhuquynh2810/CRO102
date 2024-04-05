import { FlatList, Image, StatusBar, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Cart = () => {

  const renderItemCart = ({ item }) => {
    const { id, name, price, image, quantity } = item;
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <View style={{ position: 'relative', width: 45, }}>
          <TouchableOpacity>
            <Image
              style={styles.checkbox}
              source={require('../../../../assets/images/square_checked.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.checkbox}
              source={require('../../../../assets/images/square_unchecked.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.itemSearchStyle}>
          <Image
            style={styles.imageStyle}
            source={{ uri: image }} />
          <View style={styles.containTextStyle}>
            <Text
              numberOfLines={1}
              style={styles.nameStyle}>{name}</Text>
            <Text style={styles.priceStyle}>{price}</Text>
            <View style={styles.containPlusMinus}>
              <TouchableOpacity>
                <Image
                  style={styles.minus}
                  source={require('../../../../assets/images/minus.png')}
                />
              </TouchableOpacity>
              <Text style={{ width: 50, textAlign: 'center', fontSize: 14, color: '#000' }}>{price}</Text>
              <TouchableOpacity>
                <Image
                  style={styles.plus}
                  source={require('../../../../assets/images/plus.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ marginLeft: 50, fontSize: 16, color: '#000' }}>Xóa</Text>
                <View style={{ borderTopColor: '#000', borderTopWidth: 1, marginLeft: 50 }}></View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={'transparent'}>
      </StatusBar>
      <View style={styles.containHeaderStyle}>
        <TouchableOpacity>
          <Image
            style={styles.iconBackLeftStyle}
            source={require('../../../../assets/images/back_left.png')} />
        </TouchableOpacity>
        <Text
          style={styles.nameOfPlantStyle}
        >GIỎ HÀNG</Text>
        <TouchableOpacity>
          <Image
            style={styles.iconBackLeftStyle}
            source={require('../../../../assets/images/delete.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          // width: '100%',
          paddingHorizontal: 23.5,
          marginTop: 5,
          flex: 1,
        }}>
        <FlatList
          data={products}
          renderItem={renderItemCart}
          keyExtractor={item => item.id}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.containFooterStyle}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <Text style={{ fontSize: 14, color: '#000', }}>Tạm tính</Text>
          <Text style={{ fontSize: 16, color: '#000', }}>totallllllllllllllllllllllllllll</Text>
        </View>
        <TouchableOpacity style={styles.btnPay}>
          <Text style={{ color: '#fff', fontSize: 18, }}>Tiến hành thanh toán</Text>
          <Image
            source={require('../../../../assets/images/icon_right.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  containPlusMinus: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10
  },
  btnPay: {
    backgroundColor: '#007537',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50, alignItems: 'center',
    marginTop: 10,
  },
  containFooterStyle: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  plus: {
    width: 20,
    height: 20,
  },
  minus: {
    width: 20,
    height: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 45

  },
  quantityStyle: {
    color: '#000',
    fontSize: 14,
  },
  priceStyle: {
    fontSize: 16,
    color: '#007537'
  },
  nameStyle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    width: '100%',
    textAlign: 'left'
  },
  containTextStyle: {
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
  },
  imageStyle: {
    width: 77,
    height: 77,
    borderRadius: 8,
  },
  itemSearchStyle: {
    width: '100%',
    height: 77,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameOfPlantStyle: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500'
  },
  iconBackLeftStyle: {
    width: 24,
    height: 24,
  },
  containHeaderStyle: {
    width: '100%',
    // backgroundColor: 'red',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    // paddingVertical: 15,
    marginTop: 44,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

var products = [
  {
    "id": 1,
    "name": "Kelilsadsvfbgfnhgjghfgdfsfdgfadhgsdjfbdvcdsffvdcx csdvfvbhngbvfcdsxdcvfgbhna",
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
  }
];