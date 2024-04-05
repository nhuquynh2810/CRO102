import { Text, View } from 'react-native'
import React, {useState} from 'react'
import AppInput from '../common/AppInput'
import styles from '../common/AppStyles'

const Screen1 = () => {

    const [name, setName] = useState('')

    const getContainerStyle = () => {
        return {
            ...styles.backgroundColorYellow,
            ...styles.borderWidth1Px,
            borderColor: 'black',
            padding: 10,
            margin: 10
        }
    }

    const getInputStyle = () => {
        return {
            borderWidth: 2,
            borderColor: 'gray',
            padding: 10,
            margin: 10
        }
    }

    return (
        <View>
            <Text>Screen1</Text>
            <AppInput 
                title={'Nhập họ tên'}
                placeholder={'Nhập họ tên'}
                styles={{
                    container: getContainerStyle(),
                    input: getInputStyle(),
                }}
                value={name}
                onChangeText={setName}
            />
        </View>
    )
}

export default Screen1
