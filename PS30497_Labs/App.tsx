import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, } from 'react-native';
import Bai1 from './src/screen/lab1/Bai1';
import Bai2 from './src/screen/lab1/Bai2';
import Bai3 from './src/screen/lab1/Bai3';
import Main from './src/screen/lab2/Main';
import Lab3_Bai1 from './src/screen/lab3/Lab3_Bai1'
import Lab3_Bai2 from './src/screen/lab3/Lab3_Bai2'
import Bai3Test from './src/screen/Bai3Test'
import Slider from './src/screen/Slider';
import Lab4_Bai1 from './src/screen/lab4/Lab4_Bai1'
import Lab4_Bai2 from './src/screen/lab4/Lab4_Bai2'
import Lab3_Bai3 from './src/screen/lab3/Lab3_Bai3';
import Screen from './src/screen/Lab4_Bai3/Screen';
import { Provider } from 'react-redux';
import store from './src/screen/Lab5/redux/Store';
import Lab5 from './src/screen/Lab5/Lab5'

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        {/* <Bai1/> */}
        {/* <Bai2/> */}
        {/* <Bai3/> */}
        {/* <Main/> */}
        {/* <Lab3_Bai1/> */}
        {/* <Lab3_Bai2/> */}
        {/* <Lab3_Bai3/> */}
        {/* <Slider/> */}
        {/* <Lab4_Bai1/> */}
        {/* <Screen /> */}
        <Lab5/>
      </SafeAreaView>
    </Provider>
  );
}
export default App;