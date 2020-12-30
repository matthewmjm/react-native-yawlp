import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers/index';
import { StyleSheet, Text, View } from 'react-native';
import { LogBox } from 'react-native';

const apiKey = 

const apiUrl = "https://api.yelp.com/v3/businesses/search?term=restaurant&location=Saint Louis";

export default function App() {
  const store = createStore(reducers)

  useEffect(() => {
    fetch(`${apiUrl}`, {
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    })
    .then(response => response.json())
    .then(console.log)
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
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
