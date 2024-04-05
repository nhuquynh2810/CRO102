import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import RenderRighttt from './RenderRighttt'
import Touch from './Touch'

const CustomInput = (props) => {
    const { iconRight,source, styles, placeholder, value, onChangeText, error, description, title } = props
    return (
        <View style={styles.container}>
            <Text
                style={styles.title}
            >{title}</Text>
            <TextInput
                placeholder={placeholder}
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
            >
                
            </TextInput>
            {
                error && <Text
                    style={styles.error}
                >{error}</Text> 
                
            }
            {
                error && <Image 
                style={styles.image}
                source={source}></Image>
                
            }
            {
                description && <Text
                    style={styles.description}
                >{description}</Text>
               
            }
        </View>

    )
}

export default CustomInput

const styles = StyleSheet.create({})