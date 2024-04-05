import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../common/CustomInput'
import Touch from '../../common/Touch'

const Bai3 = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassWord, setConfirmPassWord] = useState('')

    const login = () => {
       
    }
    const getContainerStyle = () => {
        return {
            flex: 1,
            padding: 10,
        }
    }
    const getContainerInputStyle = () => {
        return {
            backgroundColor: '#fff',
            marginBottom: 20,
        }
    }
    const getTitleStyle = () => {
        return {
            color: '#000',
            fontSize: 20,
            fontWeight: 'bold',
        }
    }
    const getTextInputStyle = () => {
        return {
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#C7C7C7',
            paddingHorizontal: 10,
            fontSize: 15,
            color: '#000',
            backgroundColor: '#E9E9E9',
            marginTop: 10,
        }
    }
    const getTextInputStyle1 = () => {
        return {
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#B5D8FA',
            paddingHorizontal: 10,
            fontSize: 15,
            color: '#000',
            backgroundColor: '#D5EAFF',
            marginTop: 10,
        }
    }
    const getTextInputStyle2 = () => {
        return {
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#9DCEFF',
            paddingHorizontal: 10,
            fontSize: 15,
            color: '#000',
            backgroundColor: '#C8E3FF',
            marginTop: 10,
        }
    }
    const getTextInputStyle3 = () => {
        return {
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#FE4848',
            paddingHorizontal: 10,
            fontSize: 15,
            color: '#000',
            backgroundColor: '#FFC2C2',
            marginTop: 10,
        }
    }
    const getErrorStyle = () => {
        return {
            fontSize: 14,
            color: 'red',

        }
    }
    const getDescriptionStyle = () => {
        return {
            fontSize: 14,
            color: '#000',
        }
    }
    const getLableTouchStyle = () => {
        return {
            fontSize: 20,
            color: '#fff',
        }
    }
    const getTouchStyle = () => {
        return {
            backgroundColor: 'blue',
            width: '100%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
    const getImageStyle = () => {
        return {
            width: 25,
            height: 25,
            position: 'absolute',
            top: 50,
            right: 10,
        }
    }
    const Example = () => {
        return {

        }
    }
    return (
        <View style={getContainerStyle()}>
            <CustomInput
                title={'Title'}
                placeholder={'Enter your username'}
                value={name}
                onChangeText={setName}
                styles={{
                    container: getContainerInputStyle(),
                    title: getTitleStyle(),
                    textInput: getTextInputStyle(),
                    error: getErrorStyle(),
                    description: getDescriptionStyle(),
                }}
            />

            <CustomInput
                title={'Title'}
                placeholder={'Enter your email'}
                value={email}
                onChangeText={setEmail}
                // error={'Error'}
                // description={'Description'}
                styles={{
                    container: getContainerInputStyle(),
                    title: getTitleStyle(),
                    textInput: getTextInputStyle1(),
                    error: getErrorStyle(),
                    description: getDescriptionStyle(),
                }}
            />

            <CustomInput
                title={'Title'}
                placeholder={'Enter your password'}
                value={password}
                onChangeText={setPassword}
                // error={'Error'}
                // description={'Description'}
                styles={{
                    container: getContainerInputStyle(),
                    title: getTitleStyle(),
                    textInput: getTextInputStyle2(),
                    error: getErrorStyle(),
                    description: getDescriptionStyle(),
                }}
            />

            <CustomInput
                title={'Title'}
                placeholder={'Enter your confirm password'}
                value={confirmPassWord}
                onChangeText={setConfirmPassWord}
                error={'error'}
                description={'Description'}
                source={require('../../../resourses/images/error.png')}
                styles={{
                    container: getContainerInputStyle(),
                    title: getTitleStyle(),
                    textInput: getTextInputStyle3(),
                    error: getErrorStyle(),
                    description: getDescriptionStyle(),
                    image: getImageStyle(),
                }}
            />


            {/* <Touch
                onPress={login()}
                styles={{
                    touch: getTouchStyle(),
                    lableTouch: getLableTouchStyle(),
                }}
                lableTouch={'REGISTER'}
            /> */}
        </View>
    )
}

export default Bai3

const styles = StyleSheet.create({
    dskjs: {

    }
})