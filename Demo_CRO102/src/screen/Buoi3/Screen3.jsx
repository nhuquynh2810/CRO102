import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useMemo } from 'react'
import Screen4 from './Screen4';

const Screen1 = () => {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    // useMemo: giúp tối ưu hóa việc tính toán
    const binhPhuong = useMemo(() => {
        console.log('.....Tính bình phương....');
        return count * count;
    }, [count]);
    return (
        <View>
            <Text style={{ fontSize: 30 }}>{name}</Text>
            <Button
                title='Change Name'
                onPress={() => setName(Math.random().toString())}
            />
            <Text style={{ fontSize: 30 }}>{count} --- Binh phuong: {binhPhuong}</Text>
            <Button
                title='Change Count'
                onPress={() => setCount(Math.random().toString())}
            />
            <Screen4/>
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({})