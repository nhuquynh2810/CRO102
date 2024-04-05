import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MainStacks = createNativeStackNavigator();
const MainTabs = createBottomTabNavigator();

const tabBarIcon = ({ focused, route }) => {
    if (route.name == 'Home') {
        return focused ?
            <Image source={require('../../../assets/images/icon_home_selected.png')}
                style={styles.styleIcon2} /> :
            <Image source={require('../../../assets/images/icon_home.png')}
                style={styles.styleIcon} />
    } else if (route.name == 'Search') {
        return focused ?
            <Image source={require('../../../assets/images/icon_search_selected.png')}
                style={styles.styleIcon2} /> :
            <Image source={require('../../../assets/images/icon_search.png')}
                style={styles.styleIcon} />
    } else if (route.name == 'Notification') {
        return focused ?
            <Image source={require('../../../assets/images/icon_noti_selected.png')}
                style={styles.styleIcon2} /> :
            <Image source={require('../../../assets/images/icon_noti.png')}
                style={styles.styleIcon} />

    } else {
        return focused ?
            <Image source={require('../../../assets/images/icon_person_selected.png')}
                style={styles.styleIcon2} /> :
            <Image source={require('../../../assets/images/icon_person.png')}
                style={styles.styleIcon} />
    }
}

const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarLabel: () => null,
    tabBarStyle: {
        backgroundColor: '#fff',
        height: 60,
    },
    tabBarIcon: ({ focused }) => tabBarIcon({ route, focused }),
})

// tabs
import Home from './tabs/Home';
import Notification from './tabs/Notification';
import Profile from './tabs/Profile';
import Search from './tabs/Search';

// stacks
import Cart from './stacks/Cart';
import Category from './stacks/Category';
import Detail from './stacks/Detail';
import Pay from './stacks/Pay';

import { Image } from 'react-native';



const MainTabsNavigation = () => {
    return (
        <MainTabs.Navigator screenOptions={screenOptions}>
            <MainTabs.Screen name="Home" component={Home} />
            <MainTabs.Screen name="Notification" component={Notification} />
            <MainTabs.Screen name="Profile" component={Profile} />
            <MainTabs.Screen name="Search" component={Search} />

        </MainTabs.Navigator>
    )
}

const MainStackNavigation = () => {
    return (
        <MainStacks.Navigator screenOptions={{
            headerShown: false,
        }}>
            <MainStacks.Screen name="MainTabs" component={MainTabsNavigation} />
            <MainStacks.Screen name="Cart" component={Cart} />
            <MainStacks.Screen name="Category" component={Category} />
            <MainStacks.Screen name="Detail" component={Detail} />
            <MainStacks.Screen name="Pay" component={Pay} />
        </MainStacks.Navigator>
    )
}

export default MainStackNavigation

const styles = StyleSheet.create({
    styleIcon: {
        width: 24,
        height: 24,
        // backgroundColor: '#000',
    },
    styleIcon2: {
        width: 25,
        height: 35,
        // backgroundColor: '#000',
    }
})