import React from 'react';
import { SafeAreaView, StatusBar, Text, View, } from 'react-native';
import Screen from './src/reviewRedux/Screen';
import { Provider } from 'react-redux';
import store from './src/redux/Store';
import Login from './src/reviewRedux/Login';
import Navigation from './src/Navigation';
import Animation from './src/reviewAnimation/Animation'
import Flatlist from './src/reviewRedux/Flatlist';
import Register from './src/reviewRedux/Register';
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        {/* <Navigation/> */}
        <Register/>
        {/* <Animation/> */}
        {/* <Flatlist/> */}
      </SafeAreaView>
    </Provider>
  );
}
export default App;
