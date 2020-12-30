import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
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
      <View style={styles.container} >
        <RestaurantsContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

LogBox.ignoreLogs(['Remote debugger']);
