import React from 'react';
import { SafeAreaView, StatusBar, Text, View, } from 'react-native';
import Screen1 from './src/screen/Screen1';
import Screen3 from './src/screen/Buoi3/Screen3';
import Screen6 from './src/screen/Buoi3/Screen6';
import Screen7 from './src/screen/Buoi3/Screen7';
import Animation from './src/screen/Buoi4/Animation'
import Screen from './src/Redux2/Screen';
import { Provider } from 'react-redux';
import store from './src/Redux2/redux/Store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
    <SafeAreaView >
      <StatusBar />
      {/* <Animation/> */}
      <Screen/>
    </SafeAreaView>
    </Provider>
  );
}
export default App;