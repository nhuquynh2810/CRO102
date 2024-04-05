import { StyleSheet, Text, View, Button, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary }
    from 'react-native-image-picker';
import axios from 'axios';

const Screen1 = () => {
    const [imageLocal, setImageLocal] = useState('');
    const [imageOnline, setImageOnline] = useState('');

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
                    // upload ảnh lên server (nodeJS/firebase/cloudinary,...)
                    // try {
                    //     const data = new FormData();
                    //     data.append('file', {
                    //         fileName: response.assets[0].fileName,
                    //         name: response.assets[0].fileName,
                    //         type: response.assets[0].type,
                    //         uri: response.assets[0].uri,
                    //     });
                    //     data.append('upload_preset', 'ml_default');

                    //     axios({
                    //         url: 'https://api.cloudinary.com/v1_1/dffuzgy5h/image/upload',
                    //         method: 'POST',
                    //         data: data,
                    //         headers: {
                    //             Accept: 'application/json',
                    //             'Content-Type': 'multipart/form-data',
                    //             'Authorization': ' '
                    //         }
                    //     })
                    //         .then(function (response) {
                    //             console.log("ket qua tra ve :", response.data);
                    //             setImageOnline(response.data.url);
                    //         })
                    //         .catch(function (error) {
                    //             console.log("error from image :");
                    //         })

                    //     // console.log('ket qua: ', result);
                    // } catch (error) {
                    //     console.log('Axios: ', error)
                    // }
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


            <Image
                source={{ uri: imageLocal ? imageLocal : 'https://cdn.vox-cdn.com/thumbor/2E78dg_Cpbdh3nv6z0KKhOhYs6c=/0x0:1100x580/1200x800/filters:focal(520x151:696x327)/cdn.vox-cdn.com/uploads/chorus_image/image/71921482/bkq6gtrpcnw43vsm5zm62q3z.0.png' }}
                style={{ width: 200, height: 200, borderRadius: 100 }}
            />

            <View style={{ width: '100%' }}>
                <TouchableOpacity
                    onPress={takePhoto}
                    style={{ width: '100%', height: 50, backgroundColor: '#E2A900', borderRadius: 10, marginBottom: 10 }}>
                    <Text style={{ color: '#fff', textAlign: 'center', lineHeight: 50, }}>Take a photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onOpenLibrary}
                    style={{ width: '100%', height: 50, backgroundColor: '#E2A900', borderRadius: 10, }}>
                    <Text style={{ color: '#fff', textAlign: 'center', lineHeight: 50, }}>Choose photo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({})