import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const apiKey = ""

const apiUrl = "https://api.yelp.com/v3/businesses/search?term=restaurant&location=Saint Louis";

export default function RestaurantsContainer() {
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`${apiUrl}`, {
            headers: {
                "Authorization": `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(({businesses}) => dispatch({type: 'SET_RESTAURANTS', payload: businesses}))
    }, []);

    const restaurants = useSelector(state => state.restaurants)
    const showRestaurants = () => restaurants.map(restaurant => {
        return <Text key={restaurant.id}>{restaurant.name}</Text>
    })

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold' }}>This is the Restaurant Container</Text>
            {showRestaurants()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});
