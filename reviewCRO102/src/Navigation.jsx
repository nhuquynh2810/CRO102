import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Screen from './reviewRedux/Screen';
import Login from './reviewRedux/Login';
const Stack = createNativeStackNavigator();
import { useSelector } from 'react-redux'

const Navigation = () => {

    const appState = useSelector((state) => state.app);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {appState.user == null ?
                    <Stack.Screen name="Login" component={Login} /> :
                    <Stack.Screen name="Screen" component={Screen} />}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})