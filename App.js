import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import reducers from './src/reducers/index';
import HomeScreen from './src/screens/HomeScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';


const Stack = createStackNavigator();

export default function App() {
  const store = createStore(reducers)

  // this hook won't work because it is outside the Provider
  // const dispatch = useDispatch();

// to see what is currently in State
  console.log(store.getState())

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="YAWLP...a Yelp knock-off" 
            component={HomeScreen}
            options={ ({navigation}) => ({
              headerRight: () => <CustomHomeHeader navigation={navigation} />
            })}
          />
          <Stack.Screen 
            name="Favorites" 
            component={FavoritesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const CustomHomeHeader = (props) => (
    <TouchableOpacity 
      style={styles.touchable}
      onPress={() => props.navigation.navigate("Favorites")}
    >
      <Ionicons name='heart' color='red' size={24} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  touchable: {
    paddingRight: 15,

  },
});

LogBox.ignoreLogs(['Remote debugger']);