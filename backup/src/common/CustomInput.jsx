import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = (props) => {
    const { placeholderTextColor, iconRight, source, styles, placeholder, value, onChangeText, error, description, title, secureTextEntry } = props
    return (
        <View style={styles.container}>
            <Text
                style={styles.title}
            >{title}</Text>
            <TextInput
                placeholderTextColor={placeholderTextColor}
                placeholder={placeholder}
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
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