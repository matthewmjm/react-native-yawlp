import React from 'react'
import { SafeAreaView, Text, StyleSheet, Platform, StatusBar } from 'react-native';


const FavoritesScreen = (props) => {
    return (
        <SafeAreaView style={styles.container} >
            <Text>FAVORITES SCREEN</Text>
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

export default FavoritesScreen;
