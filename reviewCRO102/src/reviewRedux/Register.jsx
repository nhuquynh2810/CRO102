import { Image, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { login, register } from '../redux/UserAPI';
import { useDispatch, useSelector } from 'react-redux'

const Login = (props) => {

    const dispatch = useDispatch();
    const appState = useSelector((state) => state.app);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //chuyển trang
    const goToScreen = () => {
        navigation.navigate('Screen')
    }

    //bắt sự kiện đăng nhập
    const RegisterButton = async () => {

        try {
            //kiểm tra tài khoản
            
            const body = { name, email, password };
            dispatch(register(body));
        } catch (error) {
            console.log(error);
        }
    }
    // console.log('-----------------------------user',appState.user.name);
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar
                    barStyle="dark-content"
                    translucent
                    backgroundColor={'transparent'}>
                </StatusBar>

                <View style={styles.body}>
                    <Text style={styles.title}>Create Accout </Text>
                    <Text style={styles.subtTitle}>Enter your email and password to sign up. <Text style={{ color: 'orange' }}>Already have an acount?</Text></Text>
                    <Image
                        style={{ width: '100%', height: 120 }}
                        source={require('../../assets/images/ASM.png')}
                    />

                    <TextInput style={styles.textInput} placeHolder='Mật khẩu' eyePassword={true} onChangeText={setName} value={name} />

                    <TextInput style={styles.textInput} placeHolder='Nhập ' onChangeText={setEmail} value={email} />
                    <TextInput style={styles.textInput} placeHolder='Mật khẩu' eyePassword={true} onChangeText={setPassword} value={password} />

                    <TouchableOpacity style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF7400', borderRadius: 10, }} onPress={RegisterButton}>
                        <Text style={styles.dangNhapText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 10,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    createAccount: {
        color: 'green'
    },
    askText: {
        color: 'black',
        fontSize: 15,
        alignSelf: 'center'
    },
    google: {
        marginRight: 30
    },
    ggfbContainer: {
        marginVertical: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    slash: {
        borderBottomWidth: 1,
        borderColor: 'green',
        width: 150
    },
    orText: {
        marginHorizontal: 5,
        color: 'black',
        fontWeight: '400'
    },
    orContainer: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dangNhapText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    linearGradient: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: '100%',
        height: 55
    },
    forgotPasswordText: {
        color: '#009245',
        fontWeight: 'bold'
    },
    rememberAccountText: {
        marginLeft: 10
    },
    rememberAccount: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rememberForgot: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    body: {
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        // backgroundColor: 'green'
    },
    subtTitle: {
        fontSize: 18,
        color: 'grey',
        alignSelf: 'flex-start',
        marginVertical: 10,
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 35,
        alignSelf: 'flex-start',
        width: 170,
        marginTop: 30,
    },
    imageHeader: {
        marginTop: -150,
        width: 412,
        height: 400
    },
})