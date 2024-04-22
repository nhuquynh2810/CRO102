import React from 'react'
import { Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Flatlist from './reviewRedux/Flatlist';
import Login from './reviewRedux/Login';
import Screen from './reviewRedux/Screen';

const tabBarIcon = ({ focused, route }) => {
    if (route.name == 'Flatlist') {
        return focused ?
            <Image source={require('../../assets/images/homeIconDot.png')}
                style={{ width: 25, height: 35 }} /> :
            <Image source={require('../../assets/images/homeIcon.png')}
                style={{ width: 20, height: 25 }} />
    } else if (route.name == 'Login') {
        return focused ?
            <Image source={require('../../assets/images/searchIconDot.png')}
                style={{ width: 25, height: 35 }} /> :
            <Image source={require('../../assets/images/searchIcon.png')}
                style={{ width: 20, height: 25 }} />
    } else if (route.name == 'Screen') {
        return focused ?
            <Image source={require('../../assets/images/bellIconDot.png')}
                style={{ width: 25, height: 35 }} /> :
            <Image source={require('../../assets/images/bellIcon.png')}
                style={{ width: 20, height: 25 }} />
    }
}

const tabScreenOptions = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused }) => tabBarIcon({ route, focused }),
    tabBarLabel: () => null,
});

const MainTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={tabScreenOptions}
        >
            <Tab.Screen name="Flatlist" component={Flatlist} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Screen" component={Screen} />
        </Tab.Navigator>
    )
}

const MainNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
    )
}

export default MainNavigation
