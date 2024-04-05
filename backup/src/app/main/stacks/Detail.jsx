import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Touch from '../../../common/Touch'
import styles from '../../../common/AppStyle'


const Detail = () => {

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
    const getContainProductStyle = () => {
        return {
            width: '100%',
            height: 268,
            backgroundColor: '#F6F6F6'
        }
    }
    const getImgProductStyle = () => {
        return {
            width: 337,
            height: 270,
            alignSelf: 'center',
        }
    }
    const getBackNextStyle = () => {
        return {
            width: 24,
            height: 24,
        }
    }
    const getBackTouchStyle = () => {
        return {
            width: 24,
            height: 24,
            position: 'absolute',
            top: 122,
            left: 20,
        }
    }
    const getNextTouchStyle = () => {
        return {
            width: 24,
            height: 24,
            position: 'absolute',
            top: 122,
            right: 20,
        }
    }
    const getContainCharacStyle = () => {
        return {
            width: '100%',
            height: 58,
            paddingHorizontal: 30,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }
    }
    const getTextCharacStyle = () => {
        return {
            color: '#fff',
            fontSize: 13,
            textAlign: 'center',
            lineHeight: 28,
        }
    }
    const getContainTextCharacStyle = () => {
        return {
            backgroundColor: '#007537',
            marginRight: 5,
            borderRadius: 4,
            width: 68,
            height: 28,
        }
    }
    const getContainPriceStyle = () => {
        return {
            width: '100%',
            paddingHorizontal: 30,
        }
    }
    const getTextPriceStyle = () => {
        return {
            fontSize: 24,
            color: '#007537'
        }
    }
    const getContainDetailStyle = () => {
        return {
            width: 355,
            height: 34,
            borderBottomStyle: 'soiled',
            borderBottomWidth: 1,
            borderBottomColor: '#ABABAB',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
        }
    }
    const getTextDetailStyle = () => {
        return {
            fontSize: 16,
            color: '#3A3A3A',
            lineHeight: 34,
        }
    }
    const getTextQStyle = () => {
        return {
            fontSize: 16,
            color: '#007537',
            lineHeight: 34,
        }
    }
    const getContainFooter1Style = () => {
        return {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
        }
    }
    const getTextFooterStyle = () => {
        return {
            fontSize: 14,
            color: '#3A3A3A',
        }
    }
    const getTouchStyle = () => {
        return {
            backgroundColor: '#007537',
            width: '100%',
            height: 50,
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
    const getLableTouchStyle = () => {
        return {
            fontSize: 16,
            color: '#fff'
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
            <View style={getContainHeaderStyle()}
            ><TouchableOpacity>
                    <Image
                        style={getIconBackLeftStyle()}
                        source={require('../../../../assets/images/back_left.png')} />
                </TouchableOpacity>
                <Text
                    style={getNameOfPlantStyle()}
                >Tên sản phẩm</Text>
                <TouchableOpacity>
                    <Image
                        style={getIconCartStyle()}
                        source={require('../../../../assets/images/icon_cart.png')} />
                </TouchableOpacity>
            </View>
            <View
                style={getContainProductStyle()}
            >
                <Image
                    style={getImgProductStyle()}
                    source={require('../../../../assets/images/product1.png')} />
                <TouchableOpacity
                    style={getBackTouchStyle()}
                >
                    <Image
                        style={getBackNextStyle()}
                        source={require('../../../../assets/images/back_left_circle.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={getNextTouchStyle()}
                >
                    <Image
                        style={getBackNextStyle()}
                        source={require('../../../../assets/images/next_circle.png')} />
                </TouchableOpacity>
            </View>
            <View style={getContainCharacStyle()}>
                <View
                    style={getContainTextCharacStyle()}
                >
                    <Text
                        style={getTextCharacStyle()}
                    >Cây trồng</Text>
                </View>
                <View
                    style={getContainTextCharacStyle()}
                >
                    <Text
                        style={getTextCharacStyle()}
                    >Ưa bóng</Text>
                </View>
            </View>

            <View style={getContainPriceStyle()}>
                <Text style={getTextPriceStyle()}>Giá sản phẩm</Text>
            </View>

            <View style={getContainDetailStyle()}>
                <Text style={getTextDetailStyle()}>Chi tiết sản phẩm</Text>
                <View />
            </View>
            <View style={getContainDetailStyle()}>
                <Text style={getTextDetailStyle()}>Kích cỡ</Text>
                <Text style={getTextDetailStyle()}>Kích cỡ</Text>
            </View>
            <View style={getContainDetailStyle()}>
                <Text style={getTextDetailStyle()}>Xuất xứ</Text>
                <Text style={getTextDetailStyle()}>Xuất xứ</Text>
            </View>
            <View style={getContainDetailStyle()}>
                <Text style={getTextDetailStyle()}>Tình trạng</Text>
                <Text style={getTextQStyle()}>Tình trạng</Text>
            </View>
            <View style={{
                width: '100%',
                paddingHorizontal: 20
            }}>
                <View style={getContainFooter1Style()}>
                    <Text style={getTextFooterStyle()}>Đã chọn 0 sản phẩm</Text>
                    <Text style={getTextFooterStyle()}>Tạm tính</Text>
                </View>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        width: 150,
                        justifyContent: 'space-between',
                        alignItems: 'center',

                    }}>
                        <TouchableOpacity>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                                source={require('../../../../assets/images/minus.png')} />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 16,
                            color: '#000',
                        }}> 0 </Text>
                        <TouchableOpacity>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                                source={require('../../../../assets/images/plus.png')} />
                        </TouchableOpacity>
                    </View>
                    <View >
                        <Text style={{
                            fontSize: 24,
                            lineHeight: 30,
                            color: '#000'
                        }}>500000 đ</Text>
                    </View>
                </View>
            </View>
            <View style={{
                width: '100%',
                paddingHorizontal: 20,
            }}>
                <Touch
                    styles={{
                        touch: getTouchStyle(),
                        lableTouch: getLableTouchStyle()
                    }}
                    lableTouch={'CHỌN MUA'}
                />
            </View>
        </View>
    )
}

export default Detail

