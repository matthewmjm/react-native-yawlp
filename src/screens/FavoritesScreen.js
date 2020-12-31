import React from 'react'
import { SafeAreaView, Text, StyleSheet, Platform, StatusBar, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import RestaurantCard from '../components/RestaurantCard';


const FavoritesScreen = () => {
    const favorites = useSelector(state => state.favorites)

    const displayFavorites = () => {
        return favorites.map((favorite, i) => {
            return <RestaurantCard 
                key={favorite.id} 
                restaurant={favorite}
                index = {i + 1}
            />
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>FAVORITES SCREEN</Text>
            <ScrollView style={styles.restaurantContainer}>
                {displayFavorites()}
            </ScrollView>
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
    restaurantContainer: {
        flex: 1,
        margin: 15,
    },
});


export default FavoritesScreen;
