import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import PagerView from 'react-native-pager-view';

const Slider = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const images = [
        require('../../resourses/images/image1.jpg'),
        require('../../resourses/images/image2.jpg'),
        require('../../resourses/images/image3.jpg'),
    ]
    const renderImages = () => {
        // return images.map((item, index) => {
        return (
            <View key={selectedIndex + 1}>
                <Image
                    source={images[selectedIndex]}
                    style={styles.imageProduct}
                />
            </View>
        )
        // })
    }
    const renderDots = () => {
        return images.map((item, index) => {
            return (
                <View key={index + 1}
                    style={{
                        marginTop: -25,
                        width: 10, height: 10,
                        borderRadius: 5,
                        backgroundColor: selectedIndex === index ? 'black' : 'gray',
                        margin: 5
                    }} />
            )
        })
    }
    return (
        <View style={styles.slider}>
            <PagerView style={styles.pagerView}
                initialPage={selectedIndex}>
                {renderImages()}
            </PagerView>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {renderDots()}
            </View>

            <TouchableOpacity style={styles.previousIcon} onPress={() => { selectedIndex == 0 ? setSelectedIndex(selectedIndex) : setSelectedIndex(selectedIndex - 1) }}>
                <Image source={require('../../resourses/images/back.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextIcon} onPress={() => { selectedIndex + 1 <= images.length - 1 ? setSelectedIndex(selectedIndex + 1) : setSelectedIndex(selectedIndex); console.log(selectedIndex); }}>
                <Image style={styles.nextIcon} source={require('../../resourses/images/back.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    nextIcon: {
        position: 'absolute',
        top: 55,
        right: 15
    },
    previousIcon: {
        position: 'absolute',
        left: 15,
        top: 110
    },pagerView: {
        width: '100%',
        height: 250,
    },
})