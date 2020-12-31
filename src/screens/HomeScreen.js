import React from 'react'
import { SafeAreaView, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import RestaurantsContainer from '../components/RestaurantsContainer';

const HomeScreen = (props) => {
    return (
        <SafeAreaView style={styles.container} >
            <RestaurantsContainer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        width: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

export default HomeScreen;
