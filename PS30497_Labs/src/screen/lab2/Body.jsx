import { StyleSheet, Text, TextInput, ToastAndroid, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Body = (props) => {

    const { onUpdateInfor, onClickChangeBgFooter } = props;

    const [name, setName] = useState('');
    const [linkImage, setLinkImage] = useState('');

    const handleChangeInfo = () => {
        if (name.length > 0 && linkImage.length > 0) {
            onUpdateInfor({ name, avatar: linkImage });
            setName('')
            setLinkImage('')
        } else {
            ToastAndroid.show('Không được để trống', ToastAndroid.SHORT);
        }
    }
    return (
        <View>
            <TextInput
                value={name}
                onChangeText={setName}
                style={{ borderColor: 'gray', borderWidth: 2, borderRadius: 10, marginHorizontal: 10, }}
            ></TextInput>
            <TextInput
                value={linkImage}
                onChangeText={setLinkImage}
                style={{marginTop: 10, borderColor: 'gray', borderWidth: 2, borderRadius: 10, marginHorizontal: 10, }}
            ></TextInput>
            <TouchableOpacity
                style={{ margin: 10, borderRadius: 20, backgroundColor: 'pink', width: 200, height: 60, alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                onPress={handleChangeInfo}
            ><Text>Cập nhật thông tin</Text></TouchableOpacity>
            <TouchableOpacity
                style={{ margin: 10, borderRadius: 20, backgroundColor: 'pink', width: 150, height: 60, alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                onPress={onClickChangeBgFooter}
            ><Text>Đổi màu footer</Text></TouchableOpacity>
        </View>
    )
}

export default Body

const styles = StyleSheet.create({})