import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

const Main = () => {

    const colors = ['white', 'gray', 'yellow', 'red', 'blue', 'orange'];
    const [user, setUser] = useState(
        {
            name: 'Chưa có tên',
            avatar: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau.jpeg'
        });

    const [lastTimeUpdate, setLastTimeUpdate] = useState('Bạn chưa cập nhật thông tin');
    const [footerColor, setFooterColor] = useState(colors[0]);

    //Cập nhật thông tin cho tài khoản
    const handelUpdateInfor = useCallback(
        (user) => {
            setUser(user);
        },
        [],
    )

    //Hàm random màu cho background của footer
    const handleRandomColor = useCallback(
        () => {
            const numberRan = Math.floor(Math.random() * colors.length);
            setFooterColor(colors[numberRan]);
        },
        [],
    )

    // Mỗi lần thông tin user thay đổi, sẽ cập nhật lại thời gian sửa đổi
    useEffect(() => {
        const currentdate = new Date();
        const datetime =
            currentdate.getDate() +
            '/' +
            (currentdate.getMonth() + 1) +
            '/' +
            currentdate.getFullYear() +
            ' ' +
            currentdate.getHours() +
            ':' +
            currentdate.getMinutes() +
            ':' +
            currentdate.getSeconds();

        setLastTimeUpdate(datetime);
    }, [user])



    return (
        <View style={styles.container}>
            <Header user={user}/>
            <Body 
            onUpdateInfor={handelUpdateInfor}
            onClickChangeBgFooter={handleRandomColor}
            />
            <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor}/>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
})