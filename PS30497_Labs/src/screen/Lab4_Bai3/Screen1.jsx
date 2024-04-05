import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary }
  from 'react-native-image-picker';
import axios from 'axios';

const Screen1 = () => {
  const [imageLocal, setImageLocal] = useState('');

  const takePhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      cameraType: 'back',
      saveToPhotos: true,
    }
  }
  return (
    <View>
      <Button
        title='Take photo'
        onPress={takePhoto}
      />
      {
        imageLocal !== '' ? <Image
          source={{ uri: imageLocal }}
          style={{ width: 200, height: 200 }}
        />
          :
          <Image
            source={{ uri: 'https://st.quantrimang.com/photos/image/072015/22/avatar.jpg' }}
            style={{ width: 200, height: 200 }}
          />
      }
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({})