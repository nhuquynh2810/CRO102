import { StyleSheet, Text, View, Button, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary }
    from 'react-native-image-picker';
import axios from 'axios';

const Exercise4_2 = () => {
    const [imageLocal, setImageLocal] = useState('');

    const options = {
        mediaType: 'photo',
        quality: 1,
        cameraType: 'back',
        saveToPhotos: true,
    }

    const libraryOptions = {
        selectionLimit: 10,
        ...options,
    }

    const takePhoto = () => {
        try {
            launchCamera(options, async (response) => {
                console.log('Response = ', response);
                if (response.didCancel) {
                    console.log('User cancelled photo picker');
                }
                else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                }
                else {
                    console.log('response', response);
                    // hiện ảnh vừa chụp lên giao diện
                    setImageLocal(response.assets[0].uri);
                }
            })
        } catch (error) {
            console.log('error', error)
        }
    }

    const onOpenLibrary = async (response) => {
        response = ImagePickerResponse = await launchImageLibrary(
            libraryOptions,
        );
        if (response?.assets) {
            setImageLocal(response.assets[0].uri);
            console.log(response.assets[0].uri);
        } else {
            Alert.alert('Có lỗi xảy ra: ', response.errorMessage);
        }
    }
    return (
        <View style={{
            flex: 1, flexDirection: 'column',
            justifyContent: 'space-between', alignItems: 'center',
            padding: 20,
        }}>

            {
                 <Image
                    source={{ uri: imageLocal ? imageLocal : 'https://st.quantrimang.com/photos/image/072015/22/avatar.jpg' }}
                    style={{ width: 200, height: 200, borderRadius: 100, }}
                /> 
            }

            <TouchableOpacity
                onPress={onOpenLibrary}
                style={{ width: '100%', height: 50, backgroundColor: '#E2A900', borderRadius: 10, }}>
                <Text style={{ color: '#fff', textAlign: 'center', lineHeight: 50, }}>library</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={takePhoto}
                style={{ width: '100%', height: 50, backgroundColor: '#E2A900', borderRadius: 10, }}>
                <Text style={{ color: '#fff', textAlign: 'center', lineHeight: 50, }}>Take a photo from the library</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Exercise4_2

const styles = StyleSheet.create({})