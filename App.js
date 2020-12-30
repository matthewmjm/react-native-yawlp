import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { LogBox } from 'react-native';
import reducers from './src/reducers/index';
import RestaurantsContainer from './src/components/RestaurantsContainer';

export default function App() {
  const store = createStore(reducers)

  // this hook won't work because it is outside the Provider
  // const dispatch = useDispatch();

// to see what is currently in State
  console.log(store.getState())

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container} >
        <RestaurantsContainer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

LogBox.ignoreLogs(['Remote debugger']);