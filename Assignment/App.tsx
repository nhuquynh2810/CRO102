import React from 'react';
import {
  SafeAreaView, Text, StyleSheet,
} from 'react-native';
import store from './src/redux/Store';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigations/AppNavigation';
import Home from './src/navigations/main_screens/Home';
import Cart from './src/navigations/main_screens/Cart';
// import {store, persistor} from
// import {PersisGate} from
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      {/* <PersisGate persistor={persistor}> */}
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigation />
      </SafeAreaView>
      {/* </PersisGate> */}
    </Provider>

  );
}
export default App;


const styles = StyleSheet.create({})