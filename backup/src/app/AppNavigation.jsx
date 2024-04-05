import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AppContext } from './AppContext';
import AuthenStackNavigation from './authen/AuthenStackNavigation'
import MainStackNavigation from './main/MainStackNavigation';

const AppNavigation = () => {
  // const { isLogin } = useContext(AppContext);
  // console.log('isLogin', isLogin)
  return (
    <NavigationContainer>
      {/* {
                isLogin ? 
                
                <MainStackNavigation /> 
                
                :
                    <AuthenStackNavigation />
            } */}
      <AuthenStackNavigation />

      {/* <MainStackNavigation /> */}
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})