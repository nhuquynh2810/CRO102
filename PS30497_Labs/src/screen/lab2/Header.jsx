import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = (props) => {

    const { user } = props;

    return (
        <View
            style={{
                height: 100,
                backgroundColor: '#fff',
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <Image
                resizeMode="center"
                style={styles.avatar}
                source={{ uri: user.avatar }}
            />
            <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chào ngày mới</Text>
            <Text
            style={styles.name}
            > {user.name}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    avatar:{
        width: 60,
        height: 60,
        borderRadius: 10,
    }
})